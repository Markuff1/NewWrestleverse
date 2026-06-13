import PPVShow, { Match, PPVEvent } from "../../PPVShow";

// ---------- Match Cards ----------

const matchCard2028: Match[] = [
{ match: "Bianca Belair, Giulia, Iyo Sky, Stephanie Vaquer Vs AJ Lee, Asuka, Nikki Bella, Liv Morgan", score: "0 : 1", type: "4 V 4 Elimination Match" },
{ match: "Bron Breakker Vs Ricky Saints", score: "1 : 1", type: "Normal Match" },
{ match: "Lola Vice Vs Sol Ruca", score: "1 : 2", type: "Normal Match" },
{ match: "Dominik Mysterio Open Challenge", score: "1 : 3", type: "Normal Match" },
{ match: "Tiffany Stratton Vs Roxanne Perez", score: "2 : 3", type: "Normal Match" },
{ match: "Street Profits Vs Dudley Boys", score: "3 : 3", type: "Tag Team Match" },
{ match: "Becky Lynch Vs Charlotte Flair", score: "3 : 4", type: "Normal Match" },
{ match: "Brock Lesnar Vs Aleister Black", score: "4 : 4", type: "Normal Match" },
{ match: "JBL, Roman Reigns, Drew McIntyre, Randy Orton Vs CM Punk, John Cena, Oba Femi, Booker T", score: "5 : 4", type: "4 V 4 Elimination Match" },
]


// ---------- Event Data ----------
const BraggingRightsEvents: PPVEvent[] = [
  {
    year: 2028,
    banner: "/Images/PPV/BR/BRHeader2028.png",
    location: "Benchmark International Arena, Tampa, Fl",
    date: "Saturday, January 8th 2028, 7e/5p",
    matches: matchCard2028,
    imageFolder: "BR/2028MC",

    previousEvent: {
      label: "Armageddon 2027",
      link: "/Armageddon#2027",
    },

    nextEvent: {
      label: "Royal Rumble 2028",
      link: "/RoyalRumble#2028",
    },
  },
];

export default function BraggingRights() {
  return (
    <PPVShow
      events={BraggingRightsEvents}
      bannerAlt="BraggingRights"
    />
  );
}
