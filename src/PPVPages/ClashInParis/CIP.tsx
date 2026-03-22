import PPVShow, { Match, PPVEvent } from "../../PPVShow";

// ---------- Match Cards ----------

const matchCard2027: Match[] = [
  { match: "Brock Lesnar Vs Bron Breakker Match", title: "", type: "Normal Match" },
  { match: "Naomi Vs Gulia Match", title: "Women's Intercontinental Championship", type: "Normal Match" },
  { match: "Dragon Lee Vs Oba Femi Vs Ilja Dragunov Match", title: "United States Championship", type: "Triple Threat Match" },
  { match: "Wade Barrett Vs LA Knight Match", title: "", type: "I Quit Match" },
  { match: "Rusev Vs Penta Match", title: "Intercontinental Championship", type: "Normal Match" },
  { match: "Sol Ruca Vs Nikki Bella Match", title: "Women's United States Championship", type: "Normal Match" },
  { match: "CM Punk Vs Batista Match", title: "", type: "Normal Match" },
  { match: "Liv Morgan Vs Charlotte Flair Match", title: "Women's World Championship", type: "Normal Match" },
  { match: "Finn Balor Vs Rey Mysterio Vs AJ Styles Vs Seth Rollins Match", title: "World Heavyweight Championship", type: "Triple Threat Match" },
  { match: "Alexa Bliss Vs Rhea Ripley Match", title: "Women's Undisputed Championship", type: "Normal Match" },
  { match: "Shawn Michaels Vs Randy Orton Vs Gunther Match", title: "WWE Championship", type: "Triple Threat Match" }
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
