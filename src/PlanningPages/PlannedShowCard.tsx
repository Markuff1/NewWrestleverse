import "../PPVShow.css";
import "./Planning.css";
import { Link } from "react-router-dom";
import MatchTypeTooltip from "../PPVPages/MatchTypeTooltop";
import WeeklyMatchGraphic from "./WeeklyMatchGraphic";
import { SHOWS, fullDateLabel, isFilled, titleLabel, type PlannedMatch, type ShowKind } from "./planData";

type PlannedShowCardProps = {
  show: ShowKind;
  date: Date;
  dateKey: string;
  matches: PlannedMatch[];
};

/** Full championship name for the summary ("Intercontinental" -> "Intercontinental Championship"). */
const titleName = (championship: string) => {
  const label = titleLabel(championship);
  return /championship|title|briefcase|money in the bank/i.test(label) ? label : `${label} Championship`;
};

/**
 * One planned RAW / Smackdown, laid out like the PPV pages (PPVShow.tsx): date, the match
 * card table, then a summary with a match image each (see WeeklyMatchGraphic).
 */
function PlannedShowCard({ show, date, dateKey, matches }: PlannedShowCardProps) {
  const card = matches.filter(isFilled);

  return (
    <section className="PPVEventSection">
      <div className="PPVNavButtonPlacement">
        <div className="PPVInfo">
          <strong>Show:</strong> {SHOWS[show].name}
        </div>
        <div className="PPVInfo">
          <strong>Date:</strong> {fullDateLabel(date)}
        </div>
      </div>

      <div className="PlannedShowActions">
        <Link to={`/Planning/Weekly?date=${dateKey}`} className="PlannedShowEdit">Edit in Planner &rarr;</Link>
      </div>

      <div className="MCTitle">MATCH CARD</div>

      {card.length === 0 ? (
        <p className="PlanningLoading">No matches planned for this show yet.</p>
      ) : (
        <>
          <table className="MCList">
            <thead>
              <tr>
                <th>#</th>
                <th>Match</th>
                <th>Title</th>
                <th>Match Type</th>
              </tr>
            </thead>
            <tbody>
              {card.map((match, i) => (
                <tr key={match.id}>
                  <td>{i + 1}</td>
                  <td>{match.competitors || "TBA"}</td>
                  <td>{match.championship ? titleLabel(match.championship) : "-"}</td>
                  <td>{match.matchType || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="MCTitle">MATCH CARD SUMMARY</div>

          <div className="MatchImages">
            {card.map((match, i) => (
              <div key={match.id} className="MatchItem WeeklyMatchItem">
                <h3 className="MatchTitle">{match.competitors || "TBA"}</h3>

                <div className="MatchInfo">
                  {match.championship && (
                    <h4 className="MatchChampionship">Title : {titleName(match.championship)}</h4>
                  )}
                  {match.matchType && (
                    <h4 className="MatchType">
                      Match Type : {match.matchType} <MatchTypeTooltip matchType={match.matchType} />
                    </h4>
                  )}
                </div>

                <WeeklyMatchGraphic show={show} date={date} dateKey={dateKey} index={i} match={match} />

                <div className="MatchDivider" />
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default PlannedShowCard;
