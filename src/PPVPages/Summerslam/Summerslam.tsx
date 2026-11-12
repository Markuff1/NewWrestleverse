import PPVShow, { Match, PPVEvent } from "../../PPVShow";

// ---------- Match Cards ----------
const matchCard2028: Match[] = [
  {night: 1, match: "Alba Fyre def. Roxanne Perez (c) and Raquel Rodriguez and Blake Monroe", title: "Women's United States Championship", type: "Fatal 4-Way Match"},
  {night: 1, match: "Lucha Brothers Def. Perros Del Mal (c)", title: "Raw Tag Team Championship", type: "Tag Team Match"},
  {night: 1, match: "Jordynne Grace Def. Nikki Bella", title: "", type: "Normal Match"},
  {night: 1, match: "Bron Breakker Def. Randy Orton", title: "", type: "Extreme Rules Match"},
  {night: 1, match: "Dominik Mysterio Vs Tyler Bate", title: "Intercontinental Championship", type: "Steel Cage Match"},
  {night: 1, match: "AJ Styles Vs Mark Henry", title: "", type: "Normal Match"},
  {night: 1, match: "Shawn Michaels Vs Kevin Owens", title: "", type: "Street Fight"},
  {night: 1, match: "Becky Lynch Vs Charlotte Flair Vs Naomi", title: "Women's World Championship", type: "Triple Threat Match"},
  {night: 1, match: "CM Punk Vs Brock Lesnar", title: "World Heavyweight Championship", type: "Extreme Rules Match"},

  {night: 2, match: "Kane Vs Oba Femi", title: "", type: "Inferno Match"},
  {night: 2, match: "Lyra Valkyria Vs Jacy Jayne", title: "Women's Intercontinental Championship", type: "Normal Match"},
  {night: 2, match: "Finn Balor Vs Umaga", title: "", type: "Extreme Rules Match"},
  {night: 2, match: "Ilja Dragunov Vs LA Knight Vs Jacob Fatu", title: "United States Championship", type: "Triple Threat Match"},
  {night: 2, match: "Johnny Gargano Vs Cody Rhodes", title: "", type: "Extreme Rules Match"},
  {night: 2, match: "Hardy Boys Vs Street Profits Vs Viking Raiders", title: "SmackDown Tag Team Championship", type: "3-Way Ladder Match"},
  {night: 2, match: "Triple H Vs Gunther", title: "", type: "Extreme Rules Match"},
  {night: 2, match: "Tiffany Stratton Vs Rhea Ripley", title: "Women's Undisputed Championship", type: "Normal Match"},
  {night: 2, match: "Roman Reigns Vs Seth Rollins", title: "WWE Undisputed Championship", type: "Extreme Rules Match"},
]

const matchCard2027: Match[] = [
  { match: "Bron Breakker Def. Rusev (c) and Carmelo Hayes and Jacob Fatu", title: "Intercontinental Championship", type: "Fatal 4-Way Match" },
  { match: "Sol Ruca (c) Def. Chelsea Green", title: "Women's United States Championship", type: "Normal Match" },
  { match: "Aleister Black Def. Logan Paul", title: "", type: "Ladder Match" },
  { match: "Dudley Boys Def. The New Day (c)", title: "SmackDown Tag Team Championships", type: "Normal Match" },
  { match: "Tiffany Stratton Def. Becky Lynch", title: "", type: "Extreme Rules Match" },
  { match: "Oba Femi (c) Def. Cody Rhodes", title: "United States Championship", type: "Normal Match" },
  { match: "Jaida Parker Def. Naomi (c)", title: "Women's Intercontinental Championship", type: "Normal Match" },
  { match: "The Usos (c) Def. MCMG", title: "Raw Tag Team Championships", type: "Tag Team Match" },
  { match: "Seth Rollins Def. The Fiend", title: "", type: "Extreme Rules Match" },
  { match: "Rhea Ripley Def. Alexa Bliss (c) and Bianca Belair and Nia Jax", title: "Women's World Championship", type: "Fatal 4-Way Match" },
  { match: "AJ Styles Def. Finn Balor (c) and CM Punk", title: "World Heavyweight Championship", type: "Triple Threat Match" },
  { match: "Charlotte Flair (c) Def. Nikki Bella", title: "Women's Undisputed Championship", type: "Normal Match" },
  { match: "Gunther (c) Def Brock Lesnar and Shawn Michaels", title: "WWE Undisputed Championship", type: "Triple Threat Match" }
];

