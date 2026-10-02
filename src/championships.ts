// Single source of truth for title metadata: the Firestore collection each
// title's records live in, and the display order used on the roster's
// Champions tab.

export const TITLE_COLLECTIONS: Record<string, string> = {
  UC: "WWEUndisputed",
  WH: "WorldHeavyweight",
  WUC: "WomenUndisputed",
  WWH: "WomenWorld",
  IC: "Intercontinental",
  US: "UnitedStates",
  WIC: "WomenIntercontinental",
  WUS: "WomenUnitedStates",
  RAWTT: "RawTagTeam",
  SDTT: "SmackdownTagTeam",
};

export const MITB_COLLECTIONS: Record<string, string> = {
  MMITB: "MMITB",
  RMMITB: "RawMMITB",
  SDMMITB: "SmackdownMMITB",
  WMITB: "WMITB",
};

// Per-wrestler championship label ("X Champion", not the belt's own proper
// name) — used in the wrestler profile pop-up's title history list.
export const TITLE_CHAMPION_LABELS: Record<string, string> = {
  UC: "WWE Undisputed Champion",
  WH: "World Heavyweight Champion",
  WUC: "Women's Undisputed Champion",
  WWH: "Women's World Champion",
  IC: "Intercontinental Champion",
  US: "United States Champion",
  WIC: "Women's Intercontinental Champion",
  WUS: "Women's United States Champion",
  RAWTT: "RAW Tag Team Champion",
  SDTT: "Smackdown Tag Team Champion",
  MMITB: "Men's Money In The Bank Champion",
  RMMITB: "Men's RAW Money In The Bank Champion",
  SDMMITB: "Men's Smackdown Money In The Bank Champion",
  WMITB: "Women's Money In The Bank Champion",
};

// Belt icons (public/Images/Championships), keyed by title abbreviation —
// shown next to each entry in the wrestler profile pop-up.
export const TITLE_ICONS: Record<string, string> = {
  UC: "/Images/Championships/UndisputedWWE.webp",
  WH: "/Images/Championships/WorldHeavyweight.webp",
  WUC: "/Images/Championships/WomenUndisputed.webp",
  WWH: "/Images/Championships/WomenWorld.webp",
  IC: "/Images/Championships/Intercontinental.webp",
  US: "/Images/Championships/UnitedStates.webp",
  WIC: "/Images/Championships/WomenIC.webp",
  WUS: "/Images/Championships/WomenUS.webp",
  RAWTT: "/Images/Championships/RawTag.webp",
  SDTT: "/Images/Championships/SDTag.webp",
  MMITB: "/Images/Championships/MenMITB.webp",
  RMMITB: "/Images/Championships/RawMenMITB.webp",
  SDMMITB: "/Images/Championships/SDMenMITB.webp",
  WMITB: "/Images/Championships/WomenMITB.webp",
};

export const championshipOrder: Record<string, number> = {
  UC: 1,
  WH: 2,
  WUC: 3,
  WWH: 4,
  US: 5,
  IC: 6,
  WIC: 7,
  WUS: 8,
  RAWTT: 9,
  SDTT: 10,
  RMMITB: 11,
  SDMMITB: 12,
  WMITB: 13,
  MMITB: 14,
};

// Titles no longer in use. Their records and pages are kept (and still show
// in a wrestler's past title history), but they're left out of the "current
// champion" lookups — roster badges, profile pop-up, and the home page list.
export const RETIRED_TITLES = new Set<string>(["MMITB"]);
