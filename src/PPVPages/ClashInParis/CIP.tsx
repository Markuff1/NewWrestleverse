import PPVShow, { Match, PPVEvent } from "../../PPVShow";

// ---------- Match Cards ----------

const matchCard2027: Match[] = [
  { match: "Brock Lesnar Def. Bron Breakker", title: "", type: "Normal Match" },
  { match: "Naomi (c) Def. Giulia", title: "Women's Intercontinental Championship", type: "Normal Match" },
  { match: "Dragon Lee (c) Def. Oba Femi and Ilja Dragunov", title: "United States Championship", type: "Triple Threat Match" },
  { match: "LA Knight Def. Wade Barrett", title: "", type: "I Quit Match" },
  { match: "Rusev (c) Def. Penta", title: "Intercontinental Championship", type: "Normal Match" },
  { match: "Sol Ruca (c) Def. Nikki Bella", title: "Women's United States Championship", type: "Normal Match" },
  { match: "CM Punk Def. Batista", title: "", type: "Normal Match" },
  { match: "Liv Morgan (c) Def. Charlotte Flair", title: "Women's World Championship", type: "Normal Match" },
  { match: "Finn Balor (c) Def. Rey Mysterio and AJ Styles and Seth Rollins", title: "World Heavyweight Championship", type: "Fatal 4-Way Elimination Match" },
  { match: "Alexa Bliss (c) Def. Rhea Ripley", title: "Women's Undisputed Championship", type: "Normal Match" },
  { match: "Gunther Def. Shawn Michaels (c) and Randy Orton", title: "WWE Championship", type: "Triple Threat Match" }
];


// ---------- Event Data ----------
const CIPEvents: PPVEvent[] = [
  {
    year: 2027,
    banner: "/Images/PPV/ClashInParis/CIPHeader2027.png",
    location: "Paris La Défense Arena, Nanterre, France",
    date: "Saturday, June 26th 2027, 2e/11p",
    matches: matchCard2027,
    imageFolder: "ClashInParis/2027MC",
  },
];

export default function CIP() {
  return (
    <PPVShow
      events={CIPEvents}
      bannerAlt="Clash In Paris"
    />
  );
}
