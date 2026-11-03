// planData.ts
//
// Shared data for the Planning pages (weekly show + PPV planning) and the planned
// week tabs on the RAW / Smackdown pages.
//
// Firestore layout (all covered by the single `Wrestleverse/ShowPlans/{show}/{date}` rule):
// - Wrestleverse/ShowPlans/RAW/<YYYY-MM-DD>  -> { matches: PlannedMatch[] }  one doc per RAW
// - Wrestleverse/ShowPlans/SD/<YYYY-MM-DD>   -> { matches: PlannedMatch[] }  one doc per Smackdown
// - Wrestleverse/ShowPlans/PPV/<YYYY-MM-DD>  -> { matches: PlannedMatch[] }  one doc per PPV night
// - Wrestleverse/ShowPlans/Ideas/list        -> { items: MatchIdea[] }       the "Planned Matches" list

import { useCallback, useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { ppvCalendar } from "../ppvCalendar";
import { fromDateKey, getCurrentPPVDate, toDateKey } from "../calendarEvents";
import {
  MITB_COLLECTIONS,
  RETIRED_TITLES,
  TITLE_CHAMPION_LABELS,
  TITLE_COLLECTIONS,
  championshipOrder,
} from "../championships";
import { MatchTypeInfo, PARTICIPANT_LABELS, type ParticipantCount } from "../PPVPages/MatchTypeInfo";

export type ShowKind = "RAW" | "SD";
export type PlanBoard = ShowKind | "PPV";

export type PlannedMatch = {
  id: string;
  competitors: string;
  participants?: ParticipantCount | ""; // "" = any
  matchType: string;
  championship: string; // title abbreviation from championships.ts, or "" for none
};

export type MatchIdea = { id: string; text: string };

export const SHOWS: Record<ShowKind, { name: string; weekday: number; rosterTag: string; logo: string; link: string }> = {
  RAW: { name: "Monday Night RAW", weekday: 1, rosterTag: "R", logo: "/Images/RAWLogo.webp", link: "/RAW" },
  SD: { name: "Friday Night Smackdown", weekday: 5, rosterTag: "SD", logo: "/Images/SDLogo.webp", link: "/SD" },
};

// ---------- Match options ----------

export const PARTICIPANT_OPTIONS = Object.keys(PARTICIPANT_LABELS) as ParticipantCount[];

/** Match types from MatchTypeInfo.ts that can be booked with `participants` (every plannable type when ""). */
export const matchTypesFor = (participants: ParticipantCount | "") =>
  Object.keys(MatchTypeInfo).filter((type) => {
    const allowed = MatchTypeInfo[type].participants;
    return participants ? allowed.includes(participants) : allowed.length > 0;
  });

// Active championships plus the MITB briefcases, in roster order.
export const TITLE_OPTIONS = [...Object.keys(TITLE_COLLECTIONS), ...Object.keys(MITB_COLLECTIONS)]
  .filter((abbr) => !RETIRED_TITLES.has(abbr))
  .sort((a, b) => (championshipOrder[a] ?? 999) - (championshipOrder[b] ?? 999))
  .map((abbr) => ({ abbr, label: TITLE_CHAMPION_LABELS[abbr].replace(/ Champion$/, "") }));

export const titleLabel = (abbr: string) => TITLE_OPTIONS.find((t) => t.abbr === abbr)?.label ?? abbr;

export const newMatch = (): PlannedMatch => ({
  id: crypto.randomUUID(),
  competitors: "",
  participants: "",
  matchType: "",
  championship: "",
});

/** A row with anything filled in (blank rows are kept while editing but never shown on the show pages). */
export const isFilled = (m: PlannedMatch) => Boolean(m.competitors.trim() || m.matchType || m.championship);

// ---------- Dates ----------

export const addDays = (date: Date, days: number) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);

/** The first `weekday` on or after `date`. */
export const nextWeekday = (date: Date, weekday: number) => addDays(date, (weekday - date.getDay() + 7) % 7);

export const fullDateLabel = (date: Date) =>
  date.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

export const shortDateLabel = (date: Date) =>
  date.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });

/** Every PPV night on the calendar, soonest first (multi-night PPVs get one entry per night). */
export type PPVNight = {
  key: string; // YYYY-MM-DD of this night
  name: string;
  night?: number;
  nights?: number;
  location: string;
  image: string;
  link: string;
};

