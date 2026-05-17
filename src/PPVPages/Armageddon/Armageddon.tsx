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
    date: "Saturday, December 18th 2027, 7e/5p",
    matches: matchCard2027,
    imageFolder: "Armageddon/2027MC",

    previousEvent: {
      label: "Survivor Series 2027",
      link: "/SurvivorSeries#2027",
    },

    nextEvent: {
      label: "BraggingRights 2028",
      link: "/BraggingRights#2028",
    },
  },
];

export default function Armageddon() {
  return (
    <PPVShow
      events={ArmageddonEvents}
      bannerAlt="Armageddon"
    />
  );
}
