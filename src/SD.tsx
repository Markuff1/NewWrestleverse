import React, { useState, useEffect } from "react";
import "./WeeklyShow.css";
import "./Home.css";
import Header from "./Header";
import Footer from "./Footer";
import rosterData from "./RosterData"; // 👈 Import from RosterData.ts

const tabs = ["ALL", "Men", "Women", "Tag Teams", "Champions", "GM"];

const SDData: Record<
  string,
  { className: string; src: string; name: string; gender?: string; Champion?: string }[]
> = {
  ALL: [], // Will be dynamically populated
  Men: [],
  Women: [],
  "Tag Teams": [
    { className: "ALLSD", src: "/Images/Roster/TagTeam/AmericanMade.png", name: "American Made" },
    { className: "ALLSD", src: "/Images/Roster/TagTeam/ChaseU.png", name: "Chase U" },
    { className: "ALLSD", src: "/Images/Roster/TagTeam/DIY.png", name: "DIY" },
    { className: "ALLSD", src: "/Images/Roster/TagTeam/Gallus.png", name: "Gallus" },
    { className: "ALLSD", src: "/Images/Roster/TagTeam/MCMG.png", name: "MCMG" },
    { className: "ALLSD", src: "/Images/Roster/TagTeam/NCR.png", name: "New Catch Republic" },
    { className: "ALLSD", src: "/Images/Roster/TagTeam/NewDay.png", name: "New Day" },
    { className: "ALLSD", src: "/Images/Roster/TagTeam/OC.png", name: "OC" },
    { className: "ALLSD", src: "/Images/Roster/TagTeam/PrettyDeadly.png", name: "Pretty Deadly" },
    { className: "ALLSD", src: "/Images/Roster/TagTeam/Theory&Waller.png", name: "Theory & Waller" }
  ],
  Champions: [],
  GM: [
    { className: "ALLSD", src: "/Images/Roster/BookerT.png", name: "Booker T", gender: "Man" },
  ]
};

// ✅ Populate SDData.ALL from rosterData.ALL where tag === "SD"
SDData.ALL = rosterData.ALL
  .filter((item) => item.tag === "SD")
  .map((item) => ({
    className: "ALLSD",
    src: item.src,
    name: item.name,
    gender: item.gender,
    Champion: item.champion
  }));

// Update Men/Women/Champions tabs based on SDData.ALL
const updateGenderTabs = () => {
  SDData.Men = SDData.ALL.filter((item) => item.gender === "Man");
  SDData.Women = SDData.ALL.filter((item) => item.gender === "Women");
  SDData.Champions = SDData.ALL.filter((item) => item.Champion);
};

updateGenderTabs();

const SDTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [, setFilteredData] = useState(SDData);

  const filteredSD = (tab: string) => {
    return (
      SDData[tab]?.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) || []
    );
  };

  useEffect(() => {
    updateGenderTabs();
    const updatedData = { ...SDData };

    for (let tab of tabs) {
      updatedData[tab] = SDData[tab].filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(updatedData);
  }, [searchTerm]);

  return (
    <>
      <Header />
      <div className="SDBackground">
        <div className="SDContainer">
          <img className="SDBanner" src="/Images/SDHeader.png" alt="SD Header" />
          <div className="SDInfo">
            <div className="SDLocation">Location: Arena Near You</div>
            <div className="SDDate">Date/Time: Every Friday Night</div>
          </div>

          <div className="SDText1">Friday night Smackdown</div>
          <div className="SDText2">Friday night’s WWE spectacle brings high-energy action, intense rivalries, and unforgettable moments every week.</div>

          <input
            type="text"
            placeholder="Search for a wrestler..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="SDsearchBar"
          />
          <div className="SDTab">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`SDtablinks ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab} ({filteredSD(tab).length})
              </button>
            ))}
          </div>

          {tabs.map((tab) => (
            <div key={tab} className="SDtabcontent" style={{ display: activeTab === tab ? "block" : "none" }}>
              <div className="SDText3">Current {tab} Roster</div>
              {filteredSD(tab)
                ?.reduce((acc, item, index) => {
                  const groupSize = tab === "Champions" ? 4 : 6;
                  if (index % groupSize === 0) acc.push([]);
                  acc[acc.length - 1].push(item);
                  return acc;
                }, [] as { className: string; src: string; name: string; Champion?: string }[][])
                .map((group, groupIndex) => (
                  <div key={groupIndex} className="centerRoster">
                    {group.map((item, index) => (
                      <img
                        key={index}
                        className={`SD-image ${item.Champion || "ALLSD"}`}
                        src={item.src}
                        alt={item.name}
                        title={item.name}
                      />
                    ))}
                  </div>
                ))}
            </div>
          ))}
          <div className="SDText1">.....</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SDTabs;
