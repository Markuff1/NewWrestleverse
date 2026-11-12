// matchParticipants.ts
//
// Who's in a match, from its free-text card line ("Becky Lynch (c) Def. Naomi",
// "Street Profits Vs Dudley Boys") — every roster superstar or tag team named in it,
// in the order they appear. Used for the superstar circles under each match on the
// PPV pages (PPVShow.tsx). Names are matched against the roster's own spelling, so a
// typo on a PPV page just means that superstar has no circle.

import rosterData, { normalizeWrestlerName } from "./RosterData";

export type MatchParticipant = { name: string; src: string; isTeam: boolean };

type Candidate = MatchParticipant & { pattern: RegExp; length: number };

const escapeRegExp = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const candidate = (key: string, participant: MatchParticipant): Candidate => ({
  ...participant,
  pattern: new RegExp(`(^|[^a-z0-9])(${escapeRegExp(key)})(?=[^a-z0-9]|$)`, "gi"),
  length: key.length,
});

// Longest names first, so "Dominik Mysterio" wins over a shorter name inside it.
const CANDIDATES: Candidate[] = [
  ...rosterData.ALL.map((w) =>
    candidate(normalizeWrestlerName(w.name), { name: w.name, src: w.src, isTeam: false })
  ),
  ...rosterData["Tag Teams"].flatMap((team) =>
    [team.name, ...(team.aliases ?? [])].map((alias) =>
      candidate(normalizeWrestlerName(alias), { name: team.name, src: team.src, isTeam: true })
    )
  ),
]
  .filter((c) => c.length > 1)
  .sort((a, b) => b.length - a.length);

const cache = new Map<string, MatchParticipant[]>();

export function matchParticipants(text: string): MatchParticipant[] {
  const cached = cache.get(text);
  if (cached) return cached;

  const taken: [number, number][] = [];
  const found: { at: number; participant: MatchParticipant }[] = [];

  for (const c of CANDIDATES) {
    for (const m of text.matchAll(c.pattern)) {
      const start = m.index + m[1].length;
      const end = start + m[2].length;
      if (taken.some(([s, e]) => start < e && end > s)) continue; // inside a longer name already found
      taken.push([start, end]);
      found.push({ at: start, participant: { name: c.name, src: c.src, isTeam: c.isTeam } });
    }
  }

  const seen = new Set<string>();
  const result = found
    .sort((a, b) => a.at - b.at)
    .map((f) => f.participant)
    .filter((p) => !seen.has(p.name) && seen.add(p.name));

  cache.set(text, result);
  return result;
}

// ---------- Results ----------

// "Becky Lynch (c) Def. Naomi", also "Dudley Boys (c) Def.The New Day" (no space).
const DEFEATED = /\s+def(?:\.\s*|\s+)/i;

/** A finished match's two sides — `null` while it's still written "A Vs B" (no result yet). */
export function splitResult(text: string): { winners: string; losers: string } | null {
  const [winners, ...losers] = text.split(DEFEATED);
  return losers.length ? { winners, losers: losers.join(" ") } : null;
}

// ---------- Matches with an explicit participant list ----------
// Big matches (e.g. Money in the Bank) can list everyone in `participants` and the
// `winner` separately, so the card line itself can stay short ("Liv Morgan Wins Women's
// Money In The Bank"). Matches without them are read from their text, as above.

export type MatchEntrants = { match: string; participants?: string[]; winner?: string };

/** The text to look for names in: the participant list if there is one, else the card line. */
export const entrantsText = (m: MatchEntrants) =>
  m.participants?.length ? m.participants.join(", ") : m.match;

/** Everyone in the match, in order (see matchParticipants). */
export const participantsOf = (m: MatchEntrants) => matchParticipants(entrantsText(m));

/** The winners / losers of a match: from `winner` (+ `participants`) when set, else parsed from "X Def. Y". */
export function resultOf(m: MatchEntrants): { winners: string; losers: string } | null {
  const winner = m.winner?.trim();
  if (!winner) return splitResult(m.match);
  const losers = (m.participants ?? []).filter(
    (p) => normalizeWrestlerName(p) !== normalizeWrestlerName(winner)
  );
  return { winners: winner, losers: losers.join(", ") };
}
