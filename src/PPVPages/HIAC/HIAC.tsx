import PPVShow, { Match, PPVEvent } from "../PPVShow";

// ---------- Match Cards ----------

const matchCard2026: Match[] = [
  { match: "Raquel Rodrigues Vs Charlotte Flair", title: "Women's Undisputed Championship", type: "Hell In A Cell Match" },
  { match: "Sheamus Vs Gunther", title: "United States Championship", type: "Normal Match" },
  { match: "Nikki Bella Vs Stephanie Vaquer", title: "Women's United States Championship", type: "Normal Match" },
  { match: "MCMG Vs New Day", title: "SD Tag Team Championships", type: "Tag Team Match" },
  { match: "Penta Vs Oba Femi", title: "Intercontinental Championship", type: "Normal Match" },
  { match: "Randy Orton Vs CM Punk", title: "World Heavyweight Championship", type: "Hell In A Cell Match" },
  { match: "Kairi Sane Vs Dakota Kai Vs Alexa Bliss", title: "Women's World Championship", type: "Triple Threat Match" },
  { match: "Roman Reigns Vs Mark Henry", title: "WWE Undisputed Championship", type: "Hell In A Cell Match" }
];


// ---------- Event Data ----------
const HIACEvents: PPVEvent[] = [
  {
    year: 2026,
    banner: "/Images/PPV/HIAC/HIACHeader2026.png",
    location: "Wells Fargo Center, Philadelphia, PA",
    date: "Saturday, October 24th 2026, 7e/5p",
    matches: matchCard2026,
    imageFolder: "HIAC/2026MC",
  },
];

export default function HIAC() {
  return (
    <PPVShow
      events={HIACEvents}
      bannerAlt="Hell In A Cell Banner"
    />
  );
}
