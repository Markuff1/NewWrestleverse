import PPVShow, { Match, PPVEvent } from "../../PPVShow";

// ---------- Match Cards ----------

const matchCard2027: Match[] = [
];


// ---------- Event Data ----------
const EREvents: PPVEvent[] = [
  {
    year: 2026,
    banner: "/Images/PPV/ER/ERHeader2027.png",
    location: "",
    date: "Saturday, October 16th 2027, 7e/5p",
    matches: matchCard2027,
    imageFolder: "ER/2027MC",
  },
];

export default function ER() {
  return (
    <PPVShow
      events={EREvents}
      bannerAlt="Extreme Rules Banner"
    />
  );
}
