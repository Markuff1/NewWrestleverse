import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { TITLE_COLLECTIONS, MITB_COLLECTIONS, TITLE_CHAMPION_LABELS, championshipOrder } from "../championships";
import rosterData, { normalizeWrestlerName } from "../RosterData";

export type TitleReignSummary = { abbrev: string; titleName: string; reigns: number };

type NamedRecord = { name: string };

// Every past and present holder of a title, oldest data source available:
// each Firestore doc in a title's collection is one reign/win.
async function fetchHolderNames(collectionId: string): Promise<string[]> {
  const snapshot = await getDocs(
    collection(db, "Wrestleverse", "ChampionshipData", collectionId)
  );
  return snapshot.docs
    .map((doc) => (doc.data() as NamedRecord).name)
    .filter((name): name is string => !!name && name.trim().toLowerCase() !== "vacant");
}

// Fetches full championship history (every title, every past/current holder)
// once, and groups it by wrestler/tag-team name for the profile pop-up.
export function useAllTitleHistory() {
  const [historyByName, setHistoryByName] = useState<Record<string, TitleReignSummary[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const fetchAll = async () => {
      const abbrevToCollection = { ...TITLE_COLLECTIONS, ...MITB_COLLECTIONS };

      const entries = await Promise.all(
        Object.entries(abbrevToCollection).map(async ([abbrev, collectionId]) => {
          try {
            return [abbrev, await fetchHolderNames(collectionId)] as const;
          } catch {
            return [abbrev, [] as string[]] as const;
          }
        })
      );

      if (cancelled) return;

      const result: Record<string, TitleReignSummary[]> = {};

      for (const [abbrev, names] of entries) {
        const reignsByKey = new Map<string, number>();
        for (const name of names) {
          const key = normalizeWrestlerName(name);
          reignsByKey.set(key, (reignsByKey.get(key) || 0) + 1);
        }

        for (const [key, reigns] of reignsByKey) {
          (result[key] ??= []).push({
            abbrev,
            titleName: TITLE_CHAMPION_LABELS[abbrev] ?? abbrev,
            reigns,
          });
        }
      }

      // Tag team titles are recorded under the team's name (e.g. "The
      // Usos"), not each wrestler's — attribute those reigns to every
      // member too so their individual profile shows the belts they've won.
      for (const team of rosterData["Tag Teams"]) {
        const teamHistory = result[normalizeWrestlerName(team.name)];
        if (!teamHistory || !team.members) continue;

        for (const member of team.members) {
          const memberKey = normalizeWrestlerName(member);
          const memberHistory = (result[memberKey] ??= []);

          for (const title of teamHistory) {
            const existing = memberHistory.find((t) => t.abbrev === title.abbrev);
            if (existing) {
              existing.reigns = Math.max(existing.reigns, title.reigns);
            } else {
              memberHistory.push({ ...title });
            }
          }
        }
      }

      for (const key in result) {
        result[key].sort(
          (a, b) => (championshipOrder[a.abbrev] ?? 999) - (championshipOrder[b.abbrev] ?? 999)
        );
      }

      setHistoryByName(result);
      setLoading(false);
    };

    fetchAll();

    return () => {
      cancelled = true;
    };
  }, []);

  return { historyByName, loading };
}
