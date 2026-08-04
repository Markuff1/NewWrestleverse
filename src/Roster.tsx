import React, { useMemo, useState } from "react";
import "./Roster.css";
import "./Home.css";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import ChampionshipBar from "./ChampionshipBar.tsx";
import rosterData, { Wrestler } from "./RosterData.ts";
import { useCurrentChampions, buildNameToAbbrevMap } from "./hooks/useCurrentChampions.ts";
import { championshipOrder } from "./championships.ts";

/*
  List of available roster tabs.
  Added:
  - WWE Alumni
  - Current
*/

const tabs = [
  "ALL",
  "Current",
  "Raw",
  "Smackdown",
  "AAA",
  "Champions",
  "Undrafted",
  "GM",
  "Legend",
  "Alumni",
  "Men",
  "Women",
  "Tag Teams"
]

// Tag-based default background when a wrestler doesn't currently hold a title.
const tagClassNames: Record<string, string> = {
  R: "ALLRAW",
  SD: "ALLSD",
  AAA: "ALLAAA",
  L: "ALLLegend",
  U: "ALLGeneral",
  A: "AllAlumni",
};

type DisplayWrestler = Wrestler & { className: string; championRank?: number };

/*
  Attaches each entry's display className: the live champion abbreviation
  (from Firestore, via nameToAbbrev) when they currently hold a title,
  otherwise the tag-based default background.
*/
function enrichWithChampionStatus(
  list: Wrestler[],
  nameToAbbrev: Map<string, string>
): DisplayWrestler[] {
  return list.map(item => {
    const abbrev = nameToAbbrev.get(item.name.trim().toLowerCase());

    if (abbrev) {
      return { ...item, className: abbrev, championRank: championshipOrder[abbrev] ?? 999 };
    }

    return { ...item, className: (item.tag && tagClassNames[item.tag]) || "" };
  });
}

/*
  Returns filtered roster data for a single tab and search term.
*/
function filteredRoster(
  tab: string,
  searchTerm: string,
  enrichedAll: DisplayWrestler[],
  enrichedChampions: DisplayWrestler[],
  enrichedTagTeams: DisplayWrestler[]
): DisplayWrestler[] {
  let filteredData: DisplayWrestler[] = [];

  switch (tab) {
    case "Raw":
      filteredData = enrichedAll.filter(item => item.tag === "R");
      break;

    case "Smackdown":
      filteredData = enrichedAll.filter(item => item.tag === "SD");
      break;

    case "AAA":
      filteredData = enrichedAll.filter(item => item.tag === "AAA");
      break;

    case "Legend":
      filteredData = enrichedAll.filter(item => item.tag === "L");
      break;

    case "Undrafted":
      filteredData = enrichedAll.filter(item => item.tag === "U");
      break;

    case "Current":
      // Includes Raw, Smackdown and Undrafted
      filteredData = enrichedAll.filter(
        item =>
          item.tag === "R" ||
          item.tag === "SD" ||
          item.tag === "U"
      );
      break;


    case "Alumni":
      filteredData = enrichedAll.filter(item => item.tag === "A");
      break;

    case "Men":
      filteredData = enrichedAll.filter(item => item.gender === "Man");
      break;

    case "Women":
      filteredData = enrichedAll.filter(item => item.gender === "Women");
      break;

    case "GM":
      filteredData = enrichedAll.filter(item => item.tag2 === "GM");
      break;

    case "Champions":
      // Champions are derived live from Firestore, sorted by title rank
      filteredData = enrichedChampions
        .slice()
        .sort((a, b) => (a.championRank ?? 999) - (b.championRank ?? 999));
      break;

    case "Tag Teams":
      // Tag teams use their own dataset
      return enrichedTagTeams
        .filter(item =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => a.name.localeCompare(b.name));

    default:
      filteredData = enrichedAll;
  }

  // Apply search filter to all non Tag Team tabs
  filteredData = filteredData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort alphabetically except for Champions
  if (tab !== "Champions") {
    filteredData.sort((a, b) => a.name.localeCompare(b.name));
  }

  return filteredData;
}

/*
  Groups wrestlers into rows of 6 for display layout.
*/
function groupRoster<T>(data: T[], groupSize = 6): T[][] {
    const groups: T[][] = [];

    data.forEach((item, index) => {
      if (index % groupSize === 0) {
        groups.push([]);
      }
      groups[groups.length - 1].push(item);
    });

    return groups;
}

const RosterTabs: React.FC = () => {
  // Currently selected tab
  const [activeTab, setActiveTab] = useState("ALL");

  // Search input value
  const [searchTerm, setSearchTerm] = useState("");

  // Who currently holds each title, fetched live from Firestore.
  const { championByAbbrev } = useCurrentChampions();
  const nameToAbbrev = useMemo(
    () => buildNameToAbbrevMap(championByAbbrev),
    [championByAbbrev]
  );

  const enrichedAll = useMemo(
    () => enrichWithChampionStatus(rosterData.ALL, nameToAbbrev),
    [nameToAbbrev]
  );

  const enrichedTagTeams = useMemo(
    () => enrichWithChampionStatus(rosterData["Tag Teams"], nameToAbbrev),
    [nameToAbbrev]
  );

  const enrichedChampions = useMemo(
    () => [...enrichedAll, ...enrichedTagTeams].filter(item => item.championRank !== undefined),
    [enrichedAll, enrichedTagTeams]
  );

  // Filter every tab once per search-term/champion-data change, reused for
  // both the tab-button counts and the tab content below.
  const rosterByTab = useMemo(() => {
    const result: Record<string, DisplayWrestler[]> = {};

    for (const tab of tabs) {
      result[tab] = filteredRoster(tab, searchTerm, enrichedAll, enrichedChampions, enrichedTagTeams);
    }

    return result;
  }, [searchTerm, enrichedAll, enrichedChampions, enrichedTagTeams]);

  return (
    <>
      <Header />

      <div className="PageBackground">
        <div className="PageContainer">

          {/* Banner */}
          <div className="PageBanner">
            <h1 className="PageBanner__title">ROSTER</h1>
          </div>

          {/* Championship display bar */}
          <ChampionshipBar />

          {/* Tab navigation */}
          <div className="Generaltab">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`tablinks ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {`${tab} (${rosterByTab[tab].length})`}
              </button>
            ))}
          </div>

          {/* Search input */}
          <input
            type="text"
            placeholder="Search for a wrestler..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="searchBar"
          />

          {/* Tab content rendering */}
          {tabs.map(tab => {
            const groupedRoster = groupRoster(rosterByTab[tab]);

            return (
              <div
                key={tab}
                className="tabcontent"
                style={{ display: activeTab === tab ? "block" : "none" }}
              >
                <div className="RosterText1">{`${tab} Roster`}</div>

                {groupedRoster.map((group, groupIndex) => (
                  <div key={groupIndex} className="centerRoster">
                    {group.map((item, index) => (
                      <div
                        key={index}
                        className={`profile-card ${item.className}`}
                        title={item.name}
                      >
                        <img
                          src={item.src}
                          alt={item.name}
                          className="wrestler-img"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            );
          })}

          <div className="RosterText1">.....</div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default RosterTabs;
