import PPVShow, { Match, PPVEvent } from "../../PPVShow";

// ---------- Match Cards ----------//
const matchCard2028: Match[] = [
{ match: "Finn Balor Wins Smackdown Money In The Bank", title: "Smackdown Money In The Bank", type: "Money In The Bank Ladder Match",
  winner: "Finn Balor",
  participants: ["Bron Breakker", "Finn Balor", "Jacob Fatu", "Kevin Owens", "Randy Orton", "Seth Rollins", "Je'von Evans", "Ricky Saints"] },
{ match: "Lyra Valkyria (c) Def. Jacy Jayne", title: "Women's Intercontinental Championship", type: "Normal Match" },
{ match: "Ilja Dragunov Def. LA Knight (c)", title: "United States Championship", type: "Normal Match" },
{ match: "Roxanne Perez (c) Def. Blake Monroe and Raquel Rodriques", title: "Women's United States Championship", type: "Triple Threat Match" },
{ match: "Perros Del Mal (c) Def. MCMG", title: "Raw Tag Team Championships", type: "Tag Team Match" },
{ match: "Dominik Mysterio Def. Tyler Bate (c)", title: "Intercontinetal Championship", type: "Normal Match" },
{ match: "Jordynne Grace Wins Women's Money In The Bank", title: "Women's Money In The Bank", type: "Money In The Bank Ladder Match",
  winner: "Jordynne Grace",
  participants: ["Bianca Belair", "Nikki Bella", "Lola Vice", "Jordynne Grace", "Giulia", "Stephanie Vaquer", "Sol Ruca", "Lash Legend"] },
{ match: "Hardy Boys (c) Def. Viking Raiders", title: "Smackdown Tag Team Championships", type: "Tag Team Match" },
{ match: "Tiffiany Stratton (c) Def. Iyo Sky", title: "WWE Women's Championship", type: "Normal Match" },
{ match: "CM Punk Def. Kane (c) and AJ Styles and Oba Femi", title: "World Heavyweight Championship", type: "Fatal 4-Way Match" },
{ match: "Becky Lynch (c) Def. Naomi", title: "Women's World Championship", type: "Ladder Match" },
{ match: "Johnny Gargano Wins RAW Money In The Bank", title: "RAW Money In The Bank", type: "Money In The Bank Ladder Match",
  winner: "Johnny Gargano",
  participants: ["Johnny Gargano", "Cody Rhodes", "Drew Mcintyre", "Carmelo Hayes", "Chad Gable", "Bronson Reed", "Sami Zayn", "Axiom"] },
{ match: "Roman Reigns Def. Gunther", title: "WWE Championship", type: "Normal Match" },
]

const matchCard2027: Match[] = [
  { match: "Tiffany Stratton Wins Women's Money In The Bank", title: "Women's MITB Briefcase", type: "Money In The Bank Ladder Match",
    winner: "Tiffany Stratton",
    participants: ["Tiffany Stratton", "Jaida Parker", "Bianca Belair", "Stephanie Vaquer", "Bayley", "Nikki Bella", "Roxanne Perez", "AJ Lee"] },
  { match: "The Fiend Def. John Cena", title: "", type: "Last Man Standing Match" },
  { match: "Oba Femi Def. Dragon Lee (c)", title: "United States Championship", type: "Normal Match" },
  { match: "Sol Ruca (c) Def. Jordynne Grace", title: "Women's United States Championship", type: "Normal Match" },
  { match: "Rusev (c) Def. Carmelo Hayes", title: "Intercontinental Championship", type: "Normal Match" },
  { match: "Brock Lesnar Def. Bron Breakker", title: "", type: "Extreme Rules Match" },
  { match: "Charlotte Flair Def. Liv Morgan (c)", title: "Women's World Championship", type: "Normal Match" },
  { match: "Finn Balor (c) Def. AJ Styles", title: "World Heavyweight Championship", type: "Normal Match" },
  { match: "Aleister Black Wins Men's Money In The Bank", title: "Men's MITB Briefcase", type: "Money In The Bank Ladder Match",
    winner: "Aleister Black",
    participants: ["Aleister Black", "Drew Mcintyre", "Penta", "LA Knight", "CM Punk", "Kevin Owens", "Cody Rhodes", "Trick Williams"] },
  { match: "Alexa Bliss (c) Def. Rhea Ripley", title: "Women's Undisputed Championship", type: "Steel Cage Match" },
  { match: "Gunther (c) Def. Shawn Michaels", title: "WWE Champion Championship", type: "Normal Match" }
]

