import "../Home.css";
import "./Planning.css";
import Header from "../Header";
import Footer from "../Footer";
import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import rosterData, { type Wrestler } from "../RosterData";
import { RosterPickContext, useRosterPick } from "./rosterPick";
import { useMatchIdeas } from "./planData";

type PlanningLayoutProps = {
  title: string;
  children: ReactNode;
};

/** Full-width planning page: roster on the left, the planner in the middle, match ideas on the right. */
export function PlanningLayout({ title, children }: PlanningLayoutProps) {
  const { context, pick } = useRosterPick();

  return (
    <>
      <Header />

      <div className="PageBackground">
        <div className="PlanningPage">
          <div className="PlanningTopBar">
            <Link to="/Planning" className="PlanningBack">&larr; Planning</Link>
            <h1 className="PlanningTitle">{title}</h1>
            <span className="PlanningHint">Click a box under Match, then click names in the roster to add them.</span>
          </div>

          <RosterPickContext.Provider value={context}>
            <div className="PlanningLayout">
              <RosterPanel onPick={pick} />
              <main className="PlanningMain">{children}</main>
              <IdeasPanel />
            </div>
          </RosterPickContext.Provider>
        </div>
      </div>

      <Footer />
    </>
  );
}

// ---------- Roster ----------

const activeOf = (list: Wrestler[], tag: string) =>
  list.filter((w) => w.tag === tag && !w.disbanded).map((w) => w.name).sort((a, b) => a.localeCompare(b));

const ROSTER_SECTIONS = [
  { label: "Male Roster", list: rosterData.ALL.filter((w) => w.gender === "Man") },
  { label: "Female Roster", list: rosterData.ALL.filter((w) => w.gender === "Women") },
  { label: "Tag Team Roster", list: rosterData["Tag Teams"] },
].map(({ label, list }) => ({ label, raw: activeOf(list, "R"), sd: activeOf(list, "SD") }));

function RosterPanel({ onPick }: { onPick: (name: string) => void }) {
  const [search, setSearch] = useState("");
  const matches = (name: string) => name.toLowerCase().includes(search.trim().toLowerCase());

  return (
    <aside className="PlanningPanel PlanningRoster">
      <h2 className="PlanningPanelTitle">Roster</h2>
      <input
        className="PlanInput PlanningRosterSearch"
        placeholder="Search roster…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="PlanningRosterSections">
        {ROSTER_SECTIONS.map((section) => {
          const raw = section.raw.filter(matches);
          const sd = section.sd.filter(matches);
          const rows = Math.max(raw.length, sd.length);

          return (
            <section key={section.label} className="PlanningRosterSection">
              <h3>{section.label}</h3>
              <table className="PlanningRosterTable">
                <thead>
                  <tr>
                    <th className="PlanningRosterNum">No</th>
                    <th className="PlanningRosterRaw">RAW</th>
                    <th className="PlanningRosterSD">SD</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: rows }, (_, i) => (
                    <tr key={i}>
                      <td className="PlanningRosterNum">#{i + 1}</td>
                      {[raw[i], sd[i]].map((name, col) => (
                        <td key={col}>
                          {name && (
                            <button
                              type="button"
                              title={name}
                              onMouseDown={(e) => e.preventDefault()}
                              onClick={() => onPick(name)}
                            >
                              {name}
                            </button>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          );
        })}
      </div>
    </aside>
  );
}

// ---------- Planned matches (ideas) ----------

function IdeasPanel() {
  const { ideas, saveIdeas } = useMatchIdeas();
  const [draft, setDraft] = useState("");

  const add = () => {
    if (!draft.trim() || !ideas) return;
    saveIdeas([...ideas, { id: crypto.randomUUID(), text: draft.trim() }]);
    setDraft("");
  };

  return (
    <aside className="PlanningPanel PlanningIdeas">
      <h2 className="PlanningPanelTitle">Planned Matches</h2>
      <p className="PlanningPanelNote">Match ideas not booked on a show yet.</p>

      <form className="PlanningIdeaForm" onSubmit={(e) => { e.preventDefault(); add(); }}>
        <input
          className="PlanInput"
          placeholder="e.g. Cody vs Gunther"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
        />
        <button type="submit" disabled={!draft.trim() || !ideas}>Add</button>
      </form>

      {!ideas && <p className="PlanningPanelNote">Loading…</p>}
      <ol className="PlanningIdeaList">
        {ideas?.map((idea) => (
          <li key={idea.id}>
            <span>{idea.text}</span>
            <button
              onClick={() => saveIdeas(ideas.filter((i) => i.id !== idea.id))}
              aria-label={`Remove ${idea.text}`}
            >
              &#10005;
            </button>
          </li>
        ))}
      </ol>
    </aside>
  );
}
