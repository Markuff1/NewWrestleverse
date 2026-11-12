import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Roster.css";
import "./Home.css";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import ChampionshipBar from "./ChampionshipBar.tsx";
import rosterData, { Wrestler, normalizeWrestlerName } from "./RosterData.ts";
import { useCurrentChampions, buildNameToAbbrevMap } from "./hooks/useCurrentChampions.ts";
import { useAllTitleHistory } from "./hooks/useTitleHistory.ts";
import { useTitleRecords } from "./hooks/useTitleRecords.ts";
import { championshipOrder } from "./championships.ts";
import WrestlerModal from "./WrestlerModal.tsx";

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

  // Full championship history, fetched live from Firestore, for the
  // wrestler profile pop-up.
  const { historyByName } = useAllTitleHistory();

  // Longest-reign records per title, fetched live from Firestore, for the
  // wrestler profile pop-up's Records section.
  const { recordsByAbbrev } = useTitleRecords();

  // Wrestler whose profile pop-up is currently open, if any.
  const [selectedWrestler, setSelectedWrestler] = useState<DisplayWrestler | null>(null);

  const enrichedAll = useMemo(
    () => enrichWithChampionStatus(rosterData.ALL, nameToAbbrev),
    [nameToAbbrev]
  );

  const enrichedTagTeams = useMemo(
    () =>
      enrichWithChampionStatus(
        rosterData["Tag Teams"].filter((team) => !team.disbanded),
        nameToAbbrev
      ),
    [nameToAbbrev]
  );

  const enrichedChampions = useMemo(
    () => [...enrichedAll, ...enrichedTagTeams].filter(item => item.championRank !== undefined),
    [enrichedAll, enrichedTagTeams]
  );

  // "/Roster?superstar=<name>" (e.g. from a superstar circle under a PPV match) opens that
  // superstar: switches to the tab they're on, glides to their card, and opens their pop-up.
  const [searchParams, setSearchParams] = useSearchParams();
  const linkedName = searchParams.get("superstar");
  const [highlightedName, setHighlightedName] = useState<string | null>(null);

  useEffect(() => {
    if (!linkedName) return;
    const key = normalizeWrestlerName(linkedName);
    const matches = (w: Wrestler) => normalizeWrestlerName(w.name) === key;

    const wrestler = enrichedAll.find(matches);
    // Disbanded teams have no card on the roster, but their pop-up still opens.
    const team = wrestler
      ? undefined
      : enrichedTagTeams.find(matches) ??
        enrichWithChampionStatus(rosterData["Tag Teams"].filter(matches), nameToAbbrev)[0];
    const found = wrestler ?? team;
    if (!found) return;

    setActiveTab(wrestler ? "ALL" : "Tag Teams");
    setSearchTerm("");
    setSelectedWrestler(found);
    setHighlightedName(found.name);

    // Once the tab has rendered, bring their card into view behind the pop-up. Roster images
    // load lazily and push the card down as they arrive, so keep re-centring it whenever the
    // tab changes size — for a few seconds, or until the user scrolls themselves.
    let observer: ResizeObserver | undefined;
    const userEvents = ["wheel", "touchstart", "keydown"] as const;
    const stopFollowing = () => {
      observer?.disconnect();
      userEvents.forEach((type) => window.removeEventListener(type, stopFollowing));
    };

    const frame = requestAnimationFrame(() => {
      const tab = document.querySelector<HTMLElement>('.tabcontent[data-active="true"]');
      const card = tab?.querySelector(`.profile-card[title="${CSS.escape(found.name)}"]`);
      if (!tab || !card) return;

      card.scrollIntoView({ behavior: "smooth", block: "center" });
      observer = new ResizeObserver(() => card.scrollIntoView({ behavior: "smooth", block: "center" }));
      observer.observe(tab);
      userEvents.forEach((type) => window.addEventListener(type, stopFollowing, { passive: true }));
    });
    const stopTimer = window.setTimeout(stopFollowing, 4000);
    const clearHighlight = window.setTimeout(() => setHighlightedName(null), 2600);

    return () => {
      cancelAnimationFrame(frame);
      stopFollowing();
      window.clearTimeout(stopTimer);
      window.clearTimeout(clearHighlight);
    };
  }, [linkedName, enrichedAll, enrichedTagTeams, nameToAbbrev]);

  const closeProfile = () => {
    setSelectedWrestler(null);
    if (linkedName) setSearchParams({}, { replace: true });
  };

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
                data-active={activeTab === tab}
                style={{ display: activeTab === tab ? "block" : "none" }}
              >
                <div className="RosterText1">{`${tab} Roster`}</div>

                {groupedRoster.map((group, groupIndex) => (
                  <div key={groupIndex} className="centerRoster">
                    {group.map((item, index) => (
                      <div
                        key={index}
                        className={`profile-card ${item.className}${
                          item.name === highlightedName ? " is-linked" : ""
                        }`}
                        title={item.name}
                        onClick={() => setSelectedWrestler(item)}
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

      {selectedWrestler && (
        <WrestlerModal
          profile={selectedWrestler}
          titles={historyByName[normalizeWrestlerName(selectedWrestler.name)] || []}
          championByAbbrev={championByAbbrev}
          titleRecords={recordsByAbbrev}
          onClose={closeProfile}
        />
      )}

      <Footer />
    </>
  );
};

export default RosterTabs;
