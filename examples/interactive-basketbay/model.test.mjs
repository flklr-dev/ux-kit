import test from 'node:test';
import assert from 'node:assert/strict';
import { initialState, totals, update, resolveFees, confirm } from './model.mjs';

test('known subtotal includes selected Express; missing fees are not a final total', () => {
  const s = initialState();
  assert.equal(totals(s).known, 2399); assert.equal(totals(s).total, null);
  assert.equal(s.frequency, 'once');
});
test('quantity and delivery changes invalidate resolved fees', () => {
  let s = resolveFees(initialState());
  assert.equal(totals(s).total, 2749);
  s = update(s, { quantities: [2, 1, 1, 1], delivery: 'standard' });
  assert.equal(totals(s).known, 2350); assert.equal(totals(s).total, null);
  assert.equal(totals(resolveFees(s)).total, 2700);
});
test('promo validates explicitly and caps discount at item cost', () => {
  const s = update(initialState(), { promo: ' demo5 ' });
  assert.equal(totals(s).known, 1899);
  assert.throws(() => update(s, { promo: 'BAD' }), /Use DEMO5/);
  const small = update(s, { quantities: [0, 1, 0, 0] });
  assert.equal(totals(small).items, 300); assert.equal(totals(small).discount, 300);
  assert.throws(() => update(s, { quantities: [-1, 1, 1, 1] }), /quantity/);
});
test('empty cart cannot progress and address is required for fee calculation', () => {
  assert.throws(() => resolveFees(update(initialState(), { quantities: [0, 0, 0, 0] })), /basket is empty/);
  assert.throws(() => resolveFees(update(initialState(), { address: ' ' })), /delivery address/);
  assert.throws(() => confirm(initialState()), /Resolve fees/);
});
test('pending operations lock edits; failed completion retains every entered value', () => {
  const entered = update(initialState(), { address: '27 Test Road', instructions: 'Side door', promo: 'DEMO5', frequency: 'weekly' });
  const pending = { ...entered, pending: true };
  assert.throws(() => update(pending, { instructions: 'stale edit' }), /wait/);
  const failed = resolveFees(pending, true);
  for (const key of ['address', 'instructions', 'promo', 'frequency', 'quantities', 'delivery']) assert.deepEqual(failed[key], entered[key]);
  assert.equal(failed.pending, false); assert.match(failed.error, /kept/);
  assert.equal(totals(resolveFees(failed)).total, 2249);
});
test('commit requires displayed final amount; retry and repeated completion create one order', () => {
  const ready = resolveFees(initialState());
  const failed = confirm({ ...ready, pending: true }, true);
  assert.equal(failed.order, null); assert.equal(totals(failed).total, 2749);
  const done = confirm(failed);
  assert.deepEqual(done.order, { id: 'DEMO-001', total: 2749, frequency: 'once' });
  assert.equal(confirm(done), done);
  assert.throws(() => update(done, { delivery: 'standard' }), /complete/);
});
