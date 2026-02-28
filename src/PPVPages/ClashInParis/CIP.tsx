import PPVShow, { Match, PPVEvent } from "../../PPVShow";

// ---------- Match Cards ----------

const matchCard2027: Match[] = [
];


// ---------- Event Data ----------
const CIPEvents: PPVEvent[] = [
  {
    year: 2027,
    banner: "/Images/PPV/ClashInParis/CIPHeader2027.png",
    location: "Paris La Défense Arena, Nanterre, France",
    date: "Saturday, June 12th 2027, 2e/11p",
    matches: matchCard2027,
    imageFolder: "CIP/2027MC",
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
