export const products = [
  { name: 'Oat milk', price: 450, icon: '🥛' },
  { name: 'Bananas', price: 300, icon: '🍌' },
  { name: 'Bread', price: 550, icon: '🍞' },
  { name: 'Eggs', price: 600, icon: '🥚' },
];
export const money = cents => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents / 100);
export function initialState() {
  return { quantities: [1, 1, 1, 1], delivery: 'express', address: '18 Cedar Lane', instructions: '', promo: '', frequency: 'once', fees: null, pending: false, error: '', order: null };
}
export function totals(s) {
  const items = products.reduce((sum, p, i) => sum + p.price * s.quantities[i], 0);
  const discount = s.promo === 'DEMO5' ? Math.min(500, items) : 0;
  const upgrade = s.delivery === 'express' ? 499 : 0;
  const known = items - discount + upgrade;
  return { items, discount, upgrade, known, total: s.fees ? known + s.fees.delivery + s.fees.service : null };
}
export function update(s, patch) {
  if (s.pending) throw new Error('Please wait for this request to finish.');
  if (s.order) throw new Error('This demo order is complete.');
  const next = { ...s, ...patch, error: '', fees: null };
  if (!Array.isArray(next.quantities) || next.quantities.length !== products.length || next.quantities.some(q => !Number.isInteger(q) || q < 0 || q > 9)) throw new Error('Choose a quantity from 0 to 9.');
  if (!['express', 'standard'].includes(next.delivery)) throw new Error('Choose a delivery option.');
  if (!['once', 'weekly'].includes(next.frequency)) throw new Error('Choose an order frequency.');
  next.promo = next.promo.trim().toUpperCase();
  if (next.promo && next.promo !== 'DEMO5') throw new Error('Use DEMO5 to try the demo discount.');
  next.quantities = [...next.quantities];
  return next;
}
export function resolveFees(s, failed = false) {
  if (s.order) return s;
  if (!s.quantities.some(Boolean)) throw new Error('Your basket is empty. Add an item to continue.');
  if (!s.address.trim()) throw new Error('Enter a delivery address to continue.');
  return { ...s, pending: false, fees: failed ? null : { delivery: 200, service: 150 }, error: failed ? 'Fees could not load. Your details are kept. Try again.' : '' };
}
export function confirm(s, failed = false) {
  if (s.order) return s;
  const total = totals(s).total;
  if (total === null) throw new Error('Resolve fees before placing the demo order.');
  if (failed) return { ...s, pending: false, error: 'Demo order was not placed. Your details are kept. Try again.' };
  return { ...s, pending: false, error: '', order: { id: 'DEMO-001', total, frequency: s.frequency } };
}
