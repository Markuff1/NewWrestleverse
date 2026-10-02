import PPVShow, { Match, PPVEvent } from "../../PPVShow";

const matchCard2028: Match[] = [
  { match: "Lyra Valkyria Def. Lola Vice (c) and Piper Niven and Jacy Jayne", title: "Women's Intercontinental Championship", type: "Fatal 4-Way Match" },
  { match: "Perros Del Mal (c) Def. New Day", title: "Raw Tag Team Championships", type: "Tag Team Match" },
  { match: "Tyler Bate Def. Drew Mcintyre (c) and Aleister Black", title: "Intercontiental Championship", type: "Triple Threat Match" },
  { match: "Roxanne Perez (c) Def. Sol Ruca", title: "Women's United States Championship", type: "Normal Match" },
  { match: "Seth Rollins Def. Kevin Owens", title: "", type: "Extreme Rules Match" },
  { match: "LA Knight Def. Ricky Saints (c) and Tommaso Ciampa", title: "United States Championship", type: "Triple Threat Match" },
  { match: "Tiffany Stratton Def. Auska (c) and Stephanie Vaquer", title: "Women's Undisputed Championship (Cash In)", type: "Normal Match" },
  { match: "Kane Def. CM Punk (c)", title: "World Heavyweight Championship", type: "Normal Match" },
  { match: "Hardy Boys Def. Dudley Boys (c)", title: "Smackdown Tag Team Championships", type: "Tag Team Match" },
  { match: "Becky Lynch (c) Def. Bianca Belair", title: "Women's World Championship", type: "Normal Match" },
  { match: "Gunther (c) Def. Roman Reigns", title: "WWE Undisputed Championship", type: "Normal Match" },
];

const matchCard2027: Match[] = [
  { match: "John Cena Def. The Fiend", title: "", type: "Inferno Match" },
  { match: "Sol Ruca Def. Nikki Bella (c)", title: "Women's United States Championship", type: "Normal Match" },
  { match: "Rusev Def. Penta (c) and Shinsuke Nakamura", title: "Intercontinental Championship", type: "Triple Threat Match" },
  { match: "LA Knight Def. Wade Barrett", title: "", type: "Extreme Rules Match" },
  { match: "Naomi (c) Def. Stephanie Vaquer", title: "Women's Intercontinental Championship", type: "Normal Match" },
  { match: "Usos Def. Street Profits (c)", title: "Raw Tag Team Championships", type: "Normal Match" },
  { match: "Dragon Lee (c) Def. Rey Fenix", title: "United States Championship", type: "Normal Match" },
  { match: "Liv Morgan (c) Def. Asuka", title: "Women's Undisputed Championship", type: "Normal Match" },
  { match: "Finn Balor Def. Rey Mysterio (c) and Seth Rollins", title: "World Heavyweight Championship", type: "Triple Threat Match" },
  { match: "Alexa Bliss (c) Def. Rhea Ripley", title: "Women's World Championship", type: "Normal Match" },
  { match: "Shawn Michaels (c) Def. Randy Orton", title: "WWE Undisputed Championship", type: "Normal Match" }
];

const matchCard2026: Match[] = [
  { match: "LA Knight Def. Penta (c) and Carmelo Hayes and Solo Sikoa", title: "Intercontinental Championship", type: "Fatal 4-Way Match" },
  { match: "MCMG (c) Def. #DIY", title: "Smackdown Tag Team Championships", type: "Tag Team Match" },
  { match: "Stephanie Vaquer (c) Def. Nia Jax", title: "Women's United States Championship", type: "Normal Match" },
  { match: "Mark Henry Def. Dominic Mysterio", title: "", type: "Normal Match" },
  { match: "Jordynne Grace Def. Michelle McCool", title: "Women's Intercontinental Championship", type: "Normal Match" },
  { match: "Aleister Black Def. Finn Balor", title: "United States Championship", type: "Normal Match" },
  { match: "Dudley Boys Def. AOP", title: "Raw Tag Team Championships", type: "Tag Team Match" },
  { match: "Becky Lynch Def. Asuka", title: "Women's World Championship", type: "Normal Match" },
  { match: "John Cena Def. Drew McIntyre", title: "WWE Undisputed Championship", type: "Normal Match" },
  { match: "Rhea Ripley (c) Def Naomi", title: "Women's Undisputed Championship", type: "Normal Match" },
  { match: "AJ Styles Def CM Punk and Kevin Owens", title: "WWE World Heavyweight Championship", type: "Triple Threat Match" },
];

