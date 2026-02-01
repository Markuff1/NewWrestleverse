import PPVShow, { Match, PPVEvent } from "../PPVShow";

// ---------- Match Cards ----------
const matchCard2025: Match[] = [
    {match: "New Catch Republic (c) Def. Dudley Boys", title: "SmackDown Tag Team Championships", type: "Tables Match"},
    {match: "Randy Orton Def. Sami Zayn", title: "", type: "Extreme Rules Match"},
    {match: "Bron Breakker Def. Oba Femi", title: "United States Championship", type: "Last Man Standing Match"},
    {match: "Michelle McCool Def. Piper Niven (c)", title: "Women's Intercontinental Championship", type: "Extreme Rules Match"},
    {match: "Damian Priest Def. Baron Corbin (c) and Dragon Lee and Ilja Dragunov and Rey Mysterio", title: "Intercontinental Championship", type: "Ladder Match"},
    {match: "Rhea Ripley Def. Naomi (c)", title: "Women's World Championship", type: "Normal Match"},
    {match: "CM Punk Def. AJ Styles", title: "", type: "Ambulance Match"},
    {match: "Tiffiany Stratton Def. Roxanne Perez (c)", title: "Women's Undisputed Championship", type: "Extreme Rules Match"},
    {match: "Roman Reigns (c) Def. RVD", title: "WWE Undisputed Championship", type: "Normal Match"},
    {match: "Cody Rhoads (c) Def. Gunther and Drew McIntyre", title: "World Heavyweight Championship", type: "Triple Threat Match"}
  ];


// ---------- Event Data ----------
const CyberSundayEvents: PPVEvent[] = [
  {
    year: 2025,
    banner: "/Images/PPV/CyberSunday/CyberSundayHeader.png",
    location: "Capital One Arena, Washington, DC",
    date: "Saturday, October 25th 2025, 7e/5p",
    matches: matchCard2025,
    imageFolder: "CyberSunday/2025MC",
  },
];

export default function CyberSunday() {
  return (
    <PPVShow
      events={CyberSundayEvents}
      bannerAlt="Cyber Sunday Banner"
    />
  );
}
