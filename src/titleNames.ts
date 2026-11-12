// titleNames.ts
//
// Title names as written on the PPV pages ("Raw Tag Team Championships", "IC Title",
// "Women's Intercontinetal Championship") -> the title's abbreviation in championships.ts.
// Used by the PPV pages' result panel (belt icon) and the PPV planner's pre-fill.
// Only imports championships.ts, so PPV pages can use it without a circular import.

import { TITLE_CHAMPION_LABELS } from "./championships";

const normalizeTitle = (title: string) =>
  title
    .toLowerCase()
    .replace(/\(.*?\)/g, "") // "(Cash In)"
    .replace(/championships?|champion|titles?/g, "")
    .replace(/[^a-z]/g, "");

const TITLE_BY_NAME = new Map(
  Object.entries(TITLE_CHAMPION_LABELS).map(([abbr, label]) => [normalizeTitle(label), abbr])
);

// Older names, short forms and typos used on the PPV pages.
const TITLE_ALIASES: Record<string, string> = {
  wwe: "UC",
  mensundisputed: "UC",
  wweworldheavyweight: "WH",
  worldheavyweigt: "WH",
  wwewomens: "WUC",
  inter: "IC",
  ic: "IC",
  intercontiental: "IC",
  intercontinetal: "IC",
  us: "US",
  wic: "WIC",
  womensintercontinetal: "WIC",
  sdtagteam: "SDTT",
  moneyinthebank: "MMITB",
  mensmoneyinthebank: "MMITB",
  mensmitbbriefcase: "MMITB",
  womensmitbbriefcase: "WMITB",
  rawmoneyinthebank: "RMMITB",
  smackdownmoneyinthebank: "SDMMITB",
};

/** The championships.ts abbreviation for a title name from a PPV page, or "" if it isn't a known title. */
export function titleAbbrev(title?: string): string {
  if (!title?.trim()) return "";
  const key = normalizeTitle(title);
  return TITLE_BY_NAME.get(key) ?? TITLE_ALIASES[key] ?? "";
}
