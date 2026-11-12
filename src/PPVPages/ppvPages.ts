// ppvPages.ts
//
// Every PPV page's events (the arrays each page passes to PPVShow), in one list —
// used to pre-fill PPV planning cards (PlanningPages/ppvResults.ts) and for the
// "Recent Matches" in the superstar pop-up (recentMatches.ts).
// Adding a new PPV page? Export its events array and add it here.
//
// - link:      the page's route (the same value used in ppvCalendar.ts / currentPPV.ts)
// - bannerAlt: the `bannerAlt` the page gives PPVShow — each year's section has the id
//              "<bannerAlt>-<year>", so "<link>#<bannerAlt>-<year>" scrolls to that year.

import type { PPVEvent } from "../PPVShow";
import { ArmageddonEvents } from "./Armageddon/Armageddon";
import { BacklashEvents } from "./Backlash/Backlash";
import { BraggingRightsEvents } from "./BR/BraggingRights";
import { CIPEvents } from "./ClashInParis/CIP";
import { CyberSundayEvents } from "./CyberSunday/CyberSunday";
import { ECEvents } from "./EC/EC";
import { EREvents } from "./ER/ER";
import { HIACEvents } from "./HIAC/HIAC";
import { MITBEvents } from "./MITB/MITB";
import { NOCEvents } from "./NOC/NightOfChampions";
import { NoMercyEvents } from "./NoMercy/NoMercy";
import { NoWayOutEvents } from "./NoWayOut/NoWayOut";
import { NYREvents } from "./NYR/NYR";
import { ONSEvent } from "./ONS/ONS";
import { OTLEvents } from "./OverTheLimit/OverTheLimit";
import { RoyalRumbleEvents } from "./RoyalRumble/RoyalRumble";
import { SummerSlamEvents } from "./Summerslam/Summerslam";
import { SurvivorSeriesEvents } from "./SurvivorSeries/SurvivorSeries";
import { TLCEvents } from "./TLC/TLC";
import { WMEvents } from "./Wrestlemania/Wrestlemania";

import { ppvCalendar } from "../ppvCalendar";
import { toDateKey } from "../calendarEvents";
import { anchorLink, yearAnchorId } from "./ppvAnchors";

export type PPVPage = { link: string; name: string; bannerAlt: string; events: PPVEvent[] };

export const PPV_PAGES: PPVPage[] = [
  { link: "/Armageddon", name: "Armageddon", bannerAlt: "Armageddon", events: ArmageddonEvents },
  { link: "/Backlash", name: "Backlash", bannerAlt: "Backlash Banner", events: BacklashEvents },
  { link: "/BraggingRights", name: "Bragging Rights", bannerAlt: "BraggingRights", events: BraggingRightsEvents },
  { link: "/ClashInParis", name: "Clash In Paris", bannerAlt: "Clash In Paris", events: CIPEvents },
  { link: "/CyberSunday", name: "Cyber Sunday", bannerAlt: "Cyber Sunday Banner", events: CyberSundayEvents },
  { link: "/EC", name: "Elimination Chamber", bannerAlt: "Elimination Chamber Banner", events: ECEvents },
  { link: "/ER", name: "Extreme Rules", bannerAlt: "Extreme Rules Banner", events: EREvents },
  { link: "/HIAC", name: "Hell In A Cell", bannerAlt: "Hell In A Cell Banner", events: HIACEvents },
  { link: "/MITB", name: "Money In The Bank", bannerAlt: "MITB Banner", events: MITBEvents },
  { link: "/NOC", name: "Night Of Champions", bannerAlt: "Night Of Champions Banner", events: NOCEvents },
  { link: "/NoMercy", name: "No Mercy", bannerAlt: "No Mercy Banner", events: NoMercyEvents },
  { link: "/NoWayOut", name: "No Way Out", bannerAlt: "No Way Out Banner", events: NoWayOutEvents },
  { link: "/NYR", name: "New Year's Revolution", bannerAlt: "NYR Banner", events: NYREvents },
  { link: "/ONS", name: "One Night Stand", bannerAlt: "One Night Stand Banner", events: ONSEvent },
  { link: "/OverTheLimit", name: "Over The Limit", bannerAlt: "Over The Limit Banner", events: OTLEvents },
  { link: "/RoyalRumble", name: "Royal Rumble", bannerAlt: "Royal Rumble Banner", events: RoyalRumbleEvents },
  { link: "/Summerslam", name: "Summerslam", bannerAlt: "Summerslam Banner", events: SummerSlamEvents },
  { link: "/SurvivorSeries", name: "Survivor Series", bannerAlt: "Survivor Series Banner", events: SurvivorSeriesEvents },
  { link: "/TLC", name: "TLC", bannerAlt: "TLC Banner", events: TLCEvents },
  { link: "/Wrestlemania", name: "WrestleMania", bannerAlt: "WrestleMania Banner", events: WMEvents },
];

// ---------- Timeline ----------

const MONTHS = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
];

/** A page's free-text date ("Saturday, August 7th 2027, 7e/5p") -> YYYY-MM-DD, or null if there isn't one. */
function parseDateText(text: string, year: number) {
  const lower = text.toLowerCase();
  const month = MONTHS.findIndex((m) => lower.includes(m));
  const day = lower.match(/\b(\d{1,2})(st|nd|rd|th)?\b/);
  return month === -1 || !day ? null : toDateKey(new Date(year, month, Number(day[1])));
}

/**
 * Night 1's date for a PPV year: from ppvCalendar.ts if it's there, otherwise the page's own
 * date text — null for a placeholder year with no date yet (e.g. No Way Out).
 */
export const eventDate = (page: PPVPage, event: PPVEvent): string | null =>
  ppvCalendar.find((ppv) => ppv.link === page.link && ppv.date.startsWith(String(event.year)))?.date ??
  parseDateText(event.date, event.year);

export type TimelineEntry = { page: PPVPage; event: PPVEvent; date: string; label: string; href: string };

/**
 * Every dated PPV year across all pages, in date order — drives each page's previous / next
 * PPV buttons. Years with no date yet are left out until they get one.
 */
export const PPV_TIMELINE: TimelineEntry[] = PPV_PAGES.flatMap((page) =>
  page.events.flatMap((event) => {
    const date = eventDate(page, event);
    if (!date) return [];
    return [{
      page,
      event,
      date,
      label: `${page.name} ${event.year}`,
      href: anchorLink(page.link, yearAnchorId(page.bannerAlt, event.year)),
    }];
  })
).sort((a, b) => a.date.localeCompare(b.date));

/** The PPVs either side of `link`'s `year` on the timeline. */
export function neighbouringPPVs(link: string, year: number) {
  const i = PPV_TIMELINE.findIndex((entry) => entry.page.link === link && entry.event.year === year);
  return i === -1 ? {} : { previous: PPV_TIMELINE[i - 1], next: PPV_TIMELINE[i + 1] };
}
