// ppvResults.ts
//
// Pre-fills a PPV planning card with the match card already written on that PPV's page
// (e.g. matchCard2027 in PPVPages/ClashInParis/CIP.tsx), until a plan is saved for it.
// To pull in a PPV page that isn't listed here, export its events array and add it below.

import type { PPVEvent } from "../PPVShow";
import { MatchTypeInfo } from "../PPVPages/MatchTypeInfo";
import { ArmageddonEvents } from "../PPVPages/Armageddon/Armageddon";
import { BraggingRightsEvents } from "../PPVPages/BR/BraggingRights";
import { BacklashEvents } from "../PPVPages/Backlash/Backlash";
import { CIPEvents } from "../PPVPages/ClashInParis/CIP";
import { ECEvents } from "../PPVPages/EC/EC";
import { EREvents } from "../PPVPages/ER/ER";
import { MITBEvents } from "../PPVPages/MITB/MITB";
import { NOCEvents } from "../PPVPages/NOC/NightOfChampions";
import { RoyalRumbleEvents } from "../PPVPages/RoyalRumble/RoyalRumble";
import { SummerSlamEvents } from "../PPVPages/Summerslam/Summerslam";
import { SurvivorSeriesEvents } from "../PPVPages/SurvivorSeries/SurvivorSeries";
import { WMEvents } from "../PPVPages/Wrestlemania/Wrestlemania";
import { TITLE_OPTIONS, type PlannedMatch, type PPVNight } from "./planData";

// Keyed by the PPV's route — the same `link` used in ppvCalendar.ts.
const PPV_PAGE_EVENTS: Record<string, PPVEvent[]> = {
  "/Armageddon": ArmageddonEvents,
  "/BraggingRights": BraggingRightsEvents,
  "/Backlash": BacklashEvents,
  "/ClashInParis": CIPEvents,
  "/EC": ECEvents,
  "/ER": EREvents,
  "/MITB": MITBEvents,
  "/NOC": NOCEvents,
  "/RoyalRumble": RoyalRumbleEvents,
  "/Summerslam": SummerSlamEvents,
  "/SurvivorSeries": SurvivorSeriesEvents,
  "/Wrestlemania": WMEvents,
};

// ---------- Title name -> championships.ts abbreviation ----------

const normalizeTitle = (title: string) =>
  title
    .toLowerCase()
    .replace(/\(.*?\)/g, "") // "(Cash In)"
    .replace(/championships?|champion/g, "")
    .replace(/[^a-z]/g, "");

const TITLE_BY_NAME = new Map(TITLE_OPTIONS.map((t) => [normalizeTitle(t.label), t.abbr]));

// Older names and typos used on the PPV pages.
const TITLE_ALIASES: Record<string, string> = {
  wwe: "UC",
  mensundisputed: "UC",
  wweworldheavyweight: "WH",
  inter: "IC",
  intercontiental: "IC",
  intercontinetal: "IC",
  womensintercontinetal: "WIC",
  womensmitbbriefcase: "WMITB",
  rawmoneyinthebank: "RMMITB",
  smackdownmoneyinthebank: "SDMMITB",
};

/** Title abbreviation for a title name from a PPV page, or the name itself if it isn't a known title. */
function toChampionship(title?: string) {
  if (!title?.trim()) return "";
  const key = normalizeTitle(title);
  return TITLE_BY_NAME.get(key) ?? TITLE_ALIASES[key] ?? title.trim();
}

/** The matches on `ppv`'s own page for that year (and night), as planner rows. */
export function ppvPageMatches(ppv: PPVNight): PlannedMatch[] {
  const year = Number(ppv.key.slice(0, 4));
  const event = PPV_PAGE_EVENTS[ppv.link]?.find((e) => e.year === year);
  if (!event) return [];

  return event.matches
    .filter((m) => !ppv.night || (m.night ?? 1) === ppv.night)
    .map((m, i) => {
      const allowed = MatchTypeInfo[m.type]?.participants ?? [];
      return {
        id: `${ppv.key}-page-${i}`,
        competitors: m.match,
        participants: allowed.length === 1 ? allowed[0] : "",
        matchType: m.type,
        championship: toChampionship(m.title),
      };
    });
}
