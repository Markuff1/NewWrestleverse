import React, { useState } from "react";
import "./Roster.css";
import "./Home.css";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import ChampionshipBar from "./ChampionshipBar.tsx";
import rosterData, { Wrestler } from "./RosterData.ts";

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
  "Champions",
  "Undrafted",
  "GM",
  "Legend",
  "Alumni",
  "Men",
  "Women",
  "Tag Teams"
]

const RosterTabs: React.FC = () => {
  // Currently selected tab
  const [activeTab, setActiveTab] = useState("ALL");

  // Search input value
  const [searchTerm, setSearchTerm] = useState("");

  /*
    Returns filtered roster data based on selected tab
    and search term.
  */
  const filteredRoster = (tab: string): Wrestler[] => {
    let filteredData: Wrestler[] = [];

    switch (tab) {
      case "Raw":
        filteredData = rosterData.ALL.filter(item => item.tag === "R");
        break;

      case "Smackdown":
        filteredData = rosterData.ALL.filter(item => item.tag === "SD");
        break;

      case "Legend":
        filteredData = rosterData.ALL.filter(item => item.tag === "L");
        break;

      case "Undrafted":
        filteredData = rosterData.ALL.filter(item => item.tag === "U");
        break;

      case "Current":
        // Includes Raw, Smackdown and Undrafted
        filteredData = rosterData.ALL.filter(
          item =>
            item.tag === "R" ||
            item.tag === "SD" ||
            item.tag === "U"
        );
        break;


      case "Alumni":
        filteredData = rosterData.ALL.filter(item => item.tag === "A");
        break;

      case "Men":
        filteredData = rosterData.ALL.filter(item => item.gender === "Man");
        break;

      case "Women":
        filteredData = rosterData.ALL.filter(item => item.gender === "Women");
        break;

      case "GM":
        filteredData = rosterData.ALL.filter(item => item.tag2 === "GM");
        break;

      case "Champions":
        // Champions use separate dataset and are sorted by champion rank
        filteredData = rosterData.Champions
          .slice()
          .sort((a, b) => (a.championRank ?? 999) - (b.championRank ?? 999));
        break;

      case "Tag Teams":
        // Tag teams use their own dataset
        return rosterData["Tag Teams"]
          .filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .sort((a, b) => a.name.localeCompare(b.name));

      default:
        filteredData = rosterData.ALL;
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
  };

  /*
    Groups wrestlers into rows of 6 for display layout.
  */
  const groupRoster = (data: Wrestler[], groupSize = 6): Wrestler[][] => {
    const groups: Wrestler[][] = [];

    data.forEach((item, index) => {
      if (index % groupSize === 0) {
        groups.push([]);
      }
      groups[groups.length - 1].push(item);
    });

    return groups;
  };

  return (
    <>
      <Header />

      <div className="RosterBackground">
        <div className="RosterContainer">

          {/* Banner */}
          <div className="RBanner">
            <h1 className="RBanner__title">ROSTER</h1>
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
                {`${tab} (${filteredRoster(tab).length})`}
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
            const roster = filteredRoster(tab);
            const groupedRoster = groupRoster(roster);

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
                      <img
                        key={index}
                        className={`profile-card ${item.className}`}
                        src={item.src}
                        alt={item.name}
                        title={item.name}
                        loading="lazy"
                      />
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
