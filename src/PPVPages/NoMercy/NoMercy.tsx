import PPVShow, { Match, PPVEvent } from "../PPVShow";

// ---------- Match Cards ----------
const matchCard2025: Match[] = [
    {match: "New Catch Republic (c) Def. Dudley Boys", title:"SmackDown Tag Team Championships", type:"Normal Match"},
    {match: "Raquel Roderiquez (c) Def. Sol Ruca", title: "Women's United States Championship", type: "Normal Match"},
    {match: "Bron Breakker (c) Def. Oba Femi", title: "United States Championship", type: "Normal Match"},
    {match: "AJ Styles Def. CM Punk", title:"", type: "Extreme Rules Match"},
    {match: "Baron Corbin Def. Dragon Lee and Ilja Dragonov", title:"Intercontinetal Championship", type:"Triple Threat Match"},
    {match: "Naomi (c) Def Becky Lynch", title:"Women's World Championship", type:"Normal Match"},
    {match: "Gunther (c) Def. Drew Mcintyre (Cody Rhoades Def. Gunther (Cash In))", title:"World Heavyweight Championship", type:"Normal Match"},
    {match: "Roxanne Perez (c) Def. Tiffany Stratton", title:"Women's Undisputed Championship", type:"Normal Match"},
    {match: "Roman Reigns (c) Def. Randy Orton", title:"WWE Undisputed Championship", type:"Extreme Rules Match"},
  ];
// ---------- Event Data ----------
const NoMercyEvents: PPVEvent[] = [
  {
    year: 2025,
    banner: "/Images/PPV/NoMercy/NoMercyHeader.png.png",
    location: "State Farm Arena, Atlanta, Georgia",
    date: "Saturday, September 20th 2025, 7e/5",
    matches: matchCard2025,
    imageFolder: "NoMercy/2025MC",
  },
];

export default function NoMercy() {
  return (
    <PPVShow
      events={NoMercyEvents}
      bannerAlt="No Mercy Banner"
    />
  );
}
