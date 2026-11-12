// Who can be entered as a champion on each championship page: tag teams for the
// tag titles, otherwise the men's or women's roster (plus "Vacant"). The name box
// on ChampionshipPage / MITBRecordsPage offers this list and rejects anything else.

import rosterData, { normalizeWrestlerName } from "../RosterData";

const TAG_TEAM_COLLECTIONS = new Set(["RawTagTeam", "SmackdownTagTeam"]);
const WOMEN_COLLECTIONS = new Set([
  "WomenUndisputed",
  "WomenWorld",
  "WomenIntercontinental",
  "WomenUnitedStates",
  "WMITB",
]);

export const VACANT = "Vacant";

/** Names offered in the list for this championship, A–Z (with "Vacant" first). */
export function championOptions(collectionId: string): string[] {
  const names = TAG_TEAM_COLLECTIONS.has(collectionId)
    ? rosterData["Tag Teams"].map((team) => team.name)
    : rosterData.ALL
        .filter((w) => (w.gender === "Women") === WOMEN_COLLECTIONS.has(collectionId))
        .map((w) => w.name);
  return [VACANT, ...[...new Set(names)].sort((a, b) => a.localeCompare(b))];
}

/** Error to show for `name` on this championship's page, or "" if it's fine. */
export function championNameError(name: string, collectionId: string): string {
  const key = normalizeWrestlerName(name);
  if (!key) return "Please enter a name.";

  const isTagTitle = TAG_TEAM_COLLECTIONS.has(collectionId);
  // Tag teams can also be recorded under one of their aliases (e.g. an abbreviation).
  const allowed = isTagTitle
    ? [VACANT, ...rosterData["Tag Teams"].flatMap((team) => [team.name, ...(team.aliases ?? [])])]
    : championOptions(collectionId);
  if (allowed.some((n) => normalizeWrestlerName(n) === key)) return "";

  return isTagTitle
    ? `"${name.trim()}" isn't a tag team on the roster. Pick one from the list.`
    : `"${name.trim()}" isn't a ${WOMEN_COLLECTIONS.has(collectionId) ? "female" : "male"} superstar on the roster. Pick one from the list.`;
}
