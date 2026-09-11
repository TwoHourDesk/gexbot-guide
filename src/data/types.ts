export type Kind =
  | 'options'
  | 'gexbot'
  | 'hygiene'
  | 'cousin'
  | 'plan'
  | 'market-general'
  | 'adjacent';

export type Pressure = 'mandate' | 'incentive' | 'none' | 'unknown';

export interface GlossaryEntry {
  id: string;
  headword: string;
  aliases?: string[];
  shortDef: string;
  longDef?: string;
  firstDefinedIn: string;
  alsoAppears?: string[];
  seeAlso?: string[];
  kind: Kind;
  neededForPlan?: string;
  unit?: string;
  notCounted?: string;
  nearestCousin?: string;
  distinguishingCut?: string;
  importMistake?: string;
  pressure?: Pressure;
  actor?: string;
  trigger?: string;
  hedgeVenue?: string;
  liquidityRole?: string;
  notShown?: string;
  /** kind 'adjacent' only: named in a chapter, taught nowhere in the book. */
  bearsOn?: string;
  evidence?: string;
  reading?: string;
}

export interface LedgerRow {
  id: string;
  screen: string;
  shows: string;
  whoActs: string;
  trigger: string;
  hedgeVenue: string;
  notShown: string;
  chapter: string;
  pressure: Pressure;
}
