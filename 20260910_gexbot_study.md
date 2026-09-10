# Gexbot study handoff

**2026-09-10.** External-product study guide. Not a registry lock. Not a
card. Not implement. **Not tradable edge.** 0 ranking. 0 scored artifacts.

The product is **Gexbot** (gexbot.com / NFA). This

`LABELING_LEAK: Gexbot ladders and nets are running residuals of prints
so far today. A “major” strike, zero-gamma, or net convexity used as an
entry gate is only knowable at the clock it was last updated — not at
the open of the bar that produced it. End-of-window or full-day GEX
used to select a morning trade is not causal. feat.vix_1m is not a
Gexbot input; if you join it, use the t-1 prior closed bar.`

Claim clocks (say which one you are using):

- Gexbot classified tape: **cash RTH 09:30–16:00 ET** (Quant WebSocket
  publishes in that window).
- ES/NQ prints on Gexbot are a
  **multiplier conversion** (`ES_SPX`, `NQ_NDX`), not CME volume or
  aggressor truth.

Sources: [gexbot.com/docs](https://www.gexbot.com/docs),
[gexbot.com](https://www.gexbot.com/),
[nfa-llc/gexbot-openapi](https://github.com/nfa-llc/gexbot-openapi).
A reading taken from those pages and not independently scored is
**folklore** and is labeled as such. If a claim is not in those sources,
this file says **not stated**.

SoT for this repo’s own tape remains `docs/DATA_CONTRACT.md` and
`TradeStore`. This handoff does not change that.

---

## 0. One-page map

Gamma is one number. Gexbot cuts it three ways.

| Meter | Question | + means | − means |
|---|---|---|---|
| **DEX** | Are customers synthetically **long or short** the underlying? | Long the index (long call or short put) | Short the index (long put or short call) |
| **Convexity** | Did they **buy or sell** options? | Paid for a big move (bought calls or puts) | Collected premium (sold calls or puts) |
| **GEX orderflow** | Is leftover gamma **call-sided or put-sided**? | Call-gamma residual grew | Put-gamma residual grew |

**2×2 (DEX sign × convexity sign)** — this is how you name a print
without the ladder:

| | +convexity (bought options) | −convexity (sold options) |
|---|---|---|
| **+DEX** | Long call | Short put |
| **−DEX** | Long put | Short call |

**Ladder = today’s stock** (where residual sits by strike).
**Orderflow bar = increment** (what just changed).
**Net_\* = running integral** (score so far today).

**Dealer textbook hedge (do not invert):**

- Dealers **long** gamma (they bought the paper) → fade: buy dips, sell
  rips → pin / calm.
- Dealers **short** gamma (they sold the paper) → chase: buy rips, sell
  dips → amplify / trend.

Gexbot’s extra claim: customers reposition too, so a dealer-only map is
half the picture. In a falling-vol tape they treat **customer longs as
walls** (holders dump, supply liquidity) and **customer shorts as fuel**
(holders hedge / add, take liquidity). Those two channels can fight.
**Folklore** from the docs, not measured here.

---

## 1. How to read Part A

Each term uses the same five layers, in order:

1. **First principles** — what it is, with a tiny number.
2. **Metaphor** — one picture only.
3. **Math intuition** — what grows it, what kills it, why ATM / 0DTE
   dominate.
4. **Market mechanics** — who hedges, who supplies or takes liquidity.
5. **Two books** — customer vs dealer, and when they agree or fight.

Then: **Gexbot expression** and **common misread**.

---

# Part A — Concepts

## Foundation

### Option premium

**First principles.** The price of the contract. Buyer pays it; seller
collects it. For a 0DTE ATM option it is mostly *time and implied-vol
rent*, not intrinsic value.

**Metaphor.** A one-day insurance / lottery ticket. You pay a fare to
rent curvature for a few hours.

**Math intuition.** Premium ≈ f(spot, strike, time, implied vol). Time
decay (theta) and a vol crush shrink it. A realized move larger than
priced grows it for the owner.

**Market mechanics.** Size in premium is not size in risk. A cheap 0DTE
can still carry huge gamma. Gexbot weights by greeks, not by debit.

**Two books.** Customer who paid wants a move or a hedge that pays.
Customer who collected wants quiet. Dealer who sold the ticket is short
that curvature until they hedge.

**Gexbot.** Not plotted as “premium.” It shows up as the *reason*
convexity has a sign: paid vs collected.

**Misread.** Treating a large debit as a large DEX print. A far-OTM
lottery can cost a lot per contract and still be near-zero delta.

### Aggressor / customer long vs short

**First principles.** The aggressor is the side that **crossed the
spread** (lifted the offer or hit the bid). Gexbot labels that side
**customer long** (bought the option) or **customer short** (sold the
option). They do this at millisecond precision. **They do not split
orders to open from orders to close.**

**Metaphor.** Who walked over to the other stall and took the price.
Not who already owned the inventory overnight.

**Math intuition.** Classification is a sign on the print: +1 buy, −1
sell. It is not a position from the OCC open-interest file.

**Market mechanics.** The other side of an aggressive customer is often
a dealer, but can be another customer. If two customers cross, Gexbot’s
imbalance **cancels**.

**Two books.** Customer book: “I just bought or sold paper.” Dealer
book: “I just absorbed that paper and must decide whether to hedge.”
Gexbot reports the customer sign.

**Gexbot.** This engine powers State, Orderflow, and Quant. Classic does
**not** use it (Classic uses OI and volume).

**Misread.** “Customer long” ≠ “new long.” Buying to close a short looks
the same as opening a long.

### Residual imbalance

**First principles.** After same-contract customer buys and sells net
out, only the leftover remains. One buy and one sell of the same
contract do not appear. A dealer who buys and later sells the same
paper also washes.

**Metaphor.** A kitchen scale. Matching weights cancel. The needle
shows only the extra flour.

**Math intuition.** Residual = Σ signed prints. Two-way volume can be
huge while residual is tiny. The chart is the residual, not the tape
width.

**Market mechanics.** Residual is where *someone* is still stuck with
the risk. That someone must hedge, hold, or unwind. No residual → no
Gexbot node.

**Two books.** Customers as a group only matter on the leftover.
Dealers only have a forced hedge on the leftover. The cancelled middle
is just intermediation.

**Gexbot.** Options profile, GEX profile, DEX/convexity ladders, and all
orderflow series are residual-based. **Not stated** as a percent of
total OI.

**Misread.** Reading a quiet ladder as “nothing traded.” It can mean
everything two-way cancelled.

### Open vs close (Gexbot limit)

**First principles.** Opening a long and closing a short are both
**buys**. Opening a short and closing a long are both **sells**. Gexbot
does not distinguish.

**Metaphor.** Seeing someone walk into a shop with cash. You do not know
if they are stocking up or paying off a tab.

**Math intuition.** The print’s sign is the trade sign, not Δinventory
versus yesterday’s OI.

**Market mechanics.** A huge +convexity spike can be a new hedge *or*
shorts covering. A huge −convexity spike can be a new overwrite *or*
longs dumping.

**Two books.** Customer intent (open vs close) is invisible. Dealer
hedge still reacts to the greek they just absorbed.

**Gexbot.** Documented limit. Do not write “they put on longs” from a
buy bar alone.

**Misread.** Treating every +DEX spike as a fresh directional bet.

### Delta

**First principles.** How much the option’s value moves if spot moves
$1. A 0.50-delta call behaves like half a share (times the contract
multiplier). Put deltas are negative for the owner.

**Metaphor.** How stock-like the contract is, right now. 0 = lottery
stub. 1 = a share in costume.

**Math intuition.** Δ = ∂V/∂S. ATM ≈ 0.50 for a call (sign flips for
puts). Deep ITM → |Δ| → 1. Far OTM → 0. As DTE → 0, the ATM region
becomes a cliff: delta jumps from ~0 to ~1 across a few points.

**Market mechanics.** Delta × size × multiplier is the **share
equivalent**. That is what a dealer hedges in ES/NQ/SPY.

**Two books.** Customer long a 0.50 call is long ~50 deltas per
contract. Dealer short that call is short ~50 and buys ~50 shares (or
futures) to flatten.

**Gexbot.** DEX ladder and DEX orderflow (`dexoflow`, `one_dexoflow`)
are delta × residual size, customer-signed.

**Misread.** “High delta” as “high conviction vol bet.” High delta is
often already-decided ITM paper. High *gamma* is the undecided paper.

### Gamma

**First principles.** How much **delta** changes when spot moves $1.
Γ = ∂²V/∂S² = ∂Δ/∂S. Long calls and long puts are long gamma. Short
calls and short puts are short gamma.

**Metaphor.** Not the car’s speed — how violently the accelerator
itself gets more or less sensitive as you press it.

**Math intuition.** Toy: ATM 0DTE call, Δ = 0.50. Spot +15 points, Δ →
~0.80. That +0.30 is gamma at work. Gamma **peaks ATM** and **explodes
as DTE → 0**. Far OTM and deep ITM: mind already made up, Γ ≈ 0.

**Market mechanics.** High gamma means the hedge ratio is unstable. A
small spot move forces a large extra hedge. That is why 0DTE prints
dominate Gexbot tapes.

**Two books.** Customer long gamma wants a larger move than priced.
Customer short gamma wants a smaller move than priced. Dealer short
gamma **chases** (amplifies). Dealer long gamma **fades** (pins).

**Gexbot.** Convexity uses the long-vs-short cut of gamma. GEX orderflow
uses the call-vs-put cut of gamma. Same Γ, two axes.

**Misread.** “Gamma” as a direction. Gamma has no up/down. Direction is
delta.

### Vega

**First principles.** How much the option’s value moves if implied
volatility moves one point.

**Metaphor.** How much the ticket price depends on the fear quote, not
on the index print.

**Math intuition.** Vega is larger for longer-dated and nearer-ATM
options. 0DTE vega is small in *level* but vanna/charm still matter
because the remaining time is tiny.

**Market mechanics.** A vol shock reprices the whole chain. Dealers
hedge vega with other options or VIX paper; they do not hedge it with
ES the way they hedge delta.

**Two books.** Customer long vega paid for a vol up-move. Dealer short
vega gets hurt if IV spikes and must decide whether to buy vol back.

**Gexbot.** No standalone “vega orderflow” in the retail docs.
Research (gbR) exposes vega charts. **not stated** as a State ladder.

**Misread.** Reading a +convexity spike as “vega just bought” in the
30-day sense. Convexity here is mostly **near-dated gamma**, not a
vega book.

### Vanna

**First principles.** How **delta** changes when implied vol changes
(and equivalently how vega changes when spot moves).

**Metaphor.** The hedge ratio slipping because the fear quote changed,
even if spot did not.

**Math intuition.** For a typical long option, a vol collapse pulls
OTM deltas toward 0 and ITM toward 1 — the smile/term makes the
spot-vol cross-effect signed. Gexbot plots **−vanna** as the *dollar
delta impact of a total vol collapse* (all options heading toward
expiry / vol → realized).

**Market mechanics.** Into the close, vol often compresses. That
re-hedge can pin price into large short-option strikes. Gexbot says
−vanna becomes **more powerful than gamma** in the last stretch.
**Folklore** (docs, −vanna/charm ladder).

**Two books.** Customer long options: vol crush makes them less
optional, deltas slide toward 0 or 1. Dealers on the other side do the
opposite hedge. Customer shorts: vol crush is their profit; deltas die;
dealers who were long those options sell or buy to match.

**Gexbot.** −vanna ladder and `zvanna` / `ovanna` on the orderflow
payload. **Beta.** Applied to *today’s classified residual*, not the
full dealer OI book.

**Misread.** Using a morning −vanna bar as a daytime directional signal.
Docs: relevance grows into expiry; they cite SPX magnitudes around
**$800MM last hour** and **$1000MM last couple of hours**. **Folklore.**

### Charm

**First principles.** How **delta** changes as calendar time passes,
spot held fixed. Gexbot’s charm ex is the **dollar delta impact per
hour**.

**Metaphor.** The ice cube melting: even if the room temperature (spot)
is unchanged, the option’s stock-ness changes because the clock ran.

**Math intuition.** Charm of OTM options **explodes as time → 0**. That
is why the last 30–60 minutes are a different market than 10:00 ET.

**Market mechanics.** As OTM premium dies, customers who were short
those options get **less short** (they gain deltas toward flat).
Dealers who were long them get **less long** and **buy** the underlying
to stay flat — a bullish passive flow if the shorts were OTM calls
above, and the mirror for puts. **Folklore** (docs example).

**Two books.** Customer short OTM calls into expiry: “my short is dying,
I am getting longer.” Dealer: “I am getting shorter, I buy.” Flows
**stop** if spot walks to those strikes and they become ATM.

**Gexbot.** Charm ladder; `zcharm` / `ocharm`. **Beta.** Same residual
caveat as −vanna.

**Misread.** Treating charm as a morning setup. It is a late-day
potential-energy read.

### 0DTE vs next vs full (90d)

**First principles.**

- **Latest / zero / 0DTE:** nearest expiry.
- **Next / one:** the following expiry.
- **Full:** classified (or Classic OI/volume) across expiries **within
  90 days**.

**Metaphor.** Today’s weather vs tomorrow’s forecast vs the season.

**Math intuition.** 0DTE owns the gamma. Next owns a slower book. Full
mixes pins from weeklies and monthlies and can hide the 0DTE story.

**Market mechanics.** Intraday ES/NQ “GEX walls” that matter for the
open are usually **latest**. Full is context (monthly OI mountains).
Next matters when 0DTE is already dead or into a roll.

**Two books.** Customers in 0DTE are playing a few hours. Dealers hedge
that book tick-for-tick. The 90-day book is a slower inventory.

**Gexbot.** Classic: `gex_full` / `gex_zero` / `gex_one`. State: same
split plus explicit-expiry Quant groups (`YYYYMMDD`). Orderflow:
`dexoflow` vs `one_dexoflow` (and the gex/cvr twins).

**Misread.** Mixing full-book zero gamma with a 0DTE scalp target.

---

## Classic

Classic does **not** use the classification engine. It is GEX from
**open interest** and from **volume**, call netted against put at each
strike. Bars right = call GEX, left = put GEX.

### GEX by OI

**First principles.** Gamma × open interest at the strike, signed
call-vs-put. It is the **inventory map** as of the OI snapshot, not
today’s aggressor residual.

**Metaphor.** A topographic map printed last night. Hills are still
there even if nobody walked them today.

**Math intuition.** Large OI × ATM Γ = a tall bar. OI updates slowly
(end-of-day / official OI). Intraday “OI GEX” is still mostly
yesterday’s mountain with today’s spot moving under it.

**Market mechanics.** Dealers and customers already hold this paper.
Hedging of *this* book is the slow pin that people mean by “the GEX
map.”

**Two books.** You cannot see who is long. The usual shortcut (“dealers
are short the OI”) is an assumption. Gexbot Classic still plots it
because the *location* of inventory is real even when the sign is
ambiguous.

**Gexbot.** Side panel: zero gamma, major pos, major neg from OI.
Lookback dots and a history slider.

**Misread.** Treating OI GEX as “what just traded.” That is volume GEX
or State.

### GEX by volume

**First principles.** Same ladder, but gamma × **today’s volume** at
the strike, call netted vs put. Classic uses this for zero gamma,
majors, and max-change.

**Metaphor.** Today’s footprints on last night’s map.

**Math intuition.** A strike that traded a lot of ATM 0DTE will dominate
even if OI was small overnight.

**Market mechanics.** Volume GEX moves during the day. It is closer to
“where curvature changed hands” than OI, but still **not** customer
long vs short.

**Two books.** Still unsigned for owner. A volume mountain can be
customers selling *or* buying.

**Gexbot.** The live Classic histogram backbone. Max-change 1/5/15/30
minutes is from this series.

**Misread.** Calling Classic “orderflow.” It is not classified.

### Call vs put netting

**First principles.** At each strike, call GEX minus put GEX. One bar:
right call-dominated, left put-dominated.

**Metaphor.** Tug of war on that strike. Net rope position, not how
many people are pulling.

**Math intuition.** Equal call and put gamma at the same strike nets
toward zero even if both are huge. That is a “balanced” node, not an
empty one.

**Market mechanics.** A call-heavy node above spot is the usual “call
wall” language. A put-heavy node below is the “put wall.” The *owner*
of that gamma is Classic-unknown.

**Two books.** Customer call-long vs dealer call-short is invisible
here. State’s GEX profile tries to use *imbalanced* classified flow
instead.

**Gexbot.** Classic histogram; State GEX profile uses the same left/right
visual for **imbalance**, not raw OI.

**Misread.** “Green bar = bullish.” It means call-sided gamma, which on
SPX is often **sold** calls. **Folklore** (docs: SPX short-gamma habit).

### Zero gamma

**First principles.** The spot level that is the **center of the
volume-GEX complex** (Classic). Above it vs below it is the usual
“positive vs negative gamma regime” language in unsigned GEX maps.

**Metaphor.** The fulcrum of the see-saw.

**Math intuition.** It is a weighted center of the signed GEX ladder,
not a traded strike. Spot can sit on it without anyone having that
strike as a wall.

**Market mechanics.** Common read: below zero gamma the book is more
short-gamma / air-pocket; above, more long-gamma / pin. That read
assumes the usual dealer-short-calls / long-puts-from-customers
shortcut. **Partly folklore**; Classic cannot prove ownership.

**Two books.** If the assumption holds, dealers flip from chasing to
fading as spot crosses the fulcrum. If customers are the shorts, the
incentive flip is theirs.

**Gexbot.** `zero_gamma` on Classic (volume) and a side-panel OI twin.
Alerts: spot touching major pos/neg, not specifically zero gamma.
**not stated** as an orderflow alert.

**Misread.** Using full-book zero gamma as a 0DTE scalp line.

### Major positive / major negative

**First principles.** The strike where volume-GEX (or OI-GEX) has the
**largest positive** or **largest negative** bar.

**Metaphor.** The tallest hill and the deepest hole on today’s map.

**Math intuition.** Argmax |GEX+| and argmin GEX. They jump when a
bigger node prints or when spot moves the gamma surface.

**Market mechanics.** These are the advertised “magnet / wall”
candidates in Classic. Whether they pin or break depends on ownership
and vol regime — Classic cannot say.

**Two books.** Unknown owner. State replaces this with **major call /
major put** and **major long / major short** (classified).

**Gexbot.** `major_pos_vol`, `major_neg_vol`, `major_pos_oi`,
`major_neg_oi`. Classic alerts: spot touching major pos/neg.

**Misread.** Always fading the major. A short-gamma hole can be an
acceleration lane, not a fade.

### Max-change strikes (1 / 5 / 15 / 30 min)

**First principles.** The strikes whose GEX changed the most over those
lookbacks.

**Metaphor.** Where the map just redrew.

**Math intuition.** ΔGEX over the window, pick the extrema. High-Γ 0DTE
prints win.

**Market mechanics.** A new max-change strike is “attention just moved
here.” It is a **location of fresh curvature**, not a direction.

**Two books.** Still unsigned in Classic.

**Gexbot.** Embedded lookback dots; `max_priors` in the Classic API
example.

**Misread.** Trading every max-change as a reversal.

### Lookbacks and history slider

**First principles.** Dots on the histogram show GEX at earlier times
today. The slider replays the day. Retail replay: **last 90 calendar
days**.

**Metaphor.** Ghost outlines of this morning’s mountains.

**Math intuition.** Same ladder, earlier snapshot. Not a forecast.

**Market mechanics.** Useful to see whether a wall **built** or **bled**.
A wall that built into you is different from a wall you inherited at
09:31.

**Two books.** Still Classic-unsigned.

**Gexbot.** Classic and State. Orderflow has synchronized crosshairs
instead.

**Misread.** Reading a lookback dot as a future target.

---

## State

State uses the **classification engine**. Residual only. Latest and
next (and a full version for the GEX profile). Puts default purple,
calls orange. Long residual extends right; short residual extends left.

### Options profile (OP)

**First principles.** Per-strike, per-right, customer long vs customer
short residual so far today. Also overlays 0DTE IV skew (put IV vs call
IV dots on a second x-axis).

**Metaphor.** A warehouse ledger: who is still stuck long the boxes,
who is still stuck short, at each shelf (strike).

**Math intuition.** OP[K, call, long] = leftover customer call buys at
K. Short is leftover sells. No open/close split.

**Market mechanics (docs).** Significant strikes are **liquidity
concentrations** — “stops on the roadmap.” Direction comes from
incentives, not from the bar existing.

In a **falling-vol** tape (the common one):

- **Long options act like walls.** Holders are −EV to sit; they
  liquidate as price approaches → they **supply** liquidity → stall.
- **Short options do the opposite.** Holders are +EV to sit; they
  hedge / add as price approaches → they **take** liquidity →
  continuation.

In a **rising-vol** tape the incentives **flip**: longs are less eager
to dump (their tickets are paying); shorts get paid more and may add,
so **shorts become the walls**. **Folklore** (docs, “Reading the OP”).

**Two books.** Customer: dump vs defend. Dealer: absorbs the dump or
the hedge and delta-hedges. Docs argue the customer channel is the half
that dealer-only GEX misses.

**Gexbot.** Latest and next only for OP (not a 90-day OP). Lookbacks and
slider included.

**Misread.** “Long bar = support.” In rising vol, that long can be
fuel. In falling vol, a **short** bar can be the continuation lane.

### GEX profile

**First principles.** Take the residual, then **net imbalanced calls
against imbalanced puts** to find where exposure is **not** two-sided.
Call-GEX imbalance right, put-GEX imbalance left. Versions: full /
latest / next.

**Metaphor.** After cancelling matched trades, where is the leftover
curvature sitting — on calls or on puts?

**Math intuition.** Docs’ steps: (1) only residual prints; (2) do not
assume only dealers hedge; (3) a leftover put block and a leftover call
block can squeeze sellers in opposite directions; (4) net them to mark
high-gamma nodes (targets), low-gamma nodes (transition), and call vs
put regimes.

**Market mechanics.** This is the **shape** of the complex: upside
curvature vs downside curvature, not bought vs sold.

**Two books.** “Imbalance” is still customer-signed residual, then
call-minus-put. Dealers sit on the other side of that leftover.

**Gexbot.** Replaces Classic’s unsigned call/put histogram with a
classified one. Alerts: spot touching **major call** and **major put**.

**Misread.** Treating GEX profile as convexity (bought vs sold). That is
the convexity ladder.

### DEX ladder

**First principles.** Residual **delta** at each strike, one bar.
Customer long calls and short puts → +DEX. Customer short calls and
long puts → −DEX.

**Metaphor.** The options version of a **depth ladder / order book**:
who is synthetically bid, who is synthetically offered, and how many
share-equivalents.

**Math intuition.** DEX_K = Σ Δ × residual size at K. High vol flattens
the gamma curve, so docs say **rely more on DEX as things heat up**.
**Folklore** (docs).

**Market mechanics.** Heavy −DEX above spot ≈ a stack of offers
(warning if walking into it). Heavy +DEX below spot ≈ a stack of bids
(can support). Transition between heavy short and fresh longs = target /
reversion zone. **Folklore.**

**Two books.** Customer: “I am long or short the index via options.”
Dealer: hedges that delta in the underlying. On SPY, docs say a glance
at DEX is a bias read because those options trade more directionally
than SPX.

**Gexbot.** State ladder. Orderflow’s `dexoflow` is the increment.

**Misread.** +DEX as “they bought calls.” It can be short puts.

### Convexity ladder

**First principles.** Residual **gamma** at each strike, signed
**long option minus short option**. Long calls and long puts → +
convexity. Short calls and short puts → − convexity.

**Metaphor.** Who owns the insurance at this shelf, and who wrote it.

**Math intuition.** +Γ customers want moves that **beat** the priced
distribution (travel *away* from their strike). −Γ customers want moves
that **lose** to that distribution (approach and rest on their strike).

**Market mechanics (docs, falling vol):** +convexity stalls; we travel
through −convexity. **Rising vol:** we travel through +convexity; we
stall at −convexity. Transition between + and − is a pivot (incentives
reshuffle). Well-distributed −convexity ≈ liquid, happy premium-selling
tape. Well-distributed +convexity ≈ informed vol expectation (often
pre-event). Concentrated −convexity under/over spot is the “crowded
short convexity, one shove” setup they call their favorite SPY pattern.
**Folklore.**

**Two books.** Customer long Γ: needs expansion. Customer short Γ:
needs pin. Dealer is the opposite Γ and delta-hedges. Into the close,
**0DTE negative convexity (dealer-long strikes in their language) act
as magnets via −vanna and charm**, not via daytime gamma. **Folklore.**

**Gexbot.** Alerts: spot touching **major long** and **major short**
gamma. They named it “convexity” rather than “gex ladder” to stress
risk, not direction.

**Misread.** Reading convexity as up/down. It is vol ownership.

### −vanna / charm ladders (beta)

**First principles.** Dollar delta impact of a **vol collapse** (−vanna,
until expiry) and of **one hour of time** (charm, $MM/hr), from
*today’s residual only*.

**Metaphor.** How hard the afternoon magnet will pull if fear dies and
the clock runs out — measured on today’s leftover tickets, not the
whole vault.

**Math intuition.** Sign convention (docs): bar **right** = customers
**gain** deltas into expiry (get longer) → dealers get shorter →
dealers **buy** → supportive passive flow. Bar **left** = the opposite
→ passive selling. Customer-bought options: −vanna/charm flips from +
below spot to − above (forces spot *away*). Customer-sold options: the
mirror (attracts spot *in*). Polarity **flips** as spot crosses the
level and **zeros** when spot sits on it. Local zeros are the sharp
pivots.

**Market mechanics.** Last 30–60 minutes. Docs: on SPX, notice the
effect when |net −vanna| ≳ **$800MM** in the last hour, sooner if
≳ **$1000MM**. Extreme days: traders front-run the unwind; charm
accelerates with the move. Neutral net −vanna: price wanders. **Folklore.
Beta. Discretionary thresholds.**

**Two books.** Worked example in the docs: only customer-sold OTM
calls. Into expiry those calls die → customers less short → dealers
less long → dealers buy. Flow **dies** if spot reaches those calls and
they go ATM.

**Gexbot.** Ladders plus `net -vanna` / `net charm` on the orderflow
page. Why beta: OP classifies *intraday* flow, not total inventory;
vanna/charm are “dealer heavy,” and they are still learning the
practice.

**Misread.** Promoting a morning trade from a −vanna stack. Not causal
at 09:45 the way it is at 15:30.

---

## Orderflow

Time series of the same residual, nearest and following expiry. All
plots are **paper (customer)** positioning. API names:
`dexoflow`, `gexoflow`, `cvroflow` and `one_*` twins; nets and
aggregates on the same payload.

### DEX orderflow (+DEX / −DEX)

**First principles.**

`DEX OF = (bullish volume × Δ) − (bearish volume × Δ)`

Bullish = long call | short put. Bearish = short call | long put.

**+DEX:** customers just got longer (share-equivalent).
**−DEX:** customers just got shorter.

**Metaphor.** A futures tape printed in **options deltas** instead of
ES lots. “Someone just bought or sold this many shares-worth of
options here.”

**Math intuition.** Size × |Δ|. ATM 0.50 × big lot can beat ITM 0.90 ×
small lot. Gamma does not enter this formula.

**Market mechanics.** A large bar marks a **level of interest**: a
position was established or a liquidation printed. Docs: a local bottom
can be an aggressive **+DEX** buyer *or* a **−DEX** flush as a long is
forced out. **Folklore.**

**Two books.** Customer: I just leaned long or short the index.
Dealer: I just took the other delta and I hedge in the underlying.

**Gexbot.** Subplot + alerts. `agg_dex` / `net_dex` and call/put splits
are the running sums.

**Misread.** +DEX = long calls. Pair convexity. One spike ≠ a low.

### GEX orderflow

**First principles.**

`GEX OF = (call GEX imbalance) − (put GEX imbalance)`

Bar up = GEX profile got more **call-sided** (more green). Bar down =
more **put-sided** (more red). API: `gexoflow`, `one_gexoflow`.

**Metaphor.** A weather vane for **which wing** of the complex just
got heavier — upside curvature or downside curvature — not whether
anyone paid for it.

**Math intuition.** High-Γ prints move this bar. That is why it “marks
high-conviction pivots” in their language: ATM 0DTE, not junk OTM.
**Folklore.**

**Market mechanics (docs).** Positive GEX OF is **not a buy signal**.
It **adds convexity to the upside** (if we rise, we travel farther)
while **raising the chance spot falls**. Distribution: left-skewed in
probability, right-skewed in payoff. Negative GEX OF is the mirror.

On **SPX** (docs: dominated by short gamma; often a vol-selling /
hedge complex), +GEX OF is **often call selling** and they treat it as
a **local top**; −GEX OF as a **local bottom**. **Folklore.
Instrument-specific.** SPY they describe as more directional — the same
sign can be long-call demand.

**Two books.** Call-selling customer: short upside Γ, +DEX or −DEX
depending on structure (short call is −DEX). Dealer long those calls:
long Γ, fades if they hedge. The GEX OF bar itself does not tell you
which cell of the 2×2 you are in.

**Gexbot.** Subplot + configurable alerts.

**Misread.** Trading +GEX OF as “bullish gamma.” On SPX it is often the
opposite story.

### Convexity orderflow

**First principles.**

`convexity OF = long OF × Γ − short OF × Γ`

**+:** leftover **option buying** (paid for a move).
**−:** leftover **option selling** (collected premium).

API: `cvroflow`, `one_cvroflow`.

**Metaphor.** A **vol bid/offer** tape. Not a price tape.

**Math intuition.** Weighted by Γ, so 0DTE ATM drowning. Sequence of
small same-sign bars = regime. One large bar = event. Alternating tiny
bars = two-way cancel, ignore.

**Market mechanics (docs).** Selloffs often print **persistent
+convexity** (demand for vol). Grinds and squeezes often print
**persistent −convexity**. **Folklore.** Intended use: **cross-read
with DEX OF** to recover the 2×2 without the ladder.

**Two books.** +convexity customer paid; dealer is more short Γ →
chase if they hedge. −convexity customer collected; dealer is more
long Γ → fade if they hedge. Customer open/close still unknown.

**Gexbot.** Subplot + alerts.

**Misread.** +convexity as “market down.” It is a vol bid. Direction
needs DEX.

### Net GEX / net convexity / aggregate DEX

**First principles.**

- **Net GEX** = total call-GEX imbalance − total put-GEX imbalance
  (integral of GEX OF). High + = more holders of call Γ than put Γ.
- **Net convexity** = total customer long Γ − total customer short Γ
  (integral of convexity OF). High + = net option buying today.
- **Aggregate DEX** = cumulative DEX OF (“this many shares-worth have
  been bought/sold so far today”). Split call vs put: negative call
  aggDEX + positive put aggDEX = broad short-vol day.

**Metaphor.** The scoreboard. Orderflow bars are the points scored this
possession.

**Math intuition.** Nets can stay one-sided while the last three bars
flip. Read the last bar for the event, the net for the day-type.

**Market mechanics (docs, net GEX).** If upside convexity is high and
rising and bars are **equal**, they look for a **squeeze**. If one bar
**above** price predominates, they look for **reversion there**.
Mirror on the downside. Read net GEX **with** net convexity: is the Γ
in calls or puts, and is it bought or sold? **Folklore.**

Net convexity: low (sold) is “mildly constructive” on price because of
the usual inverse spot/IV link; very high (panic bid for options)
usually only in fear. **Folklore.**

SPX vs SPY (docs, aggDEX): in low vol, SPX often prints **+put aggDEX,
−call aggDEX, mildly −net aggDEX** during uptrends (hedge / overwrite
machine). SPY more directional — SPY vs its own aggDEX divergence is
called “particularly powerful.” When VIX > 20 they say SPX starts
trading like SPY. **Folklore.**

**Two books.** Nets are still customer residual, not the OCC book.

**Gexbot.** Orderflow page. `zgr` / `ogr`, `zcvr` / `ocvr`, `agg_*`,
`net_*` on the API object.

**Misread.** Using 15:50 net GEX to explain a 09:35 fill as if it were
known then.

### Spike vs sequence vs noise

**First principles.** A bar is Γ- or Δ-weighted residual in a short
bucket.

| Shape | Read |
|---|---|
| One large + or − | **Event** (a print or cluster). Marks a level. Not a regime. |
| Many small same-sign | **Regime** (the crowd kept doing the same thing). |
| Alternating tiny | **Noise** (two-way, no leftover). |

**Metaphor.** One punch vs the weather vs static.

**Math intuition.** Persistence is a run of signed increments. Noise is
a near-zero integral with high absolute prints.

**Market mechanics.** Events are where you look at the ladder (which
strike). Regimes are where you name the day (fear bid vs premium
sale).

**Two books.** An event can be one fund. A sequence is the crowd.
Dealers hedge both; only the sequence usually sets the day’s pin vs
trend character.

**Gexbot.** Visual on the OF subplots. **not stated** as a numeric
“spike threshold.”

**Misread.** Trading every spike. Or waiting for a monster bar and
ignoring a 90-minute −convexity drip.

---

## Cross-cuts

### The 2×2 in one print

Walk the same notional through all three meters.

| Print | DEX OF | Convexity OF | GEX OF (typical) |
|---|---|---|---|
| **Long call** | + | + | + (call residual grew) |
| **Short put** | + | − | − (put residual grew) |
| **Long put** | − | + | − |
| **Short call** | − | − | + |

Same +DEX, opposite story: long call wants **expansion**; short put
wants **pin**. That is why convexity exists.

### SPX vs SPY vs ES/NQ

- **SPX:** docs treat it as a short-gamma, vol-selling / hedge complex
  in quiet tape. +GEX OF often = call selling = local-top folklore.
  AggDEX pattern above. 0DTE SPX is the core live object.
- **SPY:** more directional. DEX ladder as bias. Same GEX OF sign can
  mean long calls. Their “favorite” crowded short-convexity shove is
  described on SPY.
- **ES / NQ:** `ES_SPX` / `NQ_NDX` (and NinjaTrader futures-target
  multiplier). **Converted index options**, not CME tape. Do not fold
  these prints into an esnqfeed volume/aggressor claim.

### Falling vol vs rising vol vs last hour

| Clock / vol | +convexity (customer long Γ) | −convexity (customer short Γ) |
|---|---|---|
| Falling vol (common) | Stall / wall | Travel through / fuel |
| Rising vol | Travel through | Stall / shorts defend |
| Last hour (vanna/charm) | Pushes spot *away* (if the long option sits there) | Attracts / magnet (0DTE short Γ) |

**Folklore** (docs). Last hour is a **different instrument** than the
open. Do not copy last-hour magnet logic onto 09:29–11:00 without
renaming the claim.

---

# Part B — Retail heuristics

**NOT A LOCKED EDGE.** Heuristics from Gexbot’s own docs plus
microstructure logic. No hit rate. Not promote-ready. No dollar PnL.
Do not write a robot from this section.

If a stop or target is not in the docs, it is marked **inferred** and
is structural logic only.

**Default clocks.**

- Options residual: **09:30–16:00 ET**.
- If you map to ES/NQ early RTH: **09:29–11:00 ET**. After 11:00 is
  off the esnqfeed volume/aggressor claim. Last-hour vanna/charm setups
  are a **separate family** (15:00–16:00 ET).

**When the whole book is off (regime filter).**

- Two-sided OF noise (alternating tiny bars, nets flat).
- Residual too thin to name a major (no leftover).
- Rising-vol day while you are still using the falling-vol wall/fuel
  map — flip the OP rules or stand down.
- Using **full** 90d zero-gamma for a 0DTE scalp.
- Treating ES/NQ converted walls as exchange volume.

### Heuristic index

| # | Name | Grounding |
|---|---|---|
| H1 | SPX local top / bottom via GEX OF | Docs folklore (SPX short-gamma habit) |
| H2 | Long-call expansion vs short-put pin | 2×2, docs (“intended use” of convexity OF) |
| H3 | Fear-tape vs grind-tape | Docs: persistent +cvr vs −cvr |
| H4 | Walk into a DEX / convexity stack | Docs: OP walls/fuel, DEX book, convexity terrain |
| H5 | Last-hour short-convexity magnet | Docs: 0DTE −convexity via −vanna/charm; beta |

---

### H1 — SPX GEX-orderflow pivot (folklore)

- **Instrument / clock.** SPX or `ES_SPX` context. Latest expiry. Cash
  RTH. If ES early RTH, only 09:29–11:00 and say the conversion.
- **Regime filter.** Off when SPX is trading “like SPY” (docs: VIX >
  20) — the call-selling-top map may not hold. Off in two-sided noise.
- **Window logic.** 0DTE gamma is live once the cash open is on. This
  is a *pivot marker*, not an all-day hold.
- **Trigger.** Latest **GEX OF** prints a standout + bar (call-sided
  residual jumped) while spot is extended into a call-heavy node →
  **local-top candidate**. Mirror: standout − GEX OF into a put-heavy
  node → **local-bottom candidate**. Prefer agreement with a DEX event
  (see H2) so you know if it was short calls vs long calls.
- **Invalidation of trigger.** Next bars flip and cancel the residual
  (noise). Or convexity OF shows the “call-sided” bar was **long
  calls** (+DEX +cvr), which is expansion demand, not overwrite.
- **Stop logic (inferred).** Structural: through the **major call**
  (top) or **major put** (bottom) that the profile just grew, or
  through the trigger bar’s high/low if you are in futures. Docs do
  **not** state a stop recipe. **not stated.**
- **Target logic (inferred).** Opposite node: zero-gamma (Classic,
  latest) or the opposing major. Docs describe a *distribution shape*
  (upside less likely but more explosive after +GEX OF) — that argues
  for a **near target and a runner-off**, not a wide profit hold.
  **inferred.**
- **Live falsify.** Price accepts through the call node and GEX OF
  stays + without mean-reversion — the “top” was fuel (long calls or
  rising-vol flip).
- **Source.** Docs, “gex orderflow” and “On an index like SPX…”.
  Folklore.

### H2 — Name the +DEX (expansion vs pin)

- **Instrument / clock.** SPY or SPX latest. Any RTH window where
  residual is building. Early RTH is fine; this is identification, not
  a last-hour effect.
- **Regime filter.** Off if you only have DEX and no convexity (you
  cannot name the cell).
- **Window logic.** Use when a **DEX spike** prints and you need to
  know whether to trade *with* expansion or *for* a hold/pin.
- **Trigger.**
  - +DEX **and** +convexity → **long call**. Thesis: expansion away
    from the strike. Favor continuation if rising vol or if the print
    is a chase.
  - +DEX **and** −convexity → **short put**. Thesis: supportive pin
    above that strike. Favor fade-the-dip / hold, not breakout.
  - Mirror for −DEX: long put (paid crash) vs short call (overwrite
    wall).
- **Invalidation of trigger.** The next sequence flips convexity sign
  (the “short put” was actually covering, then they buy puts).
- **Stop logic (inferred).** Expansion cell: stop back through the
  strike that was bought (the long-call node) — if spot cannot leave
  it, the paid-gamma thesis is dead. Pin cell: stop **through** the
  short-put strike by a meaningful amount (the sold-gamma thesis needs
  that strike to hold). Width **not stated**; do not invent ATR.
- **Target logic (inferred).** Expansion: next opposing DEX stack or
  measured air until a −convexity node. Pin: the short-convexity
  strike itself / nearby major short — **target is the hold**, not a
  distant runner.
- **Live falsify.** +DEX −cvr and spot still rips away from the put
  strike — shorts are being squeezed; pin thesis dies.
- **Source.** Docs, convexity OF “intended use” + DEX OF definition.
  Stop/target inferred.

### H3 — Fear tape vs grind tape (sequence, not spike)

- **Instrument / clock.** Latest. All RTH. Day-type filter, then a
  later entry from H2/H4.
- **Regime filter.** Off if nets disagree with the last hour of bars
  (old residual, new regime).
- **Window logic.** You need **time** — a sequence. Do not name the
  day at 09:35 from three bars. A working read is often after the
  first 30–60 minutes of residual. That is a **knowability** clock,
  not a magic hour.
- **Trigger.** Many small **+cvroflow** bars, net convexity rising →
  **fear / vol-bid** day. Many small **−cvroflow** bars, net convexity
  falling → **grind / squeeze / premium-sale** day. Pair aggDEX: SPX
  quiet uptrend often −call aggDEX / +put aggDEX. **Folklore.**
- **Invalidation of trigger.** Sequence flips for a stretch that
  actually moves the net.
- **Stop / target.** This heuristic **does not have an entry**. It
  only picks the **playbook**: on a vol-bid day, do not fade every dip
  as if shorts will hold; on a grind day, do not buy every +convexity
  blip as if a crash bid is in. Entries still need H2/H4.
- **Live falsify.** Price trends hard against the named day-type
  (grind named, then a one-way vol bid that lifts net convexity).
- **Source.** Docs, convexity OF + net convexity + aggDEX paragraphs.
  Folklore. No SL/TP — **not stated.**

### H4 — Walk into a stack (OP + DEX + convexity terrain)

- **Instrument / clock.** Latest OP / DEX / convexity ladders. Best
  once residual has shape (not the first prints). Early RTH usable
  after ~09:45–10:00 as a **so-far** map, knowing it will keep
  rewriting.
- **Regime filter.** Apply the **vol flip**. Falling vol: walk into
  customer **longs** = stall candidate; walk into customer **shorts**
  = continuation candidate. Rising vol: invert. Off if you cannot tell
  vol regime (IV rising through the morning vs crushing).
- **Window logic.** Intraday path vs **already-built** residual. Do
  not use a stack that printed *after* the touch as if it were known
  at the touch (`LABELING_LEAK`).
- **Trigger.** Spot approaches a **significant OP strike**. Confirm
  with DEX (is the book long or short there) and convexity (bought vs
  sold). Example, falling vol: approach a large **customer-long**
  call/put node → stall / fade-the-approach. Approach a large
  **customer-short** node → hold-for-through / continuation.
- **Invalidation of trigger.** Spot reaches the node and OP/DEX
  residual **flips sign** (they covered). Or vol regime was
  mis-tagged.
- **Stop logic (inferred).** Give the node a **through** amount you
  define in *index points at that strike*, not a percent. If the
  thesis is “wall,” stop is **acceptance through** the node (a trade
  through, not a wick — grain **not stated**; pick a print grain and
  write it down). If the thesis is “fuel / through,” stop is **failure
  to take** the node (rejection back inside).
- **Target logic (inferred).** Next transition: +/− convexity flip,
  DEX sign flip, zero-gamma (latest), or opposing major. Docs:
  transitions are where incentives reshuffle.
- **Live falsify.** Falling-vol “wall” and they add to the long
  (residual grows the same way) *and* price walks through — wall
  failed; it was fuel.
- **Source.** Docs, “Reading the OP,” DEX ladder, convexity ladder
  “map.” Stop/target inferred.

### H5 — Last-hour 0DTE short-convexity magnet (beta, separate claim)

- **Instrument / clock.** SPX latest, **last 60–120 minutes** of RTH.
  **Off-claim** for 09:29–11:00 work. Do not mix into the open family.
- **Regime filter.** Off if |net −vanna| is not “extreme” by their
  discretionary $800MM / $1000MM SPX note. Off if net −vanna/charm ≈ 0
  (they say price wanders). **Folklore. Beta.**
- **Window logic.** Charm → ∞ as t → 0. This clock is the product.
- **Trigger.** Large **0DTE −convexity** node; net −vanna/charm signed
  such that dealers must buy (or sell) into that node; spot still
  displaced from it. Thesis: **pin / attract**, not morning trend.
- **Invalidation of trigger.** Spot reaches the node and it goes ATM
  (docs: flows cease). Or residual covers and the node vanishes.
- **Stop logic (inferred).** Acceptance **through** the magnet to the
  next expiry’s node or a new 0DTE stack — the pin failed. **not
  stated.**
- **Target logic (inferred).** The short-convexity strike itself. This
  is a **pin target**, not an expansion target.
- **Live falsify.** Last hour, extreme −vanna, and spot trends away
  while charm accelerates *with* the trend (their “extreme day
  front-run” case) — magnet lost to a directional unwind.
- **Source.** Docs, convexity “Note on Pinning,” −vanna/charm ladders,
  net −vanna/charm. Folklore. Beta.

---

## Window, entry, stop, target — logic only

This is the structural grammar. It is not a system.

**Picking a window**

1. Decide the **claim**: early RTH map (09:29–11:00) vs full RTH
   residual vs last-hour magnet. Do not pool them.
2. Need **enough residual** to name majors. That is a knowability
   clock, usually after the open auction, not at 09:30:01.
3. 0DTE gamma is the default lens. Switch to **next** when latest is
   dead or you are studying the roll. Use **full** only as overnight
   context, not as a scalp line.
4. Last-hour vanna/charm is a **different window** with a different
   object (pin), even if the ticker is the same.

**Signals for entering (minimum agreement)**

- Know the **2×2 cell** (DEX × convexity), or do not name the trade.
- Know **where spot is** vs the relevant ladder node (OP / DEX /
  convexity / latest zero-gamma).
- Know the **vol regime** (falling vs rising) before you call a node
  a wall or fuel.
- Prefer a **sequence** (H3) to pick day-type, then an **event** (H2)
  or a **touch** (H4) to time. A single meter in isolation is not an
  entry.

**Stop logic (inferred grammar)**

Stops attach to **Gexbot objects**, not to a round number:

- Wall / pin thesis: **acceptance through** the node (major long,
  short-put strike, major short-convexity, latest zero-gamma — pick
  one and write it).
- Fuel / expansion thesis: **failure to take** the node, or reclaim
  back through the long-call / long-put strike.
- GEX OF pivot (H1): through the major that just grew, or trigger-bar
  failure.
- Do not use a generic ATR stop unless you first map that width onto
  a named Gexbot distance (usually you cannot — then **do not trade
  it**).

**Target logic (inferred grammar)**

- **Pin / short-convexity / short-put:** target **is the node**. Take
  it. Do not invent a runner that needs expansion you sold.
- **Expansion / long option:** next **opposing** stack or the air
  until a −convexity / opposite-DEX node. Docs’ +GEX OF language
  (less likely but more explosive) argues for a scaled exit, not a
  single heroic target. **inferred.**
- Last hour: magnet strike. If you are still holding an open-window
  expansion target into 15:30, you changed families without saying so.

---

## Limits and non-claims

- Residual ≠ full OI ≠ “dealers are always short.”
- No open vs close.
- Classic is unsigned OI/volume. State/OF are classified residual.
- −vanna / charm are **beta** and applied to daily classified flow.
- ES/NQ on Gexbot is a **multiplier**, not CME volume/aggressor.
- Quant WS is **09:30–16:00 ET**. Explicit-expiry groups are live-only
  and not in REST history.
- Research (gbR) is a **sibling product** (any-ticker surfaces), not
  the classified engine.
- SPX local-top/bottom, VIX>20 “SPX trades like SPY,” $800MM/$1000MM
  −vanna, “favorite SPY shove,” grind vs fear sequences: **folklore**
  from the docs. **not measured** in this repo.
- No hit rate, no edge, no promote, no robot.
- Do not cite this handoff as evidence about an esnqfeed card.

**Plans (context only, not a subscribe-note).** Classic = unsigned
map. State = classified ladders. Orderflow = the three time series
(`gexoflow`, `cvroflow`, `dexoflow`) and their alerts. Quant = API/WS.
Research = separate key. Official dollars were JS-rendered and are
**not measured** here.

---

## What the next chat should not do

- Do not invert the dealer hedge (short gamma chases; long gamma fades).
- Do not invent Gexbot terms that are not in §Part A.
- Do not write entries/stops from SpotGamma/MenthorQ names.
- Do not fold Gexbot residual into an esnqfeed volume claim.
- Do not treat Part B as locked doctrine.
