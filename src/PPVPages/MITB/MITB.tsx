import PPVShow, { Match, PPVEvent } from "../PPVShow";

// ---------- Match Cards ----------
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

// ---------- Event Data ----------
const MITBEvents: PPVEvent[] = [
  {
    year: 2026,
    banner: "/Images/PPV/MITB/MITBHeaderV2.png",
    location: "T-Mobile Arena, Las Vegas",
    date: "Saturday, July 18th 2026",
    matches: matchCard2026,
    imageFolder: "MITB/2026MC",
  },
  {
    year: 2025,
    banner: "/Images/PPV/MITB/MITBHeader.png",
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
