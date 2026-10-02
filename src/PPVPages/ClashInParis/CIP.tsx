import PPVShow, { Match, PPVEvent } from "../../PPVShow";

// ---------- Match Cards ----------

const matchCard2028: Match[] = [
{ match: "Drew Mcintyre Vs Aleister Black Vs Tyler Bate", title: "Intercontinental", type: "Triple Threat Match" },
{ match: "Perros Del Mal Vs Usos", title: "Raw Tag Team", type: "Normal Match" },
{ match: "Roxanne Perez Vs Raquel Roderiques", title: "Women's United States", type: "Normal Match" },
{ match: "Randy Orton Vs Kevin Owens", title: "", type: "Extreme Rules Match" },
{ match: "Lyra Valkyria Vs Piper Niven", title: "Women's Intercontinental", type: "Extreme Rules Match" },
{ match: "LA Knight Vs Ricky Saints Vs Tomaso Ciampa Vs Finn Balor Vs Sheamus", title: "United States", type: "Fatal 5-Way Match" },
{ match: "Becky Lynch Vs Alexa Bliss", title: "Women's World", type: "Normal Match" },
{ match: "Kane Vs CM Punk", title: "World Heavyweight", type: "Extreme Rules Match" },
{ match: "Tiffiany Stratton Vs Auska", title: "Women's Undisputed", type: "Normal Match" },
{ match: "Hardy Boys Vs Dudley Boys", title: "Smackdown Tag Team", type: "Tag Team Ladder match" },
{ match: "Gunther Vs Seth Rollins Vs Roman Reigns", title: "WWE Undisputed", type: "Triple Threat Match" },
];

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
    year: 2028,
    banner: "/Images/PPV/ClashInParis/CIPHeader2027.webp",
    location: "Paris La Défense Arena, Nanterre, France",
    date: "Saturday, June 24th, 2028",
    matches: matchCard2028,
    imageFolder: "ClashInParis/2028MC",

    previousEvent: {
      label: "Wrestlemania 2027",
      link: "/Wrestlemania",
    },
  },
  {
    year: 2027,
    banner: "/Images/PPV/ClashInParis/CIPHeader2027.webp",
    location: "Paris La Défense Arena, Nanterre, France",
    date: "Saturday, June 26th 2027, 2e/11p",
    matches: matchCard2027,
    imageFolder: "ClashInParis/2027MC",

    previousEvent: {
      label: "Backlash 2027",
      link: "/Backlash#2027",
    },

    nextEvent: {
      label: "Money In The Bank 2027",
      link: "/MITB#2027",
    },
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
