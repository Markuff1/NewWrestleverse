import PPVShow, {
  Match,
  PPVEvent
} from "../../PPVShow";

// ---------- Match Cards -----------

const matchCard2027: Match[] = [
  { match: "CM Punk, Dudley Boys, RVD Vs Seth Rollins, New Day, Ricky Saints", title: "", type: "Wargames Match" },
  { match: "Sol Ruca Vs Roxanne Perez", title: "Women's United States Championship", type: "Normal Match" },
  { match: "Ilja Dragunov Vs Oba Femi", title: "United States Championship", type: "Normal Match" },
  { match: "Usos Vs DIY", title: "RAW Tag Team Championships", type: "Tag Team Match" },
  { match: "Blake Monroe Vs Jaida Parker Vs Lola Vice", title: "Women's Intercontinental Championship", type: "Triple Threat Match" },
  { match: "Bron Breakker Vs Ethan Page", title: "Intercontinental Championship", type: "Normal Match" },
  { match: "Dominic Mysterio Open Challenge (Randy Orton)", title: "", type: "Normal Match" },
  { match: "Ripley, Sky, Vaquer, Belair Vs Lynch, Stratton, Naomi, Nia Jax", title: "", type: "Wargames Match" },
  { match: "Aleister Black Vs AJ Styles Vs Rey Mysterio Vs Kevin Owens", title: "World Heavyweight Championship", type: "Fatal 4-way Match" },
  { match: "Charlotte Flair Vs Auska", title: "Women's Undisputed Championship", type: "Normal Match" },
  { match: "Gunther Vs Brock Lesnar", title: "WWE Undisputed Championship", type: "Extreme Rules Match" },
];

const matchCard2026: Match[] = [
  { match: "Women's 4 VS 4 Elimination Tag Match", score: "1 : 0", type: "4 V 4 Elimination Tag Team Match" },
  { match: "Penta Vs Sheamus", score: "1 : 1", type: "Normal Match" },
  { match: "Bron Breakker Vs Seth Rollins", score: "1 : 2", type: "Normal Match" },
  { match: "Shayna Baszler Vs Nikki Bella", score: "2 : 2", type: "Normal Match" },
  { match: "Great Khali Vs Ethan Page", score: "3 : 2", type: "Normal Match" },
  { match: "Viking Raiders Vs New Day", score: "3 : 3", type: "Normal Match" },
  { match: "Men's 4 VS 4 Elimination Tag Match", score: "3 : 4", type: "4 V 4 Elimination Tag Team Match" },
  { match: "Raquel Roderiques Vs Kairi Sane", score: "4 : 4", type: "Normal Match" },
  { match: "Roman Reigns Vs Randy Orton", score: "4 : 5", type: "Normal Match" },
];

const matchCard2025: Match[] = [
  { match: "Umaga Vs ???? (Seth Rollins)", score: "0 : 1", type: "Normal" },
  { match: "#DIY Def. New Catch Republic", score: "1 : 1", type: "Normal" },
  { match: "Raquel Rodriques Def. Michelle McCool", score: "1 : 2", type: "Normal" },
  { match: "Bron Breakker Def. Damian Priest", score: "2 : 2", type: "Normal" },
  { match: "Team RAW Def. Team Smackdown", score: "3 : 2", type: "5 on 5 Elimination" },
  { match: "Rhea Ripley Def. Tiffany Stratton", score: "3 : 3", type: "Normal" },
  { match: "Roman Reigns Def. Cody Rhodes", score: "4 : 3", type: "Normal" }
];

// ---------- Event Data ----------
const SurvivorSeriesEvents: PPVEvent[] = [
  {
    year: 2027,
    banner: "/Images/PPV/SurvivorSeries/SSHeader2027.png",
    location: "Petco Park, San Diego, CA",
    date: "Saturday, November 13th 2027, 7e/5p",
    matches: matchCard2027,
    imageFolder: "SurvivorSeries/2027MC",

    previousEvent: {
      label: "Extreme Rules 2027",
      link: "/ER#2027",
    },

    nextEvent: {
      label: "Armageddon 2027",
      link: "/Armageddon#2027",
    },
  },

  {
    year: 2026,
    banner: "/Images/PPV/SurvivorSeries/SSHeader2026.png",
    location: "Enterprise Center, St Louis, Mi",
    date: "Saturday, November 21st 2026, 7e/5p",
    matches: matchCard2026,
    imageFolder: "SurvivorSeries/2026MC",

    previousEvent: {
      label: "Hell In A Cell 2026",
      link: "/HIAC#2026",
    },

    nextEvent: {
      label: "TLC 2026",
      link: "/TLC#2026",
    },
  },

  {
    year: 2025,
    banner: "/Images/PPV/SurvivorSeries/SSHeader2025.png",
    location: "TD Garden, Boston, Massachusetts",
    date: "Saturday, November 22nd 2025, 7e/5p",
    matches: matchCard2025,
    imageFolder: "SurvivorSeries/2025MC",

    previousEvent: {
      label: "Cyber Sunday 2025",
      link: "/CyberSunday#2025",
    },

    nextEvent: {
      label: "TLC 2025",
      link: "/TLC#2025",
    },
  },
];

export default function SurvivorSeries() {
  return (
    <PPVShow
      events={SurvivorSeriesEvents}
      bannerAlt="Survivor Series Banner"
    />
  );
}