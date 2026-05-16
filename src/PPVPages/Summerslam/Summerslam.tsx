import PPVShow, { Match, PPVEvent } from "../../PPVShow";

// ---------- Match Cards ----------

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
const SummerSlamEvents: PPVEvent[] = [
  {
    year: 2027,
    banner: "/Images/PPV/SummerSlam/SSHeader2027.png",
    location: "Metlife Stadium, New York, NJ",
    date: "Saturday, August 7th 2027, 7e/5p",
    matches: matchCard2027,
    imageFolder: "SummerSlam/2027MC",

    previousEvent: {
      label: "Money In The Bank 2027",
      link: "/MITB#2027",
    },

    nextEvent: {
      label: "Night Of Champions 2027",
      link: "/NOC#2027",
    },
  },

  {
    year: 2026,
    banner: "/Images/PPV/SummerSlam/SSHeader2026.png",
    location: "SoFi Stadium, Los Angeles, CA",
    date: "Saturday, August 8th 2026, 7e/5p",
    matches: matchCard2026,
    imageFolder: "SummerSlam/2026MC",

    previousEvent: {
      label: "Money In The Bank 2026",
      link: "/MITB#2026",
    },

    nextEvent: {
      label: "Night Of Champions 2026",
      link: "/NOC#2026",
    },
  },

  {
    year: 2025,
    banner: "/Images/PPV/SummerSlam/SSHeader2025.png",
    location: "Cleveland Browns Stadium, Cleveland, Ohio",
    date: "Saturday, August 30th 2025, 7e/5p",
    matches: matchCard2025,
    imageFolder: "SummerSlam/2025MC",

    previousEvent: {
      label: "One Night Stand 2025",
      link: "/ONS#2025",
    },

    nextEvent: {
      label: "No Mercy 2025",
      link: "/NoMercy#2025",
    },
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
