import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const { chromium } = await import(process.env.UXKIT_PLAYWRIGHT || 'playwright');
const base = process.env.UXKIT_SITE_URL || 'http://127.0.0.1:4174/';
const output = fileURLToPath(new URL('../.scratch/website-20261025/browser/', import.meta.url));
await mkdir(output, { recursive: true });
const browser = await chromium.launch({headless:true, channel:process.env.UXKIT_BROWSER || 'msedge'});
const checks=[], errors=[];
const page = await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
page.on('pageerror',error=>errors.push(error.message));
const check=async(name,fn)=>{await fn();checks.push(name);};
const visibleEntries=()=>page.locator('.principle:not([hidden])').count();
try {
  await page.goto(base);
  await check('Original, audit and improved travel stages preserve the trip and explain the changes',async()=>{
    for(const stage of ['before','audit','after']){
      await page.locator(`button[data-stage=${stage}]`).click();
      assert.equal(await page.locator(`button[data-stage=${stage}]`).getAttribute('aria-pressed'),'true');
      assert.equal(await page.locator('#trip-form').isVisible(),stage==='after');
      assert.equal(await page.locator('#booking-original').isVisible(),stage!=='after');
      assert.match(await page.locator('.booking-date').innerText(),/14 April 2027/);
      assert.match(await page.locator('.booking-date').innerText(),/2 adults/);
    }
  });
  await check('Booking preserves chosen time and total through review, correction and confirmation',async()=>{
    await page.locator('.booking-times label').first().click();
    await page.locator('button[data-stage=before]').click();
    assert.equal(await page.locator('.original-slots .chosen').innerText(),'09:00');
    assert.doesNotMatch(await page.locator('#trip-findings').innerText(),/14:00/);
    await page.locator('button[data-stage=after]').click();
    await page.locator('#trip-form button').click();
    assert.equal(await page.locator('#review-time').innerText(),'09:00 JST');
    assert.match(await page.locator('#trip-confirmation').innerText(),/\$180 USD/);
    assert.equal(await page.locator('#trip-confirmation').evaluate(e=>e===document.activeElement),true);
    await page.locator('#booking-edit').click();
    assert.equal(await page.locator('input[value="09:00"]').evaluate(e=>e===document.activeElement),true);
    await page.locator('.booking-times label').last().click();
    await page.locator('#trip-form button').click();
    assert.equal(await page.locator('#review-time').innerText(),'14:00 JST');
    await page.locator('#demo-confirm').click();
    assert.match(await page.locator('#trip-success-copy').innerText(),/14:00 JST.*\$180 USD/);
    assert.equal(await page.locator('#trip-success').evaluate(e=>e===document.activeElement),true);
    await page.locator('button[data-stage=before]').click();await page.locator('button[data-stage=after]').click();
    assert.equal(await page.locator('#trip-success').isVisible(),true);
    await page.locator('#trip-reset').click();
    assert.equal(await page.locator('input[value="14:00"]').evaluate(e=>e===document.activeElement),true);
  });
  await check('All four workflows have matching prompts and outcomes',async()=>{
    for(const mode of ['design','implement','validate','audit']) {
      await page.locator(`[data-mode=${mode}]`).click();
      assert.match((await page.locator('#workflow-prompt').innerText()).toLowerCase(),new RegExp(mode));
    }
  });
  await check('Claude and Codex switch the install, invocation and destination together',async()=>{
    await page.locator('[data-agent=claude]').click();
    assert.match(await page.locator('#install-command').innerText(),/-a claude-code --copy/);
    assert.match(await page.locator('#invoke-command').innerText(),/^\/ux-kit/);
    assert.match(await page.locator('#install-destination').innerText(),/\.claude\/skills/);
    await page.locator('[data-agent=codex]').focus();await page.keyboard.press('Enter');
    assert.match(await page.locator('#install-command').innerText(),/-a codex --copy/);
    assert.match(await page.locator('#invoke-command').innerText(),/^\$ux-kit/);
  });
  await check('Clipboard rejection offers a truthful manual fallback',async()=>{
    await page.evaluate(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async()=>{throw Error('denied')}}}));
    await page.locator('[data-copy=install-command]').click();
    assert.match(await page.locator('#copy-status').innerText(),/Couldn’t copy/);
    assert.match(await page.evaluate(()=>getSelection().toString()),/^npx skills@1.7.4/);
  });
  await check('Clipboard success copies exactly the visible command',async()=>{
    await page.evaluate(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async text=>{window.__copied=text}}}));
    await page.locator('[data-copy=install-command]').click();
    assert.equal(await page.evaluate(()=>window.__copied),(await page.locator('#install-command').innerText()).trim());
    assert.match(await page.locator('#copy-status').innerText(),/^Copied/);
  });
  await check('FAQ opens with a keyboard',async()=>{
    const summary=page.locator('.faq summary').first();await summary.focus();await page.keyboard.press('Enter');
    assert.equal(await page.locator('.faq details').first().getAttribute('open'),'');
    await page.keyboard.press('Enter');
  });
  await page.goto(`${base}library.html`);
  await check('Full library contains 137 entries and 15 domains',async()=>{
    assert.equal(await visibleEntries(),137);assert.equal(await page.locator('#topic-filter option').count(),16);
  });
  await check('Search and topic intersection retain state in URL',async()=>{
    await page.locator('#principle-search').fill('Fitts');await page.locator('#principle-search').press('Enter');
    assert.ok(await visibleEntries()>0);assert.match(page.url(),/q=Fitts/);
    await page.locator('#topic-filter').selectOption('commerce-and-trust');
    assert.equal(await visibleEntries(),0);assert.equal(await page.locator('#library-empty').isVisible(),true);
    await page.getByRole('button',{name:'Reset filters'}).click();assert.equal(await visibleEntries(),137);
    assert.equal(await page.locator('#principle-search').evaluate(el=>el===document.activeElement),true);
  });
  await check('Query deep link and unknown topic recover correctly',async()=>{
    await page.goto(`${base}library.html?q=Fitts&topic=unknown`);
    assert.ok(await visibleEntries()>0);assert.equal(await page.locator('#topic-filter').inputValue(),'');
    await page.locator('.principle:not([hidden]) summary').first().focus();await page.keyboard.press('Enter');
    assert.equal(await page.locator('.principle:not([hidden]) .principle-body').first().isVisible(),true);
  });
  await check('All 12 feature links find real canonical entries',async()=>{
    await page.goto(base);
    const links=await page.locator('.feature-index a').evaluateAll(els=>els.map(a=>a.href));
    assert.equal(links.length,12);
    for(const link of links){await page.goto(link);assert.ok(await visibleEntries()>0,link);}
  });
  await check('Reduced motion has no running page animations',async()=>{
    await page.goto(base);assert.equal(await page.evaluate(()=>document.getAnimations().filter(a=>a.playState==='running').length),0);
  });
  await check('Home, library and guide fit 320, 390, 768 and 1440 widths',async()=>{
    for(const width of [320,390,768,1440]){
      await page.setViewportSize({width,height:1000});
      for(const [name,path] of [['home',''],['library','library.html?q=Fitts'],['guide','guide.html']]){
        await page.goto(base+path);await page.evaluate(()=>document.fonts.ready);
        const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1);
        assert.equal(overflow,false,`${name} ${width}`);
        await page.screenshot({path:`${output}/${name}-${width}.png`,fullPage:true});
        if(name==='home') await page.screenshot({path:`${output}/home-${width}-fold.png`});
      }
    }
  });
  await check('Header stays fixed and anchor targets remain below it',async()=>{
    await page.setViewportSize({width:390,height:844});await page.goto(base);
    await page.locator('.hero-actions .button').click();
    const geometry=await page.evaluate(()=>({header:document.querySelector('.header-shell').getBoundingClientRect().toJSON(),target:document.querySelector('#install').getBoundingClientRect().toJSON(),position:getComputedStyle(document.querySelector('.header-shell')).position}));
    assert.equal(geometry.position,'fixed');assert.equal(geometry.header.top,0);assert.ok(geometry.target.top>=geometry.header.bottom-1);
  });
  await check('Hero product composition loads without replay or fake controls',async()=>{
    await page.goto(base);assert.equal(await page.locator('.motion-replay').count(),0);
    assert.equal(await page.locator('.product-showcase button').count(),0);
    assert.equal(await page.locator('.product-showcase img').evaluate(e=>e.complete&&e.naturalWidth>0),true);
    await page.emulateMedia({reducedMotion:'no-preference'});await page.goto(base);
    await page.evaluate(()=>Promise.all(document.querySelector('.product-showcase').getAnimations({subtree:true}).map(a=>a.finished.catch(()=>{}))));
    assert.equal(await page.evaluate(()=>document.querySelector('.product-showcase').getAnimations({subtree:true}).filter(a=>a.playState==='running').length),0);
    await page.emulateMedia({reducedMotion:'reduce'});
  });
  await check('Eight principle previews use four desktop columns and valid searches',async()=>{
    await page.setViewportSize({width:1440,height:1000});await page.goto(base);
    const cards=page.locator('.principle-preview>a');assert.equal(await cards.count(),8);
    const boxes=await cards.evaluateAll(els=>els.map(e=>e.getBoundingClientRect().toJSON()));
    assert.equal(boxes[0].top,boxes[3].top);assert.ok(boxes[4].top>boxes[0].top);
    const links=await cards.evaluateAll(els=>els.map(e=>e.href));
    for(const link of links){await page.goto(link);assert.ok(await visibleEntries()>0,link);}
  });
  await check('Website credits retain font license without design-tool references',async()=>{
    await page.goto(base+'guide.html#credits');assert.doesNotMatch(await page.locator('#credits').innerText(),/Taste|Impeccable|UI UX Pro Max/);assert.match(await page.locator('#credits').innerText(),/Open Font License/);
  });
  await check('200 percent text stays contained at 390px',async()=>{
    await page.setViewportSize({width:390,height:844});
    for(const path of ['', 'library.html?q=Fitts','guide.html']){
      await page.goto(base+path);await page.addStyleTag({content:'html{font-size:200%}'});
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false,path);
    }
  });
  await check('No-JavaScript library, guide and install remain available',async()=>{
    const plain=await browser.newPage({javaScriptEnabled:false,viewport:{width:390,height:844}});
    await plain.goto(base+'library.html');assert.equal(await plain.locator('.principle').count(),137);
    await plain.locator('.principle summary').first().click();assert.equal(await plain.locator('.principle-body').first().isVisible(),true);
    await plain.goto(base+'guide.html');assert.match(await plain.locator('#guide-claude').innerText(),/-a claude-code/);
    await plain.goto(base);assert.equal(await plain.locator('#install-command').isVisible(),true);assert.equal(await plain.locator('#trip-form button').isDisabled(),true);await plain.close();
  });
  assert.deepEqual(errors,[]);checks.push('No page errors');
} finally {
  await writeFile(`${output}/results.json`,JSON.stringify({checks,errors},null,2));
  await browser.close();
}
console.log(JSON.stringify({passed:checks.length,checks,errors},null,2));
