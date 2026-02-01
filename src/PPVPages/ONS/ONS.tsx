import PPVShow, { Match, PPVEvent } from "../PPVShow";

// ---------- Match Cards ----------
const matchCard2025: Match[] = [
    { match: "CM Punk Def. Roman Reigns", title: "Number 1 Contendership", type: "Extreme Rules"},	
    { match: "Oba Femi (C) Def. Sheamus ", title: "US Title", type: "2 Out Of 3 Falls"},			
    { match: "Piper Niven (C) Def. Chelsea Green", title: "WIC Title", type: "Table Match"},		
    { match: "Fatal 5 way for the IC Title", title: "IC Title", type: "Ladder Match"},		
    { match: "#DIY (C) Def. New Bloodline", title: "RAW Tag Team Titles", type: "Steel Cage"},		
    { match: "Cody Rhodes Def. Jacob Fatu", title: "--", type: "Extreme Rules"},		
    { match: "Naomi Def. Kairi Sane (C)", title: "Women's World Title", type: "Extreme Rules"},		
    { match: "Drew McIntyre (C) Def. Kevin Owens and Seth Rollins", title: "World Heavyweight Title", type: "3-Way Elimination"},		
    { match: "Roxanne Perez Def. Charlotte Flair (C)", title: "Women's Undisputed Title", type: "Extreme Rules"},		
    { match: "Randy Orton (C) Def. Wade Barrett and Umaga", title: "WWE Undisputed Title", type: "3-Way Elimination"},		
  ];

// ---------- Event Data ----------
const ONSEvent: PPVEvent[] = [
  {
    year: 2025,
    banner: "/Images/PPV/ONS/ONSHeader.png",
    location: "Wells Fargo Center, Philadelphia, Pennsylvania",
    date: "Saturday, July 26th, 2025, 7e/5p",
    matches: matchCard2025,
    imageFolder: "ONS/2025MC",
  },
];

export default function ONS() {
  return (
    <PPVShow
      events={ONSEvent}
      bannerAlt="One Night Stand Banner"
    />
  );
}
