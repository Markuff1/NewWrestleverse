import PPVShow, { Match, PPVEvent } from "../PPVShow";

// ---------- Match Cards ----------

const matchCard2026: Match[] = [
  { match: "Penta (c) Def. Rob Van Dam and Carmelo Hayes", title: "Intercontinental Championship", type: "Ladder Match" },
  { match: "Dudley Boys Def. Viking Raiders (c)", title: "Raw Tag Team Championships", type: "Tables Match" },
  { match: "Shayna Baszler (c) Def. Bianca Belair", title: "Women's Intercontinental Championship", type: "Normal Match" },
  { match: "Sheamus (c) Def. Umaga", title: "United States Championship", type: "Chairs Match" },
  { match: "Alexa Bliss Def. Kairi Sane (c)", title: "Womens World Championship", type: "Tables Match" },
  { match: "Roman Reigns (c) Def. Oba Femi", title: "WWE Undisputed Championship", type: "TLC Match" },
  { match: "Raquel Roderiques (c) Def. Charlotte Flair", title: "Women's Undisputed Championship", type: "Chairs Match" },
  { match: "The New Day (c) Def. MCMG and DIY", title: "Smackdown Tag Team Championships", type: "TLC Triple Threat Tag Team Match" },
  { match: "Seth Rollins (c) Def. Randy Orton and Rey Mysterio and Kevin Owens", title: "World Heavyweigt Championship", type: "TLC Match" }
];

const matchCard2025: Match[] = [
    { match: "Bron Breakker (c) Def. Axiom and Wes Lee and Karrion Kross", title: "United States Championship", type: "Ladder Match" },
    { match: "AOP Def. New Catch Republic (c)", title: "Smackdown Tag Team Championships", type: "Tables Match" },
    { match: "The Fiend Def. Dominic Mysterio", title: "", type: "Extreme Rules Match" },
    { match: "Tiffany Stratton (c) Def. Bayley", title: "Women's World Championship", type: "Ladder Match" },
    { match: "JD McDonagh Def. Damian Priest (c) and Jacob Fatu", title: "Intercontinental Championship", type: "Chairs Match" },
    { match: "Stephanie Vaquer Def. Chelsea Green", title: "", type: "Normal Match" },
    { match: "Roman Reigns (c) Def. AJ Styles", title: "WWE Undisputed Championship", type: "TLC Match" },
    { match: "Rhea Ripley (c) Def. Jade Cargill (Liv Morgan Cash In)", title: "Women's Undisputed Championship", type: "Chairs Match" },
    { match: "Seth Rollins Def. Cody Rhodes (c)", title: "World Heavyweight Championship", type: "TLC Match" }
];


// ---------- Event Data ----------
const TLCEvents: PPVEvent[] = [
  {
    year: 2026,
    banner: "/Images/PPV/TLC/TLC2026Header.png",
    location: "Bell Centre. Montreal, Canada",
    date: "Saturday, December 12th 2026, 7e/5p",
    matches: matchCard2026,
    imageFolder: "TLC/2026MC",
  },

  {
    year: 2025,
    banner: "/Images/PPV/TLC/TLC2025Header.png",
    location: "Smoothie King Centre, New Orleans, LA",
    date: "Saturday, December 13th 2025, 7e/5p",
    matches: matchCard2025,
    imageFolder: "TLC/2025MC",
  },
];

export default function TLC() {
  return (
    <PPVShow
      events={TLCEvents}
      bannerAlt="TLC Banner"
    />
  );
}
