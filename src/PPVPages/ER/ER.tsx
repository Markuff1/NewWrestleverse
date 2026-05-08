import PPVShow, { Match, PPVEvent } from "../../PPVShow";

// ---------- Match Cards ----------

const matchCard2027: Match[] = [
  { match: "Bron Breakker (c) Def. Ethan Page", title: "Intercontinental Championship", type: "Extreme Rules Match" },
  { match: "Sol Ruca (c) Def. Roxanne Perez", title: "Women's United States Championship", type: "Tables Match" },
  { match: "CM Punk Def. Seth Rollins", title: "", type: "Falls Count Anywhere Match" },
  { match: "Ilja Dragunov Def. Oba Femi (c) and Trick Williams", title: "United States Championship", type: "Triple Threat Match" },
  { match: "Blake Monroe Def. Jaida Parker (c)", title: "Women's Intercontinental Championship", type: "Extreme Rules Match" },
  { match: "Usos (c) Def. DIY", title: "Raw Tag Team Championships", type: "Ladder Match" },
  { match: "Charlotte Flair (c) Def. AJ Lee", title: "Women's Undisputed Championship", type: "Extreme Rules Match" },
  { match: "AJ Styles (c) Def. Kevin Owens (Aleister Black cashes in after the match)", title: "World Heavyweight Championship", type: "Extreme Rules Match" },
  { match: "Rhea Ripley (c) Def. Becky Lynch", title: "Women's World Championship", type: "Submission Match" },
  { match: "Gunther (c) Def. Ruesv and Wade Barrett and Drew Mcintyre", title: "WWE Undisputed Championship", type: "Fatal 4-Way Match" },
  { match: "Brock Lesnar Def. Shawn Michaels", title: "", type: "Hell In A Cell Match" }
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
