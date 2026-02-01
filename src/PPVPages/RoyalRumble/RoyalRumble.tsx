import PPVShow, { Match, PPVEvent } from "../PPVShow";

// ---------- Match Cards ----------
const matchCard2027: Match[] = [
  { match: "30 Woman Royal Rumble Match", title: "Wrestlemania Main Event Title Match", type: "Royal Rumble Match" },
  { match: "Seth Rollins Vs Kevin Owens", title: "World Heavyweight Championship", type: "Normal Match" },
  { match: "Alexa Bliss Vs Nia Jax", title: "Women's World Championship", type: "Normal Match" },
  { match: "Roman Reigns Vs The Fiend", title: "WWE Undisputed Championship", type: "Extreme Rules Match" },
  { match: "30 Man Royal Rumble Match", title: "Wrestlemania Main Event Title Match", type: "Royal Rumble Match" },
];

const matchCard2026: Match[] = [
  { match: "30 Woman Royal Rumble Match - Jade Cargill Won", title: "Wrestlemania Championship Match", type: "Royal Rumble Match" },
  { match: "Shawn Spears Def. JD McDonugh(c) and Ilja Dragunov", title: "Intercontinental Championship", type: "Triple Threat Match" },
  { match: "Axiom(c) Def. Bron Breakker", title: "United States Championship", type: "Normal Match" },
  { match: "Stephanie Vaquer Def. Tiffany Stratton(c) and Nia Jax", title: "Women's Undisputed Championship", type: "Triple Threat Match" },
  { match: "Seth Rollins(c) Def. Rey Mysterio", title: "World Heavyweight Championship", type: "Normal Match" },
  { match: "Liv Morgan(c) Def. Rhea Ripley", title: "Women's World Championship", type: "Normal Match" },
  { match: "30 Man Royal Rumble Match - The Rock Won", title: "Wrestlemania Championship Match", type: "Royal Rumble Match" },
  { match: "Roman Reigns(c) Def. John Cena", title: "WWE Undisputed Championship", type: "Normal Match" },
];

// ---------- Event Data ----------
const RoyalRumbleEvents: PPVEvent[] = [
  {
    year: 2027,
    banner: "/Images/PPV/RoyalRumble/RoyalRumbleHeader2027.png",
    location: "Kingdom Arena, Riyadh, Saudi Arabia",
    date: "Saturday, January 30th 2026, 2pm ET / 11am PT",
    matches: matchCard2027,
    imageFolder: "RoyalRumble/2027MC",
  },
  {
    year: 2026,
    banner: "/Images/PPV/RoyalRumble/RoyalRumbleHeader2026.png",
    location: "Wembly Stadium, London, England",
    date: "Saturday, January 31st 2025, 2pm ET / 11am PT",
    matches: matchCard2026,
    imageFolder: "RoyalRumble/2026MC",
  },
];

export default function RoyalRumble() {
  return (
    <PPVShow
      events={RoyalRumbleEvents}
      bannerAlt="Royal Rumble Banner"
    />
  );
}
