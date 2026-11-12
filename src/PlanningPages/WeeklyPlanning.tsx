import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fromDateKey, toDateKey } from "../calendarEvents";
import { PlanningLayout } from "./PlanningLayout";
import { PlanCard } from "./PlanCard";
import {
  SHOWS,
  addDays,
  defaultAnchorKey,
  fullDateLabel,
  getPPVCycle,
  shortDateLabel,
  usePlans,
  type ShowKind,
} from "./planData";

// Plans RAW + Smackdown for one "Road to <PPV>" stretch at a time. `?date=YYYY-MM-DD`
// (any day in the stretch) picks which one; the Calendar / RAW / SD pages link in with it.

function WeeklyPlanning() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dateParam = searchParams.get("date");
  const anchorKey = dateParam && /^\d{4}-\d{2}-\d{2}$/.test(dateParam) ? dateParam : defaultAnchorKey();

  const { prevPPV, nextPPV, start, end, weeks } = getPPVCycle(anchorKey);
  const raw = usePlans("RAW");
  const sd = usePlans("SD");
  const boards = { RAW: raw, SD: sd };

  // A week's RAW and Smackdown cards open and close together, keyed by the week's Monday.
  const [openWeeks, setOpenWeeks] = useState<Set<string>>(new Set());
  const setWeekOpen = (weekKey: string, open: boolean) =>
    setOpenWeeks((prev) => {
      const next = new Set(prev);
      if (open) next.add(weekKey);
      else next.delete(weekKey);
      return next;
    });

  const goToCycle = (direction: -1 | 1) =>
    setSearchParams({ date: toDateKey(direction === -1 ? addDays(start, -2) : addDays(end, 1)) });

  const loading = !raw.plans || !sd.plans;
  const error = raw.error || sd.error;

  const card = (show: ShowKind, day: Date | undefined, weekKey: string) => {
    if (!day) return <div className="PlanCardEmpty">No {show === "RAW" ? "RAW" : "Smackdown"} this week</div>;
    const key = toDateKey(day);
    const { plans, savePlan } = boards[show];
    return (
      <PlanCard
        key={`${show}-${key}`}
        variant={show === "RAW" ? "raw" : "sd"}
        title={<><img src={SHOWS[show].logo} alt="" className="PlanCardLogo" />{SHOWS[show].name}</>}
        meta={fullDateLabel(day)}
        initial={plans?.[key] ?? []}
        rosterTag={SHOWS[show].rosterTag}
        onSave={(matches) => savePlan(key, matches)}
        expanded={openWeeks.has(weekKey)}
        onExpandedChange={(open) => setWeekOpen(weekKey, open)}
      />
    );
  };

  return (
    <PlanningLayout title="Weekly Show Planning">
      <div className="PlanningCycleBar">
        {/* Stop at the ends of ppvCalendar.ts rather than inventing open-ended stretches. */}
        <button className="PlanningNavBtn" onClick={() => goToCycle(-1)} disabled={!prevPPV} aria-label="Previous PPV">&#8249;</button>
        <div className="PlanningCycleTitle">
          {nextPPV ? (
            <>
              <span className="PlanningEyebrow">Road to</span>
              <Link to={nextPPV.link} className="PlanningCyclePPV">{nextPPV.name}</Link>
              <span className="PlanningCycleMeta">{fullDateLabel(fromDateKey(nextPPV.key))}</span>
            </>
          ) : (
            <span className="PlanningCyclePPV">No PPV scheduled yet</span>
          )}
        </div>
        <button className="PlanningNavBtn" onClick={() => goToCycle(1)} disabled={!nextPPV} aria-label="Next PPV">&#8250;</button>
      </div>

      {error && <p className="PlanningError">Couldn't load plans: {error}</p>}
      {loading && !error && <p className="PlanningLoading">Loading…</p>}

      {!loading &&
        weeks.map((week, index) => (
          <section key={toDateKey(week.monday)} className="PlanningWeek">
            <h2 className="PlanningWeekTitle">
              Week {index + 1}
              {nextPPV && index === weeks.length - 1 && <span className="PlanningWeekTag">Go-home week</span>}
              <span className="PlanningWeekDates">w/c {shortDateLabel(week.monday)}</span>
            </h2>
            <div className="PlanningWeekCards">
              {card("RAW", week.raw, toDateKey(week.monday))}
              {card("SD", week.sd, toDateKey(week.monday))}
            </div>
          </section>
        ))}
    </PlanningLayout>
  );
}

export default WeeklyPlanning;