const matchCard2026: Match[] = [
  { match: "Penta Def. LA Knight (c)", title: "Intercontinental Championship", type: "Special Guest Ref Match" },
  { match: "Kevin Owens Def. Aleister Black", title: "", type: "Normal Match" },
  { match: "Shayna Baszler Def. Sol Ruca (c)", title: "Women's Intercontinental Championship", type: "Normal Match" },
  { match: "Seth Rollins Def. Sami Zayn", title: "Money In The Bank", type: "Ladder Match" },
  { match: "MCMG (c) Def. New Catch Republic", title: "Smackdown Tag Team Championships", type: "Tag Team Match" },
  { match: "Sheamus Def. Ilja Draunov (c) and Gunther", title: "United States Championship", type: "Triple Threat Match" },
  { match: "Stephanie Vaquer (c) Def. Nikki Bella", title: "Women's United States Championship", type: "Normal Match" },
  { match: "Viking Raiders Def. Dudley Boys (c)", title: "Raw Tag Team Championships", type: "Tag Team Match" },
  { match: "Kairi Sane Def. Auska (c)", title: "Women's World Championship", type: "Normal Match" },
  { match: "CM Punk (c) Def. Randy Orton", title: "World Heavyweight Championship", type: "Normal Match" },
  { match: "Charlotte Flair Def. Iyo Sky (c) and Rhea Ripley", title: "Women's Undisputed Championship", type: "Normal Match" },
  { match: "Mark Henry (c) Def. John Cena, Roman Reigns and Drew McIntyre", title: "WWE Undisputed Championship", type: "Fatal 4-Way Match" },
];

const matchCard2025: Match[] = [
  { match: "Seth Rollins Def. Kevin Owens", title: "", type: "Extreme Rules Match" },
  { match: "#DIY (c) Def The New Bloodline", title: "RAW Tag Team Championships", type: "2 Out of 3 Falls Match" },
  { match: "Oba Femi (c) Def Kane and Umaga", title: "United States Championship", type: "Triple Threat Match" },
  { match: "Piper Niven (c) Def Nia Jax", title: "Women's Intercontinetal Championship", type: "Normal Match" },
  { match: "New Catch Republic Def. The Dudley Boys (c) and Viking Raiders ", title: "Smackdown Tag Team Championships", type: "Triple Threat Tag Team Ladder Match" },
  { match: "Raquel Roderiques Def. Sol Ruca (c)", title: "Women's United States Championship", type: "Normal Match" },
  { match: "Dragon Lee (c) Def. Je'von Evans", title: "Intercontinental Championship", type: "Normal Match" },
  { match: "Naomi (c) Def. Kairi Sane and Becky Lynch and Trish Stratus", title: "Women's World Championship", type: "Fatal 4-Way Match" },
  { match: "CM Punk Def. AJ Styles", title: "", type: "Normal Match" },
  { match: "Gunther (c) Def. Drew McIntyre", title: "World Heavyweight Championship", type: "Normal Match" },
  { match: "Roxanne Perez (c) Def. Charlotte Flair", title: "Women's Undisputed Championship", type: "Last Woman Standing" },
  { match: "Roman Reigns Def. Randy Orton (c)", title: "WWE Undisputed Championship", type: "Normal Match" }
];

// ---------- Event Data ----------
export const SummerSlamEvents: PPVEvent[] = [
  {
    year: 2028,
    banner: "/Images/PPV/SummerSlam/SSHeader2028.webp",
    location: "Metlife Stadium, New York, NJ",
    date: "August 19th - 20th 2028, 7e/5p",
    matches: matchCard2028,
    imageFolder: "SummerSlam/2028MC",
  },
  {
    year: 2027,
    banner: "/Images/PPV/SummerSlam/SSHeader2027.webp",
    location: "Metlife Stadium, New York, NJ",
    date: "Saturday, August 7th 2027, 7e/5p",
    matches: matchCard2027,
    imageFolder: "SummerSlam/2027MC",
  },

  {
    year: 2026,
    banner: "/Images/PPV/SummerSlam/SSHeader2026.webp",
    location: "SoFi Stadium, Los Angeles, CA",
    date: "Saturday, August 8th 2026, 7e/5p",
    matches: matchCard2026,
    imageFolder: "SummerSlam/2026MC",
  },

  {
    year: 2025,
    banner: "/Images/PPV/SummerSlam/SSHeader2025.webp",
    location: "Cleveland Browns Stadium, Cleveland, Ohio",
    date: "Saturday, August 30th 2025, 7e/5p",
    matches: matchCard2025,
    imageFolder: "SummerSlam/2025MC",
  },
];

export default function SummerSlam() {
  return (
    <PPVShow
      events={SummerSlamEvents}
      bannerAlt="Summerslam Banner"
    />
  );
}
