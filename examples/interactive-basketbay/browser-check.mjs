import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { createDemoServer } from './server.mjs';
const { chromium } = await import(process.env.UXKIT_PLAYWRIGHT || 'playwright');
const output = fileURLToPath(new URL('../../evals/results/interactive-pilot-20261025/browser/', import.meta.url));
await mkdir(output, { recursive: true });
const server = createDemoServer();
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const url = `http://127.0.0.1:${server.address().port}/interactive-basketbay/index.html`;
const browser = await chromium.launch({ headless: true, channel: process.env.UXKIT_BROWSER || 'msedge' });
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
const errors = [];
page.on('pageerror', error => errors.push(error.message));
const checks = [];
async function check(name, action) { await action(); checks.push(name); }
async function text(id) { return page.locator(`#${id}`).innerText(); }
async function submit() { await page.locator('#checkout-form').dispatchEvent('submit'); }
async function finished() { await page.waitForFunction(() => !document.querySelector('#continue').disabled); }
try {
  await page.goto(url);
  await check('initial2399subtotal; one-time selected; fees unresolved', async () => {
    assert.equal(await text('total-value'), '$23.99');
    assert.equal(await page.locator('[name=frequency][value=once]').isChecked(), true);
    assert.match(await text('cost-note'), /still to be added/);
  });
  await page.screenshot({ path: `${output}/initial-390.png`, fullPage: true });
  await check('help dialog keyboard close returns focus; offers retained', async () => {
    await page.locator('#help').focus(); await page.keyboard.press('Enter');
    assert.equal(await page.locator('#info').isVisible(), true);
    await page.keyboard.press('Escape'); assert.equal(await page.locator('#help').evaluate(el => el === document.activeElement), true);
    await page.locator('#offers').click(); assert.match(await text('info-copy'), /DEMO5/); await page.locator('#close-info').click();
  });
  await check('quantity and delivery update known amount', async () => {
    await page.getByRole('button', { name: 'Add one Oat milk', exact: true }).click();
    assert.equal(await text('total-value'), '$28.49');
    await page.locator('[name=delivery][value=standard]').check();
    assert.equal(await text('total-value'), '$23.50');
  });
  await check('address correction keeps values and exposes field error', async () => {
    await page.locator('#edit-address').click(); await page.locator('#address').fill(''); await submit();
    assert.equal(await page.locator('#address').getAttribute('aria-invalid'), 'true');
    assert.equal(await page.locator('#address').evaluate(el => el === document.activeElement), true);
    await page.locator('#address').fill('27 Test Road');
  });
  await check('promo errors are associated and correctable', async () => {
    await page.getByText('Have a promo code?', { exact: true }).click();
    await page.locator('#promo').fill('BAD'); await page.locator('#apply-promo').click();
    assert.equal(await page.locator('#promo').getAttribute('aria-invalid'), 'true'); assert.match(await text('promo-error'), /DEMO5/);
    await page.locator('#promo').fill('DEMO5'); await page.locator('#apply-promo').click();
    assert.equal(await text('total-value'), '$18.50');
    assert.equal(await page.locator('#promo').getAttribute('aria-invalid'), null);
  });
  await check('failed fee request locks fields and retains all edited inputs', async () => {
    await page.getByText('Delivery instructions', { exact: false }).first().click();
    await page.locator('#instructions').fill('Side door');
    await page.locator('#fail').check(); await submit();
    assert.equal(await page.locator('#address').isDisabled(), true);
    assert.equal(await page.locator('#instructions').isDisabled(), true);
    await submit(); await finished();
    assert.match(await text('request-error'), /Fees could not load/);
    assert.equal(await page.locator('#address').inputValue(), '27 Test Road');
    assert.equal(await page.locator('#instructions').inputValue(), 'Side door');
    assert.equal(await page.locator('#promo').inputValue(), 'DEMO5');
    assert.equal(await text('total-value'), '$18.50');
  });
  await check('retry resolves all fees before commitment and focuses summary', async () => {
    await submit(); await finished();
    assert.equal(await text('total-label'), 'Total'); assert.equal(await text('total-value'), '$22.00');
    assert.equal(await text('continue'), 'Place demo order · $22.00');
    assert.equal(await page.locator('#summary').evaluate(el => el === document.activeElement), true);
  });
  await check('explicit weekly choice invalidates fees then discloses recurring amount', async () => {
    await page.locator('summary').filter({ hasText: 'Order frequency' }).click();
    await page.locator('[name=frequency][value=weekly]').check();
    assert.equal(await text('total-label'), 'Subtotal');
    await submit(); await finished(); assert.match(await text('repeat-note'), /\$22.00 every week/);
  });
  await check('failed commit retains resolved total; repeated submit creates one confirmation', async () => {
    await page.locator('#fail').check(); await submit(); await finished();
    assert.match(await text('request-error'), /not placed/); assert.equal(await text('total-value'), '$22.00');
    await submit(); await submit(); await page.locator('#confirmation').waitFor({ state: 'visible' });
    assert.equal(await page.locator('#confirmation').count(), 1);
    assert.match(await text('receipt'), /DEMO-001 · \$22.00 · Weekly repeat/);
    assert.equal(await page.locator('#confirmation').evaluate(el => el === document.activeElement), true);
  });
  await page.screenshot({ path: `${output}/confirmation-390.png`, fullPage: true });
  await check('Enter in promo applies code without committing an order', async () => {
    await page.goto(url); await submit(); await finished();
    assert.equal(await text('total-value'), '$27.49');
    await page.getByText('Have a promo code?', { exact: true }).click();
    await page.locator('#promo').fill('DEMO5'); await page.locator('#promo').press('Enter');
    await page.waitForTimeout(750);
    assert.equal(await page.locator('#confirmation').isVisible(), false);
    assert.equal(await text('promo-status'), 'Promo applied.');
    assert.equal(await text('total-value'), '$18.99');
  });
  for (const [width, scale] of [[320, 1], [390, 2], [1280, 1]]) {
    await check(`no horizontal overflow at${width}px/text${scale}x`, async () => {
      await page.setViewportSize({ width, height: 844 }); await page.goto(url);
      if (scale === 2) await page.addStyleTag({ content: ':root{font-size:200%}' });
      const sizes = await page.evaluate(() => ({ width: innerWidth, scroll: document.documentElement.scrollWidth, overflow: [...document.querySelectorAll('body *')].filter(el => el.getBoundingClientRect().right > innerWidth + 1).map(el => ({ tag: el.tagName, class: el.className, text: el.textContent.slice(0, 55), right: el.getBoundingClientRect().right })) }));
      assert.ok(sizes.scroll <= sizes.width, JSON.stringify(sizes));
      await page.locator('#continue').scrollIntoViewIfNeeded();
      const box = await page.locator('#continue').boundingBox(); assert.ok(box.x >= 0 && box.x + box.width <= width + 1 && box.height >= 44);
      await page.screenshot({ path: `${output}/layout-${width}-${scale}x.png`, fullPage: true });
    });
  }
  await check('long unbroken address stays within320px at enlarged text', async () => {
    await page.setViewportSize({ width: 320, height: 844 }); await page.goto(url);
    await page.addStyleTag({ content: ':root{font-size:200%}' });
    await page.locator('#edit-address').click();
    await page.locator('#address').fill('Apartment123456789LongBuildingNameWithoutSpaces-CedarLane');
    const width = await page.evaluate(() => document.documentElement.scrollWidth);
    const overflow = await page.evaluate(() => {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); const found = []; let node;
      while ((node = walker.nextNode())) { const range = document.createRange(); range.selectNodeContents(node); for (const rect of range.getClientRects()) if (rect.right > innerWidth + 1) found.push({ text: node.textContent.slice(0, 55), parent: node.parentElement.tagName, right: rect.right }); }
      return found;
    });
    assert.ok(width <= 320, `Long address expanded viewport to${width}: ${JSON.stringify(overflow)}`);
    await page.screenshot({ path: `${output}/long-address-320-2x.png`, fullPage: true });
  });
  assert.equal((await fetch(url.replace('/interactive-basketbay/index.html', '/manual-audit-screens/2026-10-24/01-mobile-grocery-checkout.png'))).status, 200);
  assert.equal((await fetch(url.replace('/interactive-basketbay/index.html', '/server-secrets'))).status, 404);
  assert.deepEqual(errors, []);
  await writeFile(`${output}/results.json`, JSON.stringify({ status: 'pass', checks, errors, note: 'Local Chromium/Edge browser simulation; no native or human acceptance.' }, null, 2));
  console.log(JSON.stringify({ checks: checks.length, status: 'pass', output }, null, 2));
} catch (error) {
  const failureName = `failure-${Date.now()}`;
  await page.screenshot({ path: `${output}/${failureName}.png`, fullPage: true });
  await writeFile(`${output}/${failureName}.json`, JSON.stringify({ completed: checks, error: error.stack }, null, 2));
  throw error;
} finally { await browser.close(); await new Promise(resolve => server.close(resolve)); }
