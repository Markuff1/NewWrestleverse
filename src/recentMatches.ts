// recentMatches.ts
//
// "Recent Matches" for the superstar pop-up (WrestlerModal.tsx), newest first, from
// every PPV page's match cards (PPVPages/ppvPages.ts), dated from ppvCalendar.ts (or the
// page's own date text for PPVs not on the calendar). Weekly shows are left out — their
// results aren't recorded. Only PPVs up to the latest one (currentPPV.ts) count — anything after that hasn't
// happened yet in the universe. A finished match is written "<winners> Def. <losers>",
// which gives the result; one still written "A Vs B" has none.
//
// Loaded on demand by WrestlerModal (dynamic import), so the PPV data stays out of the
// roster page's bundle until a pop-up is opened.

import { PPV_PAGES, eventDate } from "./PPVPages/ppvPages";
import { anchorLink, matchAnchorId, yearAnchorId } from "./PPVPages/ppvAnchors";
import { fromDateKey, getCurrentPPVDate, toDateKey } from "./calendarEvents";
import { normalizeWrestlerName } from "./RosterData";
import { entrantsText, resultOf } from "./matchParticipants";

type MatchSides = { winners: string; losers: string } | null;

export type RecentMatch = {
  id: string;
  date: string; // YYYY-MM-DD
  event: string;
  eventLink: string; // that PPV year on its page
  matchLink: string; // this match in that year's match card summary
  match: string;
  type: string;
  title: string;
  result?: "Win" | "Loss";
};

const addDaysKey = (key: string, days: number) => {
  const date = fromDateKey(key);
  date.setDate(date.getDate() + days);
  return toDateKey(date);
};

// `who` = the text names are looked for in (the participant list if the match has one).
const PPV_MATCHES: (RecentMatch & { who: string; sides: MatchSides })[] = PPV_PAGES.flatMap((page) =>
  page.events.flatMap((event) => {
    const firstNight = eventDate(page, event);
    if (!firstNight) return []; // no date yet, so it can't be placed in time
    const multiNight = event.matches.some((m) => (m.night ?? 1) > 1);

    return event.matches.map((m, i) => ({
      id: `${page.link}-${event.year}-${i}`,
      date: addDaysKey(firstNight, (m.night ?? 1) - 1),
      event: `${page.name} ${event.year}${multiNight ? ` · Night ${m.night ?? 1}` : ""}`,
      eventLink: anchorLink(page.link, yearAnchorId(page.bannerAlt, event.year)),
      matchLink: anchorLink(page.link, matchAnchorId(page.bannerAlt, event.year, i)),
      match: m.match,
      type: m.type,
      title: m.title ?? "",
      who: entrantsText(m),
      sides: resultOf(m),
    }));
  })
);

const escapeRegExp = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Every match up to the latest PPV that any of `names` (a superstar's name plus the tag
 * teams they've been in, or a team's name plus its aliases) appears in, newest first.
 */
export function findRecentMatches(names: string[]): RecentMatch[] {
  const patterns = [...new Set(names.map(normalizeWrestlerName).filter(Boolean))].map(
    (name) => new RegExp(`(^|[^a-z0-9])${escapeRegExp(name)}([^a-z0-9]|$)`, "i")
  );
  if (patterns.length === 0) return [];

  const latest = toDateKey(getCurrentPPVDate());
  const involves = (text: string) => patterns.some((p) => p.test(text));

  return PPV_MATCHES
    .filter((m) => m.date <= latest && involves(m.who))
    .map((m): RecentMatch => {
      const { id, date, event, eventLink, matchLink, match, type, title, sides } = m;
      const base = { id, date, event, eventLink, matchLink, match, type, title };
      const result = !sides ? undefined : involves(sides.winners) ? "Win" : involves(sides.losers) ? "Loss" : undefined;
      return result ? { ...base, result } : base;
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}
