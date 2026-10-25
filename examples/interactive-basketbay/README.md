# BasketBay checkout demo

A fictional browser checkout built with UX Kit. It runs locally, keeps state only until reload, and never places a real order or takes payment.

From the repository root:

```sh
node examples/interactive-basketbay/server.mjs
```

Open [the demo](http://127.0.0.1:4173/interactive-basketbay/index.html). Stop the server with Ctrl+C.

## Try it

1. Review the initial **$23.99 subtotal**: $19 items plus the selected $4.99 Express upgrade. Delivery and service fees have not yet been calculated.
2. Change quantities, delivery or address. Add optional instructions or apply `DEMO5` for up to $5 off items.
3. Check **Fail next request**, then Continue. After the simulated error, retry and check that your details remain.
4. Continue calculates illustrative $2 delivery and $1.50 service fees. For the unchanged basket, the full **Total is $27.49** before confirmation.
5. Place the demo order. Repeated activation produces one confirmation. Changing price inputs invalidates the resolved total until recalculation.
6. One-time is the default. Order frequency allows an explicit weekly simulation, with the weekly amount shown before confirmation.

All fees, delivery estimates, discounts and recurrence are illustrative. No subscription or delivery exists outside the page. The [original practice image](../manual-audit-screens/2026-10-24/01-mobile-grocery-checkout.png) is a static reference, not a runnable baseline.

## Run checks

```sh
node --test examples/interactive-basketbay/model.test.mjs
```

Optional browser checks require an existing Playwright package and installed Edge:

```sh
node examples/interactive-basketbay/browser-check.mjs
```

If Playwright is not resolvable, set `UXKIT_PLAYWRIGHT` in your current shell to its `index.mjs` file URL. `UXKIT_BROWSER` defaults to `msedge`; select another installed supported channel if needed. The script starts/stops an ephemeral loopback server and writes screenshots/results to its configured local evidence directory. Preserve files before rerunning if comparing runs.

The example has six model tests and 14 browser checks covering correction, pending guards, retries, retained values, promo keyboard behavior, repeat disclosure and narrow/enlarged layouts. These checks exercise the simulation; test real-product behavior and native accessibility separately. [Verification scope](../../docs/public/evidence.md)
