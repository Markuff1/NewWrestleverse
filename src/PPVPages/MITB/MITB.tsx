import PPVShow, { Match, PPVEvent } from "../../PPVShow";

// ---------- Match Cards ----------//
const matchCard2028: Match[] = [
{ match: "Breakker Vs Balor Vs Fatu Vs Owens Vs Orton Vs Rollins Vs Evans Vs Saints", title: "Smackdown Money In The Bank", type: "Ladder Match" },
{ match: "Lyra Valkyria Vs Jacy Jayne", title: "Women's Intercontinental Championship", type: "Normal Match" },
{ match: "LA Knight Vs Ilja Dragunov", title: "United States Championship", type: "Normal Match" },
{ match: "Roxanne Perez Vs Blake Monroe Vs Raquel Rodriques", title: "Women's United States Championship", type: "Triple Threat Match" },
{ match: "Perros Del Mal Vs MCMG", title: "Raw Tag Team Championships", type: "Tag Team Match" },
{ match: "Tyler Bate Vs Dominik Mysterio", title: "Intercontinetal Championship", type: "Normal Match" },
{ match: "Belair Vs Bella Vs Vice Vs Grace Vs Giulia Vs Vaquer Vs Ruca Vs Legend", title: "Women's Money In The Bank", type: "Ladder Match" },
{ match: "Hardy Boys Vs Viking Raiders", title: "Smackdown Tag Team Championships", type: "Tag Team Match" },
{ match: "Tiffiany Stratton Vs Iyo Sky", title: "WWE Women's Championship", type: "Normal Match" },
{ match: "Kane Vs AJ Styles Vs CM Punk Vs Oba Femi", title: "World Heavyweight Championship", type: "Fatal 4-Way Match" },
{ match: "Becky Lynch Vs Naomi", title: "Women's World Championship", type: "Ladder Match" },
{ match: "Gargano Vs Rhodes Vs McIntyre Vs Hayes Vs Gable Vs Reed Vs Zayn", title: "RAW Money In The Bank", type: "Ladder Match" },
{ match: "Roman Reigns Vs Gunther", title: "WWE Championship", type: "Normal Match" },
]

const matchCard2027: Match[] = [
  { match: "Stratton Def. Parker and Belair and Vaquer and Bayley and Bella and Perez and Lee", title: "Women's MITB Briefcase", type: "Money In The Bank Ladder Match" },
  { match: "The Fiend Def. John Cena", title: "", type: "Last Man Standing Match" },
  { match: "Oba Femi Def. Dragon Lee (c)", title: "United States Championship", type: "Normal Match" },
  { match: "Sol Ruca (c) Def. Jordynne Grace", title: "Women's United States Championship", type: "Normal Match" },
  { match: "Rusev (c) Def. Carmelo Hayes", title: "Intercontinental Championship", type: "Normal Match" },
  { match: "Brock Lesnar Def. Bron Breakker", title: "", type: "Extreme Rules Match" },
  { match: "Charlotte Flair Def. Liv Morgan (c)", title: "Women's World Championship", type: "Normal Match" },
  { match: "Finn Balor (c) Def. AJ Styles", title: "World Heavyweight Championship", type: "Normal Match" },
  { match: "Black Def. McIntyre and Penta and Knight and Punk and Owens and Rhoades and Williams", title: "Men's MITB Briefcase", type: "Money In The Bank Ladder Match" },
  { match: "Alexa Bliss (c) Def. Rhea Ripley", title: "Women's Undisputed Championship", type: "Steel Cage Match" },
  { match: "Gunther (c) Def. Shawn Michaels", title: "WWE Champion Championship", type: "Normal Match" }
]

