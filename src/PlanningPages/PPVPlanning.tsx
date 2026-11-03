import { useState } from "react";
import { Link } from "react-router-dom";
import { fromDateKey, getCurrentPPVDate } from "../calendarEvents";
import { PlanningLayout } from "./PlanningLayout";
import { PlanCard } from "./PlanCard";
import { fullDateLabel, ppvNights, usePlans } from "./planData";
import { ppvPageMatches } from "./ppvResults";

// One card per PPV night on the calendar (ppvCalendar.ts), a year at a time.
// To plan a PPV that isn't listed yet, add it to ppvCalendar.ts first.
// A card with nothing saved yet starts from the match card on that PPV's own page.

const YEARS = [...new Set(ppvNights.map((ppv) => Number(ppv.key.slice(0, 4))))];

function PPVPlanning() {
  const currentYear = getCurrentPPVDate().getFullYear();
  const [year, setYear] = useState(YEARS.includes(currentYear) ? currentYear : YEARS[YEARS.length - 1]);
  const { plans, error, savePlan } = usePlans("PPV");

  const nights = ppvNights.filter((ppv) => ppv.key.startsWith(String(year)));

  return (
    <PlanningLayout title="PPV Planning">
      <div className="PlanningYearTabs">
        {YEARS.map((y) => (
          <button key={y} className={y === year ? "is-active" : ""} onClick={() => setYear(y)}>
            {y}
          </button>
        ))}
      </div>

      {error && <p className="PlanningError">Couldn't load plans: {error}</p>}
      {!plans && !error && <p className="PlanningLoading">Loading…</p>}

      {plans && (
        <div className="PlanningPPVGrid">
          {nights.map((ppv) => (
            <PlanCard
              key={ppv.key}
              variant="ppv"
              title={
                <Link to={ppv.link}>
                  {ppv.name}
                  {ppv.night && <span className="PlanCardNight">Night {ppv.night}</span>}
                </Link>
              }
              meta={<>{ppv.location} · {fullDateLabel(fromDateKey(ppv.key))}</>}
              initial={plans[ppv.key] ?? ppvPageMatches(ppv)}
              note={!plans[ppv.key] && ppvPageMatches(ppv).length > 0 ? "from PPV page" : undefined}
              onSave={(matches) => savePlan(ppv.key, matches)}
            />
          ))}
        </div>
      )}
    </PlanningLayout>
  );
}

export default PPVPlanning;
