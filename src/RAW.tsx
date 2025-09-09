import React, { useState, useEffect } from "react";
import "./WeeklyShow.css";
import "./Home.css";
import Header from "./Header";
import Footer from "./Footer";
import rosterData from "./RosterData"; // ✅ Import from RosterData.ts

const tabs = ["ALL", "Men", "Women", "Tag Teams", "Champions", "GM"];

// ✅ Type for each RAW item
type RAWItem = {
  className: string;
  src: string;
  name: string;
  gender?: string;
  Champion?: string;
  championRank?: number;
};

// ✅ RAW data structure
const RAWData: Record<string, RAWItem[]> = {
  ALL: [],
  Men: [],
  Women: [],
  "Tag Teams": [
    { className: "ALLRAW", src: "/Images/Roster/TagTeam/AlphaAcadamy.png", name: "Alpha Acadamy" },
    { className: "ALLRAW", src: "/Images/Roster/TagTeam/Angel&Berto.png", name: "Angel & Berto" },
    { className: "ALLRAW", src: "/Images/Roster/TagTeam/AOP.png", name: "AOP" },
    { className: "ALLRAW", src: "/Images/Roster/TagTeam/DudleyBoys.png", name: "Dudley Boys" },
    { className: "ALLRAW", src: "/Images/Roster/TagTeam/JudgementDay.png", name: "Judgement Day" },
    { className: "ALLRAW", src: "/Images/Roster/TagTeam/LWO.png", name: "LWO" },
    { className: "ALLRAW", src: "/Images/Roster/TagTeam/NewBloodline.png", name: "New Bloodline" },
    { className: "ALLRAW", src: "/Images/Roster/TagTeam/StreetProfits.png", name: "Street Profits" },
    { className: "ALLRAW", src: "/Images/Roster/TagTeam/VikingRaiders.png", name: "Viking Raiders" },
    { className: "ALLRAW", src: "/Images/Roster/TagTeam/WyattSix.png", name: "Wyatt Six" },
  ],
  Champions: [],
  GM: [{ className: "ALLRAW", src: "/Images/Roster/WadeBarrett.png", name: "Wade Barrett", gender: "Man" }],
};

// ✅ Populate RAWData.ALL from rosterData
RAWData.ALL = rosterData.ALL
  .filter((item) => item.tag === "R")
  .map((item) => ({
    className: "ALLRAW",
    src: item.src,
    name: item.name,
    gender: item.gender,
    Champion: item.champion ?? undefined,
    championRank: item.championRank ?? undefined,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

// ✅ Sort Men, Women, Champions
const updateGenderTabs = () => {
  RAWData.Men = RAWData.ALL.filter((item) => item.gender === "Man");
  RAWData.Women = RAWData.ALL.filter((item) => item.gender === "Women");
  RAWData.Champions = RAWData.ALL
    .filter((item) => item.Champion)
    .sort((a, b) => (a.championRank ?? 999) - (b.championRank ?? 999));
};

updateGenderTabs();

const RAWTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [, setFilteredData] = useState(RAWData);

  const filteredRAW = (tab: string) => {
    return (
      RAWData[tab]?.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) || []
    );
  };

  useEffect(() => {
    updateGenderTabs();
    const updatedData: Record<string, RAWItem[]> = { ...RAWData };

    for (let tab of tabs) {
      updatedData[tab] = RAWData[tab].filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(updatedData);
  }, [searchTerm]);

  return (
    <>
      <Header />
      <div className="RAWBackground">
        <div className="RAWContainer">
          <img className="RAWBanner" src="/Images/RAWHeader.png" alt="RAW Header" />
          <div className="RAWInfo">
            <div className="RAWLocation">Location: Arena Near You</div>
            <div className="RAWDate">Date/Time: Every Monday Night</div>
          </div>
          <div className="RAWText1">Monday Night RAW</div>
          <div className="RAWText2">
            Monday Night’s flagship WWE show delivers top superstars, thrilling matches, and exciting storylines every
            week.
          </div>

          <input
            type="text"
            placeholder="Search for a wrestler..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="RAWsearchBar"
          />
          <div className="RAWTab">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`RAWtablinks ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab} ({filteredRAW(tab).length})
              </button>
            ))}
          </div>

          {tabs.map((tab) => (
            <div key={tab} className="RAWtabcontent" style={{ display: activeTab === tab ? "block" : "none" }}>
              <div className="RAWText3">Current {tab} Roster</div>
              {filteredRAW(tab)
                ?.reduce((acc: RAWItem[][], item: RAWItem, index: number) => {
                  const groupSize = tab === "Champions" ? 4 : 6;
                  if (index % groupSize === 0) acc.push([]);
                  acc[acc.length - 1].push(item);
                  return acc;
                }, [])
                .map((group, groupIndex) => (
                  <div key={groupIndex} className="centerRoster">
                    {group.map((item, index) => (
                      <img
                        key={index}
                        className={`RAW-image ${item.Champion || "ALLRAW"}`}
                        src={item.src}
                        alt={item.name}
                        title={item.name}
                      />
                    ))}
                  </div>
                ))}
            </div>
          ))}
          <div className="RAWText1">.....</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RAWTabs;
