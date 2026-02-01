import PPVShow, { Match, PPVEvent } from "../PPVShow";

// ---------- Match Cards ----------

const matchCard2026: Match[] = [
{ match: "Drew McIntyre Def. John Cena", title: "", type: "Extreme Rules Match" },
{ match: "Shayna Baszler (c) Def. Sol Ruca", title: "Women's Intercontinental Championship", type: "Normal Match" },
{ match: "Sheamus (c) Def. Gunther and Ilja Dragunov", title: "United States Championship", type: "Normal Match" },
{ match: "Viking Raiders (c) Def. Dudley Boys", title: "Raw Tag Team Championships", type: "Tag Team Match" },
{ match: "Nikki Bella Def. Stephanie Vaquer (c)", title: "Women's United States Championship", type: "Normal Match" },
{ match: "Seth Rollins Def. Rey Mysterio", title: "", type: "Normal Match" },
{ match: "Penta (c) Def. Cody Rhodes", title: "Intercontinental Championship", type: "Normal Match" },
{ match: "Kairi Sane (c) Def. Dakota Kai", title: "Women's World Championship", type: "Normal Match" },
{ match: "Roman Reigns Def. Mark Henry (c)", title: "WWE Undisputed Championship", type: "Normal Match" },
{ match: "Raquel Roderiques (c) Def. Iyo Sky and Charlotte Flair", title: "Women's Undisputed Championship", type: "Triple Threat Match" },
{ match: "Randy Orton Def. CM Punk (c)", title: "World Heavyweight Championship", type: "Extreme Rules Match" }
];


// ---------- Event Data ----------
const NOCEvents: PPVEvent[] = [
  {
    year: 2026,
    banner: "/Images/PPV/NOC/NOCHeader2026.png",
    location: "American Airlines Center, Dallas, TX",
    date: "Saturday, September 19th 2026, 7e/5p",
    matches: matchCard2026,
    imageFolder: "NOC/2026MC",
  },
];

export default function NOC() {
  return (
    <PPVShow
      events={NOCEvents}
      bannerAlt="Night Of Champions Banner"
    />
  );
}
