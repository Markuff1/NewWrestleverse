import PPVShow, { Match, PPVEvent } from "../../PPVShow";

// ---------- Match Cards ----------

const matchCard2027: Match[] = [
];


// ---------- Event Data ----------
const BraggingRightsEvents: PPVEvent[] = [
  {
    year: 2027,
    banner: "/Images/PPV/BR/BRHeader2027.png",
    location: "Benchmark International Arena, Tampa, Fl",
    date: "Saturday, January 8th 2028, 7e/5p",
    matches: matchCard2027,
    imageFolder: "BR/2027MC",

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
