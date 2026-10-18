import PPVShow, { Match, PPVEvent } from "../../PPVShow";

// ---------- Match Cards ----------

const matchCard2028: Match[] = [
  { match: "Tyler Bate (c) Def. Drew McIntyre and Aleister Black", title: "Intercontinental Championship", type: "Triple Threat Match" },
  { match: "Perros Del Mal (c) Def. Usos", title: "Raw Tag Team Championship", type: "Normal Match" },
  { match: "Roxanne Perez (c) Def. Raquel Rodriguez", title: "Women's United States Championship", type: "Normal Match" },
  { match: "Kevin Owens Def. Randy Orton", title: "", type: "Extreme Rules Match" },
  { match: "Lyra Valkyria (c) Def. Piper Niven", title: "Women's Intercontinental Championship", type: "Extreme Rules Match" },
  { match: "LA Knight (c) Def. Ricky Saints and Tomaso Ciampa and Finn Balor and Sheamus", title: "United States Championship", type: "Fatal 5-Way Match" },
  { match: "Becky Lynch (c) Def. Alexa Bliss", title: "Women's World Championship", type: "Normal Match" },
  { match: "Kane (c) Def. CM Punk", title: "World Heavyweight Championship", type: "Extreme Rules Match" },
  { match: "Tiffany Stratton (c) Def. Asuka", title: "Women's Undisputed Championship", type: "Normal Match" },
  { match: "Hardy Boys (c) Def. Dudley Boys", title: "Smackdown Tag Team Championship", type: "Tag Team Ladder Match" },
  { match: "Roman Reigns Def. Gunther (c) and Seth Rollins", title: "WWE Undisputed Championship", type: "Triple Threat Match" },
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
