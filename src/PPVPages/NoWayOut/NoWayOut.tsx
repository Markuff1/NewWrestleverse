import PPVShow, { Match, PPVEvent } from "../PPVShow";

// ---------- Match Cards ----------
const matchCard2025: Match[] = [

];

// ---------- Event Data ----------
const NoWayOutEvents: PPVEvent[] = [
  {
    year: 2027,
    banner: "/Images/PPV/NoWayOut/NoWayOutHeader.png",
    location: "",
    date: "",
    matches: matchCard2025,
    imageFolder: "NoWayOut/2025MC",
  },
];

export default function NoWayOut() {
  return (
    <PPVShow
      events={NoWayOutEvents}
      bannerAlt="No Way Out Banner"
    />
  );
}
