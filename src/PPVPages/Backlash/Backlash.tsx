import PPVShow, { Match, PPVEvent } from "../PPVShow";

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

// ---------- Event Data ----------
const BacklashEvents: PPVEvent[] = [
  {
    year: 2026,
    banner: "/Images/PPV/Backlash/BacklashHeaderV2.png",
    location: "Gainbridge Fieldhouse, Indianapolis, Indiana",
    date: "Saturday, May 23rd, 2026",
    matches: matchCard2026,
    imageFolder: "Backlash/2026MC",
  },
  {
    year: 2025,
    banner: "/Images/PPV/Backlash/BacklashHeader.png",
    location: "Allstate Arena, Rosemont, Illinois",
    date: "Saturday, May 24th, 2025",
    matches: matchCard2025,
    imageFolder: "Backlash/2025MC",
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
