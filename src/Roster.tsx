import React, { useState } from "react";
import "./Roster.css";
import "./Home.css";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import ChampionshipBar from "./ChampionshipBar.tsx";
import rosterData, { Wrestler } from "./RosterData.ts";

const tabs = [
  "ALL", "Raw", "Smackdown", "Legend", "Undrafted", "GM", "Champions", "Men", "Women", "Tag Teams"
];

const RosterTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRoster = (tab: string) => {
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
        filteredData = rosterData.ALL.filter(item => item.tag === "UNDRAFTED");
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
        filteredData = rosterData.Champions
          .slice()
          .sort((a, b) => (a.championRank ?? 999) - (b.championRank ?? 999));
        break;
      case "Tag Teams":
        filteredData = rosterData["Tag Teams"]
          .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .sort((a, b) => a.name.localeCompare(b.name));
        return filteredData;
      default:
        filteredData = rosterData.ALL;
    }

    filteredData = filteredData.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (tab !== "Champions") {
      filteredData.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filteredData;
  };

  return (
    <>
      <Header />
      <div className="RosterBackground">
        <div className="RosterContainer">
          <img className="RBanner" src="/src/Images/RosterHeader.png" alt="Roster Header" />

          <ChampionshipBar />

          {/* Tab list */}
          <div className="Generaltab">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tablinks ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {`${tab} (${filteredRoster(tab)?.length || 0})`}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <input
            type="text"
            placeholder="Search for a wrestler..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="searchBar"
          />

          {tabs.map((tab) => (
            <div key={tab} className="tabcontent" style={{ display: activeTab === tab ? "block" : "none" }}>
              <div className="RosterText1">{`${tab} Roster`}</div>
              {filteredRoster(tab)?.reduce((acc, item, index) => {
                const groupSize = 6;
                if (index % groupSize === 0) acc.push([]);
                acc[acc.length - 1].push(item);
                return acc;
              }, [] as Wrestler[][]).map((group, groupIndex) => (
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
          ))}

          <div className="RosterText1">.....</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RosterTabs;