const matchCard2026: Match[] = [
  { match: "Raquel Roderiques Won Money in the Bank", title: "Women's Money in the Bank", type: "Money In The Bank Ladder Match"},
  { match: "Ilja Dragunov (c) Def. Aleister Black and Kevin Owens", title: "United States Championship", type: "Singles Match" },
  { match: "LA Knight (c) Def. Penta", title: "Intercontinental Championship", type: "Extreme Rules Match" },
  { match: "Auska (c) Def. Nia Jax", title: "Women's World Championship", type: "Singles Match" },
  { match: "Seth Rollins Won Money in the Bank", title: "Men's Money in the Bank", type: "Money In The Bank Ladder Match"},			
  { match: "CM Punk (c) Def. AJ Styles", title: "World Heavyweight Championship", type: "2 Out of 3 Falls Match" },
  { match: "Iyo Sky Def. Rhea Ripley (c)", title: "Women's Undisputed Championship", type: "Singles Match" },
  { match: "Mark Henry Def. John Cena (c)", title: "WWE Undisputed Championship", type: "Singles Match" }
];


const matchCard2025: Match[] = [
  { match: "Liv Morgan Def. Zoey Stark, Lyra Valkiria, Kelani Jordan, Iyo Sky and Sol Ruca", title: "Women's Money in the Bank", type: "Money In The Bank Ladder Match"},		
  { match:"Oba Femi Def. Sheamus (c)", title: "United States Championship", type: "Singles Match"},	
  { match:"Kairi Sane (c) Def. Rhea Ripley", title: "Women's World Championship", type: "Singles Match"}, 			
  { match:"Rhoades Def. Breakker, Kane, Page, Styles, Gunther, Mysterio and Dragunov", title: "Men's Money in the Bank", type: "Money In The Bank Ladder Match"},			
  { match:"Je'von Evans (c) Def. Andrade and Jacob Fatu", title: "Inter Championship", type: "Singles Match"},				
  { match:"Charlotte Flair Def. Roxanne Perez (c)", title: "Women's Undisputed Championship", type: "Singles Match"},			
  { match:"Randy Orton (c) Def. CM Punk", title: "Men's Undisputed Championship", type: "Singles Match"},			
  { match:"Drew McIntyre Def. Kevin Owens (c) and Seth Rollins", title: "WWE World Heavyweight Championship", type: "Triple Threat Match"},			

];

// ---------- Event Data ----------
const MITBEvents: PPVEvent[] = [
  {
    year: 2028,
    banner: "/Images/PPV/MITB/MITBHeader2028.webp",
    location: "Scottrade Centre, St Louis, Missouri",
    date: "Saturday 22nd July 2028",
    matches: matchCard2028,
    imageFolder: "MITB/2028MC",

    previousEvent: {
      label: "Clash In Paris 2028",
      link: "/ClashInParis#2028",
    },

    nextEvent: {
      label: "Summerslam 2028",
      link: "/Summerslam#2028",
    },
  },

  {
    year: 2027,
    banner: "/Images/PPV/MITB/MITBHeader2027.webp",
    location: "Intuit Dome, Los Angles, CA",
    date: "Saturday 10th July 2027",
    matches: matchCard2027,
    imageFolder: "MITB/2027MC",

    previousEvent: {
      label: "Clash In Paris 2027",
      link: "/ClashInParis#2027",
    },

    nextEvent: {
      label: "Summerslam 2027",
      link: "/Summerslam#2027",
    },
  },

  {
    year: 2026,
    banner: "/Images/PPV/MITB/MITBHeader2026.webp",
    location: "T-Mobile Arena, Las Vegas",
    date: "Saturday, July 18th 2026",
    matches: matchCard2026,
    imageFolder: "MITB/2026MC",

    previousEvent: {
      label: "Over The Limit 2026",
      link: "/OverTheLimit#2026",
    },

    nextEvent: {
      label: "Summerslam 2026",
      link: "/Summerslam#2026",
    },
  },

  {
    year: 2025,
    banner: "/Images/PPV/MITB/MITBHeader2025.webp",
    location: "Scotiabank Arena, Toronto, Canada",
    date: "Saturday, 21st June 2025",
    matches: matchCard2025,
    imageFolder: "MITB/2025MC",

    previousEvent: {
      label: "Backlash 2025",
      link: "/Backlash#2025",
    },

    nextEvent: {
      label: "One Night Stand 2025",
      link: "/ONS#2025",
    },
  },
];

export default function MITB() {
  return (
    <PPVShow
      events={MITBEvents}
      bannerAlt="MITB Banner"
    />
  );
}
