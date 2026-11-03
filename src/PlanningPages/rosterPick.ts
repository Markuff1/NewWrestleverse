// Roster panel -> competitor box: the last competitors box the user clicked into
// registers itself here, so clicking a name in the roster panel adds that name to it.

import { createContext, useMemo, useRef } from "react";

type InsertName = (name: string) => void;

export const RosterPickContext = createContext<{ setTarget: (insert: InsertName) => void } | null>(null);

/** Value for the planner page's RosterPickContext, plus the `pick` handler to give the roster panel. */
export function useRosterPick() {
  const target = useRef<InsertName | null>(null);
  const context = useMemo(() => ({ setTarget: (insert: InsertName) => { target.current = insert; } }), []);
  const pick = (name: string) => target.current?.(name);
  return { context, pick };
}