const matchCard2026: Match[] = [
  { match: "Raquel Rodriguez Wins Women's Money In The Bank", title: "Women's Money in the Bank", type: "Money In The Bank Ladder Match",
    winner: "Raquel Rodriguez",
    participants: ["Chelsea Green", "Raquel Rodriguez", "Lyra Valkyria", "Alexa Bliss", "Giulia", "Dakota Kai"] },
  { match: "Ilja Dragunov (c) Def. Aleister Black and Kevin Owens", title: "United States Championship", type: "Singles Match" },
  { match: "LA Knight (c) Def. Penta", title: "Intercontinental Championship", type: "Extreme Rules Match" },
  { match: "Auska (c) Def. Nia Jax", title: "Women's World Championship", type: "Singles Match" },
  { match: "Seth Rollins Wins Men's Money In The Bank", title: "Men's Money in the Bank", type: "Money In The Bank Ladder Match",
    winner: "Seth Rollins",
    participants: ["Drew Mcintyre", "Rob Van Dam", "Jacob Fatu", "Chad Gable", "Sami Zayn", "Seth Rollins"] },			
  { match: "CM Punk (c) Def. AJ Styles", title: "World Heavyweight Championship", type: "2 Out of 3 Falls Match" },
  { match: "Iyo Sky Def. Rhea Ripley (c)", title: "Women's Undisputed Championship", type: "Singles Match" },
  { match: "Mark Henry Def. John Cena (c)", title: "WWE Undisputed Championship", type: "Singles Match" }
];


const matchCard2025: Match[] = [
  { match: "Liv Morgan Wins Women's Money In The Bank", title: "Women's Money in the Bank", type: "Money In The Bank Ladder Match",
    winner: "Liv Morgan",
    participants: ["Liv Morgan", "Zoey Stark", "Lyra Valkyria", "Kelani Jordan", "Iyo Sky", "Sol Ruca"] },		
  { match:"Oba Femi Def. Sheamus (c)", title: "United States Championship", type: "Singles Match"},	
  { match:"Kairi Sane (c) Def. Rhea Ripley", title: "Women's World Championship", type: "Singles Match"}, 			
  { match: "Cody Rhodes Wins Men's Money In The Bank", title: "Men's Money in the Bank", type: "Money In The Bank Ladder Match",
    winner: "Cody Rhodes",
    participants: ["Cody Rhodes", "Bron Breakker", "Kane", "Ethan Page", "AJ Styles", "Gunther", "Rey Mysterio", "Ilja Dragunov"] },			
  { match:"Je'von Evans (c) Def. Andrade and Jacob Fatu", title: "Inter Championship", type: "Singles Match"},				
  { match:"Charlotte Flair Def. Roxanne Perez (c)", title: "Women's Undisputed Championship", type: "Singles Match"},			
  { match:"Randy Orton (c) Def. CM Punk", title: "Men's Undisputed Championship", type: "Singles Match"},			
  { match:"Drew McIntyre Def. Kevin Owens (c) and Seth Rollins", title: "WWE World Heavyweight Championship", type: "Triple Threat Match"},			

];

// ---------- Event Data ----------
export const MITBEvents: PPVEvent[] = [
  {
    year: 2028,
    banner: "/Images/PPV/MITB/MITBHeader2028.webp",
    location: "Scottrade Centre, St Louis, Missouri",
    date: "Saturday 22nd July 2028",
    matches: matchCard2028,
    imageFolder: "MITB/2028MC",
  },

  {
    year: 2027,
    banner: "/Images/PPV/MITB/MITBHeader2027.webp",
    location: "Intuit Dome, Los Angles, CA",
    date: "Saturday 10th July 2027",
    matches: matchCard2027,
    imageFolder: "MITB/2027MC",
  },

  {
    year: 2026,
    banner: "/Images/PPV/MITB/MITBHeader2026.webp",
    location: "T-Mobile Arena, Las Vegas",
    date: "Saturday, July 18th 2026",
    matches: matchCard2026,
    imageFolder: "MITB/2026MC",
  },

  {
    year: 2025,
    banner: "/Images/PPV/MITB/MITBHeader2025.webp",
    location: "Scotiabank Arena, Toronto, Canada",
    date: "Saturday, 21st June 2025",
    matches: matchCard2025,
    imageFolder: "MITB/2025MC",
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
