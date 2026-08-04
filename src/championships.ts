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
  WMITB: "WMITB",
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
  MMITB: 11,
  WMITB: 12,
};
