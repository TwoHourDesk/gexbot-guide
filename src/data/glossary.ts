import type {GlossaryEntry} from './types';

export const glossary: GlossaryEntry[] = [
  {
    id: 'call',
    headword: 'call',
    shortDef:
      'A contract that gives the owner the right, not the obligation, to buy the underlying at the strike before or at expiry.',
    firstDefinedIn: 'plans/02-classic',
    seeAlso: ['put', 'strike', 'premium'],
    kind: 'options',
    neededForPlan: 'Classic',
  },
  {
    id: 'put',
    headword: 'put',
    shortDef:
      'A contract that gives the owner the right, not the obligation, to sell the underlying at the strike before or at expiry.',
    firstDefinedIn: 'plans/02-classic',
    seeAlso: ['call', 'strike'],
    kind: 'options',
    neededForPlan: 'Classic',
  },
  {
    id: 'strike',
    headword: 'strike',
    aliases: ['strike price'],
    shortDef:
      'The index or stock level written on the contract — the shelf on a Gexbot ladder.',
    firstDefinedIn: 'plans/02-classic',
    kind: 'options',
    neededForPlan: 'Classic',
  },
  {
    id: 'expiry',
    headword: 'expiry',
    aliases: ['expiration'],
    shortDef: 'The date and time the contract stops existing.',
    firstDefinedIn: 'plans/02-classic',
    seeAlso: ['zero-dte', 'latest', 'next', 'full'],
    kind: 'options',
    neededForPlan: 'Classic',
  },
  {
    id: 'zero-dte',
    headword: '0DTE',
    aliases: ['zero DTE', 'zero expiry'],
    shortDef: 'An option that expires today. It owns most of the gamma Gexbot shows.',
    firstDefinedIn: 'plans/02-classic',
    seeAlso: ['gamma', 'latest'],
    kind: 'options',
    neededForPlan: 'Classic',
  },
  {
    id: 'premium',
    headword: 'premium',
    shortDef:
      'The price of the contract. The buyer pays it; the seller collects it. Size in premium is not size in risk.',
    firstDefinedIn: 'plans/02-classic',
    seeAlso: ['convexity'],
    kind: 'options',
    neededForPlan: 'Classic',
  },
  {
    id: 'atm',
    headword: 'ATM',
    aliases: ['at the money', 'at-the-money'],
    shortDef: 'A strike near spot. Gamma and the 0DTE delta cliff live here.',
    firstDefinedIn: 'plans/02-classic',
    seeAlso: ['itm', 'otm', 'gamma'],
    kind: 'options',
    neededForPlan: 'Classic',
  },
  {
    id: 'itm',
    headword: 'ITM',
    aliases: ['in the money'],
    shortDef:
      'A call with strike below spot, or a put with strike above spot. High |delta|, low gamma.',
    firstDefinedIn: 'plans/02-classic',
    kind: 'options',
    neededForPlan: 'Classic',
  },
  {
    id: 'otm',
    headword: 'OTM',
    aliases: ['out of the money'],
    shortDef:
      'A call with strike above spot, or a put with strike below spot. Low |delta|, low gamma until spot walks over.',
    firstDefinedIn: 'plans/02-classic',
    kind: 'options',
    neededForPlan: 'Classic',
  },
  {
    id: 'gamma',
    headword: 'gamma',
    aliases: ['Γ', 'long gamma', 'short gamma'],
    shortDef:
      'How fast delta changes when the index moves one point — the slope of delta’s S-curve, a hill that peaks at the money. Long calls and long puts are long gamma; short calls and short puts are short gamma. Gamma has no up or down.',
    longDef:
      'Gamma peaks ATM and explodes as DTE goes to zero. That is why 0DTE prints dominate every Gexbot tape. High gamma means the hedge ratio is unstable. The hill is a model output, not a tape print.',
    firstDefinedIn: 'plans/02-classic',
    alsoAppears: ['plans/03-classification', 'plans/04-state'],
    seeAlso: ['delta', 'black-scholes', 'convexity', 'gex-by-volume'],
    kind: 'options',
    neededForPlan: 'Classic',
  },
  {
    id: 'open-interest',
    headword: 'open interest',
    aliases: ['OI'],
    shortDef:
      'Contracts still open after the last official snapshot. Classic OI GEX is last night’s inventory map.',
    firstDefinedIn: 'plans/01-what-gexbot-is',
    alsoAppears: ['plans/02-classic'],
    seeAlso: ['gex-by-oi', 'volume'],
    kind: 'options',
    neededForPlan: 'Classic',
  },
  {
    id: 'volume',
    headword: 'volume',
    shortDef:
      'Contracts that traded. Classic volume GEX is today’s footprints, still unsigned for owner.',
    firstDefinedIn: 'plans/01-what-gexbot-is',
    alsoAppears: ['plans/02-classic'],
    seeAlso: ['gex-by-volume', 'residual'],
    kind: 'options',
    neededForPlan: 'Classic',
  },
  {
    id: 'bid',
    headword: 'bid',
    shortDef: 'The price a resting buyer will pay. Hitting the bid is a sell.',
    firstDefinedIn: 'plans/03-classification',
    alsoAppears: ['layer/06-nq-es-layer'],
    seeAlso: ['ask', 'aggressor'],
    kind: 'options',
    neededForPlan: 'Classification',
  },
  {
    id: 'ask',
    headword: 'ask',
    aliases: ['offer'],
    shortDef: 'The price a resting seller will take. Lifting the offer is a buy.',
    firstDefinedIn: 'plans/03-classification',
    alsoAppears: ['layer/06-nq-es-layer'],
    seeAlso: ['bid', 'aggressor'],
    kind: 'options',
    neededForPlan: 'Classification',
  },
  {
    id: 'long-option',
    headword: 'long option',
    aliases: ['bought the option'],
    shortDef:
      'Paid premium for a call or a put. Long gamma. Wants a larger move than priced.',
    firstDefinedIn: 'plans/03-classification',
    seeAlso: ['short-option', 'convexity'],
    kind: 'options',
    neededForPlan: 'Classification',
  },
  {
    id: 'short-option',
    headword: 'short option',
    aliases: ['sold the option'],
    shortDef:
      'Collected premium on a call or a put. Short gamma. Wants a smaller move than priced.',
    firstDefinedIn: 'plans/03-classification',
    seeAlso: ['long-option', 'convexity'],
    kind: 'options',
    neededForPlan: 'Classification',
  },
  {
    id: 'delta',
    headword: 'delta',
    aliases: ['Δ', 'how stock-like'],
    shortDef:
      'How much the option’s value moves if the index moves one point — the slope of the live price. A call traces an S from 0 to 1 and sits near 0.50 at the money; a put traces 0 to −1. A model number, not a tape print.',
    firstDefinedIn: 'plans/02-classic',
    alsoAppears: ['plans/03-classification', 'plans/04-state', 'plans/05-orderflow'],
    seeAlso: ['gamma', 'black-scholes'],
    kind: 'options',
    neededForPlan: 'Classic',
  },
  {
    id: 'black-scholes',
    headword: 'Black–Scholes',
    aliases: ['Black-Scholes', 'Black–Scholes–Merton', 'BSM', 'schoolbook model'],
    shortDef:
      'The schoolbook formula for the price of a call or put from the index, the strike, time left, and a single volatility. Delta is its first derivative with respect to the index; gamma is the second. Not Gexbot’s recipe — Gexbot’s model is not stated.',
    firstDefinedIn: 'plans/02-classic',
    alsoAppears: ['practice/11-further-learning', 'practice/12-futures-to-options'],
    seeAlso: ['delta', 'gamma', 'greek-source'],
    kind: 'options',
    neededForPlan: 'Classic',
  },
  {
    id: 'share-equivalent',
    headword: 'share-equivalent',
    aliases: ['delta equivalent'],
    shortDef:
      'Delta × size × multiplier. That is what a dealer hedges in ES, NQ, or SPY.',
    firstDefinedIn: 'plans/03-classification',
    alsoAppears: ['plans/04-state', 'layer/06-nq-es-layer'],
    seeAlso: ['delta', 'dex-ladder'],
    kind: 'options',
    neededForPlan: 'Classification',
  },
  {
    id: 'vega',
    headword: 'vega',
    shortDef:
      'How much the option’s value moves if implied volatility moves one point. Gexbot has no standalone vega orderflow on the retail docs.',
    firstDefinedIn: 'layer/07-clocks-and-late-greeks',
    seeAlso: ['vanna', 'implied-vol'],
    kind: 'options',
    neededForPlan: 'Clocks',
  },
  {
    id: 'vanna',
    headword: 'vanna',
    aliases: ['−vanna'],
    shortDef:
      'How delta changes when implied vol changes. Gexbot plots −vanna as the dollar delta impact of a total vol collapse on today’s residual.',
    firstDefinedIn: 'layer/07-clocks-and-late-greeks',
    seeAlso: ['charm', 'minus-vanna-ladder'],
    kind: 'options',
    neededForPlan: 'Clocks',
  },
  {
    id: 'charm',
    headword: 'charm',
    shortDef:
      'How delta changes as calendar time passes, spot held fixed. Gexbot’s charm is dollar delta impact per hour on today’s residual.',
    firstDefinedIn: 'layer/07-clocks-and-late-greeks',
    seeAlso: ['vanna', 'charm-ladder'],
    kind: 'options',
    neededForPlan: 'Clocks',
  },
  {
    id: 'implied-vol',
    headword: 'implied volatility',
    aliases: ['IV'],
    shortDef:
      'The vol the option price is quoting. Falling vs rising IV flips Gexbot’s OP wall/fuel folklore.',
    firstDefinedIn: 'plans/04-state',
    kind: 'options',
    neededForPlan: 'State',
  },
  {
    id: 'gex',
    headword: 'GEX',
    aliases: ['gamma exposure'],
    shortDef:
      'Gamma exposure: a picture of how much extra buying or selling in the index might be forced when price moves, because of options. Stacked by strike.',
    firstDefinedIn: 'plans/01-what-gexbot-is',
    alsoAppears: ['plans/02-classic'],
    seeAlso: ['gamma', 'classic'],
    kind: 'gexbot',
  },
  {
    id: 'unsigned',
    headword: 'unsigned',
    shortDef:
      'A GEX picture that shows where the exposure sits, but not who is long or short the options. You see the pile, not the owner.',
    firstDefinedIn: 'plans/01-what-gexbot-is',
    alsoAppears: ['plans/02-classic'],
    seeAlso: ['classic', 'gex'],
    kind: 'gexbot',
  },
  {
    id: 'classic',
    headword: 'Classic',
    shortDef:
      'Gexbot’s first screen: a map of gamma exposure from last night’s leftover contracts (open interest) and from today’s trading (volume). It does not say who owns the options.',
    firstDefinedIn: 'plans/01-what-gexbot-is',
    alsoAppears: ['plans/02-classic'],
    seeAlso: ['state', 'gex-by-oi', 'gex-by-volume'],
    kind: 'plan',
    pressure: 'unknown',
    actor: 'Unknown owner',
    notShown: 'Who is long or short the gamma',
  },
  {
    id: 'state',
    headword: 'State',
    shortDef:
      'Gexbot screen that draws leftover option trades so far today after labeling each trade as customer bought or customer sold. Chapter 4 names the drawings.',
    firstDefinedIn: 'plans/01-what-gexbot-is',
    alsoAppears: ['plans/04-state'],
    seeAlso: ['classification-engine', 'options-profile', 'dex-ladder'],
    kind: 'plan',
  },
  {
    id: 'orderflow-plan',
    headword: 'Orderflow',
    aliases: ['orderflow plan'],
    shortDef:
      'Gexbot screen that plots the same leftover trades as a tape over time: what just changed, and the running score for the day. Chapter 5 names the meters.',
    firstDefinedIn: 'plans/01-what-gexbot-is',
    alsoAppears: ['plans/05-orderflow'],
    kind: 'plan',
  },
  {
    id: 'quant',
    headword: 'Quant',
    shortDef:
      'A way to pull Gexbot numbers into your own tools (live feed during U.S. cash hours). This book does not teach you to build on it.',
    firstDefinedIn: 'plans/01-what-gexbot-is',
    kind: 'plan',
  },
  {
    id: 'research',
    headword: 'Research',
    aliases: ['gbR'],
    shortDef:
      'A separate Gexbot product for many individual tickers. It is not the leftover-trade engine this book teaches. Not this course.',
    firstDefinedIn: 'plans/01-what-gexbot-is',
    kind: 'plan',
  },
  {
    id: 'classification-engine',
    headword: 'classification engine',
    shortDef:
      'Millisecond aggressor label: customer long (bought the option) or customer short (sold the option). Powers State, Orderflow, and Quant. Classic does not use it.',
    firstDefinedIn: 'plans/03-classification',
    alsoAppears: ['plans/01-what-gexbot-is'],
    unit: 'Sign on a print: +1 buy, −1 sell',
    notCounted: 'OCC ownership; open vs close; who the counterparty is',
    nearestCousin: 'Premium / sweep flow tools that tag buy/sell',
    distinguishingCut:
      'The sign is customer paper, greek-weighted later; it is not a position from the OI file.',
    importMistake: 'Reading “customer long” as “they put on a new long.”',
    pressure: 'mandate',
    actor: 'Customer crossed; dealer often absorbs',
    trigger: 'The print',
    hedgeVenue: 'Underlying after absorb',
    notShown: 'Open vs close; two-customer crosses cancel',
    kind: 'gexbot',
    seeAlso: ['aggressor', 'residual', 'customer-long'],
  },
  {
    id: 'aggressor',
    headword: 'aggressor',
    shortDef:
      'The side that crossed the spread — lifted the offer or hit the bid. Gexbot labels that side customer long or customer short.',
    firstDefinedIn: 'plans/03-classification',
    alsoAppears: ['layer/06-nq-es-layer'],
    unit: 'Trade sign',
    notCounted: 'Resting inventory; overnight OI',
    nearestCousin: 'Futures aggressor / uptick tape',
    distinguishingCut: 'This is an options print sign, not CME volume.',
    importMistake: 'Folding Gexbot residual into an ES/NQ volume claim.',
    kind: 'gexbot',
    neededForPlan: 'Classification',
    seeAlso: ['classification-engine', 'customer-long'],
  },
  {
    id: 'customer-long',
    headword: 'customer long',
    shortDef:
      'Gexbot’s label for an aggressive buy of the option. Buying to close a short looks the same.',
    firstDefinedIn: 'plans/03-classification',
    alsoAppears: ['layer/06-nq-es-layer'],
    unit: 'Signed leftover after residual',
    notCounted: 'Intent to open vs close',
    nearestCousin: '“They bought calls” on a flow tape',
    distinguishingCut: 'No open/close split. Documented limit.',
    importMistake: 'Writing “they put on longs” from a buy bar alone.',
    kind: 'gexbot',
    seeAlso: ['customer-short', 'open-vs-close'],
  },
  {
    id: 'customer-short',
    headword: 'customer short',
    shortDef:
      'Gexbot’s label for an aggressive sell of the option. Selling to close a long looks the same.',
    firstDefinedIn: 'plans/03-classification',
    alsoAppears: ['layer/06-nq-es-layer'],
    kind: 'gexbot',
    seeAlso: ['customer-long', 'open-vs-close'],
  },
  {
    id: 'residual',
    headword: 'residual imbalance',
    aliases: ['residual', 'classified residual'],
    shortDef:
      'After same-contract customer buys and sells net out, only the leftover remains. The chart is the needle, not the tape width.',
    firstDefinedIn: 'plans/03-classification',
    alsoAppears: ['layer/06-nq-es-layer'],
    unit: 'Σ signed prints of the same contract',
    notCounted: 'Two-way volume that cancelled; percent of total OI (not stated)',
    nearestCousin: 'Raw options volume histograms',
    distinguishingCut:
      'OP, GEX profile, DEX/convexity, and all orderflow series are residual-based.',
    importMistake: 'Reading a quiet ladder as “nothing traded.”',
    pressure: 'none',
    actor: 'Nobody, if residual is zero',
    trigger: '—',
    notShown: 'The cancelled middle — just intermediation',
    kind: 'gexbot',
    seeAlso: ['classification-engine', 'none-pressure'],
  },
  {
    id: 'open-vs-close',
    headword: 'open vs close (Gexbot limit)',
    aliases: ['open vs close', 'open-versus-close', 'open-versus-close limit'],
    shortDef:
      'Opening a long and closing a short are both buys. Gexbot does not distinguish. Documented limit.',
    firstDefinedIn: 'plans/03-classification',
    unit: 'Trade sign only',
    notCounted: 'Δ inventory versus yesterday’s OI',
    nearestCousin: 'Flow tools that tag open/close',
    distinguishingCut: 'Hedge inference can survive; intent inference cannot.',
    importMistake: 'Treating every +DEX spike as a fresh directional bet.',
    kind: 'gexbot',
  },
  {
    id: 'two-books',
    headword: 'two books',
    aliases: ['customer channel'],
    shortDef:
      'Two ledgers move together. Customer book: I just bought or sold paper. Dealer book: I absorbed that paper and may hedge. Gexbot reports the customer sign.',
    firstDefinedIn: 'plans/03-classification',
    alsoAppears: ['practice/08-heuristics-as-reading'],
    unit: 'Customer-signed residual',
    notCounted: 'A plotted dealer inventory file',
    nearestCousin: 'Textbook dealer-only gamma maps',
    distinguishingCut:
      'Docs treat a dealer-only map as half the picture; the customer channel is the other half.',
    importMistake: 'Reading every bar as “dealers will now do X” with no customer side.',
    kind: 'gexbot',
  },
  {
    id: 'gex-by-oi',
    headword: 'GEX by OI',
    shortDef:
      'Gamma × open interest at the strike, call netted against put. Overnight inventory map, unsigned.',
    firstDefinedIn: 'plans/02-classic',
    unit: 'Gamma × OI, call minus put',
    notCounted: 'Today’s aggressor; owner sign',
    nearestCousin: 'Unsigned public GEX maps',
    distinguishingCut: 'This is Classic. State replaces it with classified imbalance.',
    importMistake: 'Treating OI GEX as “what just traded.”',
    pressure: 'unknown',
    actor: 'Unknown owner',
    trigger: 'Spot moving through the region',
    hedgeVenue: 'ES / SPY / index futures',
    notShown: 'Owner sign; hedges already on; today’s trades',
    kind: 'gexbot',
    seeAlso: ['gex-by-volume', 'classic'],
  },
  {
    id: 'gex-by-volume',
    headword: 'GEX by volume',
    shortDef:
      'Gamma × today’s volume at the strike, call netted against put. Classic uses this for zero gamma, majors, and max-change.',
    firstDefinedIn: 'plans/02-classic',
    unit: 'Gamma × volume, call minus put',
    notCounted: 'Customer long vs short',
    nearestCousin: 'Intraday unsigned GEX heatmaps',
    distinguishingCut: 'Closer to “where curvature changed hands” than OI, still unsigned.',
    importMistake: 'Calling Classic “orderflow.”',
    pressure: 'unknown',
    actor: 'Unknown',
    trigger: 'Spot moves',
    notShown: 'Who bought or sold',
    kind: 'gexbot',
  },
  {
    id: 'call-put-netting',
    headword: 'call vs put netting',
    shortDef:
      'At each strike, call GEX minus put GEX. Right = call-dominated, left = put-dominated. Equal huge books net toward zero.',
    firstDefinedIn: 'plans/02-classic',
    unit: 'Net GEX at a strike',
    notCounted: 'How many people are pulling; owner',
    nearestCousin: 'Call wall / put wall language',
    distinguishingCut: 'Classic cannot prove who owns the wall.',
    importMistake: '“Green bar = bullish.”',
    pressure: 'unknown',
    kind: 'gexbot',
  },
  {
    id: 'zero-gamma',
    headword: 'zero gamma',
    aliases: ['fulcrum'],
    shortDef:
      'The weighted center of the Classic volume-GEX complex. Not necessarily a traded strike.',
    firstDefinedIn: 'plans/02-classic',
    unit: 'Spot level (weighted center)',
    notCounted: 'A wall; 0DTE-only fulcrum if you used the full book',
    nearestCousin: '“Zero gamma flip” on unsigned GEX maps',
    distinguishingCut:
      'Classic cannot prove the usual short-gamma-below / long-gamma-above shortcut.',
    importMistake: 'Using full-book zero gamma as a 0DTE scalp line.',
    pressure: 'unknown',
    kind: 'gexbot',
  },
  {
    id: 'major-pos-neg',
    headword: 'major positive / major negative',
    aliases: ['major pos', 'major neg', 'major positive', 'major negative'],
    shortDef:
      'The strike where Classic volume-GEX (or OI-GEX) has the largest positive or largest negative bar.',
    firstDefinedIn: 'plans/02-classic',
    alsoAppears: ['practice/08-heuristics-as-reading'],
    unit: 'Argmax / argmin of unsigned GEX',
    notCounted: 'Owner; whether the node pins or breaks',
    nearestCousin: 'Magnet / wall candidates on public GEX maps',
    distinguishingCut: 'State replaces these with major call/put and major long/short.',
    importMistake: 'Always fading the major.',
    pressure: 'unknown',
    kind: 'gexbot',
  },
  {
    id: 'max-change',
    headword: 'max-change strikes',
    aliases: ['max change', 'max-change'],
    shortDef:
      'The strikes whose Classic GEX changed the most over 1 / 5 / 15 / 30 minutes. Location of fresh curvature, not a direction. H10 pairs it with State to name the owner; alone it is not a read.',
    firstDefinedIn: 'plans/02-classic',
    alsoAppears: ['practice/08-heuristics-as-reading', 'practice/09-grammar-and-journal'],
    seeAlso: ['h10', 'lookbacks', 'unsigned'],
    unit: 'ΔGEX over the lookback',
    notCounted: 'Direction; owner',
    nearestCousin: '“Hot strike” heatmaps',
    distinguishingCut: 'Still unsigned in Classic.',
    importMistake: 'Trading every max-change as a reversal.',
    pressure: 'unknown',
    kind: 'gexbot',
  },
  {
    id: 'lookbacks',
    headword: 'lookbacks and history slider',
    aliases: ['lookback dots', 'lookback slider', 'history slider'],
    shortDef:
      'Dots show GEX at earlier times today. The slider replays the day. Useful to see whether a wall built or bled.',
    firstDefinedIn: 'plans/02-classic',
    alsoAppears: ['practice/08-heuristics-as-reading'],
    unit: 'Earlier snapshot of the same ladder',
    notCounted: 'A forecast',
    nearestCousin: 'Session replay on other GEX products',
    distinguishingCut: 'Retail replay: last 90 calendar days.',
    importMistake: 'Reading a lookback dot as a future target.',
    kind: 'gexbot',
  },
  {
    id: 'options-profile',
    headword: 'options profile',
    aliases: ['OP'],
    shortDef:
      'Per-strike, per-right, customer long vs customer short residual so far today. Latest and next only.',
    firstDefinedIn: 'plans/04-state',
    unit: 'Leftover contracts, long right / short left',
    notCounted: 'Open vs close; 90-day OP (there is none)',
    nearestCousin: 'Open-interest profiles',
    distinguishingCut: 'Classified residual, not OI. Puts default purple, calls orange.',
    importMistake: '“Long bar = support.” In rising vol that long can be fuel.',
    pressure: 'incentive',
    actor: 'Customer (incentive); dealer on the mirror (mandate)',
    trigger: 'Approach to the strike; vol regime',
    hedgeVenue: 'Options + underlying',
    notShown: 'Open vs close; prior-day dealer inventory',
    kind: 'gexbot',
  },
  {
    id: 'gex-profile',
    headword: 'GEX profile',
    shortDef:
      'Residual, then net imbalanced calls against imbalanced puts. Call-GEX imbalance right, put-GEX imbalance left.',
    firstDefinedIn: 'plans/04-state',
    unit: 'Call-minus-put leftover gamma',
    notCounted: 'Bought vs sold (that is convexity)',
    nearestCousin: 'Classic call/put histogram',
    distinguishingCut: 'Classified imbalance, not raw OI/volume.',
    importMistake: 'Treating GEX profile as convexity.',
    pressure: 'mandate',
    actor: 'Which wing forces the re-hedge',
    trigger: 'Spot direction',
    notShown: 'Bought vs sold',
    kind: 'gexbot',
  },
  {
    id: 'dex-ladder',
    headword: 'DEX ladder',
    shortDef:
      'Residual delta at each strike. Customer long calls and short puts → +DEX. Customer short calls and long puts → −DEX.',
    firstDefinedIn: 'plans/04-state',
    unit: 'Share-equivalent leftover',
    notCounted: 'Pending buying; whether they bought calls or sold puts without convexity',
    nearestCousin: 'A depth ladder / synthetic order book',
    distinguishingCut:
      'DEX records a lean. The initial delta hedge is mostly already done.',
    importMistake: '+DEX as “they bought calls,” or as buying still to come.',
    pressure: 'mandate',
    actor: 'Dealer initial delta hedge — mostly already done',
    trigger: '— (record)',
    hedgeVenue: 'ES / NQ / SPY',
    notShown: 'Customer self-hedge; hedge timing',
    kind: 'gexbot',
    seeAlso: ['dex-orderflow', 'already-hedged-vs-pending'],
  },
  {
    id: 'convexity-ladder',
    headword: 'convexity ladder',
    shortDef:
      'Residual gamma signed long option minus short option. Long calls and long puts → +convexity. Short calls and short puts → −convexity.',
    firstDefinedIn: 'plans/04-state',
    unit: 'Leftover gamma, paid minus collected',
    notCounted: 'Up / down',
    nearestCousin: 'A “GEX ladder” that only means call vs put',
    distinguishingCut:
      'They named it convexity to stress vol ownership, not direction.',
    importMistake: 'Reading convexity as bullish or bearish.',
    pressure: 'mandate',
    actor: 'Dealer mirror gamma — pending, path-conditional; customer incentivized',
    trigger: 'Spot path',
    hedgeVenue: 'ES / NQ',
    notShown: 'Hedge bands; fraction already hedged',
    kind: 'gexbot',
  },
  {
    id: 'major-call-put',
    headword: 'major call / major put',
    aliases: ['major call', 'major put'],
    shortDef:
      'State alerts: the classified call-sided or put-sided node of greatest magnitude. Not Classic major pos/neg.',
    firstDefinedIn: 'plans/04-state',
    alsoAppears: ['practice/08-heuristics-as-reading'],
    kind: 'gexbot',
    seeAlso: ['gex-profile', 'major-pos-neg', 'alert'],
  },
  {
    id: 'major-long-short',
    headword: 'major long / major short',
    aliases: ['major long', 'major short'],
    shortDef:
      'State alerts: the largest customer-long or customer-short gamma node on the convexity ladder.',
    firstDefinedIn: 'plans/04-state',
    alsoAppears: ['practice/08-heuristics-as-reading'],
    kind: 'gexbot',
    seeAlso: ['convexity-ladder', 'alert'],
  },
  {
    id: 'dex-orderflow',
    headword: 'DEX orderflow',
    aliases: ['dexoflow', 'DEX OF', 'plus-DEX', 'minus-DEX', 'DEX-orderflow'],
    shortDef:
      'Increment of residual delta. +DEX: customers just got longer (share-equivalent). −DEX: just got shorter.',
    firstDefinedIn: 'plans/05-orderflow',
    unit: 'Bullish volume × Δ minus bearish volume × Δ',
    notCounted: 'Gamma; “they bought calls” without convexity',
    nearestCousin: 'A futures tape printed in options deltas',
    distinguishingCut: 'Paper positioning, not CME aggressor lots.',
    importMistake: '+DEX = long calls. Pair convexity.',
    pressure: 'mandate',
    actor: 'Dealer absorbs now',
    trigger: 'The print',
    hedgeVenue: 'ES / NQ / SPY',
    notShown: 'Open vs close; counterparty',
    kind: 'gexbot',
  },
  {
    id: 'gex-orderflow',
    headword: 'GEX orderflow',
    aliases: ['gexoflow', 'GEX OF', 'GEX-orderflow'],
    shortDef:
      'Increment of call-GEX imbalance minus put-GEX imbalance. Bar up = more call-sided leftover, not a buy signal.',
    firstDefinedIn: 'plans/05-orderflow',
    unit: 'Change in call-minus-put residual gamma',
    notCounted: 'Direction; paid vs collected',
    nearestCousin: '“Bullish gamma” tweets',
    distinguishingCut:
      'On SPX, docs folklore often reads +GEX OF as call selling = local-top candidate.',
    importMistake: 'Trading +GEX OF as bullish gamma.',
    pressure: 'mandate',
    actor: 'Which wing just got heavier',
    trigger: 'The print',
    kind: 'gexbot',
  },
  {
    id: 'convexity-orderflow',
    headword: 'convexity orderflow',
    aliases: ['cvroflow', 'convexity OF'],
    shortDef:
      'Increment of long OF × Γ minus short OF × Γ. + is leftover option buying; − is leftover option selling.',
    firstDefinedIn: 'plans/05-orderflow',
    unit: 'Gamma-weighted leftover buy vs sell',
    notCounted: 'Price direction',
    nearestCousin: 'A vol bid/offer tape',
    distinguishingCut: 'Cross-read with DEX OF to recover the 2×2 without the ladder.',
    importMistake: '+convexity as “market down.”',
    pressure: 'mandate',
    kind: 'gexbot',
  },
  {
    id: 'two-by-two',
    headword: '2×2',
    aliases: ['two by two'],
    shortDef:
      'DEX sign × convexity sign names the print: long call, short put, long put, short call. Same +DEX, opposite story.',
    firstDefinedIn: 'plans/05-orderflow',
    unit: 'Cell of a print',
    notCounted: 'A trade recommendation',
    nearestCousin: 'Flow tags that only say call buy / put buy',
    distinguishingCut: 'Convexity exists so +DEX is not one story.',
    importMistake: 'Acting on DEX alone.',
    kind: 'gexbot',
  },
  {
    id: 'ladder-increment-net',
    headword: 'ladder vs increment vs net',
    shortDef:
      'Ladder = today’s stock by strike. Orderflow bar = what just changed. Net_* = running integral so far today.',
    firstDefinedIn: 'plans/05-orderflow',
    unit: 'Stock / increment / integral of the same residual',
    notCounted: 'Anything before the cash open on State/OF',
    nearestCousin: 'DOM vs tape vs cumulative delta',
    distinguishingCut: 'All three are residual, not CME.',
    importMistake: 'Using 15:50 net GEX to explain a 09:35 fill (labeling leak).',
    kind: 'gexbot',
  },
  {
    id: 'spike-sequence-noise',
    headword: 'spike vs sequence vs noise',
    aliases: ['two-sided noise', 'sequence'],
    shortDef:
      'One large bar = event. Many small same-sign bars = regime. Alternating tiny bars = two-way cancel, ignore.',
    firstDefinedIn: 'plans/05-orderflow',
    alsoAppears: ['practice/08-heuristics-as-reading'],
    kind: 'gexbot',
    pressure: 'none',
  },
  {
    id: 'latest',
    headword: 'latest / zero',
    aliases: ['gex_zero', 'latest expiry', 'zero', 'latest'],
    shortDef: 'Nearest expiry. Intraday ES/NQ “GEX walls” that matter for the open are usually latest.',
    firstDefinedIn: 'layer/06-nq-es-layer',
    alsoAppears: ['practice/08-heuristics-as-reading'],
    kind: 'gexbot',
    seeAlso: ['next', 'full', 'zero-dte', 'expiry-group'],
  },
  {
    id: 'next',
    headword: 'next / one',
    aliases: ['gex_one', 'one_dexoflow', 'one', 'next expiry', 'next'],
    shortDef: 'The following expiry. Use when latest is dead or you are studying the roll.',
    firstDefinedIn: 'layer/06-nq-es-layer',
    alsoAppears: ['practice/08-heuristics-as-reading'],
    kind: 'gexbot',
    seeAlso: ['latest', 'full', 'roll', 'expiry-group'],
  },
  {
    id: 'full',
    headword: 'full (90d)',
    aliases: ['gex_full', 'full-book', 'full book', 'full'],
    shortDef:
      'Classified or Classic leftover across expiries within about ninety days. Overnight context, not the picture you sit beside an NQ open.',
    firstDefinedIn: 'layer/06-nq-es-layer',
    alsoAppears: ['practice/08-heuristics-as-reading'],
    kind: 'gexbot',
    seeAlso: ['latest', 'next', 'expiry-group'],
  },
  {
    id: 'expiry-group',
    headword: 'expiry group',
    aliases: ['expiry groups'],
    shortDef:
      'Which leftover pile you are sitting: latest (nearest expiry), next (the following expiry), or full (about ninety days). H11 makes the choice explicit. Mixing groups inside one sentence names two objects.',
    firstDefinedIn: 'layer/06-nq-es-layer',
    alsoAppears: ['practice/08-heuristics-as-reading'],
    seeAlso: ['latest', 'next', 'full', 'roll', 'h11'],
    kind: 'gexbot',
  },
  {
    id: 'es-spx',
    headword: 'ES_SPX',
    aliases: ['ES on Gexbot'],
    shortDef:
      'Leftover SPX options stretched onto ES by a multiplier. Not CME volume. The hedge may land in ES; the print did not happen there.',
    firstDefinedIn: 'layer/06-nq-es-layer',
    unit: 'Converted index-option leftover',
    notCounted: 'CME ES lots; pit/electronic aggressor',
    nearestCousin: 'Futures-native gamma products',
    distinguishingCut: 'Multiplier conversion of leftover SPX options.',
    importMistake: 'Folding these prints into an esnqfeed volume claim.',
    pressure: 'mandate',
    actor: 'Dealer on the SPX leftover (inferred)',
    trigger: 'The SPX print; then the SPX path',
    hedgeVenue: 'ES (inferred, most likely)',
    liquidityRole: 'Inferred. Never a labeled ES print.',
    notShown: 'The hedge itself; SPY leftover; customer self-hedge',
    kind: 'gexbot',
  },
  {
    id: 'nq-ndx',
    headword: 'NQ_NDX',
    aliases: ['NQ on Gexbot'],
    shortDef:
      'Leftover NDX options, weighted on NDX, stretched onto NQ by the $100-to-$20 multiplier (1 ATM NDX ≈ 2.5 NQ). Not CME volume. Not leftover QQQ. NDX is thinner than SPX (inferred).',
    firstDefinedIn: 'layer/06-nq-es-layer',
    unit: 'Converted index-option leftover',
    notCounted: 'CME NQ lots; QQQ leftover',
    nearestCousin: 'Futures-native NQ gamma',
    distinguishingCut: 'Multiplier conversion of leftover NDX options.',
    importMistake: 'Copying SPX “+GEX OF = local top” folklore onto NQ without renaming the claim.',
    pressure: 'mandate',
    actor: 'Dealer on the NDX leftover (inferred)',
    trigger: 'The NDX print; then the NDX path',
    hedgeVenue: 'NQ (inferred, most likely)',
    liquidityRole: 'Inferred. Never a labeled NQ print.',
    notShown: 'The hedge itself; QQQ or stock-basket hedges; customer self-hedge',
    kind: 'gexbot',
  },
  {
    id: 'minus-vanna-ladder',
    headword: '−vanna ladder',
    aliases: ['minus vanna', 'minus-vanna', 'zvanna', 'ovanna'],
    shortDef:
      'Dollar delta impact of a vol collapse until expiry, from today’s classified residual only. Beta.',
    firstDefinedIn: 'layer/07-clocks-and-late-greeks',
    alsoAppears: ['practice/08-heuristics-as-reading'],
    unit: 'Dollar delta of a total vol collapse',
    notCounted: 'The full dealer OI vault',
    nearestCousin: 'Full-book vanna/charm pinning literature',
    distinguishingCut: 'Applied to today’s leftover tickets, not overnight inventory.',
    importMistake: 'Using a morning −vanna bar as a daytime directional signal.',
    pressure: 'mandate',
    actor: 'Dealer',
    trigger: 'Time; vol collapse',
    hedgeVenue: 'ES',
    notShown: 'Full OI book; $800MM/$1000MM notes are folklore',
    kind: 'gexbot',
  },
  {
    id: 'charm-ladder',
    headword: 'charm ladder',
    aliases: ['zcharm', 'ocharm'],
    shortDef:
      'Dollar delta impact per hour of time, from today’s residual. Beta. Last 30–60 minutes are a different market.',
    firstDefinedIn: 'layer/07-clocks-and-late-greeks',
    alsoAppears: ['practice/08-heuristics-as-reading'],
    unit: '$MM / hour',
    notCounted: 'A morning setup',
    nearestCousin: 'Full-book charm pinning',
    distinguishingCut: 'Residual-only, same caveat as −vanna.',
    importMistake: 'Treating charm as a morning setup.',
    pressure: 'mandate',
    kind: 'gexbot',
  },
  {
    id: 'labeling-leak',
    headword: 'labeling leak',
    aliases: ['LABELING_LEAK'],
    shortDef:
      'A ladder, major, or net is only knowable at the clock it was last updated — not at the open of the bar that produced it.',
    firstDefinedIn: 'intro',
    alsoAppears: ['plans/05-orderflow', 'practice/08-heuristics-as-reading', 'practice/10-misreads-and-mastery'],
    kind: 'hygiene',
  },
  {
    id: 'folklore',
    headword: 'folklore',
    shortDef:
      'A reading taken from Gexbot’s docs (or common practice) and not independently scored here. Not measured. Not promote-ready.',
    firstDefinedIn: 'intro',
    alsoAppears: ['practice/08-heuristics-as-reading'],
    kind: 'hygiene',
  },
  {
    id: 'inferred',
    headword: 'inferred',
    shortDef:
      'A hedge, liquidity role, or stop/target you did not see on the screen. Structural logic only.',
    firstDefinedIn: 'intro',
    alsoAppears: ['practice/08-heuristics-as-reading'],
    kind: 'hygiene',
  },
  {
    id: 'not-stated',
    headword: 'not stated',
    shortDef: 'The claim is not in gexbot.com/docs or the OpenAPI sources this book uses.',
    firstDefinedIn: 'intro',
    kind: 'hygiene',
  },
  {
    id: 'docs-label',
    headword: 'docs',
    shortDef: 'The claim is written on gexbot.com/docs or the official OpenAPI notes.',
    firstDefinedIn: 'intro',
    kind: 'hygiene',
  },
  {
    id: 'market-general',
    headword: 'market-general',
    shortDef:
      'An options or futures market fact, not a Gexbot claim: multipliers, settlement, delta-neutral market-making, hedge bands.',
    firstDefinedIn: 'intro',
    kind: 'hygiene',
  },
  {
    id: 'observed',
    headword: 'observed',
    shortDef: 'A print or bar that is on a Gexbot screen.',
    firstDefinedIn: 'intro',
    kind: 'hygiene',
  },
  {
    id: 'assumed',
    headword: 'assumed',
    aliases: ['assumption'],
    shortDef: 'Ownership on an unsigned screen. “Dealers are short the OI” is an assumption.',
    firstDefinedIn: 'intro',
    kind: 'hygiene',
  },
  {
    id: 'pressure-word',
    headword: 'pressure word',
    aliases: ['pressure words'],
    shortDef:
      'The four labels this book allows for who must act: mandate, incentive, none, or unknown. A naming drill states one. If you cannot pick one, stand down.',
    firstDefinedIn: 'intro',
    alsoAppears: ['practice/08-heuristics-as-reading', 'practice/09-grammar-and-journal'],
    seeAlso: ['mandate', 'incentive', 'none-pressure', 'unknown-pressure', 'stand-down'],
    kind: 'hygiene',
  },
  {
    id: 'mandate',
    headword: 'mandate',
    shortDef:
      'A dealer book runs delta-neutral by policy. This is the only pressure the book may call forced.',
    firstDefinedIn: 'plans/03-classification',
    kind: 'hygiene',
    seeAlso: ['incentive', 'hedge-chain'],
  },
  {
    id: 'incentive',
    headword: 'incentive',
    aliases: ['incentivized'],
    shortDef:
      'The customer is not obliged to act, but theta, vol crush, margin and P&L push them. Write incentivized, never forced.',
    firstDefinedIn: 'plans/03-classification',
    alsoAppears: ['practice/08-heuristics-as-reading'],
    kind: 'hygiene',
  },
  {
    id: 'none-pressure',
    headword: 'none (pressure)',
    aliases: ['none'],
    shortDef:
      'Cancelled two-way volume. No residual → no Gexbot node → no pressure. Quiet ladder ≠ nothing traded.',
    firstDefinedIn: 'plans/03-classification',
    kind: 'hygiene',
  },
  {
    id: 'unknown-pressure',
    headword: 'unknown (pressure)',
    aliases: ['unknown'],
    shortDef:
      'Classic OI and volume bars. The location of gamma is real; the owner’s sign is not visible.',
    firstDefinedIn: 'plans/02-classic',
    alsoAppears: ['practice/10-misreads-and-mastery'],
    kind: 'hygiene',
  },
  {
    id: 'already-hedged-vs-pending',
    headword: 'already hedged vs pending',
    aliases: ['already hedged', 'pending flow'],
    shortDef:
      'DEX is a record — the initial delta hedge is mostly done. Convexity, GEX profile, and vanna/charm are pending forced flow, path- or clock-conditional.',
    firstDefinedIn: 'plans/04-state',
    alsoAppears: ['practice/08-heuristics-as-reading'],
    kind: 'hygiene',
    seeAlso: ['dex-ladder', 'convexity-ladder'],
  },
  {
    id: 'hedge-chain',
    headword: 'hedge chain',
    shortDef:
      'The six steps from an option print to the last futures trade it can force: print → absorb → initial delta hedge → gamma re-hedge → clock re-hedge → resolution. Taught in Classification; every later screen points to a link.',
    firstDefinedIn: 'plans/03-classification',
    unit: 'Six links',
    notCounted: 'The hedge print on the futures tape',
    nearestCousin: 'Textbook dealer hedging narrative',
    distinguishingCut:
      'Each link is mapped to a Gexbot screen — and to what that screen cannot show.',
    importMistake: 'Skipping to “dealers will chase” from a Classic bar.',
    alsoAppears: ['practice/08-heuristics-as-reading'],
    kind: 'gexbot',
  },
  {
    id: 'cousin-dealer-gamma',
    headword: 'textbook dealer gamma',
    aliases: ['dealer-only map'],
    shortDef:
      'Dealers short gamma chase; dealers long gamma fade. Gexbot keeps this polarity and adds the customer book.',
    firstDefinedIn: 'plans/01-what-gexbot-is',
    alsoAppears: ['practice/08-heuristics-as-reading'],
    distinguishingCut:
      'Gexbot keeps chase/fade polarity and adds a customer book. The customer channel is incentive, not mandate.',
    importMistake: 'Reading every bar as “dealers will now do X” with no customer side.',
    kind: 'cousin',
  },
  {
    id: 'cousin-unsigned-gex',
    headword: 'unsigned GEX maps',
    shortDef:
      'Public gamma-exposure maps built from leftover contracts times gamma, often with a fulcrum line and named walls, as if the owner were known. Closest Gexbot cousin is Classic.',
    firstDefinedIn: 'plans/01-what-gexbot-is',
    alsoAppears: ['plans/02-classic', 'practice/11-further-learning'],
    distinguishingCut:
      'Classic is the cousin. Pressure on Classic is unknown. State and Orderflow reject the unsigned-owner shortcut.',
    importMistake:
      'Importing named walls or a zero-gamma flip as if ownership were known.',
    kind: 'cousin',
  },
  {
    id: 'cousin-futures-native',
    headword: 'futures-native gamma products',
    shortDef:
      'Gamma computed on ES/NQ themselves, often with pre-drawn levels. Gexbot’s ES/NQ is converted index options.',
    firstDefinedIn: 'plans/01-what-gexbot-is',
    alsoAppears: ['layer/06-nq-es-layer'],
    distinguishingCut:
      'Gexbot’s ES/NQ picture is leftover index options stretched onto the futures, not gamma computed on ES or NQ themselves.',
    importMistake:
      'Pre-drawn futures levels, or treating converted walls as exchange volume.',
    kind: 'cousin',
  },
  {
    id: 'cousin-premium-flow',
    headword: 'premium / sweep flow tools',
    shortDef:
      'Debit-credit tapes, often with open/close. Gexbot is greek-weighted residual and does not split open from close.',
    firstDefinedIn: 'plans/01-what-gexbot-is',
    alsoAppears: ['plans/03-classification'],
    distinguishingCut:
      'Gexbot weights leftover by schoolbook sensitivities. It does not split open from close, and a large debit is not a large leftover.',
    importMistake: 'A large debit as a large DEX print.',
    kind: 'cousin',
  },
  {
    id: 'cousin-full-book-vanna',
    headword: 'full-book vanna/charm pinning',
    aliases: ['full-book vanna', 'full-book charm'],
    shortDef:
      'Pinning literature that uses the whole open-interest vault. Gexbot’s minus-vanna and charm ladders are beta and applied to today’s classified residual only.',
    firstDefinedIn: 'layer/07-clocks-and-late-greeks',
    alsoAppears: ['practice/08-heuristics-as-reading'],
    distinguishingCut:
      'Residual-only, last-hour family. Not a morning object. Gexbot does not show hedge-chain link 6.',
    importMistake: 'A morning minus-vanna stack as a 09:45 directional signal.',
    seeAlso: ['minus-vanna-ladder', 'charm-ladder'],
    kind: 'cousin',
  },
  {
    id: 'cousin-chart-methodology',
    headword: 'named session-level methodologies',
    aliases: ['charting methodology', 'named opening-range'],
    shortDef:
      'Session-level systems with named levels and setups. This book uses plain tape words. Gexbot nodes are converted index strikes, mapped through the basis.',
    firstDefinedIn: 'practice/09a-early-session',
    alsoAppears: ['practice/09b-structure-and-gexbot'],
    distinguishingCut:
      'Structure is observed on the futures tape. A Gexbot node is an index strike on a converted ruler. Overnight structure has no State leftover at 09:30.',
    importMistake:
      'A methodology’s named levels, targets, or setups as if they were Gexbot objects.',
    seeAlso: ['opening-range', 'structural-location', 'futures-tape-delta'],
    kind: 'cousin',
  },
  {
    id: 'cousin-public-gex-papers',
    headword: 'public GEX white papers',
    aliases: ['public GEX dashboards'],
    shortDef:
      'Papers and dashboards that compute dealer gamma from open interest under an ownership assumption. Classic is the nearest Gexbot cousin.',
    firstDefinedIn: 'practice/11-further-learning',
    distinguishingCut:
      'They assume an owner. Classic does not. State and Orderflow use classified customer residual instead.',
    importMistake:
      'Their level names, their scaling, or their sign convention as if they were Gexbot’s.',
    seeAlso: ['cousin-unsigned-gex', 'classic'],
    kind: 'cousin',
  },
  {
    id: 'cousin-strategy-courses',
    headword: 'strategy-first options courses',
    aliases: ['options courses that start from strategies'],
    shortDef:
      'Courses that open with a list of structures. This book’s ramp starts from the other side of the trade and from mechanics and risk before structures.',
    firstDefinedIn: 'practice/12-futures-to-options',
    distinguishingCut:
      'Structures come fourth, not first. A Gexbot read may choose a structure type after a thesis exists; it never supplies the thesis.',
    importMistake:
      'A strategy list as a substitute for the position sentence and the risk graph.',
    kind: 'cousin',
  },
  {
    id: 'spx-multiplier',
    headword: 'SPX multiplier',
    shortDef:
      'One SPX option is $100 per index point. 1 ATM SPX option ≈ 1 ES contract of delta (ES is $50/pt). Market-general.',
    firstDefinedIn: 'layer/06-nq-es-layer',
    kind: 'market-general',
  },
  {
    id: 'ndx-multiplier',
    headword: 'NDX multiplier',
    shortDef:
      'One NDX option is $100 per index point. 1 ATM NDX option ≈ 2.5 NQ (NQ is $20/pt). Market-general.',
    firstDefinedIn: 'layer/06-nq-es-layer',
    kind: 'market-general',
  },
  {
    id: 'quoted-scale',
    headword: 'quoted scale',
    aliases: ['price range'],
    shortDef:
      'Where the number usually sits. This book’s NDX / NQ pictures sit around 20,000. SPX / ES print in the thousands. SPY and QQQ are the same baskets at a few hundred dollars a share.',
    firstDefinedIn: 'layer/06-nq-es-layer',
    seeAlso: ['ndx', 'spx', 'qqq', 'spy', 'nq-future', 'es-future'],
    kind: 'market-general',
  },
  {
    id: 'point-value',
    headword: 'point value',
    aliases: ['dollars per point'],
    shortDef:
      'The dollars one contract pays for a one-point move. SPX and NDX options are $100. ES is $50. NQ is $20. That is why 1 ATM SPX ≈ 1 ES and 1 ATM NDX ≈ 2.5 NQ.',
    firstDefinedIn: 'layer/06-nq-es-layer',
    seeAlso: ['spx-multiplier', 'ndx-multiplier', 'es-future', 'nq-future'],
    kind: 'market-general',
  },
  {
    id: 'delta-neutral',
    headword: 'delta-neutral mandate',
    aliases: ['delta neutral'],
    shortDef:
      'A market-maker book is run near zero net delta by policy and risk limit. Market-general. The only pressure this book calls forced.',
    firstDefinedIn: 'plans/03-classification',
    kind: 'market-general',
    seeAlso: ['mandate', 'hedge-in-bands'],
  },
  {
    id: 'hedge-in-bands',
    headword: 'hedge in bands',
    shortDef:
      'Dealers hedge at their own thresholds, not tick by tick. A ladder gives direction and location, not timing or size. Market-general.',
    firstDefinedIn: 'plans/03-classification',
    kind: 'market-general',
  },
  {
    id: 'settlement',
    headword: 'settlement style',
    shortDef:
      'How the contract dies. NDX and SPX options are European and cash-settled (SPX daily expiries are PM). QQQ and SPY options are American and physically settled. Do not transfer 0DTE resolution without saying so. Market-general.',
    firstDefinedIn: 'layer/07-clocks-and-late-greeks',
    kind: 'market-general',
  },
  {
    id: 'information-layer',
    headword: 'information layer',
    shortDef:
      'A Gexbot picture you sit beside an ES or NQ chart. It does not replace the futures tape and is not a buy or sell signal.',
    firstDefinedIn: 'plans/01-what-gexbot-is',
    kind: 'hygiene',
  },
  {
    id: 'option-contract',
    headword: 'option',
    aliases: ['option contract', 'options'],
    shortDef:
      'A contract that is a right, not an obligation, to buy or sell at a chosen level by a chosen time. Chapter 2 teaches the two kinds: call and put.',
    firstDefinedIn: 'plans/01-what-gexbot-is',
    alsoAppears: ['plans/02-classic'],
    seeAlso: ['call', 'put'],
    kind: 'options',
  },
  {
    id: 'dealer',
    headword: 'dealer',
    aliases: ['market maker'],
    shortDef:
      'Shorthand for a population of professional firms who stand in the middle of the options market and usually keep their index exposure near flat. Not one desk.',
    firstDefinedIn: 'plans/03-classification',
    seeAlso: ['mandate', 'delta-neutral'],
    kind: 'market-general',
  },
  {
    id: 'customer',
    headword: 'customer',
    shortDef:
      'The aggressive side of an option trade as Gexbot labels it. Not necessarily a retail trader. Not “new long.”',
    firstDefinedIn: 'plans/03-classification',
    seeAlso: ['customer-long', 'aggressor'],
    kind: 'gexbot',
  },
  {
    id: 'hedge',
    headword: 'hedge',
    shortDef:
      'A trade in the index or futures meant to offset option risk. Gexbot never shows the hedge print itself. Inferred, never observed on the tape.',
    firstDefinedIn: 'plans/03-classification',
    alsoAppears: ['layer/06-nq-es-layer'],
    kind: 'market-general',
  },
  {
    id: 'print',
    headword: 'print',
    shortDef:
      'An option trade that crossed the spread. Hedge-chain link 1. An Orderflow bar is this moment.',
    firstDefinedIn: 'plans/03-classification',
    alsoAppears: ['plans/05-orderflow'],
    kind: 'gexbot',
  },
  {
    id: 'absorb',
    headword: 'absorb',
    shortDef:
      'The other side of the print now holds the mirror position. Often a dealer, sometimes another customer. Two customers cancel. Hedge-chain link 2.',
    firstDefinedIn: 'plans/03-classification',
    kind: 'gexbot',
  },
  {
    id: 'liquidity-role',
    headword: 'liquidity role',
    aliases: ['supply liquidity', 'take liquidity'],
    shortDef:
      'Supplying liquidity means resting and absorbing. Taking liquidity means lifting or hitting. Inferred from Gexbot, never seen as a labeled futures print.',
    firstDefinedIn: 'plans/03-classification',
    kind: 'hygiene',
  },
  {
    id: 'chase',
    headword: 'chase',
    shortDef:
      'Buy rips and sell dips. The inferred hedge of a book that is short gamma. Amplifies the move.',
    firstDefinedIn: 'plans/03-classification',
    seeAlso: ['fade', 'gamma'],
    kind: 'market-general',
  },
  {
    id: 'fade',
    headword: 'fade',
    shortDef:
      'Sell rips and buy dips. The inferred hedge of a book that is long gamma. Dampens the move; the usual “pin / calm” story.',
    firstDefinedIn: 'plans/03-classification',
    seeAlso: ['chase'],
    kind: 'market-general',
  },
  {
    id: 'pin',
    headword: 'pin',
    aliases: ['magnet'],
    shortDef:
      'Price stalling near a strike because hedges or incentives pull toward it. A hypothesis, not a fact. Last-hour pinning is a different family from a morning wall.',
    firstDefinedIn: 'plans/03-classification',
    alsoAppears: ['layer/07-clocks-and-late-greeks'],
    kind: 'hygiene',
  },
  {
    id: 'self-hedge',
    headword: 'self-hedge',
    shortDef:
      'The customer already offset their option in the futures (for example bought calls and sold ES). Two hedgers can cancel net forced flow. Gexbot cannot see this. Inferred.',
    firstDefinedIn: 'plans/03-classification',
    kind: 'hygiene',
  },
  {
    id: 'forced-flow-sentence',
    headword: 'forced-flow sentence',
    shortDef:
      'A one-line read: actor · pressure · trigger · direction · venue — or the word unknown.',
    firstDefinedIn: 'plans/03-classification',
    alsoAppears: ['practice/09-grammar-and-journal', 'practice/09b-structure-and-gexbot'],
    kind: 'hygiene',
  },
  {
    id: 'node',
    headword: 'node',
    aliases: ['stack', 'significant strike'],
    shortDef:
      'A strike where leftover (or Classic GEX) is large enough to name. A quiet ladder can mean leftover cancelled, not that nothing traded.',
    firstDefinedIn: 'plans/02-classic',
    kind: 'gexbot',
  },
  {
    id: 'theta',
    headword: 'theta',
    aliases: ['time decay'],
    shortDef:
      'How much an option’s value tends to leak as the clock runs, if nothing else changes. A reason a customer long may be incentivized to dump. Not a Gexbot ladder.',
    firstDefinedIn: 'plans/02-classic',
    alsoAppears: ['plans/04-state'],
    kind: 'options',
    neededForPlan: 'Classic',
  },
  {
    id: 'moneyness',
    headword: 'moneyness',
    shortDef:
      'Where the strike sits versus the index: at, in, or out of the money. ATM, ITM, and OTM are the three usual labels.',
    firstDefinedIn: 'plans/02-classic',
    seeAlso: ['atm', 'itm', 'otm'],
    kind: 'options',
    neededForPlan: 'Classic',
  },
  {
    id: 'cash-rth',
    headword: 'cash RTH',
    aliases: ['RTH', 'regular trading hours'],
    shortDef:
      'U.S. cash regular hours, 09:30–16:00 Eastern. Gexbot’s classified leftover is built in this window. Quant’s live feed publishes here.',
    firstDefinedIn: 'plans/02-classic',
    alsoAppears: ['layer/07-clocks-and-late-greeks'],
    kind: 'market-general',
  },
  {
    id: 'spx',
    headword: 'SPX',
    shortDef:
      'The S&P 500 cash index. Gexbot’s core live object for 0DTE. ES on Gexbot is usually converted SPX options, not CME ES volume.',
    firstDefinedIn: 'plans/02-classic',
    alsoAppears: ['layer/06-nq-es-layer'],
    seeAlso: ['es-spx'],
    kind: 'market-general',
  },
  {
    id: 'spy',
    headword: 'SPY',
    shortDef:
      'The S&P 500 ETF. Docs treat its options as more directional than SPX. Physically settled and American. Do not copy SPX 0DTE resolution onto SPY without saying so.',
    firstDefinedIn: 'plans/05-orderflow',
    alsoAppears: ['layer/06-nq-es-layer', 'layer/07-clocks-and-late-greeks'],
    kind: 'market-general',
  },
  {
    id: 'ndx',
    headword: 'NDX',
    aliases: ['Nasdaq-100'],
    shortDef:
      'The Nasdaq-100 cash index — a number. You cannot buy it. NQ_NDX leftover is built from options on this number. Thinner book than SPX — treat NQ reads as weaker evidence (inferred).',
    firstDefinedIn: 'layer/06-nq-es-layer',
    seeAlso: ['nq-ndx', 'qqq', 'nq-future'],
    kind: 'market-general',
  },
  {
    id: 'etf',
    headword: 'ETF',
    aliases: ['exchange-traded fund'],
    shortDef:
      'A fund you can buy as shares that holds a basket of stocks. QQQ is the Nasdaq-100 ETF. SPY is the S&P 500 ETF.',
    firstDefinedIn: 'layer/06-nq-es-layer',
    seeAlso: ['qqq', 'spy'],
    kind: 'market-general',
  },
  {
    id: 'qqq',
    headword: 'QQQ',
    aliases: ['Invesco QQQ'],
    shortDef:
      'The Nasdaq-100 ETF, run by Invesco. You can buy the shares. Its options can deliver those shares. A different pile from NDX leftover. Not what NQ_NDX draws.',
    firstDefinedIn: 'layer/06-nq-es-layer',
    seeAlso: ['ndx', 'etf', 'nq-future', 'physically-settled'],
    kind: 'market-general',
  },
  {
    id: 'index-cfd',
    headword: 'index CFD',
    aliases: ['CFD', 'contract for difference', 'NAS100', 'US100'],
    shortDef:
      'A broker contract that pays the difference as a Nasdaq-100 (or S&P) number moves. Not CME. Not leftover. Sit NQ_NDX beside it the same way you sit it beside NQ. The inferred option hedge still lands in NQ (inferred).',
    firstDefinedIn: 'layer/06-nq-es-layer',
    seeAlso: ['nq-future', 'ndx', 'conversion-limit', 'basis'],
    nearestCousin: 'Index CFDs (NAS100 / US100 and cousins)',
    distinguishingCut:
      'A broker quote on the same basket. Not CME NQ. Not leftover NDX options.',
    importMistake:
      'CFD volume or the broker last as if they were NQ tape or a Gexbot node.',
    kind: 'market-general',
  },
  {
    id: 'dex',
    headword: 'DEX',
    aliases: ['delta exposure'],
    shortDef:
      'Delta exposure: leftover share-equivalent. Customer long calls and short puts are +. Customer short calls and long puts are −. A record of a lean, not pending buying.',
    firstDefinedIn: 'plans/04-state',
    seeAlso: ['dex-ladder', 'dex-orderflow'],
    kind: 'gexbot',
  },
  {
    id: 'convexity',
    headword: 'convexity',
    shortDef:
      'Gexbot’s name for leftover gamma signed bought-option minus sold-option. It is vol ownership, not up or down.',
    firstDefinedIn: 'plans/04-state',
    seeAlso: ['convexity-ladder', 'convexity-orderflow'],
    kind: 'gexbot',
  },
  {
    id: 'vol-regime',
    headword: 'vol regime',
    aliases: ['falling vol', 'rising vol', 'falling-vol', 'rising-vol', 'vol flip'],
    shortDef:
      'Whether implied vol is generally crushing or lifting through the session. Gexbot’s options-profile wall/fuel story flips with the regime. This book calls that flip the vol flip. Folklore. If you cannot tell, stand down.',
    firstDefinedIn: 'plans/04-state',
    alsoAppears: ['practice/08-heuristics-as-reading', 'practice/09b-structure-and-gexbot'],
    seeAlso: ['options-profile', 'implied-vol', 'h12'],
    kind: 'hygiene',
  },
  {
    id: 'wall',
    headword: 'wall',
    shortDef:
      'A leftover node that, in Gexbot’s falling-vol story, is a stall candidate because holders dump and supply liquidity. Hypothesis, not a fact. Folklore.',
    firstDefinedIn: 'plans/04-state',
    alsoAppears: [
      'practice/08-heuristics-as-reading',
      'practice/09-grammar-and-journal',
      'practice/09b-structure-and-gexbot',
    ],
    seeAlso: ['fuel', 'options-profile'],
    kind: 'hygiene',
  },
  {
    id: 'fuel',
    headword: 'fuel',
    shortDef:
      'A leftover node that, in Gexbot’s falling-vol story, is a continuation candidate because holders hedge or add and take liquidity. Hypothesis. Folklore.',
    firstDefinedIn: 'plans/04-state',
    alsoAppears: [
      'practice/08-heuristics-as-reading',
      'practice/09-grammar-and-journal',
      'practice/09b-structure-and-gexbot',
    ],
    seeAlso: ['wall'],
    kind: 'hygiene',
  },
  {
    id: 'path-conditional',
    headword: 'path-conditional',
    shortDef:
      'Forced re-hedge that appears only if the index walks a certain way. Convexity shows where and with which sign. It cannot show the path.',
    firstDefinedIn: 'plans/04-state',
    kind: 'hygiene',
  },
  {
    id: 'net-gex',
    headword: 'net GEX',
    aliases: ['zgr', 'ogr'],
    shortDef:
      'Running total of call-sided leftover gamma minus put-sided leftover gamma so far today. Integral of GEX orderflow. Not knowable before it was built.',
    firstDefinedIn: 'plans/05-orderflow',
    alsoAppears: ['practice/08-heuristics-as-reading'],
    seeAlso: ['h8', 'net-convexity'],
    kind: 'gexbot',
  },
  {
    id: 'net-convexity',
    headword: 'net convexity',
    aliases: ['zcvr', 'ocvr'],
    shortDef:
      'Running total of leftover option buying minus leftover option selling so far today. Integral of convexity orderflow.',
    firstDefinedIn: 'plans/05-orderflow',
    kind: 'gexbot',
  },
  {
    id: 'agg-dex',
    headword: 'aggregate DEX',
    aliases: ['aggDEX', 'net DEX'],
    shortDef:
      'Running total of DEX orderflow: share-equivalents leftover so far today. Can be split call versus put.',
    firstDefinedIn: 'plans/05-orderflow',
    alsoAppears: ['practice/08-heuristics-as-reading'],
    seeAlso: ['h9', 'spx-baseline'],
    kind: 'gexbot',
  },
  {
    id: 'long-call',
    headword: 'long call',
    aliases: ['long calls'],
    shortDef:
      '2×2 cell: +DEX and +convexity. Paid for upside expansion. Same +DEX as a short put; opposite story.',
    firstDefinedIn: 'plans/05-orderflow',
    seeAlso: ['two-by-two', 'short-put'],
    kind: 'gexbot',
  },
  {
    id: 'short-put',
    headword: 'short put',
    shortDef:
      '2×2 cell: +DEX and −convexity. Collected premium; wants a pin above the strike.',
    firstDefinedIn: 'plans/05-orderflow',
    seeAlso: ['two-by-two', 'long-call'],
    kind: 'gexbot',
  },
  {
    id: 'long-put',
    headword: 'long put',
    shortDef: '2×2 cell: −DEX and +convexity. Paid for downside expansion.',
    firstDefinedIn: 'plans/05-orderflow',
    kind: 'gexbot',
  },
  {
    id: 'short-call',
    headword: 'short call',
    shortDef:
      '2×2 cell: −DEX and −convexity. Collected premium on a call. Same +GEX orderflow as a long call; opposite cell.',
    firstDefinedIn: 'plans/05-orderflow',
    kind: 'gexbot',
  },
  {
    id: 'expansion',
    headword: 'expansion',
    shortDef:
      'The thesis of a paid-gamma cell (long call or long put): the index needs to leave the strike. Opposite of a pin thesis.',
    firstDefinedIn: 'plans/05-orderflow',
    seeAlso: ['pin', 'long-call'],
    kind: 'hygiene',
  },
  {
    id: 'vix',
    headword: 'VIX',
    shortDef:
      'A popular fear quote on S&P options. Gexbot docs say that when VIX is above 20, SPX starts trading more like SPY. Folklore. Instrument-specific.',
    firstDefinedIn: 'plans/05-orderflow',
    kind: 'market-general',
  },
  {
    id: 'cme',
    headword: 'CME',
    shortDef:
      'The futures exchange that lists ES and NQ. Nasdaq publishes the Nasdaq-100 list NQ tracks; CME does not own that list. Gexbot’s ES/NQ picture is not CME volume and not CME aggressor truth.',
    firstDefinedIn: 'layer/06-nq-es-layer',
    kind: 'market-general',
  },
  {
    id: 'clock-family',
    headword: 'clock family',
    aliases: ['last-hour family', 'clock families'],
    shortDef:
      'A window with its own legal claim: early regular hours, midday residual, last-hour magnet, or knowability. Do not pool families.',
    firstDefinedIn: 'layer/07-clocks-and-late-greeks',
    alsoAppears: ['practice/08-heuristics-as-reading', 'practice/09b-structure-and-gexbot'],
    kind: 'hygiene',
  },
  {
    id: 'knowability',
    headword: 'knowability',
    aliases: ['knowability clock'],
    shortDef:
      'You need enough leftover to name a major. That is usually after the open auction, not at 09:30:01. A so-far map keeps rewriting.',
    firstDefinedIn: 'layer/07-clocks-and-late-greeks',
    alsoAppears: ['practice/09b-structure-and-gexbot'],
    kind: 'hygiene',
  },
  {
    id: 'beta-feature',
    headword: 'beta (Gexbot)',
    aliases: ['beta'],
    shortDef:
      'Gexbot’s own warning on −vanna and charm: applied to today’s leftover only, still being practiced, not the full inventory vault.',
    firstDefinedIn: 'layer/07-clocks-and-late-greeks',
    alsoAppears: ['practice/08-heuristics-as-reading'],
    kind: 'gexbot',
  },
  {
    id: 'h1',
    headword: 'H1',
    aliases: ['SPX GEX-orderflow pivot'],
    shortDef:
      'Naming drill: a standout GEX orderflow bar on SPX as a local-top or local-bottom candidate. Folklore. Not a system.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    alsoAppears: ['practice/09b-structure-and-gexbot'],
    kind: 'hygiene',
  },
  {
    id: 'h2',
    headword: 'H2',
    aliases: ['name the +DEX'],
    shortDef:
      'Naming drill: pair DEX orderflow with convexity orderflow to name the 2×2 cell (expansion vs pin).',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    kind: 'hygiene',
  },
  {
    id: 'h3',
    headword: 'H3',
    aliases: ['fear tape vs grind tape'],
    shortDef:
      'Naming drill: a sequence of convexity bars names day-type (vol-bid vs premium-sale). No entry. Folklore.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    alsoAppears: ['practice/09b-structure-and-gexbot'],
    kind: 'hygiene',
  },
  {
    id: 'h4',
    headword: 'H4',
    aliases: ['walk into a stack'],
    shortDef:
      'Naming drill: spot approaches an options-profile node; wall vs fuel depends on vol regime. An alert times the touch; it does not name the node. Hypothesis. Folklore.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    alsoAppears: ['practice/09b-structure-and-gexbot'],
    seeAlso: ['alert', 'h6', 'h7', 'h12'],
    kind: 'hygiene',
  },
  {
    id: 'h5',
    headword: 'H5',
    aliases: ['last-hour magnet'],
    shortDef:
      'Naming drill: last-hour 0DTE short-convexity as a pin, via −vanna and charm. Beta. Separate clock family.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    alsoAppears: ['practice/09b-structure-and-gexbot'],
    kind: 'hygiene',
  },
  {
    id: 'h6',
    headword: 'H6',
    aliases: ['crowded short-convexity shove'],
    shortDef:
      'Naming drill: reads the shape of the convexity ladder. Crowded customer-short gamma just under or over the index is a shove candidate; well-distributed is a premium-selling tape. Folklore (docs’ favorite SPY pattern).',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    alsoAppears: ['practice/09b-structure-and-gexbot'],
    seeAlso: ['crowded-short-convexity', 'convexity-ladder', 'h4', 'alert'],
    kind: 'hygiene',
  },
  {
    id: 'crowded-short-convexity',
    headword: 'crowded versus well-distributed convexity',
    aliases: ['crowded', 'well-distributed', 'one shove', 'shove', 'trapdoor'],
    shortDef:
      'Shape words for the convexity ladder. Well-distributed minus-convexity: short gamma spread across strikes, a liquid premium-selling tape. Crowded: bunched at one or two strikes near the index; the docs’ “one shove” pattern. Folklore.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    seeAlso: ['convexity-ladder', 'h6'],
    kind: 'gexbot',
    unit: 'Distribution of customer-short gamma across strikes',
    notCounted: 'Direction; whether the crowd holds (depends on vol regime)',
    nearestCousin: 'Concentrated “put wall” on unsigned maps',
    distinguishingCut: 'Classified customer-short residual, not unsigned OI.',
    importMistake: 'Calling every minus-convexity node a magnet.',
    pressure: 'incentive',
  },
  {
    id: 'h7',
    headword: 'H7',
    aliases: ['transition zone as target'],
    shortDef:
      'Naming drill: where a DEX or convexity ladder changes sign, pressure ends or reverses. The docs’ reversion zone / pivot. Target side of H4. Folklore.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    alsoAppears: ['practice/09b-structure-and-gexbot'],
    seeAlso: ['transition-zone', 'h4', 'alert'],
    kind: 'hygiene',
  },
  {
    id: 'transition-zone',
    headword: 'transition zone',
    aliases: ['transition', 'reversion zone'],
    shortDef:
      'Where a State ladder changes sign: heavy customer-short bars give way to fresh customer-long bars, or minus-convexity gives way to plus. Docs: DEX transition is a target / reversion zone; convexity flip is a pivot where incentives reshuffle. Folklore.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    alsoAppears: ['practice/09b-structure-and-gexbot'],
    seeAlso: ['dex-ladder', 'convexity-ladder', 'h7'],
    kind: 'gexbot',
    unit: 'Sign change along the strike axis',
    notCounted: 'Size of the move; timing',
    nearestCousin: 'Zero-gamma line on unsigned maps',
    distinguishingCut: 'A sign change in classified customer residual, not the center of an unsigned complex.',
    importMistake: 'Targeting the tallest bar instead of the sign change.',
    pressure: 'incentive',
  },
  {
    id: 'h8',
    headword: 'H8',
    aliases: ['squeeze vs single-bar reversion', 'net GEX read'],
    shortDef:
      'Naming drill: net GEX read with GEX-profile distribution and net convexity. Equal bars above the index and rising upside convexity → squeeze candidate; one dominant bar → reversion at that bar. Folklore.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    alsoAppears: ['practice/09b-structure-and-gexbot'],
    seeAlso: ['net-gex', 'net-convexity', 'squeeze', 'reversion', 'h1', 'h3'],
    kind: 'hygiene',
  },
  {
    id: 'squeeze',
    headword: 'squeeze',
    shortDef:
      'A move that feeds itself because the participants short gamma on that side must chase it. In this book, a candidate name from H8, not a forecast.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    seeAlso: ['chase', 'gamma-rehedge', 'h8', 'reversion'],
    kind: 'market-general',
  },
  {
    id: 'reversion',
    headword: 'reversion',
    aliases: ['single-bar reversion'],
    shortDef:
      'H8’s counterpart to a squeeze: when one bar above (or below) the index predominates, look for the move to stall or turn at that bar. Folklore. A candidate name, not a forecast.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    seeAlso: ['squeeze', 'h8', 'net-gex'],
    kind: 'hygiene',
  },
  {
    id: 'h9',
    headword: 'H9',
    aliases: ['SPX baseline and SPY divergence', 'aggregate DEX read'],
    shortDef:
      'Naming drill: know the SPX aggregate-DEX baseline in low vol and name the deviation; on SPY, price versus its own aggregate DEX divergence. A record of leans, not pending flow. Folklore.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    alsoAppears: ['practice/09b-structure-and-gexbot'],
    seeAlso: ['agg-dex', 'spx-baseline', 'spx', 'spy'],
    kind: 'hygiene',
  },
  {
    id: 'spx-baseline',
    headword: 'SPX baseline',
    aliases: ['divergence', 'hedge-and-overwrite machine'],
    shortDef:
      'Docs’ normal low-vol SPX state: put aggregate DEX plus, call aggregate DEX minus, net mildly minus during uptrends (puts bought, calls sold). Not bearish. A divergence is price making a new high or low while aggregate DEX does not; the docs call the SPY version particularly powerful. Folklore.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    seeAlso: ['agg-dex', 'h9', 'vix'],
    kind: 'hygiene',
  },
  {
    id: 'h10',
    headword: 'H10',
    aliases: ['wall built vs inherited'],
    shortDef:
      'Naming drill: use lookback dots and the history slider to tell a node that built into price from one inherited at 09:31; the slider shows what was knowable at the touch. Max-change (1 / 5 / 15 / 30 min) is folded in: attention, location only, unsigned — not its own H-number. Docs feature; read inferred.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    seeAlso: ['lookbacks', 'max-change', 'labeling-leak'],
    kind: 'hygiene',
  },
  {
    id: 'h11',
    headword: 'H11',
    aliases: ['which expiry group is live'],
    shortDef:
      'Naming drill: say which expiry group you are sitting. Latest by default; next when latest is dead or into the roll; full only as overnight context. Docs.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    seeAlso: ['latest', 'next', 'full', 'roll', 'expiry-group'],
    kind: 'hygiene',
  },
  {
    id: 'h12',
    headword: 'H12',
    aliases: ['tag the vol regime'],
    shortDef:
      'Naming drill: read the skew dots on the options profile across lookbacks to tag falling or rising vol before any wall-versus-fuel name. Prerequisite for H4, H6, H7. Docs feature; rules inferred.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    alsoAppears: ['practice/09b-structure-and-gexbot'],
    seeAlso: ['skew-dots', 'vol-regime', 'implied-vol', 'h4'],
    kind: 'hygiene',
  },
  {
    id: 'skew-dots',
    headword: 'skew dots',
    aliases: ['IV skew overlay', '0DTE IV skew', 'put IV vs call IV', 'implied-vol dots'],
    shortDef:
      'On the options profile: the implied vol of the put and of the call at each strike for the nearest expiry, drawn as dots on a second axis. Drifting lower across lookbacks → falling vol; lifting → rising vol. Docs feature; reading rules inferred.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    seeAlso: ['options-profile', 'implied-vol', 'vol-regime', 'h12'],
    kind: 'gexbot',
    unit: 'Implied volatility per strike, per right',
    notCounted: 'Direction of price; a forecast of vol',
    nearestCousin: 'Skew charts on vol-surface products',
    distinguishingCut: 'Nearest-expiry only, drawn on the same strike axis as the classified residual.',
    importMistake: 'Inferring vol regime from price direction instead of from the dots.',
    pressure: 'none',
  },
  {
    id: 'h13',
    headword: 'H13',
    aliases: ['Classic vs State disagreement'],
    shortDef:
      'Naming drill: a large Classic pile with a thin State leftover means two-sided trading that cancelled (pressure none — stand down). Classic pile plus customer-short leftover is fuel in falling vol; plus customer-long is a wall candidate. Inferred from the residual definition.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    alsoAppears: ['practice/09b-structure-and-gexbot'],
    seeAlso: ['residual', 'gex-by-volume', 'options-profile', 'balanced-node', 'none-pressure'],
    kind: 'hygiene',
  },
  {
    id: 'h14',
    headword: 'H14',
    aliases: ['flush or bid at a low'],
    shortDef:
      'Naming drill and deliberate negative: a local bottom can be an aggressive plus-DEX buyer or a minus-DEX flush; closing a long call and opening a short call print the same. Hedge inference survives; intent inference does not. Folklore plus the documented open-versus-close limit.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    alsoAppears: ['practice/09b-structure-and-gexbot'],
    seeAlso: ['flush', 'dex-orderflow', 'open-vs-close', 'h2'],
    kind: 'hygiene',
  },
  {
    id: 'flush',
    headword: 'flush',
    aliases: ['forced out', 'liquidation'],
    shortDef:
      'A holder forced out of a position. On DEX orderflow a flush of longs prints minus DEX, indistinguishable from a fresh short. Gexbot does not split open from close.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    seeAlso: ['open-vs-close', 'h14'],
    kind: 'market-general',
  },
  {
    id: 'h15',
    headword: 'H15',
    aliases: ['local zero pivot'],
    shortDef:
      'Naming drill: where the minus-vanna or charm ladder crosses zero, passive buying turns into passive selling or the reverse; the docs call these sharp pivots. Last-hour family only. Folklore. Beta.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    alsoAppears: ['practice/09b-structure-and-gexbot'],
    seeAlso: ['local-zero', 'minus-vanna-ladder', 'charm-ladder', 'h5'],
    kind: 'hygiene',
  },
  {
    id: 'local-zero',
    headword: 'local zero',
    aliases: ['local zeros', 'polarity flip'],
    shortDef:
      'The level where the clock-hedge ladder switches from buying to selling: minus-vanna or charm crosses zero. The sign flips as the index crosses it and is zero when the index sits on it. Docs: sharp pivots. Residual-only. Beta. Folklore.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    seeAlso: ['minus-vanna-ladder', 'charm-ladder', 'h15'],
    kind: 'gexbot',
    unit: 'Index level where signed dollar-delta impact crosses zero',
    notCounted: 'Full OI book; daytime relevance',
    nearestCousin: 'Full-book vanna/charm pin levels',
    distinguishingCut: 'Computed on today’s classified residual, not total dealer inventory.',
    importMistake: 'Using a local zero as a 10:00 level.',
    pressure: 'mandate',
    actor: 'Dealer',
    trigger: 'Clock; vol collapse',
    hedgeVenue: 'ES',
    liquidityRole: 'Passive buying or selling, flipping at the zero',
    notShown: 'Overnight inventory; how much is already hedged',
  },
  {
    id: 'alert',
    headword: 'alert',
    aliases: ['alerts', 'touch alert', 'ping'],
    shortDef:
      'A Gexbot notification that the index touched a named node: Classic major positive / negative; State major call / put and major long / short; Orderflow bars past a size you set. A touch, not a signal. Timing for H4, H6, H7. Docs.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    alsoAppears: ['practice/09-grammar-and-journal', 'practice/09b-structure-and-gexbot'],
    seeAlso: ['major-pos-neg', 'major-call-put', 'major-long-short', 'h4', 'h6', 'h7', 'touch', 'journal-line'],
    kind: 'gexbot',
    unit: 'A touch event on a named node or a bar size threshold',
    notCounted: 'Owner; pressure; vol regime',
    nearestCousin: 'Price alerts on a charting platform',
    distinguishingCut: 'Fires on a Gexbot object (major, bar), not a user-drawn line.',
    importMistake: 'Treating the alert as the entry.',
    pressure: 'unknown',
  },
  {
    id: 'touch',
    headword: 'touch',
    shortDef:
      'The index arriving at a named node. An alert is this event with a sound. H4, H6, and H7 read the node; the touch is only the clock. Not a signal.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    alsoAppears: ['practice/09-grammar-and-journal', 'practice/09b-structure-and-gexbot'],
    seeAlso: ['alert', 'h4', 'node'],
    kind: 'hygiene',
  },
  {
    id: 'acceptance-through',
    headword: 'acceptance through',
    shortDef:
      'Price trades through a named node and stays, rather than wicking. Inferred stop grammar for a wall or pin thesis. Grain not stated in the docs.',
    firstDefinedIn: 'practice/09-grammar-and-journal',
    alsoAppears: ['practice/08-heuristics-as-reading', 'practice/09b-structure-and-gexbot'],
    kind: 'hygiene',
  },
  {
    id: 'journal-line',
    headword: 'journal line',
    shortDef:
      'A written read: clock family, screen, 2×2 cell, node, vol regime, forced-flow sentence, what the screen does not show, falsifier. An alert times the line; it does not fill it. No entry required.',
    firstDefinedIn: 'practice/09-grammar-and-journal',
    alsoAppears: ['practice/09b-structure-and-gexbot', 'practice/10-misreads-and-mastery'],
    seeAlso: ['alert', 'forced-flow-sentence', 'falsifier'],
    kind: 'hygiene',
  },
  {
    id: 'leftover',
    headword: 'leftover',
    aliases: ['leftover trades', 'leftover paper'],
    shortDef:
      'What remains after matched buys and sells of the same option contract cancel. Two-way trading can be huge while leftover is tiny. Gexbot’s name on later screens is residual.',
    firstDefinedIn: 'plans/01-what-gexbot-is',
    alsoAppears: [
      'plans/03-classification',
      'plans/04-state',
      'plans/05-orderflow',
      'layer/06-nq-es-layer',
      'practice/08-heuristics-as-reading',
      'practice/09b-structure-and-gexbot',
    ],
    seeAlso: ['residual', 'classification-engine'],
    kind: 'gexbot',
  },
  {
    id: 'index-options',
    headword: 'index options',
    shortDef:
      'Option contracts on a cash index (SPX, NDX), not on the ES or NQ future itself. Gexbot’s live leftover is built from these.',
    firstDefinedIn: 'plans/01-what-gexbot-is',
    alsoAppears: ['layer/06-nq-es-layer'],
    seeAlso: ['spx', 'ndx', 'qqq', 'conversion'],
    kind: 'market-general',
  },
  {
    id: 'histogram',
    headword: 'histogram',
    shortDef:
      'A stack of bars, one bar per strike. Classic and the GEX profile are histograms. Left and right do not mean the same thing on every histogram.',
    firstDefinedIn: 'plans/02-classic',
    alsoAppears: ['plans/04-state'],
    kind: 'gexbot',
  },
  {
    id: 'debit',
    headword: 'debit',
    aliases: ['ticket price'],
    shortDef:
      'What the buyer paid for the option. Gexbot does not weight leftover by debit. A cheap 0DTE can still be a huge gamma pile.',
    firstDefinedIn: 'plans/02-classic',
    seeAlso: ['premium', 'cousin-premium-flow'],
    kind: 'options',
  },
  {
    id: 'balanced-node',
    headword: 'balanced node',
    shortDef:
      'A strike where two huge opposite piles net toward zero. Not an empty warehouse. Classic call-versus-put netting can hide both piles.',
    firstDefinedIn: 'plans/02-classic',
    seeAlso: ['call-put-netting', 'node'],
    kind: 'gexbot',
  },
  {
    id: 'bid-ask-spread',
    headword: 'spread',
    aliases: ['bid-ask spread'],
    shortDef:
      'The gap between the bid and the ask. The aggressor is the side that stepped across it.',
    firstDefinedIn: 'plans/03-classification',
    alsoAppears: ['layer/06-nq-es-layer'],
    seeAlso: ['bid', 'ask', 'aggressor'],
    kind: 'options',
    neededForPlan: 'Classification',
  },
  {
    id: 'per-right',
    headword: 'per right',
    aliases: ['right (call or put)'],
    shortDef:
      'Each option is one right: a call or a put. The options profile stacks leftover per strike and per right, not netted into one bar.',
    firstDefinedIn: 'plans/04-state',
    alsoAppears: ['layer/06-nq-es-layer'],
    seeAlso: ['options-profile', 'call', 'put'],
    kind: 'options',
  },
  {
    id: 'day-type',
    headword: 'day-type',
    aliases: ['fear tape', 'grind tape', 'vol-bid', 'premium-sale', 'day character'],
    shortDef:
      'A session character named from a sequence of convexity bars, not from one spike. Fear / vol-bid versus grind / premium-sale. Folklore. Not an entry.',
    firstDefinedIn: 'plans/05-orderflow',
    alsoAppears: ['practice/08-heuristics-as-reading', 'practice/09b-structure-and-gexbot'],
    seeAlso: ['spike-sequence-noise', 'h3'],
    kind: 'hygiene',
  },
  {
    id: 'es-future',
    headword: 'ES',
    aliases: ['E-mini S&P', 'ES future'],
    shortDef:
      'The futures contract you chart on the S&P 500. One contract is $50 per point. It trades on CME. Gexbot’s ES picture is usually converted SPX options, not CME volume.',
    firstDefinedIn: 'layer/06-nq-es-layer',
    seeAlso: ['es-spx', 'spx', 'cme'],
    kind: 'market-general',
  },
  {
    id: 'nq-future',
    headword: 'NQ',
    aliases: ['E-mini Nasdaq', 'NQ future'],
    shortDef:
      'The futures contract you chart on the Nasdaq-100. One contract is $20 per point. It trades on CME. Gexbot’s NQ picture is leftover NDX options, not CME volume.',
    firstDefinedIn: 'layer/06-nq-es-layer',
    seeAlso: ['nq-ndx', 'ndx', 'qqq', 'cme', 'index-cfd'],
    kind: 'market-general',
  },
  {
    id: 'conversion',
    headword: 'conversion',
    aliases: ['multiplier conversion'],
    shortDef:
      'Stretching leftover cash-index options onto ES or NQ with a multiplier ($100 / $20 for NDX → NQ). The print happened on the cash-index option. The hedge may land in the future.',
    firstDefinedIn: 'layer/06-nq-es-layer',
    seeAlso: ['es-spx', 'nq-ndx', 'ndx-multiplier', 'conversion-limit', 'basis'],
    kind: 'gexbot',
  },
  {
    id: 'thinner-book',
    headword: 'thinner book',
    shortDef:
      'Fewer contracts, easier to move. NDX options are thinner than SPX. Treat NQ reads as weaker evidence (inferred).',
    firstDefinedIn: 'layer/06-nq-es-layer',
    alsoAppears: ['practice/09b-structure-and-gexbot'],
    seeAlso: ['ndx', 'nq-ndx'],
    kind: 'hygiene',
  },
  {
    id: 'roll',
    headword: 'roll',
    shortDef:
      'The handoff from the nearest expiry to the following expiry. Sit “next” when latest is dead or you are studying that handoff.',
    firstDefinedIn: 'layer/06-nq-es-layer',
    alsoAppears: ['practice/08-heuristics-as-reading'],
    seeAlso: ['latest', 'next', 'expiry-group'],
    kind: 'options',
  },
  {
    id: 'conversion-limit',
    headword: 'conversion limit',
    shortDef:
      'The information layer sits beside NQ and ES. Converted leftover is not the futures tape, not CME volume, and not a futures print you can circle as “the dealer.”',
    firstDefinedIn: 'layer/06-nq-es-layer',
    alsoAppears: ['practice/09b-structure-and-gexbot', 'practice/10-misreads-and-mastery'],
    seeAlso: ['conversion', 'es-spx', 'nq-ndx', 'basis', 'index-cfd'],
    kind: 'hygiene',
  },
  {
    id: 'spot',
    headword: 'spot',
    aliases: ['spot price', 'cash index level'],
    shortDef:
      'The live level of the cash index. On NQ_NDX that number is NDX. It is not a GEX wall and not a forecast.',
    firstDefinedIn: 'layer/06-nq-es-layer',
    seeAlso: ['price-line', 'ndx', 'basis'],
    kind: 'market-general',
  },
  {
    id: 'price-line',
    headword: 'price line',
    aliases: ['spot line'],
    shortDef:
      'The marker through a Gexbot ladder that shows live spot among the strikes. On NQ_NDX it is NDX spot on an NQ-scale ruler, not CME volume.',
    firstDefinedIn: 'layer/06-nq-es-layer',
    alsoAppears: ['practice/09b-structure-and-gexbot'],
    seeAlso: ['spot', 'nq-ndx', 'basis'],
    kind: 'gexbot',
  },
  {
    id: 'basis',
    headword: 'basis',
    aliases: ['cash-futures basis'],
    shortDef:
      'The small gap between the cash-index number and the futures last. NQ and NDX are glued, not identical. A converted price line can sit a few points off your NQ last.',
    firstDefinedIn: 'layer/06-nq-es-layer',
    alsoAppears: ['practice/09b-structure-and-gexbot'],
    seeAlso: ['spot', 'price-line', 'nq-future', 'ndx'],
    kind: 'market-general',
  },
  {
    id: 'transfer-rule',
    headword: 'transfer rule',
    shortDef:
      'Whether a sentence that is true (or folkloric) on one instrument may be copied onto another. SPX folklore does not automatically apply to NQ. Rename the claim.',
    firstDefinedIn: 'layer/06-nq-es-layer',
    alsoAppears: ['practice/09b-structure-and-gexbot'],
    seeAlso: ['vix', 'spy', 'qqq', 'nq-ndx'],
    kind: 'hygiene',
  },
  {
    id: 'explicit-expiry',
    headword: 'explicit-expiry',
    aliases: ['explicit expiry'],
    shortDef:
      'Expiry groupings that Gexbot’s docs say exist on the live feed only and are not stored in the history files. Mentioned as a limit. This book does not teach the pipe.',
    firstDefinedIn: 'layer/07-clocks-and-late-greeks',
    kind: 'gexbot',
  },
  {
    id: 'residual-only',
    headword: 'residual-only',
    shortDef:
      'Applied to today’s classified leftover, not to last night’s whole inventory vault. Minus-vanna and charm on Gexbot are residual-only.',
    firstDefinedIn: 'layer/07-clocks-and-late-greeks',
    alsoAppears: ['practice/08-heuristics-as-reading'],
    seeAlso: ['minus-vanna-ladder', 'charm-ladder', 'beta-feature'],
    kind: 'hygiene',
  },
  {
    id: 'gamma-rehedge',
    headword: 'gamma re-hedge',
    aliases: ['gamma rehedge'],
    shortDef:
      'Hedge-chain link 4: the index walks, delta changes, the professional tops up or unwinds. Pending and path-conditional.',
    firstDefinedIn: 'plans/03-classification',
    alsoAppears: ['plans/04-state', 'layer/07-clocks-and-late-greeks'],
    seeAlso: ['hedge-chain', 'convexity-ladder', 'path-conditional'],
    kind: 'gexbot',
  },
  {
    id: 'clock-rehedge',
    headword: 'clock re-hedge',
    aliases: ['clock rehedge'],
    shortDef:
      'Hedge-chain link 5: time or implied vol changes delta while the index may sit still. Last-hour minus-vanna and charm live here.',
    firstDefinedIn: 'plans/03-classification',
    alsoAppears: ['layer/07-clocks-and-late-greeks'],
    seeAlso: ['hedge-chain', 'charm-ladder'],
    kind: 'gexbot',
  },
  {
    id: 'european-style',
    headword: 'European',
    aliases: ['European-style'],
    shortDef:
      'Cannot be exercised before expiry. NDX options are European. SPX options are too. Market-general.',
    firstDefinedIn: 'layer/06-nq-es-layer',
    alsoAppears: ['layer/07-clocks-and-late-greeks'],
    seeAlso: ['settlement', 'american-style', 'ndx', 'spx'],
    kind: 'market-general',
  },
  {
    id: 'american-style',
    headword: 'American',
    aliases: ['American-style'],
    shortDef:
      'May be exercised before expiry. QQQ options are American. SPY options are too. Market-general.',
    firstDefinedIn: 'layer/06-nq-es-layer',
    alsoAppears: ['layer/07-clocks-and-late-greeks'],
    seeAlso: ['settlement', 'european-style', 'qqq', 'spy'],
    kind: 'market-general',
  },
  {
    id: 'cash-settled',
    headword: 'cash-settled',
    shortDef:
      'At expiry, no shares change hands — only cash. NDX options settle this way. SPX options do too. Market-general.',
    firstDefinedIn: 'layer/06-nq-es-layer',
    alsoAppears: ['layer/07-clocks-and-late-greeks'],
    seeAlso: ['settlement', 'physically-settled', 'ndx'],
    kind: 'market-general',
  },
  {
    id: 'physically-settled',
    headword: 'physically settled',
    aliases: ['physical settlement', 'share delivery'],
    shortDef:
      'At expiry, the shares can be delivered. QQQ options settle this way. SPY options do too. Market-general.',
    firstDefinedIn: 'layer/06-nq-es-layer',
    alsoAppears: ['layer/07-clocks-and-late-greeks'],
    seeAlso: ['settlement', 'cash-settled', 'qqq', 'spy'],
    kind: 'market-general',
  },
  {
    id: 'pm-settlement',
    headword: 'PM settlement',
    aliases: ['afternoon settlement'],
    shortDef:
      'Daily SPX expiries settle in the afternoon, not at the open. Market-general. Do not copy onto SPY without saying so.',
    firstDefinedIn: 'layer/07-clocks-and-late-greeks',
    seeAlso: ['settlement', 'spx'],
    kind: 'market-general',
  },
  {
    id: 'heuristic',
    headword: 'heuristic',
    aliases: ['heuristics'],
    shortDef:
      'In this book: a naming drill, not a trading system and not a hit rate. Practice saying what you are looking at.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    seeAlso: ['naming-drill', 'h1'],
    kind: 'hygiene',
  },
  {
    id: 'naming-drill',
    headword: 'naming drill',
    shortDef:
      'Practice naming the object (2×2 cell, clock family, pressure word) without sending an order.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    seeAlso: ['heuristic', 'forced-flow-sentence'],
    kind: 'hygiene',
  },
  {
    id: 'stand-down',
    headword: 'stand down',
    shortDef:
      'Do not name a read. Used when leftover is too thin, Orderflow is noise, clock families are pooled, or the vol-regime map is the wrong one.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    kind: 'hygiene',
  },
  {
    id: 'local-top',
    headword: 'local top',
    aliases: ['local-top', 'local bottom', 'local-bottom'],
    shortDef:
      'A candidate turning area, not a forecast. H1 treats a standout SPX GEX-orderflow bar as a local-top or local-bottom candidate. Folklore.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    seeAlso: ['h1', 'gex-orderflow'],
    kind: 'hygiene',
  },
  {
    id: 'failure-to-take',
    headword: 'failure to take',
    aliases: ['reclaim'],
    shortDef:
      'Inferred stop grammar for a fuel or expansion thesis: the index cannot hold through the named node, or reclaims back through the long-option strike.',
    firstDefinedIn: 'practice/09-grammar-and-journal',
    alsoAppears: ['practice/09b-structure-and-gexbot'],
    seeAlso: ['acceptance-through', 'expansion', 'fuel'],
    kind: 'hygiene',
  },
  {
    id: 'falsifier',
    headword: 'falsifier',
    shortDef:
      'The observation that would make you withdraw the read. Write it before the session walks. Part of the journal line.',
    firstDefinedIn: 'practice/09-grammar-and-journal',
    alsoAppears: ['practice/09b-structure-and-gexbot', 'practice/10-misreads-and-mastery'],
    seeAlso: ['journal-line', 'acceptance-through'],
    kind: 'hygiene',
  },
  {
    id: 'imported-tool-misread',
    headword: 'imported-tool misread',
    aliases: ['imported mistake'],
    shortDef:
      'Bringing another product’s object into Gexbot and treating it as the same measurement. Cousin families stay cousins.',
    firstDefinedIn: 'practice/10-misreads-and-mastery',
    seeAlso: ['cousin-unsigned-gex', 'cousin-futures-native', 'cousin-premium-flow'],
    kind: 'hygiene',
  },
  {
    id: 'guardrail',
    headword: 'guardrail',
    shortDef:
      'A sentence that keeps a later chapter from undoing an earlier one. Example: “must” is mandate only; Classic is unknown.',
    firstDefinedIn: 'practice/10-misreads-and-mastery',
    kind: 'hygiene',
  },
  {
    id: 'mastery-rubric',
    headword: 'mastery rubric',
    shortDef:
      'Six names, not a locked edge: the 2×2 or cannot; clock family; conversion limit; forced-flow sentence or unknown; falsifier in both languages; structural location or Gexbot-only.',
    firstDefinedIn: 'practice/10-misreads-and-mastery',
    kind: 'hygiene',
  },
  {
    id: 'capstone',
    headword: 'capstone',
    shortDef:
      'One annotated cash-hours session on ES and one on NQ. Forced-flow sentences only, now with a Structure field. No entry. If you write an entry, you left the course.',
    firstDefinedIn: 'practice/10-misreads-and-mastery',
    kind: 'hygiene',
  },
  {
    id: 'combined-setup',
    headword: 'combined setup',
    aliases: ['S-form', 'S-read', 'S-number'],
    shortDef:
      'A naming drill that puts a futures-tape location next to a Gexbot node. Numbered S1–S10 so they do not collide with H1–H15. Not an entry.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['structural-location', 'heuristic', 'dual-falsifier', 'journal-line'],
    kind: 'hygiene',
  },
  {
    id: 'structural-location',
    headword: 'structural location',
    aliases: ['structure'],
    shortDef:
      'Where price is and what it just did, observed on the futures tape. Not a Gexbot node. Map a nearby leftover strike through the basis.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    alsoAppears: ['practice/10-misreads-and-mastery'],
    seeAlso: ['structure-field', 'basis', 'combined-setup'],
    kind: 'hygiene',
  },
  {
    id: 'dual-falsifier',
    headword: 'dual falsifier',
    aliases: ['both-language falsifier', 'falsifier in both languages'],
    shortDef:
      'The observation that withdraws a combined read, stated twice: as a price fact (acceptance through or failure to take) and as a leftover fact (the leftover flips sign or vanishes).',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    alsoAppears: ['practice/10-misreads-and-mastery'],
    seeAlso: ['falsifier', 'acceptance-through', 'failure-to-take', 'combined-setup'],
    kind: 'hygiene',
  },
  {
    id: 'combination-order',
    headword: 'combination order',
    aliases: ['order of operations'],
    shortDef:
      'Day-type first (H3 / H8 / H9), then structural location, then the Gexbot node at that location (H13 to confirm leftover), then pressure, then the dual falsifier.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['combined-setup', 'h3', 'h13', 'dual-falsifier'],
    kind: 'hygiene',
  },
  {
    id: 'structure-field',
    headword: 'Structure:',
    aliases: ['Structure field'],
    shortDef:
      'The journal-line field added in Chapter 9b: a tape sentence for what price did at the node. Not a Gexbot screen name.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    alsoAppears: ['practice/10-misreads-and-mastery'],
    seeAlso: ['journal-line', 'structural-location', 'combined-setup'],
    kind: 'hygiene',
  },
  {
    id: 's1',
    headword: 'S1',
    aliases: ['confluence node setup'],
    shortDef:
      'Combined read: a prior-day, overnight, or opening-range extreme sitting near a State leftover node, mapped through the basis. Inferred. Overnight structure has no leftover at 09:30.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['confluence-node', 'overnight-structure', 'prior-day-extreme', 'h4', 'h13', 'basis'],
    kind: 'hygiene',
  },
  {
    id: 'confluence-node',
    headword: 'confluence node',
    aliases: ['confluence'],
    shortDef:
      'A leftover node within a few strikes of a tape location (prior-day high/low, overnight high/low, opening-range extreme), mapped through the basis. Expect a few points of offset. Inferred.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['s1', 'structural-location', 'node', 'basis'],
    kind: 'hygiene',
  },
  {
    id: 'prior-day-extreme',
    headword: 'yesterday’s high, low, and close',
    aliases: ['prior-day high', 'prior-day low', 'prior-day close', "yesterday's high", "yesterday's low", "yesterday's close"],
    shortDef:
      'The three most watched prices on the chart. Use the cash-hours (09:30–16:00) versions so the level sits on Gexbot’s clock; the overnight-inclusive versions are different levels. A location, not a Gexbot node. Pair with leftover only after H13 confirms a pile.',
    firstDefinedIn: 'practice/09a-early-session',
    alsoAppears: ['practice/09b-structure-and-gexbot'],
    seeAlso: ['s1', 'overnight-structure', 'structural-location'],
    kind: 'market-general',
  },
  {
    id: 'overnight-structure',
    headword: 'overnight structure',
    aliases: ['overnight high', 'overnight low', 'pre-market range', 'pre-market high', 'pre-market low'],
    shortDef:
      'The high and low printed while cash was closed, and the narrower pre-market range before 09:30. Thinner participation; no cash index existed to hedge against. At 09:30 there is no State leftover behind it. Only Classic open interest can mark the location; pressure is unknown until leftover builds.',
    firstDefinedIn: 'practice/09a-early-session',
    alsoAppears: ['practice/09b-structure-and-gexbot'],
    seeAlso: ['s1', 's4', 'gex-by-oi', 'unknown-pressure'],
    kind: 'hygiene',
  },
  {
    id: 's2',
    headword: 'S2',
    aliases: ['sweep into a stack'],
    shortDef:
      'Combined read: a stop-run through a swing high or low into the leftover just beyond. Sweep into a wall → reversal candidate; into fuel → continuation. Uses H4 and H14. Inferred.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['sweep', 'swing-high', 'h4', 'h14', 'wall', 'fuel'],
    kind: 'hygiene',
  },
  {
    id: 'swing-high',
    headword: 'swing high',
    aliases: ['swing low', 'swing high/low'],
    shortDef:
      'A peak the futures tape has not yet taken, or the trough mirror. Plain tape structure. Not a methodology level and not a Gexbot node.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['sweep', 'failed-break', 'structural-location'],
    kind: 'market-general',
  },
  {
    id: 'sweep',
    headword: 'sweep',
    aliases: ['stop run', 'stop-run'],
    shortDef:
      'Price runs through a swing high or low and prints beyond it, taking resting stops. A futures-tape fact. Not the premium-and-sweep cousin family, and not a Gexbot print.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['s2', 'swing-high', 'cousin-premium-flow', 'h14'],
    kind: 'market-general',
  },
  {
    id: 's3',
    headword: 'S3',
    aliases: ['opening-range break'],
    shortDef:
      'Combined read: a break of the first 30–60 minute cash range, read against H3 day-type and H12 vol regime. Grind through short gamma; two-sided air on a fear tape. Inferred.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['opening-range', 'h3', 'h12', 'day-type'],
    kind: 'hygiene',
  },
  {
    id: 'opening-range',
    headword: 'opening range',
    aliases: ['OR15', 'fifteen-minute range', 'first-hour range', 'opening-range high', 'opening-range low'],
    shortDef:
      'The high and low of the first minutes of cash hours. Fifteen minutes is the finest box this book uses (Chapter 9a); it completes when leftover is barely nameable. Thirty to sixty minutes is the safer box (Chapter 9b). A tape box, not a Gexbot node. A break is price leaving that box and staying out.',
    firstDefinedIn: 'practice/09a-early-session',
    alsoAppears: ['practice/09b-structure-and-gexbot'],
    seeAlso: ['s3', 'knowability', 'structural-location'],
    kind: 'market-general',
  },
  {
    id: 's4',
    headword: 'S4',
    aliases: ['gap context'],
    shortDef:
      'Combined read: an overnight gap versus prior close. At 09:30 use Classic open interest and latest zero gamma as location only. As State builds, leftover between price and the fill names fuel or stall. Inferred.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['gap', 'overnight-structure', 'gex-by-oi', 'zero-gamma', 'h13'],
    kind: 'hygiene',
  },
  {
    id: 'gap',
    headword: 'gap',
    aliases: ['overnight gap', 'fill', 'gap fill'],
    shortDef:
      'The empty stretch between last night’s close and the cash open. The path back toward that close is the fill. Overnight structure: no State leftover at 09:30.',
    firstDefinedIn: 'practice/09a-early-session',
    alsoAppears: ['practice/09b-structure-and-gexbot'],
    seeAlso: ['s4', 'overnight-structure', 'structural-location'],
    kind: 'market-general',
  },
  {
    id: 's5',
    headword: 'S5',
    aliases: ['reversion target by transition zone'],
    shortDef:
      'Combined read: a tape target (VWAP, yesterday’s range edge, range midpoint) is confirmed only if an H7 transition zone sits at or before it. For a pin cell the node is still the target. Inferred.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['h7', 'transition-zone', 'vwap', 'pin'],
    kind: 'hygiene',
  },
  {
    id: 'vwap',
    headword: 'VWAP',
    aliases: ['volume-weighted average price'],
    shortDef:
      'The session’s average futures price, weighted by how much traded at each price. A tape location, not a Gexbot node. Confirm it as a target only with a transition zone at or before it.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['s5', 's7', 's8', 'transition-zone'],
    kind: 'market-general',
  },
  {
    id: 's6',
    headword: 'S6',
    aliases: ['failed break with GEX-orderflow pivot'],
    shortDef:
      'Combined read: a failed break of a swing, paired with H1’s plus GEX-orderflow bar into a call-heavy node and minus convexity. Folklore on SPX; inferred as a combination. Rename on NQ.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['failed-break', 'h1', 'local-top', 'transfer-rule'],
    kind: 'hygiene',
  },
  {
    id: 'failed-break',
    headword: 'failed break',
    aliases: ['failed break of structure'],
    shortDef:
      'Price prints beyond a level and immediately returns inside. In Chapter 9a the level is a compound zone reached by an open drive (E4); in Chapter 9b it is a swing high or low (S6). Tape structure. Not a Gexbot object until paired with a node and a pressure word.',
    firstDefinedIn: 'practice/09a-early-session',
    alsoAppears: ['practice/09b-structure-and-gexbot'],
    seeAlso: ['s6', 'swing-high', 'acceptance-through'],
    kind: 'market-general',
  },
  {
    id: 's7',
    headword: 'S7',
    aliases: ['trend-day recognition', 'continuation checkpoint'],
    shortDef:
      'Combined read: higher highs and higher lows that do not reach VWAP (or the down-day mirror), with H6 crowded short convexity taken, H8 squeeze form, or H3 one-sided sequence. Short-gamma mandate chasing. Inferred.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['trend-day', 'h6', 'h8', 'h3', 'squeeze'],
    kind: 'hygiene',
  },
  {
    id: 'trend-day',
    headword: 'trend day',
    aliases: ['trend-day'],
    shortDef:
      'Higher highs and higher lows with shallow pullbacks that do not reach VWAP — or the down-day mirror. A day-type name from the tape, confirmed by Gexbot. Not an entry.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['s7', 'range-day', 'day-type', 'vwap'],
    kind: 'market-general',
  },
  {
    id: 's8',
    headword: 'S8',
    aliases: ['range-day recognition'],
    shortDef:
      'Combined read: price inside yesterday’s range, rotating around VWAP, failed breaks both ways, with well-distributed minus-convexity, flat nets, and a balanced GEX profile. Long-gamma fade. Inferred.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['range-day', 'h6', 'vwap', 'crowded-short-convexity'],
    kind: 'hygiene',
  },
  {
    id: 'range-day',
    headword: 'range day',
    aliases: ['range-day'],
    shortDef:
      'Price stays inside yesterday’s range, rotates around VWAP, and fails to hold breaks both ways. A day-type name from the tape, confirmed by Gexbot. Not an entry.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['s8', 'trend-day', 'day-type', 'vwap'],
    kind: 'market-general',
  },
  {
    id: 's9',
    headword: 'S9',
    aliases: ['last-hour pin versus unwind', 'pin versus unwind'],
    shortDef:
      'Combined read for the last-hour family only: afternoon range plus H5’s 0DTE minus-convexity magnet and an H15 local zero. Inside the range → pin candidate; trending away with charm → magnet lost. Folklore. Beta. Nothing from S1–S8 carries in.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['h5', 'h15', 'local-zero', 'clock-family', 'settlement'],
    kind: 'hygiene',
  },
  {
    id: 's10',
    headword: 'S10',
    aliases: ['ES and NQ disagreement', 'ES/NQ disagreement'],
    shortDef:
      'Combined read: ES holds a level while NQ breaks the equivalent, or the reverse. Different option books; NDX is thinner. Weight ES for pressure. Mostly a stand-down. Inferred. Transfer rule.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['es-spx', 'nq-ndx', 'thinner-book', 'transfer-rule', 'stand-down'],
    kind: 'hygiene',
  },
  {
    id: 'futures-tape-delta',
    headword: 'futures-tape delta',
    aliases: ['tape delta'],
    shortDef:
      'Who is lifting or hitting the ES or NQ book. Some desks call that tape delta. It is not Gexbot DEX (leftover share-equivalent). Do not add them or read one as confirming the other.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['dex', 'conversion-limit'],
    kind: 'cousin',
    nearestCousin: 'Gexbot DEX',
    distinguishingCut: 'Futures-book aggression versus classified leftover share-equivalent on index options.',
    importMistake: 'Adding tape delta to a DEX bar, or calling a futures print the dealer.',
  },
  {
    id: 'strike-spacing',
    headword: 'strike spacing',
    aliases: ['strike bucket', 'within one strike'],
    shortDef:
      'The distance between listed strikes. SPX near the money is five index points; NDX is wider. A node is a bucket that wide, not a tick. Write “at the node” as within one strike spacing, mapped through the basis. Market-general.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['strike', 'basis', 'confluence-node', 'acceptance-through'],
    kind: 'market-general',
  },
  {
    id: 'confluence-bias',
    headword: 'confluence bias',
    shortDef:
      'Finding a Gexbot node under every chart level because strikes are dense near the money. A node counts only if it is significant relative to today’s ladder — a major or a standout bar — not merely present.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['confluence-node', 'strike-spacing', 's1'],
    kind: 'hygiene',
  },
  {
    id: 'same-print-stacking',
    headword: 'same-print stacking',
    aliases: ['three bars one print'],
    shortDef:
      'Counting DEX, convexity, and GEX orderflow — or Classic volume and State bars — as separate confirmations when they are cuts of the same prints. One print is one piece of evidence seen from three sides.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['dex-orderflow', 'convexity-orderflow', 'gex-orderflow', 'two-by-two'],
    kind: 'hygiene',
  },
  {
    id: 're-marking',
    headword: 're-marking',
    aliases: ['re-mark', 'ladder moved no trade'],
    shortDef:
      'A State ladder bar changing size with no new print, because the sensitivity (delta or gamma) moved with spot or the clock. Docs: max-change strikes jump when a bigger node prints or when spot moves the gamma surface. Orderflow bars are prints; ladders re-mark. Check Orderflow for the same minute. Inferred for ladders generally.',
    firstDefinedIn: 'practice/09a-early-session',
    alsoAppears: ['practice/09b-structure-and-gexbot'],
    seeAlso: ['dex-ladder', 'convexity-ladder', 'max-change', 'ladder-increment-net', 'knowability'],
    kind: 'gexbot',
    unit: 'Change in sensitivity × unchanged leftover size',
    notCounted: 'New leftover; any customer decision',
    nearestCousin: 'Greek drift on a risk report',
    distinguishingCut: 'Visible as a ladder change with a quiet Orderflow subplot for the same window.',
    importMistake: 'Reading afternoon at-the-money ladder growth as afternoon buying.',
    pressure: 'none',
  },
  {
    id: 'multi-leg',
    headword: 'multi-leg structure',
    aliases: ['spread (multi-leg)', 'vertical', 'synthetic', 'complex order'],
    shortDef:
      'Two or more option legs sent together: a bought and a sold call at different strikes, a bought call and a sold put at one strike, and so on. Gexbot signs each leg as its own print (how complex orders are signed: not stated). Read opposite-sign bars at nearby strikes in the same minute as one structure. DEX largely adds; convexity largely cancels.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['two-by-two', 'dex-orderflow', 'convexity-orderflow', 'not-stated'],
    kind: 'options',
    neededForPlan: 'Orderflow',
  },
  {
    id: 'hedged-holder',
    headword: 'hedged holder',
    aliases: ['protective put', 'overwrite'],
    shortDef:
      'A customer whose option sits against a position in the index: a long book buying puts, or selling calls. Prints the same 2×2 cell as a speculator; carries a different incentive at the strike. The 2×2 names the option, not the account. Inferred.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['two-by-two', 'long-put', 'short-call', 'incentive', 'self-hedge'],
    kind: 'options',
  },
  {
    id: 'event-day',
    headword: 'event day',
    aliases: ['scheduled release', 'data print'],
    shortDef:
      'A session with a scheduled release (a data print at 10:00, a central-bank statement at 14:00). The vol regime can flip for a stretch and every ladder re-marks at once. Docs describe well-distributed plus-convexity as informed vol expectation, often pre-event. Re-tag the regime after the release. Market-general.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['vol-regime', 'skew-dots', 'h12', 're-marking'],
    kind: 'market-general',
  },
  {
    id: 'partial-picture',
    headword: 'partial picture',
    aliases: ['no Gexbot object here'],
    shortDef:
      'Gexbot’s residual is one measured slice: today’s classified index-option leftover. The ES tape also carries hedging from books it does not merge — options on the ES future at CME, SPY and other ETF options, single stocks, VIX products. Absence of a node is not absence of pressure. Write “no Gexbot object here,” not “nothing here.”',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['es-spx', 'cme', 'spy', 'conversion-limit', 'residual'],
    kind: 'hygiene',
  },
  {
    id: 'scalping',
    headword: 'scalping',
    aliases: ['scalp'],
    shortDef:
      'Trading a futures contract for a few ticks over seconds to minutes. A tape skill; the trigger comes from the ES or NQ book. Gexbot supplies context (which reads to consider), not the trigger.',
    firstDefinedIn: 'practice/11-further-learning',
    seeAlso: ['horizon-mismatch', 'tick-value', 'structural-location'],
    kind: 'market-general',
  },
  {
    id: 'horizon-mismatch',
    headword: 'horizon mismatch',
    shortDef:
      'A scalp lives on seconds; a Gexbot node lives on minutes to hours (leftover accumulates, dealers hedge in bands, published hedging effects are measured at half-hour to daily horizons). Use Gexbot to choose which tape reads to take, not when to click.',
    firstDefinedIn: 'practice/11-further-learning',
    seeAlso: ['scalping', 'hedge-in-bands', 'knowability'],
    kind: 'hygiene',
  },
  {
    id: 'early-session',
    headword: 'early session',
    aliases: ['first two hours'],
    shortDef:
      'For study purposes, 09:30–11:30 Eastern. The book’s ES/NQ early claim clock was 09:29–11:00. The second hour is often where State first becomes thick enough to name (inferred; measure it with the knowability log).',
    firstDefinedIn: 'practice/11-further-learning',
    seeAlso: ['cash-rth', 'clock-family', 'knowability'],
    kind: 'hygiene',
  },
  {
    id: 'square-root-of-time',
    headword: 'square root of time',
    aliases: ['root-T', 'variance adds'],
    shortDef:
      'Variance adds across time; volatility scales with the square root. One day of a 16 percent annual vol is about 1 percent; half a day is about 71 percent of that, not half. Conventions (calendar vs trading time, overnight variance) differ. Market-general.',
    firstDefinedIn: 'practice/11-further-learning',
    seeAlso: ['implied-vol', 'expected-move', 'zero-dte'],
    kind: 'market-general',
  },
  {
    id: 'intraday-seasonality',
    headword: 'intraday seasonality',
    aliases: ['U-shape', 'U-shaped volatility'],
    shortDef:
      'Realized volatility inside a cash session is U-shaped: high in the first 30–60 minutes, low at midday, rising into the close. Implied-versus-realized comparisons must use the seasonal shape, not the flat daily average. Market-general.',
    firstDefinedIn: 'practice/11-further-learning',
    seeAlso: ['realized-vol', 'vol-regime', 'h12'],
    kind: 'market-general',
  },
  {
    id: 'straddle',
    headword: 'straddle',
    aliases: ['ATM straddle'],
    shortDef:
      'A bought call and a bought put at the same strike, held together. At the money it is worth about 0.8 × index × vol × √time. Its price is the market’s own expected move.',
    firstDefinedIn: 'practice/11-further-learning',
    seeAlso: ['expected-move', 'call', 'put', 'atm'],
    kind: 'options',
  },
  {
    id: 'expected-move',
    headword: 'expected move',
    aliases: ['implied move', 'one-sigma move'],
    shortDef:
      'How far the market prices the index to travel by expiry, read from the at-the-money straddle (≈ 0.8 × index × vol × √time). The yardstick for calling a node near or far. Toy: 16 percent vol at 6000 → about 48 points for the day, 27 with two hours left, 13 with thirty minutes.',
    firstDefinedIn: 'practice/11-further-learning',
    seeAlso: ['straddle', 'square-root-of-time', 'morning-card'],
    kind: 'options',
  },
  {
    id: 'gamma-theta-tradeoff',
    headword: 'gamma-theta tradeoff',
    aliases: ['hedger’s ledger', 'realized minus implied'],
    shortDef:
      'A hedged option earns about ½ × gamma × (move)² and pays theta for the interval; summed, the result is proportional to realized minus implied variance. The arithmetic under the OP wall/fuel folklore: long options lose in falling vol and are incentivized to dump; short options win and are incentivized to hold.',
    firstDefinedIn: 'practice/11-further-learning',
    seeAlso: ['gamma', 'theta', 'realized-vol', 'vol-regime', 'incentive'],
    kind: 'options',
  },
  {
    id: 'realized-vol',
    headword: 'realized volatility',
    aliases: ['realized vol', 'realized variance'],
    shortDef:
      'How much the index actually moved over a window, as opposed to the implied vol the option price quoted. A scalper can read it from futures ranges; adjust for intraday seasonality before comparing to implied.',
    firstDefinedIn: 'practice/11-further-learning',
    seeAlso: ['implied-vol', 'intraday-seasonality', 'gamma-theta-tradeoff'],
    kind: 'market-general',
  },
  {
    id: 'dollar-gamma',
    headword: 'dollar gamma',
    aliases: ['GEX convention', 'gamma per 1 percent'],
    shortDef:
      'Gamma scaled by index² × 1 percent: the delta change for a one-percent move. Times contract size and open interest, it is the usual public GEX number. Gexbot’s exact scaling is not stated; compare Gexbot bars to bars, never to this formula.',
    firstDefinedIn: 'practice/11-further-learning',
    seeAlso: ['gamma', 'gex', 'cousin-unsigned-gex', 'not-stated'],
    kind: 'market-general',
  },
  {
    id: 'opening-auction',
    headword: 'opening auction',
    aliases: ['cash open', '09:30 auction'],
    shortDef:
      'Cash equities open through a single-price auction at 09:30; index futures, which traded overnight, absorb that information in minutes. Index-option leftover cannot exist before it; Classic open interest is the only Gexbot picture, re-marked to the new spot. Market-general.',
    firstDefinedIn: 'practice/09a-early-session',
    alsoAppears: ['practice/11-further-learning'],
    seeAlso: ['cash-rth', 'knowability', 'gex-by-oi', 're-marking'],
    kind: 'market-general',
  },
  {
    id: 'morning-card',
    headword: 'morning card',
    shortDef:
      'Drill 1: before 09:30, from the nearest-expiry ATM straddle, write the expected move for the day, the first hour, and five minutes, plus scheduled releases. At 11:30 write the realized first-hour range beside it. The vol-regime tag with numbers on it.',
    firstDefinedIn: 'practice/11-further-learning',
    seeAlso: ['expected-move', 'vol-regime', 'event-day', 'h12'],
    kind: 'hygiene',
  },
  {
    id: 'backtest-overfitting',
    headword: 'backtest overfitting',
    aliases: ['multiple testing', 'data mining'],
    shortDef:
      'Finding an effect because many hypotheses were tried on a small sample. Write hypotheses before looking; count how many you tested; forty intraday sessions is not evidence. Measure knowability and re-marking (no outcome variable) before anything with a return in it.',
    firstDefinedIn: 'practice/11-further-learning',
    seeAlso: ['folklore', 'inferred', 'labeling-leak'],
    kind: 'hygiene',
  },
  {
    id: 'tick-value',
    headword: 'tick value',
    aliases: ['minimum tick', '$12.50', '$5.00'],
    shortDef:
      'The smallest price step and its dollar value: ES 0.25 point = $12.50; NQ 0.25 point = $5.00. A five-point SPX strike spacing is twenty ES ticks; NDX strikes span many dozens of NQ ticks. A Gexbot node is coarse beside a scalp target. Market-general.',
    firstDefinedIn: 'practice/11-further-learning',
    seeAlso: ['point-value', 'strike-spacing', 'scalping', 'es-future', 'nq-future'],
    kind: 'market-general',
  },
  {
    id: 'stop-on-underlying-fallacy',
    headword: 'stop-on-underlying fallacy',
    shortDef:
      'Trusting a price line on the index to cap an option position’s loss. Options lose on vol and clock with price unchanged, gap through levels at the open, and may not be closable at a fair price. Risk is defined by the structure, not by a stop.',
    firstDefinedIn: 'practice/12-futures-to-options',
    seeAlso: ['defined-risk', 'risk-graph', 'position-sentence'],
    kind: 'hygiene',
  },
  {
    id: 'greek-attribution',
    headword: 'greek attribution',
    aliases: ['P&L attribution', 'delta / gamma / theta / vega P&L'],
    shortDef:
      'Splitting an option position’s P&L into delta × move, ½ gamma × move², theta × time, vega × vol change (cross-terms aside). Toy: right on a 15-point move, an ATM 0DTE call kept about 72 percent of the futures gain after theta and vol; with price unchanged it lost about 3.4 points on theta and vol alone.',
    firstDefinedIn: 'practice/12-futures-to-options',
    seeAlso: ['delta', 'gamma', 'theta', 'vega', 'gamma-theta-tradeoff'],
    kind: 'options',
  },
  {
    id: 'position-sentence',
    headword: 'position sentence',
    shortDef:
      'The forced-flow sentence written for your own option position: structure, greeks now (delta in ES-equivalents), 2×2 cells the legs print, thesis (direction / realized-vs-implied / pin), regime paid, three kill conditions (price, vol, clock), max loss defined before entry, exit clock.',
    firstDefinedIn: 'practice/12-futures-to-options',
    seeAlso: ['forced-flow-sentence', 'journal-line', 'falsifier', 'two-by-two'],
    kind: 'hygiene',
  },
  {
    id: 'skew',
    headword: 'skew',
    aliases: ['volatility skew', 'smile'],
    shortDef:
      'Implied vol differs by strike: index puts below spot usually carry higher implied vol than calls above. Gexbot’s skew dots are one nearest-expiry slice of it. How the skew moves with spot (sticky-strike vs sticky-delta) changes what your delta really is. Market-general.',
    firstDefinedIn: 'practice/12-futures-to-options',
    seeAlso: ['skew-dots', 'implied-vol', 'term-structure'],
    kind: 'market-general',
  },
  {
    id: 'term-structure',
    headword: 'term structure',
    aliases: ['vol term structure'],
    shortDef:
      'Implied vol differs by expiry. Not on any Gexbot screen. Cboe publishes short-dated, standard, and three-month volatility indices that give its slope for the S&P. Market-general.',
    firstDefinedIn: 'practice/12-futures-to-options',
    seeAlso: ['skew', 'implied-vol', 'vix', 'latest', 'next'],
    kind: 'market-general',
  },
  {
    id: 'variance-risk-premium',
    headword: 'variance risk premium',
    aliases: ['VRP', 'selling premium', 'income'],
    shortDef:
      'On average over long samples, index implied vol has exceeded the vol later realized. The reason selling options is called income, and the reason that word ends accounts: positive average, catastrophic tail. The gamma-theta ledger seen one day at a time. Market-general.',
    firstDefinedIn: 'practice/12-futures-to-options',
    seeAlso: ['gamma-theta-tradeoff', 'realized-vol', 'implied-vol', 'defined-risk'],
    kind: 'market-general',
  },
  {
    id: 'vertical-spread',
    headword: 'vertical spread',
    aliases: ['call vertical', 'put vertical', 'debit spread', 'credit spread'],
    shortDef:
      'A bought and a sold option of the same type at two strikes, same expiry. Caps both gain and loss. Prints two opposite-sign bars on Gexbot; a reader may misread the sold leg as a separate opinion.',
    firstDefinedIn: 'practice/12-futures-to-options',
    seeAlso: ['multi-leg', 'defined-risk', 'option-structures'],
    kind: 'options',
  },
  {
    id: 'option-structures',
    headword: 'option structures',
    aliases: ['strangle', 'calendar', 'butterfly', 'risk reversal'],
    shortDef:
      'Combinations that shape the two exposures of a single leg: straddle and strangle (movement, little direction), calendar (one expiry against another), butterfly (a pin), risk reversal (sell one side’s vol to buy the other’s). Every structure decomposes into 2×2 cells; write which.',
    firstDefinedIn: 'practice/12-futures-to-options',
    seeAlso: ['straddle', 'vertical-spread', 'multi-leg', 'two-by-two'],
    kind: 'options',
  },
  {
    id: 'defined-risk',
    headword: 'defined-risk',
    aliases: ['undefined-risk', 'naked'],
    shortDef:
      'A position whose worst cell on the risk graph is bounded in dollars. Undefined-risk (naked short options) has an unbounded cell. No stage of the ramp includes an undefined-risk structure.',
    firstDefinedIn: 'practice/12-futures-to-options',
    seeAlso: ['risk-graph', 'variance-risk-premium', 'margin'],
    kind: 'hygiene',
  },
  {
    id: 'assignment',
    headword: 'assignment',
    aliases: ['early exercise', 'assigned'],
    shortDef:
      'Being delivered the underlying because an option you sold was exercised. American-style, physically settled options (SPY, QQQ, ES options into the future) can assign, including overnight and around dividends. European cash-settled index options (SPX, XSP) cannot. Market-general.',
    firstDefinedIn: 'practice/12-futures-to-options',
    seeAlso: ['american-style', 'physically-settled', 'pin-risk', 'settlement'],
    kind: 'market-general',
  },
  {
    id: 'pin-risk',
    headword: 'assignment and pin risk',
    aliases: ['pin risk'],
    shortDef:
      'Ending a day with a position you did not intend because the index settled near your strike and exercise or settlement went a way you did not plan. Know exercise style, settlement style, and settlement time for every product before holding it into a close.',
    firstDefinedIn: 'practice/12-futures-to-options',
    seeAlso: ['assignment', 'pm-settlement', 'settlement', 'pin'],
    kind: 'market-general',
  },
  {
    id: 'es-options',
    headword: 'ES options',
    aliases: ['options on futures', 'E-mini S&P options'],
    shortDef:
      'Options on the ES future at CME: American, deliverable into the future, margined under the futures system, tradable nearly around the clock. Not on any Gexbot screen. A third venue beside SPX and SPY. Market-general.',
    firstDefinedIn: 'practice/12-futures-to-options',
    seeAlso: ['cme', 'es-future', 'partial-picture', 'margin'],
    kind: 'market-general',
  },
  {
    id: 'risk-graph',
    headword: 'risk graph',
    aliases: ['scenario grid', 'P&L grid'],
    shortDef:
      'P&L of a position across a range of index prices, a range of implied vols, and several clocks. Replaces the futures stop-and-size. Run before every structure with a gap of three expected moves and an implied-vol doubling.',
    firstDefinedIn: 'practice/12-futures-to-options',
    seeAlso: ['defined-risk', 'greek-attribution', 'expected-move'],
    kind: 'hygiene',
  },
  {
    id: 'margin',
    headword: 'margin',
    aliases: ['Reg T', 'portfolio margin', 'SPAN'],
    shortDef:
      'Capital the broker holds against a position. Equity and index options: Reg T or portfolio-margin rules. Futures options: the futures system. The same short put consumes very different capital in each, and a vol spike raises the requirement while the position is losing. Market-general.',
    firstDefinedIn: 'practice/12-futures-to-options',
    seeAlso: ['defined-risk', 'risk-graph', 'es-options'],
    kind: 'market-general',
  },
  {
    id: 'mid-price',
    headword: 'mid-price',
    aliases: ['mid', 'fill quality'],
    shortDef:
      'The midpoint of an option’s bid and ask. A price you negotiate toward, not one you can hit. Log every fill’s distance from mid, time of day, and whether you crossed or rested. Simulators fill at mid; markets do not.',
    firstDefinedIn: 'practice/12-futures-to-options',
    seeAlso: ['bid-ask-spread', 'aggressor', 'multi-leg'],
    kind: 'market-general',
  },
  {
    id: 'xsp',
    headword: 'XSP',
    aliases: ['Mini-SPX', 'MES'],
    shortDef:
      'The tenth-size SPX index option: cash-settled, European, PM-settled. One ATM XSP ≈ one MES (micro E-mini S&P) of delta, as one ATM SPX ≈ one ES and one ATM SPY ≈ one MES. The usual first live instrument for a futures trader. Market-general.',
    firstDefinedIn: 'practice/12-futures-to-options',
    seeAlso: ['spx', 'spy', 'es-future', 'point-value', 'cash-settled'],
    kind: 'market-general',
  },
  {
    id: 'iv-crush',
    headword: 'IV crush',
    aliases: ['vol crush'],
    shortDef:
      'The collapse of implied vol when a scheduled release passes. A long option can lose on a move in its favor. Shows in the vega row of attribution and the regime-paid line of the position sentence.',
    firstDefinedIn: 'practice/12-futures-to-options',
    seeAlso: ['event-day', 'implied-vol', 'vega', 'greek-attribution'],
    kind: 'options',
  },
  {
    id: 'leg-in-risk',
    headword: 'leg-in risk',
    aliases: ['legging'],
    shortDef:
      'Entering one leg of a spread and hoping to get the other at a better price, briefly holding a structure you did not choose. Use complex orders until you can explain why you are legging.',
    firstDefinedIn: 'practice/12-futures-to-options',
    seeAlso: ['multi-leg', 'vertical-spread', 'mid-price'],
    kind: 'hygiene',
  },
  {
    id: 'early-window',
    headword: 'early window',
    aliases: ['early claim window', '09:29–11:00'],
    shortDef:
      'The source-of-truth claim clock for mapping Gexbot onto ES and NQ early in the session, about 09:29–11:00 Eastern. State starts empty at 09:30; levels carry a pressure word only once leftover reaches their strike. After 11:00, rename the claim.',
    firstDefinedIn: 'practice/09a-early-session',
    alsoAppears: ['practice/11-further-learning'],
    seeAlso: ['cash-rth', 'clock-family', 'knowability', 'early-session'],
    kind: 'hygiene',
  },
  {
    id: 'daily-level',
    headword: 'daily level',
    aliases: ['daily support', 'daily resistance', 'daily-chart level'],
    shortDef:
      'A price where the daily chart has turned more than once across days or weeks, usually near a round number. Round numbers are also where monthly and weekly open interest piles up, so a daily level and a Classic open-interest mountain often coincide. That is old inventory whose hedge is already on: a full-group sentence, not this morning’s. Market-general.',
    firstDefinedIn: 'practice/09a-early-session',
    seeAlso: ['gex-by-oi', 'full', 'latest', 'h11', 'compound-zone'],
    kind: 'market-general',
  },
  {
    id: 'early-phase',
    headword: 'early phases',
    aliases: ['phase 0', 'phase 1', 'phase 2', 'phase 3', 'phase table'],
    shortDef:
      'Chapter 9a’s division of the early window by what Gexbot can say. Phase 0 (pre-open): levels; Classic OI only; pressure unknown. Phase 1 (09:30–09:45): fifteen-minute range forming; Classic volume and max-change; State too thin. Phase 2 (09:45–10:30): leftover nameable; H12, H13, grades. Phase 3 (10:30–11:00): sequence for H3; early window closes. Boundaries approximate; knowability decides each day.',
    firstDefinedIn: 'practice/09a-early-session',
    seeAlso: ['knowability', 'early-window', 'level-grade', 'spike-sequence-noise'],
    kind: 'hygiene',
  },
  {
    id: 'compound-zone',
    headword: 'compound zone',
    aliases: ['stacked levels'],
    shortDef:
      'Two or more tape levels within a few points of each other — a daily level and yesterday’s high, with the fifteen-minute-range high forming under them. A tape fact. Gexbot’s contribution comes in three grades; only Grade C carries a pressure word.',
    firstDefinedIn: 'practice/09a-early-session',
    seeAlso: ['level-grade', 'daily-level', 'prior-day-extreme', 'opening-range', 'confluence-node'],
    kind: 'hygiene',
  },
  {
    id: 'level-grade',
    headword: 'level grades (A, B, C)',
    aliases: ['Grade A', 'Grade B', 'Grade C'],
    shortDef:
      'What Gexbot adds to a tape level. Grade A: a full-group Classic open-interest major sits there — location, owner unknown. Grade B: Classic max-change lights up there in the first minutes — attention, sign unknown. Grade C: State leftover at that strike stands out on today’s ladder — now wall or fuel by vol regime, or pressure none if thin. Only Grade C carries a pressure word.',
    firstDefinedIn: 'practice/09a-early-session',
    alsoAppears: ['practice/09b-structure-and-gexbot'],
    seeAlso: ['gex-by-oi', 'max-change', 'options-profile', 'h4', 'h10', 'h13', 'confluence-node'],
    kind: 'hygiene',
  },
  {
    id: 'compression-lean',
    headword: 'compression lean',
    shortDef:
      'The day is starting narrow: overnight range inside yesterday’s, fifteen-minute range inside both. A lean, not a day-type. Chapter 9b’s range day is the full-day form once the tape has shown it.',
    firstDefinedIn: 'practice/09a-early-session',
    seeAlso: ['continuation-lean', 'range-day', 'e1', 'overnight-structure'],
    kind: 'hygiene',
  },
  {
    id: 'continuation-lean',
    headword: 'continuation lean',
    shortDef:
      'The day is starting displaced: overnight range beyond a yesterday extreme, or a gap. A lean, not a day-type. Chapter 9b’s trend day is the full-day form once the tape has shown it. If the overnight move carried spot past a Classic open-interest major, that node is now behind price, re-marked, owner unknown.',
    firstDefinedIn: 'practice/09a-early-session',
    seeAlso: ['compression-lean', 'trend-day', 'e2', 'gap', 'h10'],
    kind: 'hygiene',
  },
  {
    id: 'open-drive',
    headword: 'open drive',
    shortDef:
      'Price runs from the 09:30 open in one direction without a pause. A tape fact. Paired in E4 with a failed break at a compound zone and, on SPX, with H1.',
    firstDefinedIn: 'practice/09a-early-session',
    seeAlso: ['failed-break', 'e4', 'h1', 'opening-auction'],
    kind: 'market-general',
  },
  {
    id: 'e1',
    headword: 'E1',
    aliases: ['compression lean into a fade at a wall'],
    shortDef:
      'Early read: compression lean, falling vol by the skew dots, well-distributed minus-convexity and flat nets by about 10:15. Fade a fifteen-minute-range edge only where Grade-C customer-long leftover sits. Target the nearest transition zone. Inferred.',
    firstDefinedIn: 'practice/09a-early-session',
    seeAlso: ['compression-lean', 'h6', 'h7', 'h12', 's8'],
    kind: 'hygiene',
  },
  {
    id: 'e2',
    headword: 'E2',
    aliases: ['continuation lean through the fifteen-minute range'],
    shortDef:
      'Early read: open outside yesterday’s range, fifteen-minute range breaks with the displacement, Grade-C customer-short leftover ahead in falling vol, persistent minus-convexity drip. Yesterday’s extreme behind price is a checkpoint, not a fade. Inferred.',
    firstDefinedIn: 'practice/09a-early-session',
    seeAlso: ['continuation-lean', 'h3', 'h12', 'h13', 's3', 's7'],
    kind: 'hygiene',
  },
  {
    id: 'e3',
    headword: 'E3',
    aliases: ['gap-fill path'],
    shortDef:
      'Early read: in Phases 0–1 only Classic marks the path to the fill (location, owner unknown). Once leftover builds: customer-short between price and the close → fuel toward the fill; customer-long → stall before it. Rewrite every fifteen minutes. Inferred.',
    firstDefinedIn: 'practice/09a-early-session',
    seeAlso: ['gap', 'h10', 'h13', 's4'],
    kind: 'hygiene',
  },
  {
    id: 'e4',
    headword: 'E4',
    aliases: ['open drive into a compound zone'],
    shortDef:
      'Early read: an open drive reaches a compound zone, prints beyond, returns inside (failed break). On SPX, pair with H1 — a standout plus GEX-orderflow bar with minus convexity — for a local-top candidate. Rename on NQ. Folklore on the H1 sentence; inferred combination.',
    firstDefinedIn: 'practice/09a-early-session',
    seeAlso: ['open-drive', 'failed-break', 'compound-zone', 'h1', 's6', 'transfer-rule'],
    kind: 'hygiene',
  },
  {
    id: 'e5',
    headword: 'E5',
    aliases: ['overnight extreme taken before the open'],
    shortDef:
      'Early read: price opens above the overnight high. Location only until Grade-C leftover forms under price (plus-DEX below spot, or customer-long in falling vol). Do not write “support” from the tape alone. Inferred.',
    firstDefinedIn: 'practice/09a-early-session',
    seeAlso: ['overnight-structure', 'level-grade', 'dex-ladder'],
    kind: 'hygiene',
  },
  {
    id: 'e6',
    headword: 'E6',
    aliases: ['range edge on an open-interest mountain'],
    shortDef:
      'Early read and deliberate negative: the fifteen-minute-range edge forms exactly on a Classic open-interest major. Grade A. Location, owner unknown. The pile is full-group and old; the edge is latest and young (H11). Nothing to falsify until Grade C. The most common early misread. Inferred.',
    firstDefinedIn: 'practice/09a-early-session',
    seeAlso: ['level-grade', 'gex-by-oi', 'opening-range', 'h10', 'h11', 'h13'],
    kind: 'hygiene',
  },

  // ---------------------------------------------------------------------------
  // Options on-ramp sub-chapters (docs/on-ramp/**): holder-seat terms.
  // Main chapters never depend on these. See .cursor/rules/audience.mdc.
  // ---------------------------------------------------------------------------
  {
    id: 'seat',
    headword: 'seat',
    aliases: ['customer seat', 'dealer seat', 'the other seat'],
    shortDef:
      'Which side of an options ticket a sentence is written from. The customer seat carries incentive; the dealer seat carries mandate. Main chapters infer the dealer seat from outside; on-ramp pages sit the reader in the customer seat.',
    firstDefinedIn: 'on-ramp/00-intro',
    seeAlso: ['pressure-word', 'incentive', 'mandate', 'customer', 'dealer'],
    kind: 'hygiene',
  },
  {
    id: 'footprint',
    headword: 'footprint',
    shortDef:
      'The set of traces one option trade leaves across the Gexbot screens: in today’s volume at once, in leftover if it was the aggressive side and was not cancelled, in open interest tonight if still held. None of the traces carries the trader’s name.',
    firstDefinedIn: 'on-ramp/01-what-gexbot-is',
    alsoAppears: ['practice/12-futures-to-options'],
    seeAlso: ['volume', 'open-interest', 'leftover', 'unsigned'],
    kind: 'options',
  },
  {
    id: 'break-even',
    headword: 'break-even',
    aliases: ['breakeven'],
    shortDef:
      'For a bought call, the strike plus the debit paid; for a bought put, the strike minus it. The index level at which the position is flat at expiry. A point on the payoff, not a level on the chart.',
    firstDefinedIn: 'on-ramp/02-classic',
    seeAlso: ['strike', 'debit', 'expiry'],
    kind: 'options',
  },
  {
    id: 'mark',
    headword: 'mark',
    aliases: ['mark-to-market', 'marked value'],
    shortDef:
      'The price the market would pay for a position right now, before expiry. P&L on an open option is mark minus debit (or credit minus mark). The mark moves with price, with implied vol, and with the clock.',
    firstDefinedIn: 'on-ramp/02-classic',
    alsoAppears: ['on-ramp/04-state', 'on-ramp/07-clocks-and-late-greeks'],
    seeAlso: ['premium', 'debit', 'theta', 'implied-vol'],
    kind: 'options',
  },
  {
    id: 'counterparty',
    headword: 'counterparty',
    shortDef:
      'The other side of your ticket: the dealer who absorbed your print and now carries the mirror position under mandate. Chapter 3’s hedge chain, with you as link 1, is a description of what your counterparty does next.',
    firstDefinedIn: 'on-ramp/03-classification',
    alsoAppears: ['practice/12-futures-to-options'],
    seeAlso: ['dealer', 'absorb', 'hedge-chain', 'mandate'],
    kind: 'options',
  },
  {
    id: 'vol-paid',
    headword: 'vol paid',
    aliases: ['implied vol at entry', 'regime paid'],
    shortDef:
      'The implied volatility at which a position was opened. Part of the debit was a guess about movement; if the guess falls afterwards the mark falls with price unchanged. The vol regime, seen from the holder’s seat, is the price paid.',
    firstDefinedIn: 'on-ramp/04-state',
    alsoAppears: ['on-ramp/09-grammar-and-journal', 'practice/12-futures-to-options'],
    seeAlso: ['implied-vol', 'vol-regime', 'mark', 'h12'],
    kind: 'options',
  },
  {
    id: 'single-leg',
    headword: 'single-leg position',
    aliases: ['single leg', 'one-leg position'],
    shortDef:
      'A position in one contract at one strike: long call, long put, short call, or short put. The four cells of the 2×2 are the four single-leg positions a holder can own, and what a cell wants is what its holder wants.',
    firstDefinedIn: 'on-ramp/05-orderflow',
    seeAlso: ['two-by-two', 'long-call', 'long-put', 'short-call', 'short-put', 'multi-leg'],
    kind: 'options',
  },
  {
    id: 'notional',
    headword: 'notional',
    aliases: ['notional value', 'dollars controlled'],
    shortDef:
      'The dollar value one contract controls: multiplier times index level. SPX at 6000 is $600,000 per contract; ES at 6000 is $300,000. Delta times notional is the position’s exposure in dollars, which is how a futures size translates into an options size.',
    firstDefinedIn: 'on-ramp/06-nq-es-layer',
    seeAlso: ['spx-multiplier', 'ndx-multiplier', 'point-value', 'share-equivalent'],
    kind: 'options',
  },
  {
    id: 'delta-drift',
    headword: 'delta drift',
    shortDef:
      'A change in a position’s delta caused by the clock (charm) or by implied vol (vanna), not by price. The dealer’s re-hedge of your drift is futures flow you did not cause by moving. A futures position has no delta drift.',
    firstDefinedIn: 'on-ramp/07-clocks-and-late-greeks',
    alsoAppears: ['practice/12-futures-to-options'],
    seeAlso: ['charm', 'vanna', 'delta', 'clock-rehedge'],
    kind: 'options',
  },
  {
    id: 'own-strike',
    headword: 'own strike',
    shortDef:
      'The strike a holder has a position at. At the own strike every Chapter 8 heuristic stops describing a crowd and starts describing the holder; a wall read there is a read about the holder’s own incentive.',
    firstDefinedIn: 'on-ramp/08-heuristics-as-reading',
    seeAlso: ['strike', 'h4', 'h6', 'heuristic'],
    kind: 'hygiene',
  },
  {
    id: 'vol-falsifier',
    headword: 'vol falsifier',
    aliases: ['third falsifier'],
    shortDef:
      'The implied-vol condition under which a holder’s thesis is dead regardless of price — written in the journal line beside the price falsifier and the leftover falsifier. A curved position can be falsified with price untouched.',
    firstDefinedIn: 'on-ramp/09-grammar-and-journal',
    seeAlso: ['falsifier', 'dual-falsifier', 'vol-paid', 'journal-line'],
    kind: 'hygiene',
  },
  {
    id: 'opening-vol',
    headword: 'opening vol',
    shortDef:
      'The implied volatility quoted in the first minutes of the session, before any leftover exists to test it. Priced from the overnight, not from today. A ticket signed at 09:31 carries a vol paid that no screen can yet judge.',
    firstDefinedIn: 'on-ramp/09a-early-session',
    seeAlso: ['implied-vol', 'vol-paid', 'early-phase', 'level-grade'],
    kind: 'options',
  },
  {
    id: 'strike-selection',
    headword: 'strike selection',
    shortDef:
      'Choosing which strike a position sits at from where structure and leftover sit. A strike inside customer-long leftover at a swing high puts the holder in the wall; a strike at a crowded short-convexity node puts them where the shove lands. Described here, not recommended.',
    firstDefinedIn: 'on-ramp/09b-structure-and-gexbot',
    seeAlso: ['structural-location', 's2', 'h6', 'multi-leg'],
    kind: 'hygiene',
  },
  {
    id: 'holders-misread',
    headword: 'holder’s misread',
    shortDef:
      'The holder-seat form of a Chapter 10 reading misread. The same error that costs a reader a thesis costs a holder premium: “DEX bar = pending buying” becomes “buying calls makes the market go up.”',
    firstDefinedIn: 'on-ramp/10-misreads-and-mastery',
    seeAlso: ['imported-tool-misread', 'guardrail', 'already-hedged-vs-pending'],
    kind: 'hygiene',
  },
  {
    id: 'paper-position',
    headword: 'paper position',
    aliases: ['hypothetical position'],
    shortDef:
      'A position written down at the open but not held, tracked at market marks and attributed at the close with Chapter 11’s ledger. The on-ramp’s way of running a holder’s arithmetic with no money at risk.',
    firstDefinedIn: 'on-ramp/11-further-learning',
    alsoAppears: ['practice/12-futures-to-options'],
    seeAlso: ['gamma-theta-tradeoff', 'straddle', 'mark', 'journal-line'],
    kind: 'hygiene',
  },
  {
    id: 'hand-price',
    headword: 'hand price',
    shortDef:
      'The price of the at-the-money option worked out in the head from index level, time to expiry, and implied vol, before looking at the chain. Chapter 12’s Stage 1 gate is a hand price inside the bid–ask most days.',
    firstDefinedIn: 'on-ramp/12-futures-to-options',
    seeAlso: ['straddle', 'expected-move', 'atm', 'bid-ask-spread'],
    kind: 'hygiene',
  },

  // ---------------------------------------------------------------------------
  // Adjacent concepts: named at the end of a chapter, taught nowhere in the book.
  // Two sentences each. firstDefinedIn = the chapter whose block lists it.
  // ---------------------------------------------------------------------------
  {
    id: 'option-chain',
    headword: 'option chain',
    aliases: ['chain'],
    shortDef:
      'The table a broker shows for one underlying: every listed strike and expiry, with bid, ask, volume, and open interest per contract.',
    bearsOn:
      'It is the screen you would sign a ticket from: the bid and ask that set your debit, the mark, and the open interest at your strike are all read off it, and every Gexbot picture is computed from the same table.',
    evidence: 'market-general',
    reading: 'Hull, Options, Futures, and Other Derivatives, the chapter on the mechanics of options markets.',
    firstDefinedIn: 'on-ramp/02-classic',
    seeAlso: ['strike', 'expiry', 'open-interest'],
    kind: 'adjacent',
  },
  {
    id: 'otc-index-options',
    headword: 'OTC index options and variance swaps',
    aliases: ['over-the-counter options', 'variance swap'],
    shortDef:
      'Index option and volatility contracts negotiated privately between a bank and a client, not listed on an exchange.',
    bearsOn:
      'Their hedges land in ES and in listed SPX options too, and no listed feed — Gexbot included — sees the original trade; part of the hedge complex is off-screen by construction.',
    evidence: 'market-general',
    reading: 'Gatheral, The Volatility Surface (2006), the chapter on volatility derivatives.',
    firstDefinedIn: 'plans/01-what-gexbot-is',
    seeAlso: ['partial-picture', 'index-options'],
    kind: 'adjacent',
  },
  {
    id: 'daily-expirations',
    headword: 'daily expirations',
    aliases: ['SPXW', 'weeklys', 'Monday / Wednesday / Friday expiries'],
    shortDef:
      'As of 2025, Cboe lists SPX options expiring every trading day (ticker SPXW) alongside the standard monthly (SPX) that settles on the third Friday morning.',
    bearsOn:
      'It is why a 0DTE ticket exists every session and why the latest group carries most of the gamma; a holder choosing an expiry is choosing among these, and the monthly settles on a different clock.',
    evidence: 'market-general',
    reading: 'Cboe, SPX Weeklys and End-of-Month options contract specifications.',
    firstDefinedIn: 'on-ramp/02-classic',
    seeAlso: ['zero-dte', 'latest', 'expiry'],
    kind: 'adjacent',
  },
  {
    id: 'occ-open-interest',
    headword: 'OCC and the open-interest count',
    aliases: ['Options Clearing Corporation', 'OCC'],
    shortDef:
      'The Options Clearing Corporation clears every listed U.S. option and publishes open interest once a day, after the close.',
    bearsOn:
      'That is why Classic’s OI map is “last night’s snapshot”: the count cannot include today until tomorrow, so a reader waiting for OI to move intraday is watching the wrong series.',
    evidence: 'market-general',
    reading: 'OCC, Characteristics and Risks of Standardized Options, the chapter on the clearing process.',
    firstDefinedIn: 'plans/02-classic',
    seeAlso: ['open-interest', 'gex-by-oi'],
    kind: 'adjacent',
  },
  {
    id: 'trade-classification-algorithms',
    headword: 'trade classification algorithms',
    aliases: ['Lee–Ready', 'quote rule', 'tick rule'],
    shortDef:
      'Published methods that infer whether the buyer or the seller was the aggressor from where a print sits relative to the bid and the ask at that moment. Tested against data where the true side is known, they misclassify a measurable share of trades, and more of them on midpoint fills and when the quote is moving.',
    bearsOn:
      'Gexbot’s customer-long and customer-short signing is the same kind of inference, and its method and error rate are not stated. Treat the sign as inferred, not observed, and expect it to be weakest on fast prints and midpoint fills.',
    evidence: 'market-general',
    evidenceNote: 'Gexbot method not stated',
    reading: 'Lee and Ready, “Inferring trade direction from intraday data” (1991, Journal of Finance).',
    firstDefinedIn: 'plans/03-classification',
    seeAlso: ['aggressor', 'classification-engine', 'not-stated'],
    kind: 'adjacent',
  },
  {
    id: 'floor-and-negotiated-prints',
    headword: 'floor and negotiated prints',
    aliases: ['RFQ', 'block trade', 'crossed order'],
    shortDef:
      'Large SPX orders are often arranged away from the electronic book — negotiated on the Cboe trading floor or through a request-for-quote to a set of market makers — and then printed to the tape as a single trade once the terms are agreed.',
    bearsOn:
      'For such a print there may have been no spread to cross in the ordinary sense, so “who was the aggressor” is ambiguous. The sign on one very large bar is weaker evidence than the same sign on a run of small ones.',
    evidence: 'market-general',
    reading: 'Harris, Trading and Exchanges (2003), the chapter on block trading.',
    firstDefinedIn: 'plans/03-classification',
    seeAlso: ['aggressor', 'customer-long', 'customer-short'],
    kind: 'adjacent',
  },
  {
    id: 'box-spread',
    headword: 'box spread',
    aliases: ['box'],
    shortDef:
      'A call vertical and the mirror put vertical at the same two strikes, which together pay a fixed amount at expiry no matter where the index closes. Because the payoff is certain, large SPX boxes are traded as a way to lend or borrow cash at an implied interest rate.',
    bearsOn:
      'Four legs that only make sense as one position: heavy volume, almost no net risk, and a Classic pile that is financing rather than an opinion. The clearest case of why Gexbot’s legs are not your position.',
    evidence: 'market-general',
    reading: 'Natenberg, Option Volatility and Pricing (2015), the chapter on synthetics and arbitrage relationships.',
    firstDefinedIn: 'on-ramp/09b-structure-and-gexbot',
    seeAlso: ['multi-leg', 'gex-by-volume', 'none-pressure'],
    kind: 'adjacent',
  },
  {
    id: 'correlation-dispersion',
    headword: 'correlation and dispersion',
    aliases: ['implied correlation', 'dispersion trading'],
    shortDef:
      'Index implied volatility is roughly the average single-stock volatility times how correlated the stocks are expected to be; trading one against the other is dispersion.',
    bearsOn:
      'Index IV — and so the mark on your ticket against the vol you paid — can move because expected correlation moved, with no news about the index itself.',
    evidence: 'market-general',
    reading: 'Bennett, Trading Volatility (2014), the chapter on correlation and dispersion.',
    firstDefinedIn: 'on-ramp/04-state',
    seeAlso: ['implied-vol', 'vol-regime', 'h12'],
    kind: 'adjacent',
  },
  {
    id: 'put-call-parity',
    headword: 'put–call parity',
    aliases: ['synthetic forward', 'conversion (parity)', 'reversal'],
    shortDef:
      'For the same strike and expiry, a long call plus a short put equals a long forward on the index; arbitrage keeps the three prices tied.',
    bearsOn:
      'It is why the four single-leg positions are not four independent bets: a bought call and a sold put at one strike together behave like a long future, and the prices of the three are tied.',
    evidence: 'market-general',
    reading: 'Hull, Options, Futures, and Other Derivatives, the chapter on properties of stock options.',
    firstDefinedIn: 'on-ramp/05-orderflow',
    seeAlso: ['two-by-two', 'multi-leg'],
    kind: 'adjacent',
  },
  {
    id: 'put-call-ratio',
    headword: 'put/call ratio',
    aliases: ['P/C ratio'],
    shortDef: 'Put volume divided by call volume, a widely quoted sentiment number.',
    bearsOn:
      'It counts contracts with no sign, no gamma weight, and no cancellation; aggregate DEX split by call and put is the residual cousin, and the two can disagree all day.',
    evidence: 'market-general',
    reading:
      'Pan and Poteshman, “The information in option volume for future stock prices” (2006, Review of Financial Studies).',
    firstDefinedIn: 'plans/05-orderflow',
    seeAlso: ['agg-dex', 'volume'],
    kind: 'adjacent',
  },
  {
    id: 'futures-fair-value',
    headword: 'futures fair value and carry',
    aliases: ['cost of carry', 'forward price', 'fair value'],
    shortDef:
      'A futures price is not the cash index. It sits above or below it by the cost of carrying the basket until the future expires — the interest that could be earned on the cash, minus the dividends the stocks will pay — and that gap, the future’s fair value, shrinks toward zero as expiry approaches.',
    bearsOn:
      'It is why the basis exists at all, why it drifts through the session as rate and dividend expectations move, and why it jumps when the front contract rolls. A converted strike is therefore a moving target, never exactly a futures price.',
    evidence: 'market-general',
    reading: 'Hull, Options, Futures, and Other Derivatives, the chapter on forward and futures prices.',
    firstDefinedIn: 'layer/06-nq-es-layer',
    seeAlso: ['basis', 'conversion', 'roll'],
    kind: 'adjacent',
  },
  {
    id: 'index-arbitrage',
    headword: 'index arbitrage',
    aliases: ['cash–futures arbitrage', 'basis trade'],
    shortDef:
      'Desks that buy the basket of index stocks and sell the future, or the reverse, whenever the basis strays far enough from fair value to pay for the trade, then hold the two legs against each other until the gap closes.',
    bearsOn:
      'That activity is the link that carries an options hedge done in ES into cash-index prices, and back, within seconds. Without it a dealer buying ES would move the future and not SPX, and “the hedge lands in ES” would be a fact about one contract rather than about the index.',
    evidence: 'market-general',
    reading: 'Harris, Trading and Exchanges (2003), the chapter on arbitrageurs.',
    firstDefinedIn: 'layer/06-nq-es-layer',
    seeAlso: ['basis', 'hedge', 'es-future'],
    kind: 'adjacent',
  },
  {
    id: 'structured-products',
    headword: 'structured-product hedging',
    aliases: ['autocallables', 'buffered notes'],
    shortDef:
      'Banks sell retail investors notes whose payoff is built from index options — autocallables, buffered and capped notes — and hedge the mirror of every option they have embedded. That inventory is long-dated, very large, and reported in no residual feed.',
    bearsOn:
      'Much of what sits in the full expiry group and in Classic open interest beyond today is this book. A reader who treats full-book gamma as today’s crowd has confused a multi-year hedging program with a session’s leftover, and will expect it to act on today’s clock.',
    evidence: 'market-general',
    reading: 'Bouzoubaa and Osseiran, Exotic Options and Hybrids (2010), the chapter on autocallables.',
    firstDefinedIn: 'layer/06-nq-es-layer',
    seeAlso: ['full', 'gex-by-oi', 'h11'],
    kind: 'adjacent',
  },
  {
    id: 'max-pain',
    headword: 'max pain',
    aliases: ['maximum pain'],
    shortDef:
      'Cousin folklore: the strike at which the total value of all options still open at expiry would be smallest, computed from open interest across the whole book with no sign for who owns what. The story attached is that price is drawn there because option holders lose the most.',
    bearsOn:
      'It is a whole-book, unsigned, expiry-day number. Gexbot’s last-hour magnet is residual-only and signed, so the two can point at different strikes on the same afternoon, and a reader who conflates them has imported an owner shortcut this book rejects.',
    evidence: 'folklore',
    reading:
      'Ni, Pearson, and Poteshman, “Stock price clustering on option expiration dates” (2005, Journal of Financial Economics), for what pinning evidence actually shows.',
    firstDefinedIn: 'layer/07-clocks-and-late-greeks',
    seeAlso: ['h5', 'minus-vanna-ladder', 'cousin-unsigned-gex'],
    kind: 'adjacent',
  },
  {
    id: 'closing-auction',
    headword: 'closing auction and MOC imbalance',
    aliases: ['closing cross', 'market-on-close', 'MOC'],
    shortDef:
      'Cash equities do not close on the last trade. They close in a single-price auction at 16:00, and in the minutes before it the exchanges publish how much buy or sell interest is still unmatched — the market-on-close imbalance.',
    bearsOn:
      'PM-settled SPX options settle on those closing prints, so the last-hour re-hedge and the auction imbalance meet at one price. A futures trader can see the imbalance; the option hedge behind part of it is invisible, and neither one explains the other.',
    evidence: 'market-general',
    reading:
      'Bogousslavsky and Muravyev, “Who trades at the close? Implications for price discovery and liquidity” (2023, Journal of Financial Markets).',
    firstDefinedIn: 'layer/07-clocks-and-late-greeks',
    seeAlso: ['pm-settlement', 'settlement', 'opening-auction'],
    kind: 'adjacent',
  },
  {
    id: 'vomma',
    headword: 'vomma',
    aliases: ['volga', 'vol of vol'],
    shortDef:
      'How vega itself changes when implied volatility changes — the second-order sensitivity to vol, in the way gamma is the second-order sensitivity to spot. Out-of-the-money options carry most of it, so their vega grows as vol rises and shrinks as vol falls.',
    bearsOn:
      'The minus-vanna ladder prices a total collapse of implied vol; whether that number allows for the sensitivities themselves changing on the way down is not stated. Read the ladder as direction and location, not size.',
    evidence: 'market-general',
    evidenceNote: 'Gexbot method not stated',
    reading: 'Taleb, Dynamic Hedging (1997), the chapters on vega and its derivatives.',
    firstDefinedIn: 'on-ramp/07-clocks-and-late-greeks',
    seeAlso: ['vega', 'vanna', 'minus-vanna-ladder'],
    kind: 'adjacent',
  },
  {
    id: 'gamma-scalping',
    headword: 'gamma scalping',
    aliases: ['scalping gamma'],
    shortDef:
      'A long-gamma holder sells the underlying into rips and buys dips against the option, collecting realized movement to pay for theta.',
    bearsOn:
      'It is what a holder of your 500 calls can do with them: sell ES into rips and buy dips against the option, supplying liquidity at their own strike without ever selling the option — H4’s incentive acted on without the sale.',
    evidence: 'market-general',
    reading: 'Sinclair, Volatility Trading (2013), the chapter on hedging.',
    firstDefinedIn: 'on-ramp/08-heuristics-as-reading',
    seeAlso: ['h4', 'self-hedge', 'fade', 'gamma-theta-tradeoff'],
    kind: 'adjacent',
  },
  {
    id: 'time-stop',
    headword: 'time stop',
    aliases: ['clock stop'],
    shortDef:
      'A rule that withdraws a read when a set amount of time passes without the expected behavior, independent of price.',
    bearsOn:
      'Clock families already say a thesis expires; a time stop is the journal-line form of that, and it is the natural falsifier for a pin thesis, which has no price to be wrong at until expiry.',
    evidence: 'market-general',
    reading: 'Sinclair, Positional Option Trading (2020), the chapter on trade management.',
    firstDefinedIn: 'practice/09-grammar-and-journal',
    seeAlso: ['falsifier', 'clock-family', 'acceptance-through'],
    kind: 'adjacent',
  },
  {
    id: 'vix-settlement',
    headword: 'VIX settlement',
    aliases: ['SOQ', 'special opening quotation', 'VIX expiration'],
    shortDef:
      'VIX futures and options settle on a Wednesday-morning auction of SPX options, the special opening quotation.',
    bearsOn:
      'That morning’s SPX opening prints include settlement orders, so Phase 1 bars and Classic volume can be large for reasons that have nothing to do with the day; know the date before you read the open.',
    evidence: 'market-general',
    reading:
      'Cboe, VIX Index settlement methodology; Griffin and Shams, “Manipulation in the VIX?” (2018, Review of Financial Studies).',
    firstDefinedIn: 'practice/09a-early-session',
    seeAlso: ['vix', 'early-phase', 'opening-auction'],
    kind: 'adjacent',
  },
  {
    id: 'opening-imbalance',
    headword: 'opening imbalance',
    aliases: ['opening cross imbalance', 'auction imbalance feed'],
    shortDef:
      'Before 09:30 the exchanges publish how much buy or sell interest is unmatched in the opening auction.',
    bearsOn:
      'It is a Phase 0 tape fact a futures trader can see; it is not an options object, and a large imbalance says nothing about who holds the Classic OI pile.',
    evidence: 'market-general',
    reading: 'Harris, Trading and Exchanges (2003), the chapter on call markets.',
    firstDefinedIn: 'practice/09a-early-session',
    seeAlso: ['opening-auction', 'early-phase'],
    kind: 'adjacent',
  },
  {
    id: 'quad-witching',
    headword: 'quadruple witching and index rebalance',
    aliases: ['quad witching', 'triple witching', 'rebalance day'],
    shortDef:
      'The third Friday of March, June, September, and December, when index futures, index options, and stock options expire together and the S&P and Nasdaq indexes rebalance at the close.',
    bearsOn:
      'Closing volume on those days is dominated by flows Gexbot does not draw, so a leftover node is a smaller share of the tape than on any other day; weight every S-read down.',
    evidence: 'market-general',
    reading:
      'Stoll and Whaley, “Program trading and expiration-day effects” (1987, Financial Analysts Journal).',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['partial-picture', 'event-day', 'roll'],
    kind: 'adjacent',
  },
  {
    id: 'nq-es-beta',
    headword: 'NQ–ES beta',
    aliases: ['relative beta', 'Nasdaq beta to the S&P'],
    shortDef: 'NQ typically moves more than ES for the same shock, by a ratio that drifts over weeks.',
    bearsOn:
      'S10 asks whether the two tapes disagree; a move that is only NQ’s usual beta to ES is agreement, not disagreement.',
    evidence: 'market-general',
    reading: 'Hull, Options, Futures, and Other Derivatives, the chapter on hedging with index futures.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['s10', 'nq-future', 'es-future'],
    kind: 'adjacent',
  },
  {
    id: 'inventory-models',
    headword: 'market-maker inventory models',
    aliases: ['Ho–Stoll', 'Avellaneda–Stoikov'],
    shortDef:
      'Models in which a dealer skews quotes and hedges in steps to keep inventory inside a risk band.',
    bearsOn:
      'They are the formal version of “hedge in bands” and of the dealer as a population that nets internally; read them after Whalley–Wilmott.',
    evidence: 'market-general',
    reading:
      'Ho and Stoll, “Optimal dealer pricing under transactions and return uncertainty” (1981, Journal of Financial Economics); Avellaneda and Stoikov, “High-frequency trading in a limit order book” (2008, Quantitative Finance).',
    firstDefinedIn: 'practice/11-further-learning',
    seeAlso: ['hedge-in-bands', 'dealer'],
    kind: 'adjacent',
  },
  {
    id: 'exercise-by-exception',
    headword: 'exercise by exception',
    aliases: ['automatic exercise', 'ex-by-ex'],
    shortDef:
      'OCC automatically exercises any option in the money by at least $0.01 at expiry unless the holder instructs otherwise.',
    bearsOn:
      'A short option one cent in the money at the close becomes a position Monday morning — shares on SPY, cash on SPX; Gap 5’s surprise has a mechanism.',
    evidence: 'market-general',
    reading: 'OCC, Characteristics and Risks of Standardized Options, the chapter on exercise and assignment.',
    firstDefinedIn: 'practice/12-futures-to-options',
    seeAlso: ['assignment', 'pin-risk', 'physically-settled'],
    kind: 'adjacent',
  },
  // Futures-side backfills for primary chapters.
  {
    id: 'spot-vol-correlation',
    headword: 'spot–vol correlation',
    aliases: ['negative spot-vol correlation', 'vol rises when the index falls'],
    shortDef:
      'Index implied volatility usually rises when the index falls and falls when it rises, strongly and persistently. The relationship is a tendency, not a law, and it breaks on some of the most important days.',
    bearsOn:
      'It is why falling-vol regimes coincide with rallies often enough that a reader is tempted to tag the regime from price direction. H12 forbids that shortcut because the days the tendency fails are exactly the days the wall-and-fuel map inverts.',
    evidence: 'market-general',
    reading:
      'Derman, “Regimes of Volatility” (1999); Bennett, Trading Volatility (2014), the chapter on the spot–vol relationship.',
    firstDefinedIn: 'plans/04-state',
    seeAlso: ['vol-regime', 'implied-vol', 'h12'],
    kind: 'adjacent',
  },
  {
    id: 'high-volume-node',
    headword: 'high-volume node',
    aliases: ['volume at price', 'volume profile node'],
    shortDef:
      'A futures price at which an unusually large share of the session’s or the week’s contracts traded, drawn by volume-at-price tools that many futures traders keep beside the chart.',
    bearsOn:
      'It is the futures-native object most often confused with a Gexbot node. Both are “a lot at one level,” but one counts traded futures at a price and the other counts option gamma at a strike; the first has no owner, no hedge, and no pressure word. A wall read that leans on the futures node has changed subject.',
    evidence: 'market-general',
    reading:
      'Dalton, Jones, and Dalton, Mind over Markets (1990), for the vocabulary; Harris, Trading and Exchanges (2003), on price clustering.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    seeAlso: ['node', 'cousin-futures-native', 'h4', 'confluence-bias'],
    kind: 'adjacent',
  },

  // Options-side items for on-ramp pages.
  {
    id: 'origin-codes',
    headword: 'origin codes',
    aliases: ['customer / firm / market-maker origin', 'account type codes'],
    shortDef:
      'Every listed option order carries an exchange tag saying whose account it is for: a public customer, a broker-dealer firm, or a registered market maker. Exchanges use the tag for fees, priority, and reporting.',
    bearsOn:
      'Gexbot’s “customer” is an aggressor label inferred from the print; the exchange’s “customer” is a declared account type. The two overlap but are not the same word, and the declared one is not on any public tape Gexbot reads.',
    evidence: 'market-general',
    reading: 'Cboe Rules, the definitions of origin codes and priority customer orders.',
    firstDefinedIn: 'on-ramp/00-intro',
    seeAlso: ['seat', 'customer', 'aggressor'],
    kind: 'adjacent',
  },
  {
    id: 'approval-levels',
    headword: 'options approval levels',
    aliases: ['trading permissions', 'account approval tiers'],
    shortDef:
      'Brokers grant options permission in tiers — bought options first, spreads next, sold uncovered options last — based on a disclosed financial profile and experience, under regulatory rules for options accounts.',
    bearsOn:
      'The seat you can sit in is decided before the first ticket. The tier also enforces, from outside, the order Chapter 12’s ramp asks you to keep from inside: defined risk before undefined.',
    evidence: 'market-general',
    evidenceNote: 'U.S. brokerage practice',
    reading: 'FINRA Rule 2360, the account approval provisions; your broker’s options agreement.',
    firstDefinedIn: 'on-ramp/00-intro',
    seeAlso: ['seat', 'defined-risk'],
    kind: 'adjacent',
  },
  {
    id: 'open-close-indicator',
    headword: 'open/close indicator',
    aliases: ['buy-to-open / sell-to-close', 'position effect flag'],
    shortDef:
      'Every option order is entered as opening or closing a position. The broker and the clearing house see the flag; it is how open interest is computed. It is not part of the public trade report.',
    bearsOn:
      'This is the mechanism behind Chapter 3’s “open versus close is not stated”: the fact exists, someone records it, and no tape Gexbot reads carries it. Your footprint is signed by aggressor, never by intent.',
    evidence: 'market-general',
    reading: 'OCC, the description of open interest computation in its data products documentation.',
    firstDefinedIn: 'on-ramp/01-what-gexbot-is',
    seeAlso: ['footprint', 'open-vs-close', 'open-interest'],
    kind: 'adjacent',
  },
  {
    id: 'opra-feed',
    headword: 'OPRA',
    aliases: ['Options Price Reporting Authority', 'consolidated options tape'],
    shortDef:
      'The single consolidated feed of quotes and trades from every U.S. options exchange. Every options data vendor, Gexbot included, reads it or a derivative of it.',
    bearsOn:
      'It is the boundary of what any options screen can see: prints, quotes, size, exchange, time. Not account, not intent, not the other legs of a complex order once it prints. Your footprint is exactly what OPRA carries about you.',
    evidence: 'market-general',
    reading: 'OPRA, Participant data specifications, the trade and quote message descriptions.',
    firstDefinedIn: 'on-ramp/01-what-gexbot-is',
    seeAlso: ['footprint', 'information-layer', 'partial-picture'],
    kind: 'adjacent',
  },
  {
    id: 'intrinsic-extrinsic',
    headword: 'intrinsic and extrinsic value',
    aliases: ['time value', 'moneyness value'],
    shortDef:
      'The mark of an option splits into the part it would be worth if exercised now — index minus strike for a call, if positive — and the rest, which is paid for the time and movement still possible.',
    bearsOn:
      'Theta eats only the extrinsic part, and the ATM 0DTE call of the running example is all extrinsic; that is why its rent is the whole ticket. A deep in-the-money option is mostly intrinsic and pays almost no rent.',
    evidence: 'market-general',
    reading: 'Natenberg, Option Volatility and Pricing (2015), the chapter on option value.',
    firstDefinedIn: 'on-ramp/02-classic',
    seeAlso: ['mark', 'theta', 'itm', 'otm', 'atm'],
    kind: 'adjacent',
  },
  {
    id: 'wholesalers-routing',
    headword: 'wholesalers and order routing',
    aliases: ['payment for order flow', 'PFOF', 'retail routing'],
    shortDef:
      'Most retail option orders are routed by the broker to a designated liquidity provider or to an exchange auction where one is guaranteed a share, in exchange for fees or price improvement, rather than to the open book.',
    bearsOn:
      'Your counterparty is often decided before your order reaches a screen. The dealer who absorbs you may have paid for the right to, and that dealer still carries mandate; routing changes who, not whether.',
    evidence: 'market-general',
    evidenceNote: 'U.S. market structure',
    reading:
      'SEC, Staff Report on Equity and Options Market Structure Conditions in Early 2021, the section on order routing and wholesalers.',
    firstDefinedIn: 'on-ramp/03-classification',
    seeAlso: ['counterparty', 'dealer', 'absorb'],
    kind: 'adjacent',
  },
  {
    id: 'iv-rank',
    headword: 'IV rank and IV percentile',
    aliases: ['IVR', 'IV percentile'],
    shortDef:
      'Two ways of placing today’s implied vol inside its own recent history: where it sits between the year’s low and high, or what share of days were lower.',
    bearsOn:
      'They are the practitioner’s answer to “was the vol I paid high or low,” which the vol regime alone does not say; a falling-vol day can still be a high-vol-paid day. Chapter 12’s morning card asks for this line without naming the tool.',
    evidence: 'market-general',
    reading: 'Sinclair, Volatility Trading (2013), the chapter on measuring and forecasting volatility.',
    firstDefinedIn: 'on-ramp/04-state',
    seeAlso: ['vol-paid', 'implied-vol', 'vol-regime'],
    kind: 'adjacent',
  },
  {
    id: 'delta-as-probability',
    headword: 'delta as a probability proxy',
    aliases: ['probability of finishing in the money'],
    shortDef:
      'An option’s delta is close to, but not equal to, the market-implied chance that it finishes in the money; the ATM 0.50 call is roughly a coin flip on the index closing above the strike.',
    bearsOn:
      'It is the quickest translation between a single-leg position and what its holder is betting on, and it is why the four cells are not four coin flips: a 0.20-delta sold put is a bet that wins about four times in five and owes a great deal the fifth time.',
    evidence: 'market-general',
    evidenceNote: 'approximation',
    reading: 'Natenberg, Option Volatility and Pricing (2015), the discussion of delta as a probability.',
    firstDefinedIn: 'on-ramp/05-orderflow',
    seeAlso: ['single-leg', 'delta', 'short-put'],
    kind: 'adjacent',
  },
  {
    id: 'settlement-value',
    headword: 'settlement value',
    aliases: ['SET', 'exercise settlement value', 'SPX closing value for settlement'],
    shortDef:
      'The official index value an expiring cash-settled option is settled against. For PM-settled SPX it is the index computed from the closing prints of every component; for AM-settled monthlies it is computed from each component’s opening print.',
    bearsOn:
      'A holder’s ticket does not settle at the last ES tick or at the 16:00 index print on the screen; it settles at a value published later, which can differ by several points from either. Where you hold through the close, this number — not your chart — decides what you own.',
    evidence: 'market-general',
    reading: 'Cboe, SPX contract specifications, the section on exercise settlement value.',
    firstDefinedIn: 'on-ramp/06-nq-es-layer',
    seeAlso: ['cash-settled', 'pm-settlement', 'settlement'],
    kind: 'adjacent',
  },
  {
    id: 'weekend-theta',
    headword: 'weekend theta',
    aliases: ['calendar-day versus trading-day decay'],
    shortDef:
      'Theta is quoted per calendar day, but no trading happens over a weekend, so market makers price some of Friday-to-Monday decay into Friday afternoon’s marks rather than letting it fall on Monday morning.',
    bearsOn:
      'A holder who reads Friday’s afternoon marks as “the index did nothing, why did I lose so much” has met the weekend priced early. It is the clearest case of the clock on your ticket running on a different calendar from your chart.',
    evidence: 'market-general',
    reading: 'Natenberg, Option Volatility and Pricing (2015), the chapter on theta; Sinclair, Volatility Trading (2013), on trading-day versus calendar-day conventions.',
    firstDefinedIn: 'on-ramp/07-clocks-and-late-greeks',
    seeAlso: ['theta', 'delta-drift', 'mark'],
    kind: 'adjacent',
  },
  {
    id: 'mark-based-stop',
    headword: 'mark-based stop',
    aliases: ['P&L stop', 'premium stop'],
    shortDef:
      'A stop written on the mark of the position — “out if the ticket is worth less than X” — rather than on the underlying’s price. It fires on price, vol, or clock alike, because the mark carries all three.',
    bearsOn:
      'It is the mechanical alternative to the price-line stop that covers one of three falsifiers. It has its own cost: a mark can gap with the spread at the open, and it does not say which of the three killed you, so the journal still needs the vol falsifier written separately.',
    evidence: 'market-general',
    reading: 'Sinclair, Positional Option Trading (2020), the chapter on trade management.',
    firstDefinedIn: 'on-ramp/09-grammar-and-journal',
    seeAlso: ['vol-falsifier', 'mark', 'falsifier'],
    kind: 'adjacent',
  },
  {
    id: 'global-trading-hours',
    headword: 'global trading hours',
    aliases: ['GTH', 'overnight SPX options session'],
    shortDef:
      'As of 2025, SPX and VIX options trade in an overnight session on Cboe, thinner and wider than the day session, with its own quotes and prints.',
    bearsOn:
      'The opening vol at 09:31 is not the first vol of the day; it inherits an overnight session’s marks, and a holder who carried a position through the night was marked, and could have been stopped on the mark, while the futures trader watched only ES.',
    evidence: 'market-general',
    reading: 'Cboe, Global Trading Hours specifications for SPX and VIX options.',
    firstDefinedIn: 'on-ramp/09a-early-session',
    seeAlso: ['opening-vol', 'mark', 'overnight-structure'],
    kind: 'adjacent',
  },
  {
    id: 'opening-rotation',
    headword: 'opening rotation',
    aliases: ['options opening process', 'series opening'],
    shortDef:
      'Options exchanges open each strike through an auction after the underlying has opened, so quotes appear in a sequence over the first minute or two and are wide or absent until each series has rotated.',
    bearsOn:
      'A ticket in the first minutes is priced against a quote that may not exist yet or may be several times its normal width. Phase 0 and Phase 1 are expensive for a holder in a way that has nothing to do with the read.',
    evidence: 'market-general',
    reading: 'Cboe Rules, the section on the opening auction process for options series.',
    firstDefinedIn: 'on-ramp/09a-early-session',
    seeAlso: ['opening-vol', 'opening-auction', 'early-phase', 'bid-ask-spread'],
    kind: 'adjacent',
  },
  {
    id: 'debit-anchoring',
    headword: 'debit anchoring',
    aliases: ['anchoring on the entry price', 'disposition effect'],
    shortDef:
      'The documented tendency to judge a position against the price paid rather than against its current prospects, and to hold losers longer than winners because of it.',
    bearsOn:
      'Every holder’s misread on this page arrives more easily when the mark is below the debit, because the misread offers a reason not to realize the loss. The guardrail is applied to the position, not to the debit.',
    evidence: 'market-general',
    reading:
      'Odean, “Are investors reluctant to realize their losses?” (1998, Journal of Finance); Kahneman, Thinking, Fast and Slow (2011), the chapter on anchors.',
    firstDefinedIn: 'on-ramp/10-misreads-and-mastery',
    seeAlso: ['holders-misread', 'mark', 'debit'],
    kind: 'adjacent',
  },
  {
    id: 'mark-to-mid',
    headword: 'mark-to-mid',
    aliases: ['marking convention', 'mid versus last'],
    shortDef:
      'Brokers and vendors value an open option at the midpoint of the current bid and ask, not at the last trade, because many strikes trade rarely and the last print can be hours old.',
    bearsOn:
      'A paper position’s daily P&L is only as honest as its marks. Mid is the convention; it is also a price you could not have traded at, so the ledger’s residual includes the spread you would have paid. Write which convention you used.',
    evidence: 'market-general',
    reading: 'Harris, Trading and Exchanges (2003), the chapter on quoted and effective spreads.',
    firstDefinedIn: 'on-ramp/11-further-learning',
    seeAlso: ['paper-position', 'mark', 'mid-price', 'bid-ask-spread'],
    kind: 'adjacent',
  },
  {
    id: 'simulated-account',
    headword: 'simulated account',
    aliases: ['paper-trading account', 'demo account'],
    shortDef:
      'A broker-provided account that accepts orders and reports fills and marks against live quotes without money. Fill logic varies: some fill at mid instantly, some require the quote to trade through.',
    bearsOn:
      'It is the tool for the first week’s loop, and its fills are its weakness: a simulator that fills at mid teaches the hand price and the ledger while teaching nothing true about execution. Stage 1 needs the marks; Stage 5 needs real fills.',
    evidence: 'market-general',
    reading: 'Your broker’s paper-trading documentation, read for how fills and marks are simulated.',
    firstDefinedIn: 'on-ramp/12-futures-to-options',
    seeAlso: ['hand-price', 'paper-position', 'mark-to-mid'],
    kind: 'adjacent',
  },
  {
    id: 'section-1256',
    headword: 'Section 1256 treatment',
    aliases: ['60/40 tax treatment'],
    shortDef:
      'Under U.S. tax law, broad-based index options such as SPX and XSP, and futures, are taxed 60 percent long-term and 40 percent short-term regardless of holding period; SPY and QQQ options are not.',
    bearsOn:
      'It changes the after-tax comparison between the Stage 5 instruments; not a reason to choose a structure, but a reason to know which contract you are in. U.S. only.',
    evidence: 'market-general',
    evidenceNote: 'U.S. only',
    reading: 'IRS Publication 550, the section on Section 1256 contracts.',
    firstDefinedIn: 'practice/12-futures-to-options',
    seeAlso: ['xsp', 'spy', 'es-options'],
    kind: 'adjacent',
  },

  // --- Adjacent, main chapters (futures / screen-reading side) ---------------
  {
    id: 'hedging-vs-speculation',
    headword: 'hedging and speculative demand',
    aliases: ['hedger', 'speculator'],
    shortDef:
      'Every trade comes from one of two reasons. A hedger holds a position elsewhere and trades to reduce its risk; a speculator trades to take on risk for expected profit.',
    bearsOn:
      'This book’s premise is that hedging demand is the part of options-market activity that can be inferred, because a hedger’s reason is written in what they already hold. The tape does not carry the reason; the labels in this introduction exist to keep inferred reasons from being read as observed ones.',
    evidence: 'market-general',
    reading: 'Hull, Options, Futures, and Other Derivatives, chapter 1, on hedgers, speculators, and arbitrageurs.',
    firstDefinedIn: 'intro',
    seeAlso: ['inferred', 'observed', 'labeling-leak'],
    kind: 'adjacent',
  },
  {
    id: 'reflexivity',
    headword: 'reflexivity',
    aliases: ['feedback loop'],
    shortDef:
      'The situation in which a reading of the market changes the market being read, because enough participants act on the same reading.',
    bearsOn:
      'Options hedging is reflexive by construction: a hedge is a trade in the index the option is written on. It is also why a public map of hedging can lose force once it is widely watched, and why every claim here carries a label rather than a promise.',
    evidence: 'market-general',
    reading: 'Soros, The Alchemy of Finance (1987), the chapter on the theory of reflexivity.',
    firstDefinedIn: 'intro',
    seeAlso: ['folklore', 'knowability'],
    kind: 'adjacent',
  },
  {
    id: 'base-rate',
    headword: 'base rate',
    aliases: ['prior probability'],
    shortDef:
      'How often something happens on its own, before any signal is considered. A price that holds seven times in ten has a base rate of seven in ten whether or not a screen pointed at it.',
    bearsOn:
      'Folklore sentences almost never state one. When the book marks a claim folklore, the missing base rate is usually what is missing; the label tells you to go and find it before the claim is worth a position.',
    evidence: 'market-general',
    reading: 'Kahneman, Thinking, Fast and Slow (2011), the chapters on base rates and representativeness.',
    firstDefinedIn: 'intro',
    seeAlso: ['folklore', 'market-general'],
    kind: 'adjacent',
  },
  {
    id: 'confirmation-bias',
    headword: 'confirmation bias',
    aliases: [],
    shortDef:
      'The tendency to notice evidence that agrees with a belief already held and to discount evidence that does not.',
    bearsOn:
      'A reader who has decided a price will hold will find the print that agrees. The verbs observed, inferred, and assumed, and the sentence the book attaches to each claim naming what would prove it wrong, are the working defence; they fix in advance what counts as being wrong.',
    evidence: 'market-general',
    reading: 'Nickerson, “Confirmation bias: a ubiquitous phenomenon in many guises” (1998, Review of General Psychology).',
    firstDefinedIn: 'intro',
    seeAlso: ['observed', 'inferred', 'assumed'],
    kind: 'adjacent',
  },
  {
    id: 'random-walk-baseline',
    headword: 'random-walk baseline',
    aliases: ['null model', 'no-information baseline'],
    shortDef:
      'The default assumption that the next move in the index is unpredictable from what is public, so any claim to read direction has to beat “no information” before it means anything.',
    bearsOn:
      'It is the standard every read in this book is measured against and the reason a read is a candidate rather than a prediction. A screen that adds nothing over the baseline is decoration, however precise it looks.',
    evidence: 'market-general',
    reading: 'Malkiel, A Random Walk Down Wall Street (1973).',
    firstDefinedIn: 'intro',
    seeAlso: ['knowability', 'inferred'],
    kind: 'adjacent',
  },
  {
    id: 'delta-one-desks',
    headword: 'delta-one desks and equity swaps',
    aliases: ['total return swap', 'delta one'],
    shortDef:
      'Bank desks that give clients index exposure through swaps and other products with no optionality, and hedge that exposure in futures and cash baskets.',
    bearsOn:
      'They are a large, steady source of ES volume with no option behind it. On a day their flow dominates, the tape is moving for reasons no options screen can show; the partial-picture caveat is partly about them.',
    evidence: 'market-general',
    reading: 'Hull, Options, Futures, and Other Derivatives, the chapter on swaps, the section on equity swaps.',
    firstDefinedIn: 'plans/01-what-gexbot-is',
    seeAlso: ['partial-picture', 'es-future'],
    kind: 'adjacent',
  },
  {
    id: 'cta-trend-following',
    headword: 'trend-following futures funds',
    aliases: ['CTA', 'managed futures', 'momentum funds'],
    shortDef:
      'Systematic funds that buy index futures after sustained rises and sell after sustained falls, on rules keyed to moving averages and lookback returns.',
    bearsOn:
      'Their orders arrive as ES flow with no option anywhere near them, and they cluster at the same moments an options hedge would fire — after a move. A rival explanation for the same tape, and the reason the book labels an inferred hedge inferred.',
    evidence: 'market-general',
    reading: 'Moskowitz, Ooi, and Pedersen, “Time series momentum” (2012, Journal of Financial Economics).',
    firstDefinedIn: 'plans/01-what-gexbot-is',
    seeAlso: ['inferred', 'partial-picture'],
    kind: 'adjacent',
  },
  {
    id: 'vol-targeting',
    headword: 'volatility-targeting and risk-parity rebalancing',
    aliases: ['vol control', 'risk parity'],
    shortDef:
      'Portfolios that hold a fixed level of risk rather than a fixed dollar size, so they sell index exposure when the market’s recent swings grow and buy it when they shrink.',
    bearsOn:
      'Their futures selling into a volatile down day looks like the hedging this book teaches and comes from a different source with a slower clock. Two forces can push the same way at once; the tape shows the sum.',
    evidence: 'market-general',
    reading: 'Moreira and Muir, “Volatility-managed portfolios” (2017, Journal of Finance).',
    firstDefinedIn: 'plans/01-what-gexbot-is',
    seeAlso: ['partial-picture', 'vol-regime'],
    kind: 'adjacent',
  },
  {
    id: 'leveraged-etf-rebalancing',
    headword: 'leveraged ETF rebalancing',
    aliases: ['leveraged and inverse ETFs', 'end-of-day rebalancing'],
    shortDef:
      'Funds promising two or three times the daily index return, or its inverse, have to trade in the direction of the day’s move near the close to reset their exposure for tomorrow.',
    bearsOn:
      'A predictable late-day futures flow that grows with the size of the move and owes nothing to options. On large-range days it is a second candidate for a last-hour push, alongside anything an options screen suggests.',
    evidence: 'market-general',
    reading: 'Cheng and Madhavan, “The dynamics of leveraged and inverse exchange-traded funds” (2009, Journal of Investment Management).',
    firstDefinedIn: 'plans/01-what-gexbot-is',
    seeAlso: ['etf', 'partial-picture'],
    kind: 'adjacent',
  },
  {
    id: 'hedge-complex-scale',
    headword: 'size of the listed hedge complex',
    aliases: ['SPX volume versus ES volume'],
    shortDef:
      'How much index exposure the listed option market controls relative to the futures market it hedges in. As of 2025, SPX options trade millions of contracts a day; ES trades over a million, on a smaller contract.',
    bearsOn:
      'The pile Classic draws is large enough that its hedges are a real share of ES volume, which is the only reason the question in this book is worth asking. Whether one strike’s pile is large enough on a given day is a separate question the histogram’s height begins to answer.',
    evidence: 'market-general',
    reading: 'Cboe Global Markets and CME Group, published daily volume statistics.',
    firstDefinedIn: 'plans/02-classic',
    seeAlso: ['histogram', 'gex-by-oi'],
    kind: 'adjacent',
  },
  {
    id: 'monthly-opex',
    headword: 'monthly expiration (OPEX)',
    aliases: ['OPEX', 'third Friday', 'monthly expiry'],
    shortDef:
      'The third Friday of each month, when the standard monthly SPX contract and most single-stock and ETF options expire together. It carries the largest open-interest piles of the month, built over weeks.',
    bearsOn:
      'Classic’s OI map is tallest into that Friday and thinnest the Monday after, when the expired pile is gone. A reader comparing histogram heights across that boundary is comparing two different inventories.',
    evidence: 'market-general',
    reading: 'Cboe, SPX contract specifications, the expiration section.',
    firstDefinedIn: 'plans/02-classic',
    seeAlso: ['open-interest', 'expiry', 'gex-by-oi'],
    kind: 'adjacent',
  },
  {
    id: 'oi-roll-off',
    headword: 'expiry roll-off of open interest',
    aliases: ['OI drop at expiration'],
    shortDef:
      'When a contract expires, every open position in it closes at once and its open interest goes to zero in the next count.',
    bearsOn:
      'The 0DTE pile you read this morning will not exist tomorrow, and yesterday’s is not in today’s map. Classic by OI is a view of surviving inventory, and a strike that looked heavy on Friday can be empty on Monday without anyone trading.',
    evidence: 'market-general',
    reading: 'OCC, Characteristics and Risks of Standardized Options, the chapter on expiration.',
    firstDefinedIn: 'plans/02-classic',
    seeAlso: ['open-interest', 'zero-dte', 'occ-open-interest'],
    kind: 'adjacent',
  },
  {
    id: 'greek-source',
    headword: 'the greek source (not stated)',
    aliases: ['which volatility feeds the gamma', 'which quote feeds the model'],
    shortDef:
      'Vendors differ in which option quote they feed the model — the resting buy price, the resting sell price, or the middle — and in how they treat a wide or stale quote.',
    bearsOn:
      'That choice is a second reason two Classic pictures of the same open interest can disagree, even after both shops have picked a model. Gexbot’s quote choice is not stated.',
    evidence: 'not stated',
    reading: 'Hull, Options, Futures, and Other Derivatives, the chapter on volatility smiles, on how a volatility is backed out of a quote.',
    firstDefinedIn: 'plans/02-classic',
    seeAlso: ['gamma', 'black-scholes', 'not-stated', 'gex-by-oi'],
    kind: 'adjacent',
  },
  {
    id: 'bulk-volume-classification',
    headword: 'bulk volume classification',
    aliases: ['BVC'],
    shortDef:
      'A method that signs volume in bulk from the price change over a bar rather than trade by trade against the quote, built for markets where individual prints are too fast or too fragmented to sign.',
    bearsOn:
      'It is one of the two families a signing engine can come from; the other is the print-against-quote family. Which family Gexbot’s engine belongs to is not stated, and the two make different errors: one on midpoint fills, the other on bars where price moved for other reasons.',
    evidence: 'market-general',
    evidenceNote: 'Gexbot method not stated',
    reading: 'Easley, López de Prado, and O’Hara, “Flow toxicity and liquidity in a high-frequency world” (2012, Review of Financial Studies).',
    firstDefinedIn: 'plans/03-classification',
    seeAlso: ['classification-engine', 'trade-classification-algorithms', 'not-stated'],
    kind: 'adjacent',
  },
  {
    id: 'quote-driven-vs-order-driven',
    headword: 'quote-driven and order-driven markets',
    aliases: ['dealer market', 'central limit order book', 'CLOB'],
    shortDef:
      'In an order-driven market like ES, anyone’s resting order can be the other side of a trade. In a quote-driven market like listed options, designated market makers post the quotes, and most customer trades are against them.',
    bearsOn:
      'This is why a “dealer” exists to infer in options and not in futures. The inventory Chapter 3 reads accrues to a small set of quoting firms because the market’s structure routes it to them, not because they choose it trade by trade.',
    evidence: 'market-general',
    reading: 'Harris, Trading and Exchanges (2003), the chapter on market structures.',
    firstDefinedIn: 'plans/03-classification',
    seeAlso: ['dealer', 'customer', 'mandate'],
    kind: 'adjacent',
  },
  {
    id: 'nbbo',
    headword: 'national best bid and offer',
    aliases: ['NBBO', 'trade-through rule'],
    shortDef:
      'The best bid and best offer across all options exchanges at a moment, which every exchange is required to honour: a print may not execute at a price worse than the best quote elsewhere.',
    bearsOn:
      'A signing engine compares each print to some quote. Across the listed options exchanges, that quote is either the NBBO or one venue’s own, and the two differ often enough to flip a sign on a fast print. Which one Gexbot uses is not stated.',
    evidence: 'market-general',
    evidenceNote: 'Gexbot method not stated',
    reading: 'SEC, Options Order Protection and Locked/Crossed Market Plan.',
    firstDefinedIn: 'plans/03-classification',
    seeAlso: ['aggressor', 'bid', 'ask', 'not-stated'],
    kind: 'adjacent',
  },
  {
    id: 'vix-futures-curve',
    headword: 'VIX futures curve',
    aliases: ['contango', 'backwardation', 'VIX term structure'],
    shortDef:
      'Futures on the VIX trade for several months out. Usually the later months price above the front (contango); in stress the front rises above them (backwardation).',
    bearsOn:
      'The curve’s shape is a slow-clock reading of the same vol regime this chapter’s dots read fast. A backwardated curve at the open is a day on which the falling-vol pin story starts with less credit; the curve is not on a Gexbot screen and is not a Gexbot object.',
    evidence: 'market-general',
    reading: 'Whaley, “Understanding the VIX” (2009, Journal of Portfolio Management).',
    firstDefinedIn: 'plans/04-state',
    seeAlso: ['vix', 'vol-regime', 'term-structure'],
    kind: 'adjacent',
  },
  {
    id: 'zero-dte-share',
    headword: '0DTE share of volume',
    aliases: ['same-day options volume share'],
    shortDef:
      'Since an SPX expiry was listed for every trading day, contracts expiring the same day had grown to roughly half of all SPX option volume on an ordinary session as of 2023.',
    bearsOn:
      'It is why State’s leftover is dominated by the latest group and why its map can be rebuilt from nothing each morning. It also means the population being inferred is mostly people who will be flat by the close, whatever their reason for the trade.',
    evidence: 'market-general',
    reading: 'Cboe Global Markets, “The rise of SPX 0DTE options” research note (2023).',
    firstDefinedIn: 'plans/04-state',
    seeAlso: ['zero-dte', 'latest', 'state'],
    kind: 'adjacent',
  },
  {
    id: 'cftc-cot',
    headword: 'Commitments of Traders report',
    aliases: ['COT', 'CFTC positioning data'],
    shortDef:
      'A weekly CFTC report of open futures positions by category — dealers, asset managers, leveraged funds — as of Tuesday’s close, published Friday.',
    bearsOn:
      'It is the closest public answer to “who owns the pile” for ES itself: signed, but three days late and net of everything. State’s residual is faster and narrower. The two are not the same object, and a reader who lines them up is comparing a week to a morning.',
    evidence: 'market-general',
    reading: 'CFTC, Explanatory Notes to the Commitments of Traders reports.',
    firstDefinedIn: 'plans/04-state',
    seeAlso: ['residual', 'unsigned', 'es-future'],
    kind: 'adjacent',
  },
  {
    id: 'depth-and-vol',
    headword: 'order-book depth and volatility',
    aliases: ['thin book', 'ES depth'],
    shortDef:
      'The size resting at each price in the ES book shrinks as volatility rises and rebuilds as it falls, so the same number of contracts moves price further on a volatile day.',
    bearsOn:
      'A hedge of a given size is not a fixed push. The same minus-DEX stack pushes harder into a thin book, which is one reason a wall that held last week can fail this week with the same height on the ladder.',
    evidence: 'market-general',
    reading: 'Harris, Trading and Exchanges (2003), the chapters on liquidity and depth.',
    firstDefinedIn: 'plans/04-state',
    seeAlso: ['dex-ladder', 'wall', 'thinner-book'],
    kind: 'adjacent',
  },
  {
    id: 'update-cadence',
    headword: 'display cadence (not stated)',
    aliases: ['refresh interval', 'snapshot timing'],
    shortDef:
      'Every live screen redraws on some schedule — per print, per second, per minute — and the choice decides whether two trades a few seconds apart appear as one bar or two.',
    bearsOn:
      'Gexbot’s cadence for the Orderflow bars is not stated. A bar is an increment over an unknown window, which is why the book reads bars as a sequence and not as events with a timestamp you can match to the ES tape.',
    evidence: 'not stated',
    reading: 'Harris, Trading and Exchanges (2003), on the difference between a trade record and a bar.',
    firstDefinedIn: 'plans/05-orderflow',
    seeAlso: ['dex-orderflow', 'spike-sequence-noise', 'not-stated'],
    kind: 'adjacent',
  },
  {
    id: 'intermarket-sweep',
    headword: 'intermarket sweep orders',
    aliases: ['ISO', 'sweep across exchanges'],
    shortDef:
      'A single order routed simultaneously to several exchanges, printing as a burst of small trades at slightly different prices within the same second.',
    bearsOn:
      'One customer’s decision arrives on the tape looking like a sequence, which is the pattern Chapter 5 asks you to weigh more than a single spike. Sweeps are a reason a burst is stronger evidence of one large intent than of many small ones.',
    evidence: 'market-general',
    reading: 'Harris, Trading and Exchanges (2003), the chapter on order routing; SEC Regulation NMS, on intermarket sweep orders.',
    firstDefinedIn: 'plans/05-orderflow',
    seeAlso: ['spike-sequence-noise', 'aggressor'],
    kind: 'adjacent',
  },
  {
    id: 'rolling-a-position',
    headword: 'rolling an option position',
    aliases: ['roll (options)', 'roll up / roll out'],
    shortDef:
      'Closing an option at one strike or expiry and opening the same kind at another in one decision, usually as a single order in two legs.',
    bearsOn:
      'On the Orderflow bars a roll prints as two opposite-signed bars at neighbouring strikes at the same moment. Neither is a new bet; the customer’s exposure moved. Read as two independent events, it doubles a conviction that is not there.',
    evidence: 'market-general',
    reading: 'Natenberg, Option Volatility and Pricing (1994), the chapter on position adjustment.',
    firstDefinedIn: 'plans/05-orderflow',
    seeAlso: ['dex-orderflow', 'open-vs-close'],
    kind: 'adjacent',
  },
  {
    id: 'trade-reporting-lag',
    headword: 'trade reporting lag',
    aliases: ['print timestamp', 'late prints'],
    shortDef:
      'An option trade is reported to the consolidated tape within seconds of execution, and negotiated trades can be reported later still, so the time a print appears is not always the time it happened.',
    bearsOn:
      'Lining an Orderflow bar up against the ES tape to the second assumes the print and the hedge are stamped on the same clock. They are not. A hedge that appears to lead its option by a few seconds may be the reporting order, not the causal one.',
    evidence: 'market-general',
    reading: 'OPRA, Participant reporting requirements, on trade reporting timeliness.',
    firstDefinedIn: 'plans/05-orderflow',
    seeAlso: ['hedge-chain', 'floor-and-negotiated-prints'],
    kind: 'adjacent',
  },
  {
    id: 'price-discovery',
    headword: 'price discovery',
    aliases: ['futures lead cash', 'lead–lag'],
    shortDef:
      'The question of which market moves first when new information arrives. For U.S. indexes the futures usually lead: ES moves, and the cash index and the options follow within seconds.',
    bearsOn:
      'Gexbot’s options screens are quoted off a market that follows the one you trade. When the conversion line moves before the strike map does, the map is catching up, not predicting; and a hedge inferred from options is a hedge in the leading market.',
    evidence: 'market-general',
    reading: 'Hasbrouck, “One security, many markets: determining the contributions to price discovery” (1995, Journal of Finance).',
    firstDefinedIn: 'layer/06-nq-es-layer',
    seeAlso: ['conversion', 'basis', 'es-future'],
    kind: 'adjacent',
  },
  {
    id: 'etf-creation-redemption',
    headword: 'ETF creation and redemption',
    aliases: ['authorized participant', 'in-kind basket'],
    shortDef:
      'Designated firms can exchange a basket of the index’s stocks for new ETF shares, or the reverse, at the end of the day. That mechanism keeps SPY and QQQ glued to the index the way index arbitrage glues the future.',
    bearsOn:
      'It is the plumbing behind the third of the three doors. A dealer hedging in SPY relies on it, and its end-of-day settlement adds one more closing flow to the ones Chapter 7 will meet.',
    evidence: 'market-general',
    reading: 'Ben-David, Franzoni, and Moussawi, “Do ETFs increase volatility?” (2018, Journal of Finance), the section on the arbitrage mechanism.',
    firstDefinedIn: 'layer/06-nq-es-layer',
    seeAlso: ['spy', 'qqq', 'index-arbitrage', 'etf'],
    kind: 'adjacent',
  },
  {
    id: 'post-close-options-window',
    headword: 'the 16:00–16:15 options window',
    aliases: ['post-close options trading', 'options close at 16:15'],
    shortDef:
      'SPX and NDX options keep trading until 16:15 ET, fifteen minutes after the cash close, priced off the still-open futures.',
    bearsOn:
      'The last hour’s re-hedge does not end when your cash chart stops. Positions opened or closed in that window print to tomorrow’s open interest and hedge in ES at 16:05, when the cash line is frozen and the basis alone is moving.',
    evidence: 'market-general',
    reading: 'Cboe, SPX contract specifications, trading hours.',
    firstDefinedIn: 'layer/07-clocks-and-late-greeks',
    seeAlso: ['cash-rth', 'closing-auction', 'basis'],
    kind: 'adjacent',
  },
  {
    id: 'opex-week-flows',
    headword: 'OPEX-week vanna and charm folklore',
    aliases: ['“vanna and charm flows”', 'monthly expiration flows'],
    shortDef:
      'A popular account holds that in the week before monthly expiration, the decay of hedges against large put piles obliges dealers to buy back futures, lifting the index into the Friday.',
    bearsOn:
      'It is the full-inventory version of the late-hour pressures this chapter teaches, applied to a week and to open interest rather than to today’s leftover. The book carries it as folklore: the mechanism is Chapter 7’s, the size and sign claims are not measured here.',
    evidence: 'folklore',
    reading: 'Ni, Pearson, and Poteshman, “Stock price clustering on option expiration dates” (2005, Journal of Financial Economics), for the evidence that does exist.',
    firstDefinedIn: 'layer/07-clocks-and-late-greeks',
    seeAlso: ['minus-vanna-ladder', 'charm-ladder', 'folklore', 'monthly-opex'],
    kind: 'adjacent',
  },
  {
    id: 'es-daily-settlement',
    headword: 'ES daily settlement price',
    aliases: ['futures settlement', 'settlement window'],
    shortDef:
      'CME sets each day’s official ES price from trades in a short window ending at 16:00 ET. Margin calls, and every futures P&L statement, are computed against it.',
    bearsOn:
      'It is a third clock inside the last hour, next to the cash close and the options close: a price some participants work to influence and that a hedger’s mark depends on. A burst at 15:59 can be about this number and nothing on any options screen.',
    evidence: 'market-general',
    reading: 'CME Group, E-mini S&P 500 daily settlement procedure.',
    firstDefinedIn: 'layer/07-clocks-and-late-greeks',
    seeAlso: ['settlement', 'closing-auction', 'es-future'],
    kind: 'adjacent',
  },
  {
    id: 'liquidity-hole',
    headword: 'liquidity hole',
    aliases: ['air pocket', 'vacuum'],
    shortDef:
      'A price zone where almost nothing rests in the book, so a small order moves price a long way until it reaches size again.',
    bearsOn:
      'A fuel read expects a push; a hole decides how far the push travels. Two identical short-convexity nodes can produce a ten-point run and a two-point one, and the difference is in the ES book, which Gexbot does not show.',
    evidence: 'market-general',
    reading: 'Taleb, Dynamic Hedging (1997), the chapter on liquidity holes.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    seeAlso: ['fuel', 'squeeze', 'thinner-book'],
    kind: 'adjacent',
  },
  {
    id: 'self-fulfilling-levels',
    headword: 'self-fulfilling technical levels',
    aliases: ['order clustering at chart levels'],
    shortDef:
      'Prices where many traders place stops and limit orders because they can all see the same chart, so the level holds or breaks partly because they expect it to.',
    bearsOn:
      'A rival explanation for a wall that holds. When a strike sits on a round number and on a level from the daily chart, the hold is over-determined, and crediting the options pile alone is a guess, not an inference.',
    evidence: 'market-general',
    reading: 'Osler, “Currency orders and exchange rate dynamics: an explanation for the predictive success of technical analysis” (2003, Journal of Finance).',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    seeAlso: ['wall', 'h1', 'daily-level'],
    kind: 'adjacent',
  },
  {
    id: 'book-resiliency',
    headword: 'order-book resiliency',
    aliases: ['replenishment', 'book refill'],
    shortDef:
      'How quickly size returns to the book after a sweep clears it. A resilient book refills within seconds; a fragile one stays thin and lets the next order travel.',
    bearsOn:
      'It separates the two outcomes at a wall. Absorption is a book that refills faster than the hedges arrive; a break is one that does not. The read names the pressure; the tape’s refill speed tells you which side is winning.',
    evidence: 'market-general',
    reading: 'Bouchaud, Bonart, Donier, and Gould, Trades, Quotes and Prices (2018), the chapters on order-book dynamics.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    seeAlso: ['absorb', 'wall', 'h1'],
    kind: 'adjacent',
  },
  {
    id: 'hedge-size-vs-volume',
    headword: 'hedge size against ES volume',
    aliases: ['participation rate'],
    shortDef:
      'A hedge matters in proportion to the volume it arrives into. A few hundred contracts is a large order in a quiet minute and invisible in a busy one; ES trades over a million contracts on an ordinary day.',
    bearsOn:
      'The heuristics compare heights on a ladder; the tape prices them in contracts per minute. A tall node on a heavy-volume day can produce less than a modest one at lunch, which is why the read is a candidate and the tape decides.',
    evidence: 'market-general',
    reading: 'CME Group, ES volume statistics; Bouchaud et al., Trades, Quotes and Prices (2018), on participation and impact.',
    firstDefinedIn: 'practice/08-heuristics-as-reading',
    seeAlso: ['fuel', 'wall', 'heuristic'],
    kind: 'adjacent',
  },
  {
    id: 'r-multiple',
    headword: 'R-multiple',
    aliases: ['R', 'risk unit'],
    shortDef:
      'A trade’s result expressed as a multiple of the amount risked at entry: a trade that risks 4 points and makes 8 is +2R.',
    bearsOn:
      'It is the futures trader’s usual scorekeeping, and the journal line here deliberately does not use it. The line grades the read — were the cell, the clock, and the falsifier right — not the result; R belongs in a separate column so the two are not confused.',
    evidence: 'market-general',
    reading: 'Tharp, Trade Your Way to Financial Freedom (1999), on R-multiples.',
    firstDefinedIn: 'practice/09-grammar-and-journal',
    seeAlso: ['journal-line', 'falsifier'],
    kind: 'adjacent',
  },
  {
    id: 'pre-registration',
    headword: 'pre-registration',
    aliases: ['write the hypothesis first'],
    shortDef:
      'Stating in advance what is being tested and what result would count against it, before looking at the outcome.',
    bearsOn:
      'The falsifier field is a pre-registration for one trade, and Chapter 11’s rule to write the hypothesis before the plot is the same idea for a study. Without it, the journal turns into a record of things that happened, all of which look explicable afterwards.',
    evidence: 'market-general',
    reading: 'Nosek, Ebersole, DeHaven, and Mellor, “The preregistration revolution” (2018, Proceedings of the National Academy of Sciences).',
    firstDefinedIn: 'practice/09-grammar-and-journal',
    seeAlso: ['falsifier', 'journal-line', 'backtest-overfitting'],
    kind: 'adjacent',
  },
  {
    id: 'calibration',
    headword: 'calibration',
    aliases: ['Brier score', 'probability scoring'],
    shortDef:
      'Whether events you call seventy percent likely happen about seventy percent of the time. A scoring rule such as the Brier score turns a run of forecasts and outcomes into one number.',
    bearsOn:
      'A read is a candidate with a confidence attached. Over forty journal lines, the reads that carried the same confidence can be scored against what happened; a chapter’s heuristic can be well calibrated for one reader and not for another.',
    evidence: 'market-general',
    reading: 'Tetlock and Gardner, Superforecasting (2015), the chapters on scoring forecasts.',
    firstDefinedIn: 'practice/09-grammar-and-journal',
    seeAlso: ['journal-line', 'heuristic', 'h1'],
    kind: 'adjacent',
  },
  {
    id: 'maximum-adverse-excursion',
    headword: 'maximum adverse excursion',
    aliases: ['MAE', 'MFE'],
    shortDef:
      'The furthest a trade went against you before it closed, and its mirror, the furthest it went in your favour. Logged per trade, their distribution shows where stops were too tight or too loose.',
    bearsOn:
      'The falsifier here is an object on the screen, not a distance, but the distance the tape traveled before the object was crossed or held is measurable and worth a column: it is how a time stop and a price stop are compared after the fact.',
    evidence: 'market-general',
    reading: 'Sweeney, Maximum Adverse Excursion (1996).',
    firstDefinedIn: 'practice/09-grammar-and-journal',
    seeAlso: ['falsifier', 'time-stop', 'journal-line'],
    kind: 'adjacent',
  },
  {
    id: 'stale-index-prints',
    headword: 'stale index prints at the open',
    aliases: ['first-print staleness', 'opening index dissemination'],
    shortDef:
      'The cash index is computed from the last trade in each component. Until every stock has opened, the published SPX and NDX include yesterday’s closes for the ones that have not, so the first minutes of the index line are partly stale.',
    bearsOn:
      'ES has traded all night and is not stale. The basis at 09:31 is wrong by construction, and converting a strike to a futures price in the first minutes inherits that error; the early-window rules are partly about this.',
    evidence: 'market-general',
    reading: 'S&P Dow Jones Indices, index calculation methodology, the section on real-time dissemination.',
    firstDefinedIn: 'practice/09a-early-session',
    seeAlso: ['basis', 'conversion', 'early-window', 'opening-auction'],
    kind: 'adjacent',
  },
  {
    id: 'european-session-lead',
    headword: 'European session lead',
    aliases: ['Euro Stoxx correlation', 'pre-open cross-market flow'],
    shortDef:
      'Between 03:00 and 09:30 ET, ES trades alongside open European index futures and the two move together closely; European desks squaring positions into their own close is a recognisable pre-open flow.',
    bearsOn:
      'The overnight structure you carry into the open was built in a market with a different lead. A high set at 04:00 on a European move has no options pile behind it, and the first test of it after 09:30 is where Gexbot’s picture begins, not where the level’s meaning does.',
    evidence: 'market-general',
    reading: 'Dimpfl and Jung, “Financial market spillovers around the globe” (2012, Applied Financial Economics).',
    firstDefinedIn: 'practice/09a-early-session',
    seeAlso: ['overnight-structure', 'early-window', 'prior-day-extreme'],
    kind: 'adjacent',
  },
  {
    id: 'premarket-etf-trading',
    headword: 'pre-market ETF trading',
    aliases: ['SPY pre-market', '04:00 session'],
    shortDef:
      'SPY and QQQ trade from 04:00 ET, thinly, while SPX and NDX options do not open until 09:30, apart from a separate overnight session on a few products.',
    bearsOn:
      'It is a cash-side price before the cash index exists for the day, and it shows where the ETF-hedging door is already trading. The options map is silent until the open; the first Orderflow bars land on a tape that has been active for hours.',
    evidence: 'market-general',
    reading: 'NYSE Arca, early trading session rules.',
    firstDefinedIn: 'practice/09a-early-session',
    seeAlso: ['spy', 'qqq', 'early-window', 'etf'],
    kind: 'adjacent',
  },
  {
    id: 'iceberg-orders',
    headword: 'iceberg orders',
    aliases: ['hidden size', 'reserve orders'],
    shortDef:
      'A resting order that shows only a slice of its size and refills the slice each time it is hit, so the visible book understates what is there.',
    bearsOn:
      'Absorption at a level is often an iceberg working. It looks like a wall holding, and it has nothing to do with options; a structure reader who sees repeated refills at the same price is watching one participant, not a dealer population.',
    evidence: 'market-general',
    reading: 'Harris, Trading and Exchanges (2003), on hidden and reserve orders.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['absorb', 'wall', 's6'],
    kind: 'adjacent',
  },
  {
    id: 'spoofing',
    headword: 'spoofing and layering',
    aliases: ['fake walls in the DOM'],
    shortDef:
      'Placing large visible orders with no intention of letting them fill, to move other traders, then cancelling them. It is illegal in U.S. futures and is still observed.',
    bearsOn:
      'The depth-ladder picture Chapter 4 borrowed has this weakness in its original: displayed size in ES can vanish. A synthetic offer inferred from minus-DEX cannot be cancelled that way, which is the one respect in which the options picture is steadier than the DOM.',
    evidence: 'market-general',
    reading: 'CFTC, Interpretive guidance and policy statement on disruptive practices (2013).',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['dex-ladder', 's1', 'wall'],
    kind: 'adjacent',
  },
  {
    id: 'index-concentration',
    headword: 'index concentration',
    aliases: ['mega-cap weight', 'top-heavy index'],
    shortDef:
      'A handful of the largest companies carry a large share of the Nasdaq-100’s weight and a smaller but still large share of the S&P 500’s, so a move in a few names moves one index more than the other.',
    bearsOn:
      'It is the mechanical reason NQ and ES disagree on some sessions, and it is not a hedging story. When S10’s disagreement is a single-name event, the NDX strike map is describing the wrong cause.',
    evidence: 'market-general',
    reading: 'Nasdaq, Nasdaq-100 index methodology, the section on weighting and rebalancing.',
    firstDefinedIn: 'practice/09b-structure-and-gexbot',
    seeAlso: ['s10', 'nq-es-beta', 'ndx'],
    kind: 'adjacent',
  },
  {
    id: 'outcome-bias',
    headword: 'outcome bias',
    aliases: [],
    shortDef:
      'Judging a decision by how it turned out rather than by what was known when it was made.',
    bearsOn:
      'The whole misread catalogue is defeated by it in one move: a wall read that broke was wrong, a wall read that held was right. The rubric here grades the naming — cell, clock, pressure sentence, falsifier — because a correctly named read that lost is a better day than a lucky one.',
    evidence: 'market-general',
    reading: 'Baron and Hershey, “Outcome bias in decision evaluation” (1988, Journal of Personality and Social Psychology).',
    firstDefinedIn: 'practice/10-misreads-and-mastery',
    seeAlso: ['mastery-rubric', 'falsifier', 'journal-line'],
    kind: 'adjacent',
  },
  {
    id: 'hindsight-bias',
    headword: 'hindsight bias',
    aliases: ['“knew it all along”'],
    shortDef:
      'After the outcome is known, remembering one’s earlier view as more certain and more correct than it was.',
    bearsOn:
      'It is why a journal line written after the close is worth little and one written at entry is worth a lot. The imported-tool misreads persist partly because, in hindsight, the chart always showed the level that mattered.',
    evidence: 'market-general',
    reading: 'Fischhoff, “Hindsight ≠ foresight: the effect of outcome knowledge on judgment under uncertainty” (1975, Journal of Experimental Psychology: Human Perception and Performance).',
    firstDefinedIn: 'practice/10-misreads-and-mastery',
    seeAlso: ['journal-line', 'imported-tool-misread'],
    kind: 'adjacent',
  },
  {
    id: 'non-stationarity',
    headword: 'non-stationarity',
    aliases: ['regime change', 'the edge that stopped working'],
    shortDef:
      'A market whose statistical behaviour changes over time, so a pattern measured in one period does not hold in the next.',
    bearsOn:
      'Every heuristic in Chapter 8 carries a label rather than a rate because of this. A read that has worked for forty sessions is evidence about those sessions; the guardrails exist so that the day it stops, the loss is a position and not an account.',
    evidence: 'market-general',
    reading: 'Lo, Adaptive Markets (2017).',
    firstDefinedIn: 'practice/10-misreads-and-mastery',
    seeAlso: ['guardrail', 'heuristic', 'backtest-overfitting'],
    kind: 'adjacent',
  },
  {
    id: 'narrative-fallacy',
    headword: 'narrative fallacy',
    aliases: ['story bias'],
    shortDef:
      'The pull toward a cause-and-effect story that fits the facts, and the confidence the story adds to facts that would not have supported it alone.',
    bearsOn:
      'The cousins in this chapter are stories: “dealers defended the strike” is a sentence the tape never printed. The forced-flow sentence with its verbs — observed, inferred, assumed — is the book’s device for keeping the story labelled as one.',
    evidence: 'market-general',
    reading: 'Taleb, The Black Swan (2007), the chapter on the narrative fallacy.',
    firstDefinedIn: 'practice/10-misreads-and-mastery',
    seeAlso: ['forced-flow-sentence', 'cousin-dealer-gamma', 'folklore'],
    kind: 'adjacent',
  },
  {
    id: 'pre-mortem',
    headword: 'pre-mortem',
    aliases: ['prospective hindsight'],
    shortDef:
      'Before acting, assuming the plan has already failed and writing down the most likely reason why.',
    bearsOn:
      'The capstone asks for a falsifier in two languages; a pre-mortem is the same exercise for a whole session. It is the cheapest way to find the misread you were about to make, because it borrows hindsight before there is anything to be biased about.',
    evidence: 'market-general',
    reading: 'Klein, “Performing a project premortem” (2007, Harvard Business Review).',
    firstDefinedIn: 'practice/10-misreads-and-mastery',
    seeAlso: ['capstone', 'dual-falsifier', 'stand-down'],
    kind: 'adjacent',
  },
  {
    id: 'adverse-selection',
    headword: 'adverse selection',
    aliases: ['informed trading', 'Glosten–Milgrom'],
    shortDef:
      'The market maker’s problem that some of the orders arriving know more than the quote does. The bid–ask spread is partly a charge for the losses to those orders.',
    bearsOn:
      'It is the other half of the microstructure the dealer’s inventory models leave out, and it is why a quoting firm widens or steps back in the first minutes: not a mandate, an information problem. Kyle and Glosten–Milgrom on the reading list are its two founding models.',
    evidence: 'market-general',
    reading: 'Glosten and Milgrom, “Bid, ask and transaction prices in a specialist market with heterogeneously informed traders” (1985, Journal of Financial Economics).',
    firstDefinedIn: 'practice/11-further-learning',
    seeAlso: ['inventory-models', 'bid-ask-spread', 'dealer'],
    kind: 'adjacent',
  },
  {
    id: 'flow-toxicity',
    headword: 'flow toxicity and VPIN',
    aliases: ['VPIN', 'probability of informed trading'],
    shortDef:
      'A measure of how one-sided and informed recent volume looks, built from signed volume in volume-clock buckets; high readings are said to precede market makers withdrawing.',
    bearsOn:
      'It is a signed-flow object from the same family as futures tape delta and Gexbot’s residual, with a published construction and a contested record. Reading it is practice in what a “flow” number can and cannot carry.',
    evidence: 'market-general',
    reading: 'Easley, López de Prado, and O’Hara, “Flow toxicity and liquidity in a high-frequency world” (2012, Review of Financial Studies).',
    firstDefinedIn: 'practice/11-further-learning',
    seeAlso: ['futures-tape-delta', 'residual', 'bulk-volume-classification'],
    kind: 'adjacent',
  },
  {
    id: 'range-based-vol-estimators',
    headword: 'range-based volatility estimators',
    aliases: ['Parkinson', 'Garman–Klass', 'high–low estimator'],
    shortDef:
      'Ways to estimate realized volatility from a bar’s high and low rather than from close-to-close changes. They use more of each bar’s information and are more precise over short windows.',
    bearsOn:
      'The morning card’s realized-vol line from five-minute ranges is a rough version of one. Knowing the proper estimators tells you how much to trust a realized number computed from a handful of bars against an implied one.',
    evidence: 'market-general',
    reading: 'Parkinson, “The extreme value method for estimating the variance of the rate of return” (1980, Journal of Business).',
    firstDefinedIn: 'practice/11-further-learning',
    seeAlso: ['realized-vol', 'morning-card', 'expected-move'],
    kind: 'adjacent',
  },
  {
    id: 'volatility-clustering',
    headword: 'volatility clustering',
    aliases: ['GARCH', 'vol persistence'],
    shortDef:
      'Large moves tend to be followed by large moves and quiet by quiet. Models of the GARCH family formalise that persistence: today’s variance depends on yesterday’s shock and yesterday’s variance.',
    bearsOn:
      'It is the statistical fact behind the vol regime as a slow object, and behind reading the morning card’s realized number as a forecast of the next hour rather than a description of the last one. Rising or falling vol is a persistent state, not a coin flip.',
    evidence: 'market-general',
    reading: 'Engle, “GARCH 101: the use of ARCH/GARCH models in applied econometrics” (2001, Journal of Economic Perspectives).',
    firstDefinedIn: 'practice/11-further-learning',
    seeAlso: ['vol-regime', 'realized-vol', 'h12'],
    kind: 'adjacent',
  },
  {
    id: 'wash-sale-rule',
    headword: 'wash-sale rule',
    aliases: ['30-day rule'],
    shortDef:
      'U.S. tax rule that disallows a loss on a security sold and repurchased within thirty days. It applies to SPY and QQQ options and their shares, and not to Section 1256 contracts, which are marked to market instead.',
    bearsOn:
      'A Stage 5 trader working the same SPY strike daily accumulates disallowed losses without noticing until the tax statement. It is a reason the instrument table in Gap 5 has a tax column, not a reason to pick a structure. U.S. only.',
    evidence: 'market-general',
    evidenceNote: 'U.S. only',
    reading: 'IRS Publication 550, the section on wash sales.',
    firstDefinedIn: 'practice/12-futures-to-options',
    seeAlso: ['section-1256', 'spy', 'qqq'],
    kind: 'adjacent',
  },
  {
    id: 'pattern-day-trader-rule',
    headword: 'pattern day trader rule',
    aliases: ['PDT', '$25,000 minimum'],
    shortDef:
      'A FINRA rule for U.S. margin securities accounts: four or more day trades in five business days classifies the account as a pattern day trader, which requires $25,000 of equity to continue as of 2025. Futures accounts are outside it.',
    bearsOn:
      'A futures trader moving to SPX or SPY options moves from an exempt account to a covered one. The Stage 5 loop of small daily trades meets this rule in its first week; it is a sizing constraint set by regulation, not by risk.',
    evidence: 'market-general',
    evidenceNote: 'U.S. only',
    reading: 'FINRA Rule 4210, the pattern day trader provisions.',
    firstDefinedIn: 'practice/12-futures-to-options',
    seeAlso: ['margin', 'xsp'],
    kind: 'adjacent',
  },
  {
    id: 'account-segregation',
    headword: 'securities and futures account segregation',
    aliases: ['SEC versus CFTC account', 'two regulators'],
    shortDef:
      'Futures and options on futures sit in an account regulated by the CFTC; listed index options and ETF options sit in a securities account regulated by the SEC. Many brokers hold them as two accounts with separate cash and margin.',
    bearsOn:
      'An SPX position and the ES you hedge it with can be in different accounts that do not offset each other for margin. ES options stay in the futures account. The instrument choice in Gap 5 is also an account choice.',
    evidence: 'market-general',
    evidenceNote: 'U.S. only',
    reading: 'Your broker’s account agreement, the sections on futures and securities accounts; CFTC and SEC customer-protection rules.',
    firstDefinedIn: 'practice/12-futures-to-options',
    seeAlso: ['margin', 'es-options', 'spx'],
    kind: 'adjacent',
  },

  // --- Adjacent, on-ramp pages (options / customer-seat side) ----------------
  {
    id: 'holder-and-writer',
    headword: 'holder and writer',
    aliases: ['writer', 'option seller', 'holder'],
    shortDef:
      'The person who bought an option holds it; the person who sold it wrote it. The holder can exercise; the writer is obliged if the holder does.',
    bearsOn:
      'Every broker screen, disclosure document, and rule uses these two words where this book uses its own labels for who is long and who is short an option. The asymmetry — a right on one side, an obligation on the other — is the seat change this on-ramp is about.',
    evidence: 'market-general',
    reading: 'OCC, Characteristics and Risks of Standardized Options, chapter 1.',
    firstDefinedIn: 'on-ramp/00-intro',
    seeAlso: ['seat', 'long-option', 'short-option'],
    kind: 'adjacent',
  },
  {
    id: 'closing-by-trade-or-exercise',
    headword: 'closing by trade or by exercise',
    aliases: ['sell to close', 'exercise'],
    shortDef:
      'A holder can end a position two ways: sell the option back into the market, or exercise it and take what the contract delivers. Most listed options are sold, not exercised; index options that settle in cash do so automatically at expiry.',
    bearsOn:
      'The choice is the holder’s, and it is invisible to any options screen until the trade prints or the count changes. It is the first place the seat change bites: a futures position ends one way, an option ends three.',
    evidence: 'market-general',
    reading: 'OCC, Characteristics and Risks of Standardized Options, the chapter on exercise and settlement.',
    firstDefinedIn: 'on-ramp/00-intro',
    seeAlso: ['seat', 'exercise-by-exception'],
    kind: 'adjacent',
  },
  {
    id: 'cash-vs-margin-account',
    headword: 'cash and margin accounts',
    aliases: ['cash account', 'margin account (options)'],
    shortDef:
      'A cash account pays for every position in full and cannot sell options it does not cover. A margin account may borrow against positions and, with approval, write options against collateral.',
    bearsOn:
      'Approval levels sit on top of the account type. The two together decide which side of an option you are permitted to be on, before any read is made.',
    evidence: 'market-general',
    reading: 'FINRA, margin account rules; your broker’s account-types page.',
    firstDefinedIn: 'on-ramp/00-intro',
    seeAlso: ['approval-levels', 'margin'],
    kind: 'adjacent',
  },
  {
    id: 'cancelled-and-corrected-prints',
    headword: 'cancelled and corrected prints',
    aliases: ['busted trade', 'trade correction'],
    shortDef:
      'An options trade can be cancelled by the exchange as erroneous, or its price or size corrected, minutes after it printed. The tape carries a cancel or correction message; the original print stays in some records.',
    bearsOn:
      'Your footprint can be rewritten after the fact. A trace that vanished is not proof the screen missed you, and a screen that keeps a cancelled print is over-counting; how a feed handles corrections is that feed’s business, and Gexbot’s handling is not stated.',
    evidence: 'market-general',
    evidenceNote: 'Gexbot handling not stated',
    reading: 'OPRA, Participant reporting requirements, on trade cancellations and corrections.',
    firstDefinedIn: 'on-ramp/01-what-gexbot-is',
    seeAlso: ['footprint', 'opra-feed', 'not-stated'],
    kind: 'adjacent',
  },
  {
    id: 'large-options-position-report',
    headword: 'large options position reporting',
    aliases: ['LOPR'],
    shortDef:
      'Brokers report to regulators, daily, every account holding 200 or more contracts on the same side of the market in one underlying, as of 2025. The report is not public.',
    bearsOn:
      'Someone does know who owns the pile; it is not the tape and not any vendor. The ownership question this book keeps calling unanswerable is unanswerable from public data, which is a narrower statement than it sounds.',
    evidence: 'market-general',
    reading: 'FINRA Rule 2360(b)(5) and the exchanges’ large options position reporting rules.',
    firstDefinedIn: 'on-ramp/01-what-gexbot-is',
    seeAlso: ['footprint', 'unsigned'],
    kind: 'adjacent',
  },
  {
    id: 'occ-option-symbol',
    headword: 'OCC option symbol',
    aliases: ['OSI symbol', '21-character option ticker'],
    shortDef:
      'The standard identifier for one listed contract: root, expiry date, call or put, and strike packed into one string, such as SPX 240315C05000000.',
    bearsOn:
      'It is how your broker’s confirmation, the OPRA tape, and any vendor name the same contract. A ticket and the trace it left agree on nothing else for certain; when a bar and your fill disagree, the symbol is the first thing to check.',
    evidence: 'market-general',
    reading: 'OCC, Options Symbology Initiative implementation guide.',
    firstDefinedIn: 'on-ramp/01-what-gexbot-is',
    seeAlso: ['footprint', 'strike', 'expiry'],
    kind: 'adjacent',
  },
  {
    id: 'intraday-strike-additions',
    headword: 'intraday strike additions',
    aliases: ['new strikes listed during the day'],
    shortDef:
      'Exchanges add strikes to a chain during the session when the index moves toward its edge, so the list of strikes is not fixed at the open.',
    bearsOn:
      'A ticket at a strike that did not exist at 09:30 is possible by noon. On the map, a bar appearing at the edge of the ladder can be a new listing filling from nothing, not a shift of the crowd.',
    evidence: 'market-general',
    reading: 'Cboe, SPX contract specifications, strike price intervals and additions.',
    firstDefinedIn: 'on-ramp/02-classic',
    seeAlso: ['strike', 'option-chain', 'strike-spacing'],
    kind: 'adjacent',
  },
  {
    id: 'last-trading-time',
    headword: 'last trading time',
    aliases: ['16:00 cutoff on expiry day'],
    shortDef:
      'An expiring SPX or NDX contract stops trading at 16:00 ET on its last day, while the same options on other expiries trade until 16:15.',
    bearsOn:
      'A 0DTE ticket has a hard end fifteen minutes before the rest of the chain. After 16:00 there is nothing to sell; the position settles on the closing prints whether or not the holder intended to hold it there.',
    evidence: 'market-general',
    reading: 'Cboe, SPX and SPXW contract specifications, trading hours on the last trading day.',
    firstDefinedIn: 'on-ramp/02-classic',
    seeAlso: ['zero-dte', 'expiry', 'settlement-value'],
    kind: 'adjacent',
  },
  {
    id: 'per-contract-fees',
    headword: 'per-contract fees and commissions',
    aliases: ['exchange fees', 'commission per contract'],
    shortDef:
      'Each option contract carries a broker commission and exchange and regulatory fees, typically a fraction of a dollar to a dollar or so per contract per side as of 2025.',
    bearsOn:
      'On a $50 premium a round trip’s fees are a noticeable share; on a $5 one they can be most of it. The counterparty pays fees too, at different rates, which is part of why the quoting firm is content with a spread you find wide.',
    evidence: 'market-general',
    reading: 'Your broker’s commission schedule; Cboe fee schedule.',
    firstDefinedIn: 'on-ramp/03-classification',
    seeAlso: ['counterparty', 'bid-ask-spread', 'premium'],
    kind: 'adjacent',
  },
  {
    id: 'price-improvement-auctions',
    headword: 'price-improvement auctions',
    aliases: ['PIM', 'AIM', 'flash auction'],
    shortDef:
      'Exchange mechanisms in which a customer order is exposed for a fraction of a second so that market makers can bid to fill it inside the quoted spread.',
    bearsOn:
      'Many retail fills happen at prices between the bid and the ask because of these. A fill at the midpoint gives a signing engine nothing to work with, so the trades most likely to be yours are the ones a screen is least able to sign.',
    evidence: 'market-general',
    reading: 'Cboe, Automated Improvement Mechanism (AIM) rules.',
    firstDefinedIn: 'on-ramp/03-classification',
    seeAlso: ['counterparty', 'aggressor', 'trade-classification-algorithms'],
    kind: 'adjacent',
  },
  {
    id: 'market-maker-obligations',
    headword: 'market-maker quoting obligations',
    aliases: ['continuous quoting', 'designated market maker'],
    shortDef:
      'Registered options market makers are required by exchange rules to post two-sided quotes in their assigned classes for most of the day, within maximum width limits, in exchange for fee and margin advantages.',
    bearsOn:
      'This is why a counterparty exists for your ticket at 09:31 and at 15:59, and why the counterparty is a firm with a rulebook rather than another customer. Its obligation is to quote, not to hold; the hedge is how it discharges what it did not choose.',
    evidence: 'market-general',
    reading: 'Cboe Options Rules, chapter 5, the market-maker obligations sections.',
    firstDefinedIn: 'on-ramp/03-classification',
    seeAlso: ['counterparty', 'dealer', 'mandate'],
    kind: 'adjacent',
  },
  {
    id: 'quote-fading',
    headword: 'quote fading',
    aliases: ['size not there', 'disappearing quote'],
    shortDef:
      'A displayed quote that is cancelled or repriced in the moment an order arrives to trade against it, so the fill comes at a worse price or not at all.',
    bearsOn:
      'The size on the chain is an offer to trade, not a promise. Market makers reprice on every futures tick, and a fast ES move is exactly when the quote you were about to hit moves away; the tape you read and the fill you get are different objects.',
    evidence: 'market-general',
    reading: 'Harris, Trading and Exchanges (2003), on quote cancellation and the option value of a standing quote.',
    firstDefinedIn: 'on-ramp/03-classification',
    seeAlso: ['counterparty', 'ask', 'bid'],
    kind: 'adjacent',
  },
  {
    id: 'dollar-vega',
    headword: 'dollar vega',
    aliases: ['vega notional', 'vega per vol point'],
    shortDef:
      'A position’s vega stated in dollars per one-point change in implied vol, per contract or for the whole position, rather than as a per-share number.',
    bearsOn:
      'It is how the vol you paid becomes a number you can lose: a position with $400 of vega loses $800 when the dots fall two points, before price has moved. It is the size of the vol bet inside a ticket that was meant as a direction bet.',
    evidence: 'market-general',
    reading: 'Natenberg, Option Volatility and Pricing (1994), the chapter on risk measurement.',
    firstDefinedIn: 'on-ramp/04-state',
    seeAlso: ['vega', 'vol-paid', 'implied-vol'],
    kind: 'adjacent',
  },
  {
    id: 'vix-vs-strike-iv',
    headword: 'VIX versus the vol at your strike',
    aliases: ['30-day vol versus 0DTE vol'],
    shortDef:
      'The VIX is a 30-day, strike-blended implied vol. The vol you pay on one 0DTE strike is a same-day, single-strike number, and the two routinely differ by many points in either direction.',
    bearsOn:
      'A holder who checks the VIX to judge the vol paid on a 0DTE has checked the wrong series. The dots at your strike are the price; the VIX is context for the regime, which is what Chapter 4 used it for.',
    evidence: 'market-general',
    reading: 'Cboe, VIX Index methodology white paper.',
    firstDefinedIn: 'on-ramp/04-state',
    seeAlso: ['vix', 'vol-paid', 'skew-dots'],
    kind: 'adjacent',
  },
  {
    id: 'gamma-vs-vega-by-expiry',
    headword: 'gamma against vega by expiry',
    aliases: ['short-dated is gamma, long-dated is vega'],
    shortDef:
      'Near expiry an option’s value is dominated by gamma and theta and barely moves with implied vol; far from expiry, vega dominates and gamma is small.',
    bearsOn:
      'The vol you paid matters most on the expiries this book spends least time on. A 0DTE ticket is mostly a bet on the move; a monthly bought at the same strike is mostly a bet on the vol, and the vol you paid is doing different work on each.',
    evidence: 'market-general',
    reading: 'Hull, Options, Futures, and Other Derivatives, the chapter on the Greek letters, on gamma and vega against time to maturity.',
    firstDefinedIn: 'on-ramp/04-state',
    seeAlso: ['gamma', 'vega', 'vol-falsifier', 'theta'],
    kind: 'adjacent',
  },
  {
    id: 'cash-secured-put',
    headword: 'cash-secured put and covered call',
    aliases: ['covered write', 'cash-secured'],
    shortDef:
      'A short put with the full strike value held in cash, or a short call against shares already owned. Both are the writer’s side of a single leg, with the obligation pre-funded.',
    bearsOn:
      'They are the short-put and short-call cells as most retail writers actually hold them. The incentive at the strike is the same as any short’s; the collateral changes what happens to the writer at expiry, not what the screen prints while the option lives.',
    evidence: 'market-general',
    reading: 'OCC, Characteristics and Risks of Standardized Options, the chapter on strategies.',
    firstDefinedIn: 'on-ramp/05-orderflow',
    seeAlso: ['short-put', 'short-call', 'two-by-two'],
    kind: 'adjacent',
  },
  {
    id: 'long-and-short-premium',
    headword: 'long premium and short premium',
    aliases: ['net buyer of options', 'net seller of options'],
    shortDef:
      'Shorthand for whether a position has paid out more premium than it received (long premium) or the reverse (short premium). Long premium gains from movement and loses to time; short premium the reverse.',
    bearsOn:
      'It is the trader’s word for the two rows of the 2×2 taken together. Chapter 12 uses it without ceremony; from the customer seat it is the first question about any position, before strike or direction.',
    evidence: 'market-general',
    reading: 'Natenberg, Option Volatility and Pricing (1994), the chapter on volatility spreads.',
    firstDefinedIn: 'on-ramp/05-orderflow',
    seeAlso: ['two-by-two', 'convexity', 'premium'],
    kind: 'adjacent',
  },
  {
    id: 'probability-of-touch',
    headword: 'probability of touch',
    aliases: ['touch probability', 'roughly twice delta'],
    shortDef:
      'The chance the index reaches a strike at some point before expiry, as opposed to finishing beyond it. For an out-of-the-money option it is roughly twice the delta.',
    bearsOn:
      'A writer whose strike is at a 15-delta has about a 30 percent chance of seeing price arrive there, which is when the pressure at their strike becomes their problem. It is the number behind the writer’s incentive to act before expiry rather than at it.',
    evidence: 'market-general',
    reading: 'Sinclair, Volatility Trading (2013), the chapter on the mathematics of options.',
    firstDefinedIn: 'on-ramp/05-orderflow',
    seeAlso: ['delta-as-probability', 'delta', 'short-put'],
    kind: 'adjacent',
  },
  {
    id: 'random-assignment',
    headword: 'random assignment at exercise',
    aliases: ['assignment allocation', 'OCC random selection'],
    shortDef:
      'When a holder exercises, OCC selects which clearing firm’s short position is assigned at random, and the firm allocates to its customers by its own approved method.',
    bearsOn:
      'A writer of SPY or ES options can be assigned on any day the holder chooses, with no warning and no relation to the writer’s own plan. It is the mechanical side of the writer’s obligation, and it does not exist for cash-settled SPX and NDX.',
    evidence: 'market-general',
    reading: 'OCC, Characteristics and Risks of Standardized Options, the chapter on exercise and assignment.',
    firstDefinedIn: 'on-ramp/06-nq-es-layer',
    seeAlso: ['assignment', 'american-style', 'es-options'],
    kind: 'adjacent',
  },
  {
    id: 'exercise-cutoff',
    headword: 'exercise cutoff time',
    aliases: ['broker exercise deadline', '17:30 cutoff'],
    shortDef:
      'Brokers accept exercise instructions until a set time after the close, at or before OCC’s 17:30 ET deadline as of 2025, later than the options market itself stops trading.',
    bearsOn:
      'For American-style contracts the position can change hands after every screen has gone quiet. A writer of SPY calls who is short at 16:15 may be short shares by the morning, decided in a window no tape records.',
    evidence: 'market-general',
    reading: 'Your broker’s exercise and assignment procedures; OCC exercise cutoff rules.',
    firstDefinedIn: 'on-ramp/06-nq-es-layer',
    seeAlso: ['assignment', 'american-style', 'exercise-by-exception'],
    kind: 'adjacent',
  },
  {
    id: 'xnd',
    headword: 'mini Nasdaq-100 index options (XND)',
    aliases: ['XND'],
    shortDef:
      'A cash-settled, European-style option on one-hundredth of the Nasdaq-100, listed by Nasdaq, in the way XSP is one-tenth of SPX.',
    bearsOn:
      'It is the NDX analogue of the small-size route Chapter 12 describes, at about one-fortieth of an NQ future in delta at the money. The screen reads NDX; the ticket, at that size, would be XND.',
    evidence: 'market-general',
    reading: 'Nasdaq, XND contract specifications.',
    firstDefinedIn: 'on-ramp/06-nq-es-layer',
    seeAlso: ['xsp', 'ndx', 'nq-future'],
    kind: 'adjacent',
  },
  {
    id: 'assignment-size-in-shares',
    headword: 'assignment size in shares',
    aliases: ['100 shares per contract', 'what you hold after assignment'],
    shortDef:
      'One ETF option contract delivers 100 shares. Assignment on one SPY contract at 600 is a $60,000 stock position; on one QQQ contract at 500, $50,000.',
    bearsOn:
      'A futures trader knows their contract’s notional; a writer of ETF options inherits a share position they did not size. It is the concrete form of the writer’s obligation that Chapter 12’s instrument table asks you to state before choosing.',
    evidence: 'market-general',
    reading: 'OCC, Characteristics and Risks of Standardized Options, on physical settlement.',
    firstDefinedIn: 'on-ramp/06-nq-es-layer',
    seeAlso: ['assignment', 'physically-settled', 'spy'],
    kind: 'adjacent',
  },
  {
    id: 'theta-by-moneyness',
    headword: 'theta curve by moneyness',
    aliases: ['ATM theta acceleration'],
    shortDef:
      'At the money, theta grows as expiry approaches and is largest in the final hours. Out of the money, an option loses most of its time value earlier and has little left to lose late.',
    bearsOn:
      'Two 0DTE tickets bought at 09:30 decay on different schedules. The holder’s last-hour clock, which this chapter reads from the outside, is the ATM curve; the OTM holder’s clock ran earlier and quieter.',
    evidence: 'market-general',
    reading: 'Hull, Options, Futures, and Other Derivatives, the chapter on the Greek letters, the section on theta.',
    firstDefinedIn: 'on-ramp/07-clocks-and-late-greeks',
    seeAlso: ['theta', 'atm', 'otm'],
    kind: 'adjacent',
  },
  {
    id: 'intraday-time-weighting',
    headword: 'intraday time weighting',
    aliases: ['trading-time theta', 'non-uniform decay'],
    shortDef:
      'Pricing models count time to expiry in calendar time, but market makers decay their marks faster during trading hours and slower overnight, because variance arrives with trading.',
    bearsOn:
      'The mark on a 0DTE ticket falls at a pace the textbook theta does not describe: faster than clock time in the morning, and in a way that varies by shop. A theta computed by hand checks against a mark that has already made this adjustment.',
    evidence: 'market-general',
    reading: 'Sinclair, Volatility Trading (2013), on time and variance.',
    firstDefinedIn: 'on-ramp/07-clocks-and-late-greeks',
    seeAlso: ['theta', 'mark'],
    kind: 'adjacent',
  },
  {
    id: 'rho',
    headword: 'rho',
    aliases: ['interest-rate sensitivity'],
    shortDef:
      'The change in an option’s value for a one-point change in the interest rate. It is negligible on same-day and weekly options and material on long-dated ones.',
    bearsOn:
      'It is the greek this book leaves out because its clock is a day. A holder moving to monthlies or longer meets it, and meets it in the mark before meeting it in any explanation.',
    evidence: 'market-general',
    reading: 'Hull, Options, Futures, and Other Derivatives, the chapter on the Greek letters, the section on rho.',
    firstDefinedIn: 'on-ramp/07-clocks-and-late-greeks',
    seeAlso: ['vega', 'theta', 'greek-attribution'],
    kind: 'adjacent',
  },
  {
    id: 'adjusting-a-position',
    headword: 'adjusting a position',
    aliases: ['roll, hedge, or close', 'position adjustment'],
    shortDef:
      'The three things a holder can do at a level besides nothing: close the leg, roll it to another strike or expiry, or hedge its delta with the underlying or with another option.',
    bearsOn:
      'Each prints differently. A close is a bar with the opposite sign; a roll is two bars; a futures hedge prints nowhere on an options screen. The chapter’s heuristics see the first two and infer the third.',
    evidence: 'market-general',
    reading: 'Natenberg, Option Volatility and Pricing (1994), the chapter on position adjustment.',
    firstDefinedIn: 'on-ramp/08-heuristics-as-reading',
    seeAlso: ['self-hedge', 'rolling-a-position', 'open-vs-close'],
    kind: 'adjacent',
  },
  {
    id: 'managing-winners',
    headword: 'closing at a fraction of maximum profit',
    aliases: ['take profit at 50 percent', 'managing winners'],
    shortDef:
      'A common short-premium practice of buying back a short option once it has lost about half its value, rather than holding for the last half to expiry.',
    bearsOn:
      'It is the incentive behind a short strike seen from the inside: the writer wants out early and cheaply. Seen from the tape, it is buying at a strike that had been sold, and it is a reason a crowded short node can unwind before price ever reaches it.',
    evidence: 'folklore',
    evidenceNote: 'practitioner convention; not measured here',
    reading: 'Sinclair, Positional Option Trading (2020), the chapter on trade management.',
    firstDefinedIn: 'on-ramp/08-heuristics-as-reading',
    seeAlso: ['short-put', 'crowded-short-convexity', 'incentive'],
    kind: 'adjacent',
  },
  {
    id: 'exit-liquidity-at-strike',
    headword: 'exit liquidity at your strike',
    aliases: ['open interest as your exit'],
    shortDef:
      'Your ability to close a position at a fair price depends on how actively that strike trades at that moment. Open interest and today’s volume at your strike are the crowd you will sell back into.',
    bearsOn:
      'A holder in the tallest node has company on the way out; one at an empty strike may find only the market maker’s widened quote. The pile this chapter reads as pressure is also the pile that decides how your ticket ends.',
    evidence: 'market-general',
    reading: 'Harris, Trading and Exchanges (2003), on liquidity and its dimensions.',
    firstDefinedIn: 'on-ramp/08-heuristics-as-reading',
    seeAlso: ['open-interest', 'volume', 'bid-ask-spread'],
    kind: 'adjacent',
  },
  {
    id: 'iron-condor',
    headword: 'iron condor',
    aliases: ['condor'],
    shortDef:
      'A short put and a short call nearer the index, each protected by a bought option further out, all on one expiry: four legs, a fixed maximum loss, and a maximum profit if the index finishes between the two short strikes.',
    bearsOn:
      'It is the most common retail short-premium structure, and its two short strikes are where many crowded short-convexity nodes come from on a 0DTE map. The protecting legs print at the outer strikes with the opposite sign; the 2×2 shows four cells that belong to one incentive.',
    evidence: 'market-general',
    reading: 'Natenberg, Option Volatility and Pricing (1994), the chapter on spreads.',
    firstDefinedIn: 'on-ramp/08-heuristics-as-reading',
    seeAlso: ['crowded-short-convexity', 'two-by-two', 'vertical-spread'],
    kind: 'adjacent',
  },
  {
    id: 'greek-limits',
    headword: 'greek limits',
    aliases: ['max delta', 'max vega', 'risk limits by greek'],
    shortDef:
      'Standing rules that cap a book’s total delta, gamma, vega, or theta at fixed amounts, which a desk checks before every trade and at every mark.',
    bearsOn:
      'They are the professional form of the futures trader’s position limit, and the reason a mark-based stop is not the only exit. A journal line for an option position can record a greek limit hit as a falsifier that had nothing to do with price.',
    evidence: 'market-general',
    reading: 'Taleb, Dynamic Hedging (1997), the chapters on risk management.',
    firstDefinedIn: 'on-ramp/09-grammar-and-journal',
    seeAlso: ['journal-line', 'falsifier', 'mark-based-stop'],
    kind: 'adjacent',
  },
  {
    id: 'book-level-greeks',
    headword: 'book-level greeks',
    aliases: ['portfolio delta', 'net position greeks'],
    shortDef:
      'The greeks of all open positions added together, so that a long call here and a short put there are one number for delta and one for vega.',
    bearsOn:
      'The journal line here is written per position. A holder with three tickets has a book, and the book’s greeks can be flat while every line looks exposed, or the reverse; the per-line falsifier can fire on a risk the book does not have.',
    evidence: 'market-general',
    reading: 'Natenberg, Option Volatility and Pricing (1994), the chapter on position analysis.',
    firstDefinedIn: 'on-ramp/09-grammar-and-journal',
    seeAlso: ['journal-line', 'delta', 'vega'],
    kind: 'adjacent',
  },
  {
    id: 'buying-power-reduction',
    headword: 'buying power reduction',
    aliases: ['BPR', 'margin used'],
    shortDef:
      'The amount of account margin a broker sets aside for a position, shown on the platform as a reduction in what remains available to trade.',
    bearsOn:
      'It is the number that stops a Stage 5 loop before a stop does. A short leg’s reduction can rise as the index moves toward it, so the journal’s sizing field for an option is a range, not a figure, until the position is closed.',
    evidence: 'market-general',
    reading: 'Your broker’s margin documentation; Cboe, Margin Manual.',
    firstDefinedIn: 'on-ramp/09-grammar-and-journal',
    seeAlso: ['margin', 'journal-line'],
    kind: 'adjacent',
  },
  {
    id: 'decision-vs-ticket-count',
    headword: 'decisions against tickets',
    aliases: ['one decision, several fills'],
    shortDef:
      'A roll, an adjustment, or a multi-leg order produces several fills for one decision. A journal that counts fills records more activity than there was and splits one read across several lines.',
    bearsOn:
      'The journal line here is one read, one falsifier, one outcome. From the customer seat that unit is the decision, not the ticket; the fills are evidence for the line, not lines of their own.',
    evidence: 'market-general',
    reading: 'Sinclair, Positional Option Trading (2020), on record-keeping.',
    firstDefinedIn: 'on-ramp/09-grammar-and-journal',
    seeAlso: ['journal-line', 'rolling-a-position'],
    kind: 'adjacent',
  },
  {
    id: 'intraday-iv-pattern',
    headword: 'intraday implied-vol pattern',
    aliases: ['IV decays into midday', 'opening vol premium'],
    shortDef:
      'On ordinary days the implied vol of same-day options is highest in the first minutes and falls through the morning as the day’s range becomes known, before flattening into the afternoon.',
    bearsOn:
      'A holder who buys a 0DTE at 09:31 pays the opening vol and can be right on direction and down on the mark by 10:30. It is the vol falsifier’s most common trigger, and it is a schedule, not a surprise.',
    evidence: 'market-general',
    evidenceNote: 'empirical regularity; not measured here',
    reading: 'Sinclair, Volatility Trading (2013), on intraday variance; Cboe Global Markets research on 0DTE intraday pricing.',
    firstDefinedIn: 'on-ramp/09a-early-session',
    seeAlso: ['opening-vol', 'vol-falsifier', 'implied-vol'],
    kind: 'adjacent',
  },
  {
    id: 'overnight-vol-gap',
    headword: 'overnight vol gap',
    aliases: ['IV gap at the open'],
    shortDef:
      'Implied vol can open far from where it closed, because the overnight session, the pre-market releases, and the futures move all reprice the chain before it trades.',
    bearsOn:
      'Yesterday’s closing vol is not a reference for this morning’s opening vol. A holder carrying a weekly through the night finds the mark moved by a vol change they never saw print; the opening-vol line is a fresh number each day.',
    evidence: 'market-general',
    reading: 'Cboe, VIX Index methodology, on overnight and pre-open calculation.',
    firstDefinedIn: 'on-ramp/09a-early-session',
    seeAlso: ['opening-vol', 'vol-paid', 'global-trading-hours'],
    kind: 'adjacent',
  },
  {
    id: 'chain-iv-off-stale-underlying',
    headword: 'chain vol computed off a stale underlying',
    aliases: ['wrong underlying at the open'],
    shortDef:
      'A platform backs implied vol out of each option’s price and the underlying’s price. In the first minutes the cash index it uses can be stale, so the displayed vol is off by the index error.',
    bearsOn:
      'A chain showing absurd vols at 09:31 is usually reporting a stale index, not a real price. Market makers quote off the futures; the holder reading the chain’s vol column is reading a different, and worse, input.',
    evidence: 'market-general',
    reading: 'S&P Dow Jones Indices, index calculation methodology, on real-time dissemination; Hull, on implied volatility.',
    firstDefinedIn: 'on-ramp/09a-early-session',
    seeAlso: ['opening-vol', 'implied-vol', 'stale-index-prints'],
    kind: 'adjacent',
  },
  {
    id: 'ratio-spread',
    headword: 'ratio spread',
    aliases: ['backspread', '1×2'],
    shortDef:
      'A spread with unequal legs, such as buying one call and selling two at a higher strike. It has a region of profit, a region of loss, and an unprotected side beyond the extra short leg.',
    bearsOn:
      'On the Orderflow bars it prints as unequal bars at two strikes, and the extra leg is the one that carries the writer’s obligation. A multi-leg read that pairs equal bars misses it.',
    evidence: 'market-general',
    reading: 'Natenberg, Option Volatility and Pricing (1994), the chapter on ratio spreads.',
    firstDefinedIn: 'on-ramp/09b-structure-and-gexbot',
    seeAlso: ['multi-leg', 'short-call', 'long-call'],
    kind: 'adjacent',
  },
  {
    id: 'spread-width',
    headword: 'spread width',
    aliases: ['strike width', 'wide and narrow spreads'],
    shortDef:
      'The distance between the two strikes of a two-leg spread on one expiry. Width sets the maximum profit and loss, the cost, and how the spread behaves as price moves between the strikes.',
    bearsOn:
      'A structure trader choosing strikes around a level is choosing a width. A narrow spread across the level behaves almost like a bet on the level itself; a wide one behaves like a single leg for most of its range.',
    evidence: 'market-general',
    reading: 'Natenberg, Option Volatility and Pricing (1994), the chapter on vertical spreads.',
    firstDefinedIn: 'on-ramp/09b-structure-and-gexbot',
    seeAlso: ['multi-leg', 'strike-spacing', 'strike-selection'],
    kind: 'adjacent',
  },
  {
    id: 'diagonal-spread',
    headword: 'diagonal spread',
    aliases: ['diagonal'],
    shortDef:
      'A long option at one strike and expiry against a short at a different strike and a nearer expiry: a two-expiry spread with the strikes moved apart.',
    bearsOn:
      'It prints on two expiry groups at two strikes, so no one Gexbot screen shows it whole. It is the structure a holder reaches for when the level is right and the clock is not.',
    evidence: 'market-general',
    reading: 'Natenberg, Option Volatility and Pricing (1994), the chapter on time spreads.',
    firstDefinedIn: 'on-ramp/09b-structure-and-gexbot',
    seeAlso: ['multi-leg', 'expiry-group', 'option-structures'],
    kind: 'adjacent',
  },
  {
    id: 'delta-strikes',
    headword: 'delta strikes',
    aliases: ['25-delta', 'the 10-delta put'],
    shortDef:
      'Practitioners name a strike by its delta rather than its price — “the 25-delta put” — because that name means the same distance from the index in probability terms on any day.',
    bearsOn:
      'A structure trader names a strike by its distance to a chart level; an options desk names it by delta. Both describe the same strike, and translating between them is how a level on the chart becomes a ticket.',
    evidence: 'market-general',
    reading: 'Natenberg, Option Volatility and Pricing (1994), on delta as a measure of moneyness.',
    firstDefinedIn: 'on-ramp/09b-structure-and-gexbot',
    seeAlso: ['delta', 'strike-selection', 'delta-as-probability'],
    kind: 'adjacent',
  },
  {
    id: 'averaging-down',
    headword: 'averaging down on a losing long option',
    aliases: ['adding to a loser'],
    shortDef:
      'Buying more of an option whose mark has fallen, to lower the average debit.',
    bearsOn:
      'On a 0DTE the fall came from theta and vol as much as from price, and both keep working against the larger position. A futures trader’s habit of adding at a better price meets an instrument that is cheaper because it is worth less, which is not the same thing.',
    evidence: 'market-general',
    reading: 'Natenberg, Option Volatility and Pricing (1994), on the risks of long premium positions.',
    firstDefinedIn: 'on-ramp/10-misreads-and-mastery',
    seeAlso: ['debit-anchoring', 'holders-misread', 'theta'],
    kind: 'adjacent',
  },
  {
    id: 'riding-to-zero',
    headword: 'holding a bought option to expiry',
    aliases: ['riding to zero', 'the full loss'],
    shortDef:
      'Keeping a losing long option because it still has time and a reversal would recover it, until it expires worthless and the whole debit is lost.',
    bearsOn:
      'It is the option holder’s form of not taking a stop, and it is worse, because the position’s value decays while the holder waits. The mark-based stop from the on-ramp exists for this case.',
    evidence: 'market-general',
    reading: 'OCC, Characteristics and Risks of Standardized Options, on the risks of option buyers.',
    firstDefinedIn: 'on-ramp/10-misreads-and-mastery',
    seeAlso: ['mark-based-stop', 'holders-misread', 'debit'],
    kind: 'adjacent',
  },
  {
    id: 'churn',
    headword: 'churn',
    aliases: ['overtrading the chain', 'commission drag'],
    shortDef:
      'Many small tickets in a session, each carrying a spread and fees, so that costs accumulate faster than any edge.',
    bearsOn:
      'A futures trader pays one tick of spread per round trip; an option holder pays a spread that is a share of the premium, on both legs, plus fees per contract. The same activity level costs several times more, and the mark hides it until the day is summed.',
    evidence: 'market-general',
    reading: 'Barber and Odean, “Trading is hazardous to your wealth” (2000, Journal of Finance).',
    firstDefinedIn: 'on-ramp/10-misreads-and-mastery',
    seeAlso: ['bid-ask-spread', 'per-contract-fees', 'holders-misread'],
    kind: 'adjacent',
  },
  {
    id: 'hedging-away-the-thesis',
    headword: 'hedging away the thesis',
    aliases: ['over-hedging a long option'],
    shortDef:
      'Selling futures against a bought call, or the reverse, in enough size that the position’s delta is flat and the direction bet is gone, while the theta and vol exposure remain.',
    bearsOn:
      'The holder meant to own direction and now owns a gamma position they did not price. It is the self-hedge Chapter 3 read from the outside, made by accident from the inside; the tape shows the futures leg and nothing about the intent.',
    evidence: 'market-general',
    reading: 'Natenberg, Option Volatility and Pricing (1994), on delta-neutral positions.',
    firstDefinedIn: 'on-ramp/10-misreads-and-mastery',
    seeAlso: ['self-hedge', 'delta-neutral', 'holders-misread'],
    kind: 'adjacent',
  },
  {
    id: 'end-of-day-chain-data',
    headword: 'end-of-day chain data',
    aliases: ['historical options data', 'EOD chains'],
    shortDef:
      'Vendor files of every strike’s closing bid, ask, volume, open interest, and implied vol, one row per contract per day, sold by several data companies and by Cboe.',
    bearsOn:
      'A paper position can be rebuilt and re-marked across weeks from these, which is how Chapter 11’s forty sessions become a dataset. The intraday marks the on-ramp uses are not in them; the closing marks are.',
    evidence: 'market-general',
    reading: 'Cboe DataShop, product documentation for end-of-day option data.',
    firstDefinedIn: 'on-ramp/11-further-learning',
    seeAlso: ['paper-position', 'backtest-overfitting', 'mark'],
    kind: 'adjacent',
  },
  {
    id: 'liquidation-value',
    headword: 'liquidation value against the mid',
    aliases: ['bid-side mark', 'exit value'],
    shortDef:
      'What a position would fetch if closed now — long options at the bid, short options bought back at the ask — as opposed to its mark at the middle of the quote.',
    bearsOn:
      'The mark-to-mid ledger overstates what you have by half the spread on every leg. A paper position that shows a small gain at mid can be a loss at liquidation, and the difference is largest at the open and at the strikes with the widest quotes.',
    evidence: 'market-general',
    reading: 'Harris, Trading and Exchanges (2003), on transaction costs.',
    firstDefinedIn: 'on-ramp/11-further-learning',
    seeAlso: ['mark-to-mid', 'bid-ask-spread', 'mark'],
    kind: 'adjacent',
  },
  {
    id: 'sigma-normalized-moves',
    headword: 'sigma-normalized moves',
    aliases: ['moves in expected-move units', 'standardized returns'],
    shortDef:
      'Stating an index move as a multiple of the expected move for that window rather than in points, so that a 20-point move on a quiet day and a 40-point move on a wild one can be compared.',
    bearsOn:
      'A paper position’s attribution across days of different vol is not comparable in points. In sigma units the same gamma line means the same thing every day, and the residual stands out against a stable scale.',
    evidence: 'market-general',
    reading: 'Sinclair, Volatility Trading (2013), on measuring realized against implied.',
    firstDefinedIn: 'on-ramp/11-further-learning',
    seeAlso: ['expected-move', 'greek-attribution', 'paper-position'],
    kind: 'adjacent',
  },
  {
    id: 'pnl-denomination',
    headword: 'P&L denomination',
    aliases: ['points, dollars, or percent of debit'],
    shortDef:
      'Whether a result is written in index points, in dollars per contract, or as a percentage of the premium paid. The three orderings of the same trades differ.',
    bearsOn:
      'A ledger kept in percent of debit makes a $50 option’s 40 percent loss look like a monthly’s; one kept in points hides the multiplier. The paper ledger fixes one denomination so the attribution table adds up in the same units as the mark.',
    evidence: 'market-general',
    reading: 'Sinclair, Positional Option Trading (2020), on record-keeping.',
    firstDefinedIn: 'on-ramp/11-further-learning',
    seeAlso: ['paper-position', 'debit', 'point-value'],
    kind: 'adjacent',
  },
  {
    id: 'exchange-market-statistics',
    headword: 'exchange market statistics',
    aliases: ['Cboe daily market statistics', 'OCC volume reports'],
    shortDef:
      'Free daily and monthly reports from Cboe and OCC: volume by product and by exchange, put and call totals, open interest, and 0DTE share.',
    bearsOn:
      'They are the public denominator behind several numbers this book labels market-general, and the first place to check any claim about how large a pile or a flow is. Learning to read them is part of the first week’s practice.',
    evidence: 'market-general',
    reading: 'Cboe Global Markets, Market Statistics; OCC, Volume and Open Interest reports.',
    firstDefinedIn: 'on-ramp/12-futures-to-options',
    seeAlso: ['market-general', 'hedge-complex-scale', 'zero-dte-share'],
    kind: 'adjacent',
  },
  {
    id: 'oic-education',
    headword: 'Options Industry Council',
    aliases: ['OIC'],
    shortDef:
      'The education arm funded by OCC and the U.S. options exchanges, with free courses, webinars, and the current disclosure document, aimed at retail investors.',
    bearsOn:
      'It is the plain, non-selling introduction to the mechanics that Chapter 12’s Gap 5 requires, and it is free. It teaches the customer seat; it does not teach the reading this book does.',
    evidence: 'market-general',
    reading: 'Options Industry Council, the Options Education program and the current Characteristics and Risks of Standardized Options.',
    firstDefinedIn: 'on-ramp/12-futures-to-options',
    seeAlso: ['approval-levels', 'seat'],
    kind: 'adjacent',
  },
  {
    id: 't-plus-one-settlement',
    headword: 'T+1 settlement of option trades',
    aliases: ['next-day settlement', 'premium settlement'],
    shortDef:
      'Listed option trades settle on the next business day: the premium leaves or arrives in the account on T+1 (since 2024), though the position and its margin effect are immediate.',
    bearsOn:
      'A cash-account holder who sells a position and re-buys the same day can run into unsettled funds. Futures settle daily; the different rhythm shows up in the first week of the loop as a broker message, not a market event.',
    evidence: 'market-general',
    reading: 'OCC, settlement procedures; your broker’s cash-account rules on unsettled funds.',
    firstDefinedIn: 'on-ramp/12-futures-to-options',
    seeAlso: ['cash-vs-margin-account', 'premium'],
    kind: 'adjacent',
  },
  {
    id: 'holiday-and-early-close',
    headword: 'exchange holidays and early closes',
    aliases: ['half day', '13:00 close'],
    shortDef:
      'The options and cash markets close on exchange holidays and at 13:00 ET on several half days; expiries that fall on a holiday move to the prior trading day.',
    bearsOn:
      'A first-week loop meets one of these soon. The last-hour clock is 12:00–13:00 on a half day, theta runs to a different end, and a 0DTE listed for a holiday Friday expires on the Thursday.',
    evidence: 'market-general',
    reading: 'Cboe, holiday calendar and trading hours.',
    firstDefinedIn: 'on-ramp/12-futures-to-options',
    seeAlso: ['clock-family', 'zero-dte', 'last-trading-time'],
    kind: 'adjacent',
  },
];

