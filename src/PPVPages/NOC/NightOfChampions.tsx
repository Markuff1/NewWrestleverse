import PPVShow, { Match, PPVEvent } from "../../PPVShow";

// ---------- Match Cards ----------

const matchCard2027: Match[] = [
  { match: "Bron Breakker Vs Logan Paul Vs Rusev", title: "Intercontinental Championship", type: "Triple Threat Match" },
  { match: "Sol Ruca Vs Kelly Kelly", title: "Women's United States Championship", type: "Normal Match" },
  { match: "Dudley Boys Vs The New Day", title: "Smackdown Tag Team Championships", type: "Tag Team Match" },
  { match: "CM Punk Vs Kevin Owens", title: "", type: "Normal Match" },
  { match: "Jaida Parker Vs Naomi", title: "Women's Intercontinental Championship", type: "Normal Match" },
  { match: "Oba Femi Vs Ilja Dragunov", title: "United States Championship", type: "Normal Match" },
  { match: "The Usos Vs Wyatt Six", title: "Raw Tag Team Championships", type: "Tag Team Match" },
  { match: "Rhea Ripley Vs Becky Lynch", title: "Women's World Championship", type: "Normal Match" },
  { match: "AJ Styles Vs Finn Balor", title: "World Heavyweight Championship", type: "Normal Match" },
  { match: "Brock Lesnar Vs Shawn Michaels", title: "", type: "Extreme Rules Match" },
  { match: "Charlotte Flair Vs AJ Lee", title: "Women's Undisputed Championship", type: "Normal Match" },
  { match: "Gunther Vs Drew Mcintyre", title: "WWE Undisputed Championship", type: "Normal Match" }
];

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
    year: 2027,
    banner: "/Images/PPV/NOC/NOCHeader2027.png",
    location: "Kingdom Arena, Riyadh, Saudi Arabia",
    date: "Saturday, September 25th 2027, 2pm ET / 11am PT",
    matches: matchCard2027,
    imageFolder: "NOC/2027MC",
  },
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
