import { useMemo, useState } from "react";
import "./WeeklyShow.css";
import "./Roster.css";
import "./Home.css";
import Header from "./Header";
import Footer from "./Footer";
import rosterData from "./RosterData";
import { useCurrentChampions, buildNameToAbbrevMap } from "./hooks/useCurrentChampions";
import { championshipOrder } from "./championships";

const tabs = ["ALL", "Men", "Women", "Tag Teams", "Champions", "GM"];

export type WeeklyShowItem = {
  src: string;
  name: string;
  gender?: string;
  Champion?: string;
};

type WeeklyShowPageProps = {
  tag: string;
  classPrefix: string;
  bannerSrc: string;
  bannerAlt: string;
  title: string;
  description: string;
  schedule: string;
  gmEntries: WeeklyShowItem[];
};

function WeeklyShowPage({
  tag,
  classPrefix,
  bannerSrc,
  bannerAlt,
  title,
  description,
  schedule,
  gmEntries,
}: WeeklyShowPageProps) {
  const [activeTab, setActiveTab] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");

  const allClassName = `ALL${classPrefix}`;

  // Who currently holds each title, fetched live from Firestore.
  const { championByAbbrev } = useCurrentChampions();
  const nameToAbbrev = useMemo(
    () => buildNameToAbbrevMap(championByAbbrev),
    [championByAbbrev]
  );

  const showData = useMemo(() => {
    const all: WeeklyShowItem[] = rosterData.ALL
      .filter((item) => item.tag === tag)
      .map((item) => ({
        src: item.src,
        name: item.name,
        gender: item.gender,
        Champion: nameToAbbrev.get(item.name.trim().toLowerCase()),
      }))
      .sort((a, b) => a.name.localeCompare(b.name));

    const enrichedTagTeams: WeeklyShowItem[] = rosterData["Tag Teams"]
      .filter((item) => item.tag === tag)
      .map((item) => ({
        src: item.src,
        name: item.name,
        Champion: nameToAbbrev.get(item.name.trim().toLowerCase()),
      }))
      .sort((a, b) => a.name.localeCompare(b.name));

    const champions = [...all, ...enrichedTagTeams]
      .filter((item) => item.Champion)
      .sort(
        (a, b) =>
          (championshipOrder[a.Champion!] ?? 999) -
          (championshipOrder[b.Champion!] ?? 999)
      );

    return {
      ALL: all,
      Men: all.filter((item) => item.gender === "Man"),
      Women: all.filter((item) => item.gender === "Women"),
      Champions: champions,
      "Tag Teams": enrichedTagTeams,
      GM: gmEntries,
    } as Record<string, WeeklyShowItem[]>;
  }, [tag, gmEntries, nameToAbbrev]);

  const filteredByTab = useMemo(() => {
    const result: Record<string, WeeklyShowItem[]> = {};

    for (const tabName of tabs) {
      result[tabName] = (showData[tabName] || []).filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return result;
  }, [showData, searchTerm]);

  return (
    <>
      <Header />
      <div className="PageBackground">
        <div className="PageContainer">
          <img className={`${classPrefix}Banner`} src={bannerSrc} alt={bannerAlt} />

          <div className={`${classPrefix}Info`}>
            <div className={`${classPrefix}Location`}>Location: Arena Near You</div>
            <div className={`${classPrefix}Date`}>Date/Time: {schedule}</div>
          </div>

          <div className={`${classPrefix}Text1`}>{title}</div>
          <div className={`${classPrefix}Text2`}>{description}</div>

          <input
            type="text"
            placeholder="Search for a wrestler..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`${classPrefix}searchBar`}
          />

          <div className={`${classPrefix}Tab`}>
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`${classPrefix}tablinks ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab} ({filteredByTab[tab].length})
              </button>
            ))}
          </div>

          {tabs.map((tab) => (
            <div
              key={tab}
              className={`${classPrefix}tabcontent`}
              style={{ display: activeTab === tab ? "block" : "none" }}
            >
              <div className={`${classPrefix}Text3`}>Current {tab} Roster</div>

              {filteredByTab[tab]
                .reduce((acc: WeeklyShowItem[][], item, index) => {
                  const groupSize = tab === "Champions" ? 4 : 6;
                  if (index % groupSize === 0) acc.push([]);
                  acc[acc.length - 1].push(item);
                  return acc;
                }, [])
                .map((group, groupIndex) => (
                  <div key={groupIndex} className="centerRoster">
                    {group.map((item, index) => (
                      <div
                        key={index}
                        className={`profile-card ${item.Champion || allClassName}`}
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
          ))}

          <div className={`${classPrefix}Text1`}>.....</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WeeklyShowPage;
