import { initialState, totals, update, resolveFees, confirm, products, money } from './model.mjs';
let state = initialState();
const $ = id => document.getElementById(id);
const show = (id, visible) => { $(id).hidden = !visible; };
function error(message) { $('request-error').textContent = message; show('request-error', !!message); }
function change(patch) {
  try { state = update(state, patch); render(); return true; }
  catch (e) { error(e.message); return false; }
}
function render() {
  const t = totals(state);
  $('controls').disabled = state.pending;
  $('continue').disabled = state.pending || !!state.order;
  $('item-count').textContent = `(${state.quantities.reduce((a, b) => a + b, 0)})`;
  document.querySelectorAll('[data-quantity]').forEach(output => { output.textContent = state.quantities[Number(output.dataset.quantity)]; });
  document.querySelectorAll('[data-delta]').forEach(button => { const q = state.quantities[Number(button.dataset.product)]; button.disabled = state.pending || (button.dataset.delta === '-1' ? q === 0 : q === 9); });
  $('address-display').textContent = state.address.trim() || 'Add an address';
  $('frequency-label').textContent = state.frequency === 'once' ? 'One-time order' : 'Weekly repeat';
  const rows = [['Items', money(t.items)], ...(t.discount ? [['Promo discount', `−${money(t.discount)}`]] : []), ...(t.upgrade ? [['Express add-on', money(t.upgrade)]] : []), ['Delivery fee', state.fees ? money(state.fees.delivery) : 'Not yet calculated'], ['Service fee', state.fees ? money(state.fees.service) : 'Not yet calculated']];
  $('costs').replaceChildren(...rows.map(([label, value]) => { const row = document.createElement('div'); const dt = document.createElement('dt'); dt.textContent = label; const dd = document.createElement('dd'); dd.textContent = value; row.append(dt, dd); return row; }));
  $('total-label').textContent = state.fees ? 'Total' : 'Subtotal';
  $('total-value').textContent = money(t.total ?? t.known);
  $('cost-note').textContent = state.fees ? 'Includes all illustrative demo fees.' : 'Delivery and service fees still to be added.';
  show('repeat-note', state.frequency === 'weekly');
  $('repeat-note').textContent = state.fees ? `${money(t.total)} every week in this simulation. No real repeat order is created.` : 'Weekly repeat selected. Full weekly amount appears after fees are calculated.';
  $('continue').textContent = state.pending ? (state.fees ? 'Placing demo order…' : 'Calculating fees…') : state.fees ? `Place demo order · ${money(t.total)}` : 'Continue';
  $('action-note').textContent = state.fees ? 'Simulation only. No payment is collected.' : 'See the full total before placing your demo order.';
  $('last-step').setAttribute('aria-current', state.fees ? 'step' : 'false');
  document.querySelector('.steps li:nth-child(2)').setAttribute('aria-current', state.fees ? 'false' : 'step');
  error(state.error);
}
for (const [i, p] of products.entries()) {
  const row = document.createElement('div'); row.className = 'item';
  row.innerHTML = `<span class="product-icon" aria-hidden="true">${p.icon}</span><div class="product-copy"><p>${p.name}</p><small>${money(p.price)} each</small></div><div class="quantity"><button type="button" data-product="${i}" data-delta="-1" aria-label="Remove one ${p.name}">−</button><output data-quantity="${i}" aria-label="${p.name} quantity">1</output><button type="button" data-product="${i}" data-delta="1" aria-label="Add one ${p.name}">+</button></div>`;
  $('item-list').append(row);
}
$('item-list').addEventListener('click', e => {
  const b = e.target.closest('[data-delta]'); if (!b || state.pending) return;
  const quantities = [...state.quantities]; quantities[Number(b.dataset.product)] += Number(b.dataset.delta); change({ quantities });
});
document.querySelectorAll('[name=delivery]').forEach(input => input.addEventListener('change', () => change({ delivery: input.value })));
document.querySelectorAll('[name=frequency]').forEach(input => input.addEventListener('change', () => change({ frequency: input.value })));
$('instructions').addEventListener('input', e => change({ instructions: e.target.value }));
$('edit-address').onclick = () => { show('address-editor', true); $('address').focus(); };
$('address').addEventListener('input', e => { change({ address: e.target.value }); show('address-error', false); $('address').removeAttribute('aria-invalid'); });
function applyPromo() {
  try { state = update(state, { promo: $('promo').value }); render(); $('promo').removeAttribute('aria-invalid'); show('promo-error', false); $('promo-status').textContent = state.promo ? 'Promo applied.' : 'Promo removed.'; }
  catch (e) { $('promo-error').textContent = e.message; show('promo-error', true); $('promo').setAttribute('aria-invalid', 'true'); $('promo-status').textContent = ''; $('promo').focus(); }
}
$('apply-promo').onclick = applyPromo;
$('promo').addEventListener('keydown', e => {
  if (e.key === 'Enter') { e.preventDefault(); applyPromo(); }
});
$('checkout-form').addEventListener('submit', async e => {
  e.preventDefault(); if (state.pending || state.order) return;
  if ($('promo').value.trim().toUpperCase() !== state.promo) { applyPromo(); return; }
  if (!state.address.trim()) { show('address-editor', true); show('address-error', true); $('address-error').textContent = 'Enter a delivery address to continue.'; $('address').setAttribute('aria-invalid', 'true'); $('address').setAttribute('aria-describedby', 'address-error'); $('address').focus(); return; }
  if (!state.quantities.some(Boolean)) { error('Your basket is empty. Add an item to continue.'); $('items').scrollIntoView(); return; }
  const placing = !!state.fees;
  const fail = $('fail').checked; $('fail').checked = false; $('fail').disabled = true;
  state = { ...state, pending: true, error: '' }; render(); $('status').textContent = placing ? 'Placing demo order.' : 'Calculating delivery and service fees.';
  await new Promise(done => setTimeout(done, 650));
  state = placing ? confirm(state, fail) : resolveFees(state, fail);
  $('fail').disabled = false; render();
  if (state.order) {
    show('checkout-form', false); show('confirmation', true);
    $('receipt').textContent = `${state.order.id} · ${money(state.order.total)} · ${state.order.frequency === 'once' ? 'One-time order' : 'Weekly repeat simulation'}.`;
    $('confirmation').focus();
  } else if (state.error) { $('status').textContent = state.error; $('continue').focus(); }
  else { $('status').textContent = `Full total ${money(totals(state).total)}. Review before placing the demo order.`; $('summary').focus(); }
});
function info(title, text) { $('info-title').textContent = title; $('info-copy').textContent = text; $('info').showModal(); }
$('help').onclick = () => info('Checkout help', 'Change quantities, address or delivery before continuing. Try DEMO5 for a discount. All requests run locally; Fail next request lets you try recovery.');
$('offers').onclick = () => info('A little extra for your basket', 'Use DEMO5 for up to $5 off items in this simulation. The discount is shown in your order summary.');
$('close-info').onclick = () => $('info').close();
$('restart').onclick = () => location.reload();
render();