export function getEntry(id: string): GlossaryEntry | undefined {
  return glossary.find((e) => e.id === id);
}

export function entriesByKind(kind: GlossaryEntry['kind']): GlossaryEntry[] {
  return glossary.filter((e) => e.kind === kind);
}

export function entriesFirstDefinedIn(docId: string): GlossaryEntry[] {
  return glossary.filter((e) => e.firstDefinedIn === docId);
}

export function sortedGlossary(): GlossaryEntry[] {
  return [...glossary].sort((a, b) =>
    a.headword.localeCompare(b.headword, 'en', {sensitivity: 'base'}),
  );
}

/** Chapter number from a doc id (`plans/09a-…` → 9), then the id as tiebreak. */
export function chapterSortKey(docId: string): [number, string] {
  const m = docId.match(/(\d+)/);
  return [m ? Number(m[1]) : 99, docId];
}

export function cousinFamilies(): GlossaryEntry[] {
  return entriesByKind('cousin').sort((a, b) => {
    const [na, sa] = chapterSortKey(a.firstDefinedIn);
    const [nb, sb] = chapterSortKey(b.firstDefinedIn);
    return na - nb || sa.localeCompare(sb);
  });
}

/** Object-level cuts: cousin / cut / import mistake on a taught Gexbot (or other) term. */
export function objectCuts(): GlossaryEntry[] {
  return glossary
    .filter((e) => e.kind !== 'cousin' && e.distinguishingCut && e.nearestCousin)
    .sort((a, b) => {
      const cousin = a.nearestCousin!.localeCompare(b.nearestCousin!, 'en', {
        sensitivity: 'base',
      });
      if (cousin) return cousin;
      const [na, sa] = chapterSortKey(a.firstDefinedIn);
      const [nb, sb] = chapterSortKey(b.firstDefinedIn);
      return na - nb || sa.localeCompare(sb);
    });
}
