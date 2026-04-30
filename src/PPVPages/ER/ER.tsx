import PPVShow, { Match, PPVEvent } from "../../PPVShow";

// ---------- Match Cards ----------

const matchCard2027: Match[] = [
  { match: "Bron Breakker Vs Ethan Page", title: "Intercontinental Championship", type: "Extreme Rules Match" },
  { match: "Sol Ruca Vs Roxanne Perez", title: "Women's United States Championship", type: "Tables Match" },
  { match: "CM Punk Vs Seth Rollins", title: "", type: "Falls Count Anywhere Match" },
  { match: "Oba Femi Vs Trick Williams Vs Ilja Dragunov", title: "United States Championship", type: "Triple Threat Match" },
  { match: "Jaida Parker Vs Blake Monroe", title: "Women's Intercontinental Championship", type: "Extreme Rules Match" },
  { match: "Usos Vs DIY", title: "Raw Tag Team Championships", type: "Ladder Match" },
  { match: "Charlotte Flair Vs AJ Lee", title: "Women's Undisputed Championship", type: "Extreme Rules Match" },
  { match: "AJ Styles Vs Kevin Owens", title: "World Heavyweight Championship", type: "Extreme Rules Match" },
  { match: "Rhea Ripley Vs Becky Lynch", title: "Women's World Championship", type: "Submission Match" },
  { match: "Gunther Vs Ruesv Vs Wade Barrett Vs Drew Mcintyre", title: "WWE Undisputed Championship", type: "Fatal 4-Way Match" },
  { match: "Brock Lesnar Vs Shawn Michaels", title: "", type: "Hell In A Cell Match" }
];

// ---------- Event Data ----------
const EREvents: PPVEvent[] = [
  {
    year: 2027,
    banner: "/Images/PPV/ER/ERHeader2027.png",
    location: "American Airlines Center, Dallas, TX",
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
