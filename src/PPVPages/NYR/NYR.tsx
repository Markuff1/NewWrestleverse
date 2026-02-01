import PPVShow, { Match, PPVEvent } from "../PPVShow";

// ---------- Match Cards ----------

const matchCard2027: Match[] = [
  { match: "LA Knight Def. Penta (c)", title: "Intercontinental Championship", type: "Normal Match" },
  { match: "Shayna Baszler (c) Def. Bianca Belair", title: "Women's Intercontinental Championship", type: "Normal Match" },
  { match: "Dudley Boys (c) Def. Viking Raiders", title: "Raw Tag Team Championships", type: "Normal Match" },
  { match: "Bronson Reed Def. Sheamus (c) and AJ Styles and Sami Zayn", title: "United States Championship", type: "Normal Match" },
  { match: "Nikki Bella (c) Def. Natayla", title: "Women's United States Championship", type: "Normal Match" },
  { match: "CM Punk Def. Gunther", title: "", type: "Last Man Standing Match" },
  { match: "Raquel Roderiques (c) Def. Rhea Ripley", title: "Women's Undisputed Championship", type: "Normal Match" },
  { match: "Seth Rollins (c) Def. Randy Orton", title: "World Heavyweight Championship", type: "Extreme Rules Match" },
  { match: "Alexa Bliss (c) Def. Kairi Sane", title: "Women's World Championship", type: "Normal Match" },
  { match: "Roman Regins (c) Def. The Fiend", title: "WWE Undisputed Championship", type: "Normal Match" },
];


const matchCard2026: Match[] = [
  { match: "Nia Jax Def. Stephanie Vaquer", title: "", type: "Normal Match" },
  { match: "JD McDonagh (c) Def. Damian Priest", title: "Intercontinental Championship", type: "Normal Match" },
  { match: "Liv Morgan (c) Def. Rhea Ripley", title: "Women's World Championship", type: "Normal Match" },
  { match: "OC Def. #DIY (c)", title: "Raw Tag Team Championships", type: "Normal Match" },
  { match: "Bron Breakker (c) Def. Axiom", title: "United States Championship", type: "Normal Match" },
  { match: "John Cena Def. Logan Paul", title: "", type: "Normal Match" },
  { match: "MCMG Def. AOP (c)", title: "SD Tag Team Championships", type: "Normal Match" },
  { match: "Roman Reigns (c) Def. AJ Styles", title: "WWE Undisputed Championship", type: "Steel Cage Match" },
  { match: "Tiffany Stratton (c) Def. Michelle McCool", title: "Women's Undisputed Championship", type: "Normal Match" },
  { match: "Seth Rollins (c) Def. Cody Rhodes", title: "World Heavyweight Championship", type: "Normal Match" }
];


// ---------- Event Data ----------
const NYREvents: PPVEvent[] = [
  {
    year: 2027,
    banner: "/Images/PPV/NYR/NYR2027Header.png",
    location: "Allstate Arena , Illinois, Chicago",
    date: "Saturday, January 2nd 2027, 7e/5p",
    matches: matchCard2027,
    imageFolder: "NYR/2027MC",
  },

  {
    year: 2026,
    banner: "/Images/PPV/NYR/NYR2026Header.png",
    location: "Nationwide Arena, Columbus, Ohio",
    date: "Saturday, January 3rd 2026, 7e/5p",
    matches: matchCard2026,
    imageFolder: "NYR/2026MC",
  },
];

export default function NYR() {
  return (
    <PPVShow
      events={NYREvents}
      bannerAlt="NYR Banner"
    />
  );
}
