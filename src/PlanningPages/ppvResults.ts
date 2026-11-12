// ppvResults.ts
//
// Pre-fills a PPV planning card with the match card already written on that PPV's page
// (e.g. matchCard2027 in PPVPages/ClashInParis/CIP.tsx), until a plan is saved for it.
// Covers every PPV page listed in PPVPages/ppvPages.ts.

import { MatchTypeInfo } from "../PPVPages/MatchTypeInfo";
import { PPV_PAGES } from "../PPVPages/ppvPages";
import { titleAbbrev } from "../titleNames";
import type { PlannedMatch, PPVNight } from "./planData";

/** Title abbreviation for a title name from a PPV page, or the name itself if it isn't a known title. */
const toChampionship = (title?: string) => titleAbbrev(title) || title?.trim() || "";

/** The matches on `ppv`'s own page for that year (and night), as planner rows. */
export function ppvPageMatches(ppv: PPVNight): PlannedMatch[] {
  const year = Number(ppv.key.slice(0, 4));
  const event = PPV_PAGES.find((page) => page.link === ppv.link)?.events.find((e) => e.year === year);
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