export const ppvNights: PPVNight[] = [...ppvCalendar]
  .sort((a, b) => a.date.localeCompare(b.date))
  .flatMap((ppv) => {
    const nights = ppv.nights ?? 1;
    return Array.from({ length: nights }, (_, i) => ({
      key: toDateKey(addDays(fromDateKey(ppv.date), i)),
      name: ppv.name,
      location: ppv.location,
      image: ppv.image,
      link: ppv.link,
      ...(nights > 1 && { night: i + 1, nights }),
    }));
  });

/** Any date inside the current "Road to <next PPV>" stretch — the default for the weekly planner. */
export const defaultAnchorKey = () => toDateKey(addDays(getCurrentPPVDate(), -1));

export type PlanWeek = { monday: Date; raw?: Date; sd?: Date };

/**
 * The weeks between the PPV before `anchorKey` and the PPV after it ("Road to <PPV>"),
 * with that week's RAW and Smackdown dates. Before the first / after the last PPV on the
 * calendar it's a single 4-week block (the planner's arrows stop there).
 */
export function getPPVCycle(anchorKey: string) {
  const nextPPV = ppvNights.find((ppv) => ppv.key > anchorKey && (ppv.night ?? 1) === 1);
  const prevPPV = [...ppvNights].reverse().find((ppv) => ppv.key <= anchorKey);

  const anchor = fromDateKey(anchorKey);
  const start = prevPPV ? addDays(fromDateKey(prevPPV.key), 1) : addDays(nextPPV ? fromDateKey(nextPPV.key) : anchor, -28);
  const end = nextPPV ? fromDateKey(nextPPV.key) : addDays(start, 28);
  const inCycle = (day: Date) => day >= start && day < end;

  const weeks: PlanWeek[] = [];
  for (let monday = addDays(start, -((start.getDay() + 6) % 7)); monday < end; monday = addDays(monday, 7)) {
    const raw = addDays(monday, SHOWS.RAW.weekday - 1);
    const sd = addDays(monday, SHOWS.SD.weekday - 1);
    const week: PlanWeek = { monday, ...(inCycle(raw) && { raw }), ...(inCycle(sd) && { sd }) };
    if (week.raw || week.sd) weeks.push(week);
  }

  return { prevPPV, nextPPV, start, end, weeks };
}

// ---------- Firestore ----------

/** Every saved plan for one board (RAW, SD or PPV), keyed by date, plus a save function. */
export function usePlans(board: PlanBoard) {
  const [plans, setPlans] = useState<Record<string, PlannedMatch[]> | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    getDocs(collection(db, "Wrestleverse", "ShowPlans", board))
      .then((snapshot) => {
        if (cancelled) return;
        const loaded: Record<string, PlannedMatch[]> = {};
        snapshot.forEach((d) => { loaded[d.id] = (d.data().matches ?? []) as PlannedMatch[]; });
        setPlans(loaded);
      })
      .catch((err) => !cancelled && setError(String(err)));
    return () => { cancelled = true; };
  }, [board]);

  // An emptied card is still saved (as []) so a PPV card you've cleared doesn't refill from its PPV page.
  const savePlan = useCallback(async (dateKey: string, matches: PlannedMatch[]) => {
    const ref = doc(db, "Wrestleverse", "ShowPlans", board, dateKey);
    await setDoc(ref, { matches, updatedAt: new Date().toISOString() });

    setPlans((prev) => ({ ...prev, [dateKey]: matches }));
  }, [board]);

  return { plans, error, savePlan };
}

/** The free-form "Planned Matches" ideas list shown beside both planners. */
export function useMatchIdeas() {
  const [ideas, setIdeas] = useState<MatchIdea[] | null>(null);
  const ref = doc(db, "Wrestleverse", "ShowPlans", "Ideas", "list");

  useEffect(() => {
    getDoc(doc(db, "Wrestleverse", "ShowPlans", "Ideas", "list"))
      .then((snap) => setIdeas((snap.data()?.items ?? []) as MatchIdea[]))
      .catch(() => setIdeas([]));
  }, []);

  const saveIdeas = async (items: MatchIdea[]) => {
    setIdeas(items);
    await setDoc(ref, { items, updatedAt: new Date().toISOString() });
  };

  return { ideas, saveIdeas };
}
