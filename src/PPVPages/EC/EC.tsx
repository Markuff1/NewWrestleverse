import PPVShow, { Match, PPVEvent } from "../PPVShow";

// ---------- Match Cards ----------
const matchCard2027: Match[] = [
  {
    match: "Roxanne Perez Def. Nia Jax and Stephanie Vaquer and Lita and Jade Cargill and Giulia",
    title: "Wrestlemania World Title Match",
    type: "Elimination Chamber Match",
  },
  {
    match: "Penta (w/ Wade Barrett) Def. LA Knight (c)",
    title: "Intercontinental Championship",
    type: "Extreme Rules Match",
  },
  {
    match: "Rey Mysterio Def. Randy Orton - Undertaker run in",
    title: "Wrestlemania World Heavyweight Championship Match",
    type: "Normal Match",
  },
  {
    match: "Shawn Michaels Def. Mark Henry and Drew McIntyre and Bron Breakker and RVD and Jevon Evans",
    title: "Wrestlemania World Title Match",
    type: "Elimination Chamber Match",
  },
  {
    match: "Alexa Bliss (c) Def. Becky Lynch",
    title: "Women's World Championship",
    type: "Normal Match",
  },
  {
    match: "Dudley Boys (c) Def. Street Profits",
    title: "Smackdown Tag Team Championships",
    type: "Tag Team Match",
  },
  {
    match: "Raquel Roderiques (c) Def. Rhea Ripley",
    title: "Women's Undisputed Championship",
    type: "Normal Match",
  },
  {
    match: "Seth Rollins (c) Def. Sheamus and Bronson Reed and CM Punk and Kevin Owens and AJ Styles",
    title: "World Heavyweight Championship",
    type: "Elimination Chamber Match",
  },
];

// ---------- Event Data ----------
const ECEvents: PPVEvent[] = [
  {
    year: 2027,
    banner: "/Images/PPV/EC/ECHeader2027.png",
    location: "Optus Stadium,  Perth, Australia",
    date: "Saturday, 27th February 2027, 7pm ET / 5pm PT",
    matches: matchCard2027,
    imageFolder: "EC/2027MC",
  },
];

export default function EC() {
  return (
    <PPVShow
      events={ECEvents}
      bannerAlt="Elimination Chamber Banner"
    />
  );
}
