import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { TITLE_COLLECTIONS, MITB_COLLECTIONS } from "../championships";

type TitleRecord = { name: string; date: string };
type MITBRecord = { name: string; dateWon: string; dateCashed?: string };

// Latest title-holder per title, derived live from Firestore — mirrors
// ChampionshipPage.tsx's `currentChampion = titleHolders[0]` (newest by date).
async function fetchCurrentTitleHolder(collectionId: string): Promise<string | null> {
  const snapshot = await getDocs(
    collection(db, "Wrestleverse", "ChampionshipData", collectionId)
  );
  const records = snapshot.docs.map((doc) => doc.data() as TitleRecord);
  if (records.length === 0) return null;

  const newest = records.reduce((latest, record) =>
    new Date(record.date).getTime() > new Date(latest.date).getTime() ? record : latest
  );
  return newest.name || null;
}

// MITB has no "current champion" field — the current briefcase holder is
// whoever's most recent win hasn't been cashed in yet.
async function fetchCurrentMITBHolder(collectionId: string): Promise<string | null> {
  const snapshot = await getDocs(
    collection(db, "Wrestleverse", "ChampionshipData", collectionId)
  );
  const records = snapshot.docs.map((doc) => doc.data() as MITBRecord);
  const uncashed = records.filter((record) => !record.dateCashed);
  if (uncashed.length === 0) return null;

  const current = uncashed.reduce((latest, record) =>
    new Date(record.dateWon).getTime() > new Date(latest.dateWon).getTime() ? record : latest
  );
  return current.name || null;
}

export function useCurrentChampions() {
  const [championByAbbrev, setChampionByAbbrev] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const fetchAll = async () => {
      const entries = await Promise.all([
        ...Object.entries(TITLE_COLLECTIONS).map(async ([abbrev, collectionId]) => {
          try {
            const name = await fetchCurrentTitleHolder(collectionId);
            return [abbrev, name] as const;
          } catch {
            return [abbrev, null] as const;
          }
        }),
        ...Object.entries(MITB_COLLECTIONS).map(async ([abbrev, collectionId]) => {
          try {
            const name = await fetchCurrentMITBHolder(collectionId);
            return [abbrev, name] as const;
          } catch {
            return [abbrev, null] as const;
          }
        }),
      ]);

      if (cancelled) return;

      const result: Record<string, string> = {};
      for (const [abbrev, name] of entries) {
        if (name) result[abbrev] = name;
      }
      setChampionByAbbrev(result);
      setLoading(false);
    };

    fetchAll();

    return () => {
      cancelled = true;
    };
  }, []);

  return { championByAbbrev, loading };
}

// Builds a lowercased/trimmed name -> title-abbreviation lookup for matching
// roster entries against the live champion data.
export function buildNameToAbbrevMap(
  championByAbbrev: Record<string, string>
): Map<string, string> {
  const map = new Map<string, string>();
  for (const [abbrev, name] of Object.entries(championByAbbrev)) {
    map.set(name.trim().toLowerCase(), abbrev);
  }
  return map;
}
