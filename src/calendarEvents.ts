// calendarEvents.ts
//
// Builds the list of shows for any day: RAW every Monday, Smackdown every Friday,
// plus whatever PPVs are listed in ppvCalendar.ts.

import { currentPPV } from "./currentPPV";
import { ppvCalendar, type CalendarPPV } from "./ppvCalendar";

export type CalendarEvent = {
  kind: "RAW" | "SD" | "PPV";
  name: string;
  image: string;
  link: string;
  location?: string;
  /** Multi-night PPVs only: which night this day is, out of `nights`. */
  night?: number;
  nights?: number;
};

const MONTHS = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
];

const RAW_EVENT: CalendarEvent = { kind: "RAW", name: "Monday Night RAW", image: "/Images/RAWLogo.webp", link: "/RAW" };
const SD_EVENT: CalendarEvent = { kind: "SD", name: "Friday Night Smackdown", image: "/Images/SDLogo.webp", link: "/SD" };

/** "YYYY-MM-DD" in local time — used as the lookup key for PPVs. */
export const toDateKey = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

/** "YYYY-MM-DD" -> local Date (avoids the UTC shift of `new Date("YYYY-MM-DD")`). */
export const fromDateKey = (key: string) => {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, month - 1, day);
};

// Each night of a multi-night PPV gets its own entry on consecutive days.
const ppvByDate = new Map<string, CalendarEvent[]>();
for (const ppv of ppvCalendar) {
  const nights = ppv.nights ?? 1;
  for (let night = 1; night <= nights; night++) {
    const day = fromDateKey(ppv.date);
    day.setDate(day.getDate() + night - 1);
    const key = toDateKey(day);

    ppvByDate.set(key, [
      ...(ppvByDate.get(key) ?? []),
      {
        kind: "PPV",
        name: ppv.name,
        image: ppv.image,
        link: ppv.link,
        location: ppv.location,
        ...(nights > 1 && { night, nights }),
      },
    ]);
  }
}

/**
 * Parses the free-text date in currentPPV.ts (e.g. "Saturday, July 22nd, 2028, 7e/5p"
 * or "Saturday 22nd July 2028"). Falls back to today if it can't be read.
 */
export function getCurrentPPVDate(): Date {
  const text = currentPPV.date.toLowerCase();
  const month = MONTHS.findIndex((m) => text.includes(m));
  const day = text.match(/\b(\d{1,2})(st|nd|rd|th)?\b/);
  const year = text.match(/\b(\d{4})\b/);

  if (month === -1 || !day || !year) return new Date();
  return new Date(Number(year[1]), month, Number(day[1]));
}

export function getEventsForDate(date: Date): CalendarEvent[] {
  const events: CalendarEvent[] = [];
  const weekday = date.getDay();

  if (weekday === 1) events.push(RAW_EVENT);
  if (weekday === 5) events.push(SD_EVENT);

  events.push(...(ppvByDate.get(toDateKey(date)) ?? []));

  return events;
}

/** The next `count` PPVs on or after `from`, soonest first. */
export function getUpcomingPPVs(from: Date, count: number): CalendarPPV[] {
  const fromKey = toDateKey(from);
  return ppvCalendar
    .filter((ppv) => ppv.date >= fromKey)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, count);
}
