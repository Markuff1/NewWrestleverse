import PPVShow, { Match, PPVEvent } from "../PPVShow";

const matchCard2026: Match[] = [
  { match: "Ilja Dragunov Def. Aleister Black(c)", title: "Intercontinental Championship", type: "Normal Match" },
  { match: "Sol Ruca Def. Jordynne Grace(c)", title: "Women's Intercontinental Championship", type: "Normal Match" },
  { match: "Sami Zayn Def. Seth Rollins", title: "", type: "Extreme Rules Match" },
  { match: "Stephanie Vaquer(c) Def. Roxanne Perez", title: "Women's United States Championship", type: "Normal Match" },
  { match: "LA Knight(c) Def. Penta", title: "United States Championship", type: "Normal Match" },
  { match: "Auska(c) Def. Dakota Kai", title: "Women's World Championship", type: "Normal Match" },
  { match: "Mark Henry Def. Dominic Mysterio", title: "", type: "Steel Cage Match" },
  { match: "CM Punk Def. AJ Styles(c)", title: "World Heavyweight Championship", type: "Normal Match" },
  { match: "Rhea Ripley(c) Def. Shayna Baszler", title: "Women's Undisputed Championship", type: "Normal Match" },
  { match: "John Cena(c) Def. Drew McIntyre", title: "WWE Undisputed Championship", type: "Normal Match" },

];

// ---------- Event Data ----------
const OTLEvents: PPVEvent[] = [
  {
    year: 2026,
    banner: "/Images/PPV/OverTheLimit/OTLHeader2026.png",
    location: "Madison Square Garden, New York",
    date: "Saturday, June 27th 2026",
    matches: matchCard2026,
    imageFolder: "OverTheLimit/2026MC",
  },
];


export default function OverTheLimit() {
  return (
    <PPVShow
      events={OTLEvents}
      bannerAlt="Over The Limit Banner"
    />
  );
}
