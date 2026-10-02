import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { TITLE_COLLECTIONS, TITLE_CHAMPION_LABELS } from "../championships";
import { normalizeWrestlerName } from "../RosterData";

export type TitleRecords = {
  abbrev: string;
  titleName: string;
  longest?: { holderKey: string; weeks: number };
  shortest?: { holderKey: string; weeks: number };
  mostReigns?: { holderKeys: string[]; count: number };
};

type TitleRecord = { name: string; date: string };

function weeksBetween(startMs: number, endMs: number): number {
  return Math.max(0, Math.floor((endMs - startMs) / (1000 * 60 * 60 * 24 * 7)));
}

// One title's records, oldest first — mirrors ChampionshipPage.tsx's own
// longest/shortest/most-reigns stats, just computed generically for every
// title so the wrestler profile pop-up can flag whoever holds each record.
async function fetchTitleRecords(collectionId: string): Promise<{
  longest: { name: string; weeks: number };
  shortest: { name: string; weeks: number } | null;
  mostReigns: { names: string[]; count: number };
} | null> {
  const snapshot = await getDocs(
    collection(db, "Wrestleverse", "ChampionshipData", collectionId)
  );

  const records = snapshot.docs
    .map((doc) => doc.data() as TitleRecord)
    .filter((r) => r.name && r.name.trim().toLowerCase() !== "vacant" && r.date)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  if (records.length === 0) return null;

  const reigns = records.map((r, i) => {
    const start = new Date(r.date).getTime();
    const end = i + 1 < records.length ? new Date(records[i + 1].date).getTime() : Date.now();
    return { name: r.name, weeks: weeksBetween(start, end) };
  });

  const longest = reigns.reduce((best, r) => (!best || r.weeks > best.weeks ? r : best));

  // Shortest excludes the current (still-ongoing) reign, same as
  // ChampionshipPage.tsx's shortestReign stat.
  const pastReigns = reigns.slice(0, -1);
  const shortest = pastReigns.length
    ? pastReigns.reduce((best, r) => (!best || r.weeks < best.weeks ? r : best))
    : null;

  const countByKey = new Map<string, number>();
  for (const r of reigns) {
    const key = normalizeWrestlerName(r.name);
    countByKey.set(key, (countByKey.get(key) || 0) + 1);
  }
  const maxCount = Math.max(...countByKey.values());
  const topKeys = [...countByKey.entries()]
    .filter(([, count]) => count === maxCount)
    .map(([key]) => key);

  return { longest, shortest, mostReigns: { names: topKeys, count: maxCount } };
}

// Longest reign, shortest reign, and most-reigns records for every title,
// fetched live from Firestore — used to flag a wrestler's profile pop-up
// with "Longest/Shortest Reigning X Champion" or "Most X Reigns" when the
// record belongs to them.
export function useTitleRecords() {
  const [recordsByAbbrev, setRecordsByAbbrev] = useState<Record<string, TitleRecords>>({});

  useEffect(() => {
    let cancelled = false;

    const fetchAll = async () => {
      const entries = await Promise.all(
        Object.entries(TITLE_COLLECTIONS).map(async ([abbrev, collectionId]) => {
          try {
            return [abbrev, await fetchTitleRecords(collectionId)] as const;
          } catch {
            return [abbrev, null] as const;
          }
        })
      );

      if (cancelled) return;

      const result: Record<string, TitleRecords> = {};
      for (const [abbrev, stats] of entries) {
        if (!stats) continue;

        result[abbrev] = {
          abbrev,
          titleName: TITLE_CHAMPION_LABELS[abbrev] ?? abbrev,
          longest: { holderKey: normalizeWrestlerName(stats.longest.name), weeks: stats.longest.weeks },
          shortest: stats.shortest
            ? { holderKey: normalizeWrestlerName(stats.shortest.name), weeks: stats.shortest.weeks }
            : undefined,
          mostReigns: { holderKeys: stats.mostReigns.names, count: stats.mostReigns.count },
        };
      }

      setRecordsByAbbrev(result);
    };

    fetchAll();

    return () => {
      cancelled = true;
    };
  }, []);

  return { recordsByAbbrev };
}