const matchCard2025: Match[] = [
  { match: "Sheamus Def. Jey Uso", title: "United States Championship", type: "Normal Match" },
  { match: "Piper Niven Def. Chelsea Green", title: "Women's Intercontinental Championship", type: "Normal Match" },
  { match: "Dudley Boys Def. AOP", title: "Smackdown Tag Team Championships", type: "Tag Team Match" },
  { match: "Sol Ruca Def. Jade Cargill", title: "Women's United States Championship", type: "Normal Match" },
  { match: "Andrade Def. Jacob Fatu and Je'von Evans", title: "Intercontinental Championship", type: "Triple Threat" },
  { match: "Kairi Sane Def. Liv Morgan", title: "Women's World Championship", type: "Normal Match" },
  { match: "#DIY Def. Street Profits", title: "RAW Tag Team Championships", type: "Tag Team Match" },
  { match: "Kevin Owens Def. Seth Rollins", title: "World Heavyweight Championship", type: "Normal Match" },
  { match: "Roxanne Perez Def. Charlotte Flair", title: "Women's Undisputed Championship", type: "Normal Match" },
  { match: "Randy Orton Def. CM Punk", title: "Men's Undisputed Championship", type: "Normal Match" },
];

// ---------- Event Data ----------
const BacklashEvents: PPVEvent[] = [
  {
    year: 2027,
    banner: "/Images/PPV/Backlash/BacklashHeader2028.webp",
    location: "O2 Arena, London, England",
    date: "Saturday, May 20th, 2028",
    matches: matchCard2028,
    imageFolder: "Backlash/2028MC",

    previousEvent: {
      label: "Wrestlemania 2027",
      link: "/Wrestlemania",
    },
  },
  {
    year: 2027,
    banner: "/Images/PPV/Backlash/Backlash2027Header.webp",
    location: "Ryoguko Arena, Tokyo, Japan",
    date: "Saturday, May 22nd, 2027",
    matches: matchCard2027,
    imageFolder: "Backlash/2027MC",

    previousEvent: {
      label: "Wrestlemania 2027",
      link: "/Wrestlemania#2027",
    },

    nextEvent: {
      label: "Clash In Paris 2027",
      link: "/ClashInParis#2027",
    },
  },

  {
    year: 2026,
    banner: "/Images/PPV/Backlash/BacklashHeaderV2.webp",
    location: "Gainbridge Fieldhouse, Indianapolis, Indiana",
    date: "Saturday, May 23rd, 2026",
    matches: matchCard2026,
    imageFolder: "Backlash/2026MC",

    previousEvent: {
      label: "Wrestlemania 2026",
      link: "/Wrestlemania#2026",
    },

    nextEvent: {
      label: "Over the limit 2026",
      link: "/OverTheLimit#2026",
    },
  },

  {
    year: 2025,
    banner: "/Images/PPV/Backlash/BacklashHeader.webp",
    location: "Allstate Arena, Rosemont, Illinois",
    date: "Saturday, May 24th, 2025",
    matches: matchCard2025,
    imageFolder: "Backlash/2025MC",

    previousEvent: {
      label: "Wrestlemania 2025",
      link: "/Wrestlemania#2025",
    },

    nextEvent: {
      label: "Money In The Bank 2025",
      link: "/MITB#2025",
    },
  },
];

export default function Backlash() {
  return (
    <PPVShow
      events={BacklashEvents}
      bannerAlt="Backlash Banner"
    />
  );
}
