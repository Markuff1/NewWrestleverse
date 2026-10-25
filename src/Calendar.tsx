import "./Calendar.css";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import { currentPPV } from "./currentPPV";
import { getCurrentPPVDate, getEventsForDate, toDateKey } from "./calendarEvents";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const monthLabel = (year: number, month: number) =>
  new Date(year, month, 1).toLocaleDateString("en-GB", { month: "long", year: "numeric" });

const fullDateLabel = (date: Date) =>
  date.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

/** Every day shown in the month grid (Monday-first), padded with the days either side. */
function buildMonthGrid(year: number, month: number): Date[] {
  const first = new Date(year, month, 1);
  const leading = (first.getDay() + 6) % 7; // days before the 1st, Monday-first
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cellCount = Math.ceil((leading + daysInMonth) / 7) * 7;

  return Array.from({ length: cellCount }, (_, i) => new Date(year, month, 1 - leading + i));
}

function Calendar() {
  const currentPPVDate = getCurrentPPVDate();
  const currentPPVKey = toDateKey(currentPPVDate);

  const [view, setView] = useState({
    year: currentPPVDate.getFullYear(),
    month: currentPPVDate.getMonth(),
  });

  const changeMonth = (offset: number) => {
    setView(({ year, month }) => {
      const next = new Date(year, month + offset, 1);
      return { year: next.getFullYear(), month: next.getMonth() };
    });
  };

  const isViewingCurrentPPVMonth =
    view.year === currentPPVDate.getFullYear() && view.month === currentPPVDate.getMonth();

  const days = buildMonthGrid(view.year, view.month);
  const rowCount = days.length / 7;

  return (
    <>
      <Header />

      <div className="PageBackground">
        <div className="PageContainer CalendarPageContainer">
          <div className="PageBanner">
            <h1 className="PageBanner__title">CALENDAR</h1>
          </div>

          {/* Month navigation */}
          <div className="CalendarToolbar">
            <button className="CalendarNavBtn" onClick={() => changeMonth(-1)} aria-label="Previous month">
              &#8249;
            </button>

            <div className="CalendarMonthTitle">
              <h2>{monthLabel(view.year, view.month)}</h2>
              <button
                className="CalendarTodayBtn"
                onClick={() => setView({ year: currentPPVDate.getFullYear(), month: currentPPVDate.getMonth() })}
                disabled={isViewingCurrentPPVMonth}
              >
                Jump to Next PPV
              </button>
            </div>

            <button className="CalendarNavBtn" onClick={() => changeMonth(1)} aria-label="Next month">
              &#8250;
            </button>
          </div>

          {/* Legend */}
          <div className="CalendarLegend">
            <span className="CalendarLegendItem"><span className="CalendarSwatch CalendarSwatch--raw" />RAW · Mondays</span>
            <span className="CalendarLegendItem"><span className="CalendarSwatch CalendarSwatch--sd" />Smackdown · Fridays</span>
            <span className="CalendarLegendItem"><span className="CalendarSwatch CalendarSwatch--ppv" />PPV · Saturdays</span>
          </div>

          {/* Month grid */}
          <div className="CalendarGrid">
            {WEEKDAYS.map((weekday) => (
              <div className="CalendarWeekday" key={weekday}>{weekday}</div>
            ))}

            {days.map((day, index) => {
              const inMonth = day.getMonth() === view.month;
              const events = inMonth ? getEventsForDate(day) : [];
              const ppv = events.find((event) => event.kind === "PPV");
              const weeklyShows = events.filter((event) => event.kind !== "PPV");

              const row = Math.floor(index / 7);
              const column = index % 7;
              const tooltipClass = [
                "CalendarTooltip",
                row < Math.min(2, rowCount - 1) ? "CalendarTooltip--below" : "",
                column >= 5 ? "CalendarTooltip--alignRight" : column <= 1 ? "CalendarTooltip--alignLeft" : "",
              ].join(" ");

              return (
                <div
                  key={toDateKey(day)}
                  className={[
                    "CalendarDay",
                    inMonth ? "" : "CalendarDay--outside",
                    ppv ? "CalendarDay--ppv" : "",
                    toDateKey(day) === currentPPVKey ? "CalendarDay--nextPPV" : "",
                  ].join(" ")}
                >
                  <span className="CalendarDayNumber">{day.getDate()}</span>

                  {weeklyShows.map((show) => (
                    <Link
                      key={show.kind}
                      to={show.link}
                      className={`CalendarWeekly CalendarWeekly--${show.kind.toLowerCase()}`}
                      title={show.name}
                    >
                      <img src={show.image} alt={show.name} loading="lazy" decoding="async" />
                    </Link>
                  ))}

                  {ppv && (
                    <Link to={ppv.link} className="CalendarPPV" aria-label={ppv.name}>
                      <img src={ppv.image} alt="" className="CalendarPPVImage" loading="lazy" decoding="async" />
                      <span className="CalendarPPVScrim" />
                      {toDateKey(day) === currentPPVKey && (
                        <span className="CalendarPPVBadge">Next PPV</span>
                      )}
                      <span className="CalendarPPVName">
                        {ppv.night && <span className="CalendarPPVNight">Night {ppv.night}</span>}
                        {ppv.name}
                      </span>

                      <span className={tooltipClass} role="tooltip">
                        <img src={ppv.image} alt="" className="CalendarTooltipImage" />
                        <span className="CalendarTooltipBody">
                          <span className="CalendarTooltipName">{ppv.name}</span>
                          {ppv.night && (
                            <span className="CalendarTooltipNight">Night {ppv.night} of {ppv.nights}</span>
                          )}
                          <span className="CalendarTooltipMeta">{fullDateLabel(day)}</span>
                          {ppv.location && <span className="CalendarTooltipMeta">{ppv.location}</span>}
                          <span className="CalendarTooltipCTA">View Card &rarr;</span>
                        </span>
                      </span>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          <p className="CalendarFootnote">
            Next PPV: <Link to={currentPPV.link}>{currentPPV.name}</Link> · {currentPPV.date}
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Calendar;
