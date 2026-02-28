import PPVShow, { Match, PPVEvent } from "../../PPVShow";

// ---------- Match Cards ----------

const matchCard2027: Match[] = [
];


// ---------- Event Data ----------
const ArmageddonEvents: PPVEvent[] = [
  {
    year: 2027,
    banner: "/Images/PPV/Armageddon/ArmageddonHeader2027.png",
    location: "Smoothie King Centre, New Orleans, LA",
    date: "Saturday, December 18th 2027, 2e/11p",
    matches: matchCard2027,
    imageFolder: "Armageddon/2027MC",
  },
];

export default function CIP() {
  return (
    <PPVShow
      events={ArmageddonEvents}
      bannerAlt="Armageddon"
    />
  );
}
