import PPVShow, { Match, PPVEvent } from "../../PPVShow";

// ---------- Match Cards ----------

const matchCard2027: Match[] = [
{ match: "Randy Orton Def. Dominic Mysterio", title: "", type: "Normal Match" },
{ match: "Lola Vice (c) Def. Blake Monroe", title: "Women's Intercontinental Championship", type: "Normal Match" },
{ match: "Dudley Boys (c) Def. Pretty Deadly", title: "Smackdown Tag Team Championships", type: "Tag Team Match" },
{ match: "Bron Breakker (c) Def. Pete Dunne", title: "Intercontinental Championship", type: "Triple Threat Match" },
{ match: "Sol Ruca (c) Def. Kairi Sane", title: "Women's United States Championship", type: "Normal Match" },
{ match: "Ricky Saints Def. Ilja Dragunov (c) and John Cena", title: "United States Championship", type: "Normal Match" },
{ match: "Street Profits (c) Def. Usos", title: "Raw Tag Team Championships", type: "Extreme Rules Match" },
{ match: "CM Punk (2) Def. Seth Rollins (1)", title: "", type: "2 Out Of 3 Falls Match" },
{ match: "Becky Lynch Def. Rhea Ripley (c)", title: "Women's World Championship", type: "Extreme Rules Match" },
{ match: "Aleister Black (c) Def. AJ Styles", title: "World Heavyweight Championship", type: "Normal Match" },
{ match: "Charlotte Flair (c) Def. Asuka", title: "Women's Undisputed Championship", type: "Normal Match" },
{ match: "Brock Lesnar (c) Def. Gunther and Roman Reigns", title: "WWE Undisputed Championship", type: "Triple Threat" },
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
