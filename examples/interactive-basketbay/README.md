# BasketBay interactive pilot

A fictional checkout built using UX Kit. This is an executable browser simulation, not a native mobile app, recovered BasketBay source, or a real payment service. It runs entirely in memory and makes no external requests. Reloading starts a fresh demo.

From the UX Kit repository root:

```powershell
node examples/interactive-basketbay/server.mjs
```

Open [the local demo](http://127.0.0.1:4173/interactive-basketbay/index.html). Stop with Ctrl+C.

## Try the journey

1. Check the initial **$23.99 subtotal**: $19 items plus the selected $4.99 Express upgrade. Base delivery and service fees are still unresolved.
2. Change quantities, delivery or address. Add instructions if needed. Apply `DEMO5`, or enter an unsupported code to try correction.
3. Select **Fail next request**, then Continue. Details remain after the simulated failure; retry loads the fees.
4. Review the full **$27.49 total** for the unchanged basket, including illustrative $2 delivery and $1.50 service fees. Changes invalidate the resolved total until recalculation.
5. Place the demo order. Try failure and repeated submission; the simulation produces one confirmation. No money, order, delivery or subscription exists outside this page.
6. One-time is the default. Opening Order frequency permits an explicit weekly simulation; the weekly amount is disclosed before confirmation. Help and demo offers remain available without covering the form.

The fee values, discount, time estimates, recurrence and Continue/review/commit contract are **new illustrative demo assumptions**, not facts recovered from the original screenshot. The original practice image is linked in the demo. It provides static visual comparison only; its behavior cannot be reconstructed or benchmarked from that image.

## What changed and what stayed

| Region | Preserve | Demo change and check |
|---|---|---|
| Identity | Green/mint, orange primary action, item recognition | No whole-screen visual rebrand; inspect screenshot |
| Progress and address | Stepper and editable destination | Continue resolves fees; final button names actual simulated commitment |
| Items | Four items, exact unit prices, quantity editing | Amount updates use integer cents, not displayed text |
| Delivery | Compare Standard and Express with selection visible | Compact rows; larger text reflows instead of clipping |
| Optional content | Instructions, promo, repeat setup and offer discovery | Collapsed controls, no obstructing promotion |
| Amount | Familiar Subtotal / Total wording | Compute selected known charges, disclose missing fees, then complete total |
| Recovery | Retain corrections and details | Lock pending edits, visible error, retry, one confirmation |

## Verification

```powershell
node --test examples/interactive-basketbay/model.test.mjs
```

Browser checks require an existing Playwright package and installed Edge; no dependency is installed by this example. If Playwright is not resolvable normally, set `UXKIT_PLAYWRIGHT` to its `index.mjs` file URL for the current shell only. `UXKIT_BROWSER` defaults to `msedge`; set it to an installed supported Playwright channel if needed.

```powershell
node examples/interactive-basketbay/browser-check.mjs
```

The browser script starts/stops its own ephemeral loopback server. It saves evidence to `evals/results/interactive-pilot-20261025/browser/`. A rerun replaces that script's generated screenshots/results; retain a copy first if comparing runs.

Recorded25October2026: **6 model tests and14 browser checks passed**. Browser checks cover price changes, address/promo correction, help keyboard/focus return, offer access, retained values after failure, pending edit locks, repeat disclosure, retry, repeated submit and layout overflow at320/390/1280px including390px with200%root text. Additional checks cover Enter in promo after fees resolve and a long unbroken address at320px/200%text. Initial enlarged-text overflow in Help/fee values and subsequent address/stepper/total/title overflow were reproduced and corrected through wrapping/reflow and an adaptive display-heading size. The reviewer-found promo Enter defect was reproduced RED, fixed and rerun GREEN. Screenshots inspected at390px normal/enlarged text. These are local automated checks, not proof of complete keyboard coverage, screen-reader accessibility, native operability, real checkout reliability or human usability improvement.

See [UX Kit's evidence and limitations](../../docs/public/evidence.md) for the wider release context. No change to UX Kit's installed skill, principle catalog or readiness designation follows from this pilot.
