import "./Home.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { currentPPV } from "./currentPPV";
import { newsArticles } from "./newsData";
import rosterData from "./RosterData";
import { useCurrentChampions } from "./hooks/useCurrentChampions";
import { TITLE_ICONS, TITLE_CHAMPION_LABELS, RETIRED_TITLES, championshipOrder } from "./championships";
import { getCurrentPPVDate, getEventsForDate } from "./calendarEvents";

// The Monday–Sunday week containing the next PPV, for the "Coming Up" calendar strip.
const ppvDate = getCurrentPPVDate();
const ppvWeek = Array.from({ length: 7 }, (_, i) => {
  const day = new Date(ppvDate);
  day.setDate(ppvDate.getDate() - ((ppvDate.getDay() + 6) % 7) + i);
  return day;
});

const championAbbrevs = Object.keys(TITLE_CHAMPION_LABELS)
  .filter((abbrev) => !RETIRED_TITLES.has(abbrev))
  .sort(
  (a, b) => (championshipOrder[a] ?? 999) - (championshipOrder[b] ?? 999)
);

const menCount = rosterData.ALL.filter((w) => w.gender === "Man").length;
const womenCount = rosterData.ALL.filter((w) => w.gender === "Women").length;
const activeTagTeamCount = rosterData["Tag Teams"].filter((team) => !team.disbanded).length;

const homeStats = [
  { value: rosterData.ALL.length, label: "Superstars" },
  { value: menCount, label: "Men" },
  { value: womenCount, label: "Women" },
  { value: activeTagTeamCount, label: "Tag Teams" },
  { value: championAbbrevs.length, label: "Championships" },
];

const quickLinks = [
  { to: "/Home", label: "Home", icon: "/Images/Icons/Home.webp" },
  { to: "/Roster", label: "Roster", icon: "/Images/Icons/Roster.webp" },
  { to: "/Shows", label: "Shows", icon: "/Images/Icons/Show.webp" },
  { to: "/Calendar", label: "Calendar", icon: "/Images/Icons/Calendar.webp" },
  { to: "/RAW", label: "RAW", icon: "/Images/Icons/Show.webp" },
  { to: "/SD", label: "Smackdown", icon: "/Images/Icons/Show.webp" },
  { to: "/Draft", label: "Draft", icon: "/Images/Icons/Show.webp" },
  { to: currentPPV.link, label: "Latest PPV", icon: "/Images/Icons/Show.webp" },
];

function Home() {
  const latestArticle = newsArticles[0];
  const { championByAbbrev } = useCurrentChampions();

  return (
    <>
      <Header />

      <div className="HomeContainer">
        <div className="HomePageWrapper">
          <div className="HomeGrid">

            {/* ROW 1: main welcome box + current champions */}
            <section className="HomeMainBox">
              <img
                className="HomeMainLogo"
                src="/Images/WrestleVerseLogoV5.webp"
                alt="Wrestleverse"
              />
              <p className="HomeMainTagline">
                Your ultimate interactive hub for the WWE 2K Universe Mode — track every
                Champion and title reign, PPV, weekly Show, and the ever-evolving Roster.
              </p>
              <Link to="/Roster" className="HomeHeroButton HomeHeroButton--primary">
                Explore The Roster
              </Link>
            </section>

            <section className="HomeChampsBox">
              <h2 className="HomeBoxTitle">Current Champions</h2>
              <ul className="ChampsList">
                {championAbbrevs.map((abbrev) => (
                  <li className="ChampsListItem" key={abbrev}>
                    <span className="ChampsListIconWrap">
                      <img src={TITLE_ICONS[abbrev]} alt="" className="ChampsListIcon" />
                    </span>
                    <div className="ChampsListText">
                      <span className="ChampsListTitle">
                        {TITLE_CHAMPION_LABELS[abbrev].replace(/ Champion$/, "")}
                      </span>
                      <span className="ChampsListName">
                        {championByAbbrev[abbrev] || "Vacant"}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* ROW 2: Next PPV, Latest News, Quick Stats */}
            <Link to={currentPPV.link} className="SpotlightCard SpotlightCard--ppv">
              <img src={currentPPV.image} alt={currentPPV.name} className="SpotlightImage" />
              <div className="SpotlightScrim" />
              <div className="SpotlightBody">
                <span className="SpotlightEyebrow">Next PPV</span>
                <h3 className="SpotlightTitle">{currentPPV.name}</h3>
                <p className="SpotlightMeta">{currentPPV.location}</p>
                <p className="SpotlightMeta">{currentPPV.date}</p>
                <span className="SpotlightCTA">View Card &rarr;</span>
              </div>
            </Link>

            <Link to="/News" className="SpotlightCard SpotlightCard--news">
              <img
                src={latestArticle.image}
                alt={latestArticle.title}
                className="SpotlightImage"
              />
              <div className="SpotlightScrim" />
              <div className="SpotlightBody">
                <span className="SpotlightEyebrow">Latest News</span>
                <h3 className="SpotlightTitle">{latestArticle.title}</h3>
                <p className="SpotlightExcerpt">{latestArticle.content}</p>
                <span className="SpotlightCTA">Read Full Article &rarr;</span>
              </div>
            </Link>

            <section className="HomeStatsBox">
              <h2 className="HomeBoxTitle">The Universe In Numbers</h2>
              <div className="HomeStats">
                {homeStats.map((stat) => (
                  <div className="StatChip" key={stat.label}>
                    <span className="StatValue">{stat.value}</span>
                    <span className="StatLabel">{stat.label}</span>
                  </div>
                ))}
                <div className="StatChip">
                  <span className="StatValue">
                    {Object.keys(championByAbbrev).length}/{championAbbrevs.length}
                  </span>
                  <span className="StatLabel">Titles Held</span>
                </div>
              </div>
            </section>

            {/* ROW 3: this PPV week from the calendar */}
            <section className="HomeCalendarBox">
              <div className="HomeCalendarHeader">
                <h2 className="HomeBoxTitle">Coming Up · Road to {currentPPV.name}</h2>
                <Link to="/Calendar" className="HomeCalendarLink">Full Calendar &rarr;</Link>
              </div>
              <div className="HomeCalendarWeek">
                {ppvWeek.map((day) => {
                  const events = getEventsForDate(day);
                  return (
                    <div className="HomeCalendarDay" key={day.toDateString()}>
                      <span className="HomeCalendarDate">
                        {day.toLocaleDateString("en-GB", { weekday: "short" })}{" "}
                        <strong>{day.getDate()}</strong>
                      </span>
                      {events.map((event) => (
                        <Link
                          key={event.name}
                          to={event.link}
                          title={event.night ? `${event.name} – Night ${event.night}` : event.name}
                          className={`HomeCalendarEvent HomeCalendarEvent--${event.kind.toLowerCase()}`}
                        >
                          <img src={event.image} alt={event.name} loading="lazy" decoding="async" />
                          {event.night && <span className="HomeCalendarNight">Night {event.night}</span>}
                        </Link>
                      ))}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ROW 4: quick links */}
            <section className="HomeLinks">
              {quickLinks.map((link) => (
                <Link key={link.label} to={link.to} className="HomeLinkCard">
                  <img src={link.icon} alt="" className="HomeLinkIcon" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
