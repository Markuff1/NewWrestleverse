import PPVShow, { Match, PPVEvent } from "../PPVShow";

// ---------- Match Card ----------
const WM2027Matches: Match[] = [
  // ---------- Night 1 ----------
  {
    night: 1,
    match: "Mark Henry Vs Oba Femi",
    title: "",
    type: "Normal Match",
  },
  {
    night: 1,
    match: "Shayna Baszler Vs Naomi Vs Sol Ruca Vs Bianca Belair",
    title: "Women's Intercontinental Championship",
    type: "Fatal 4-Way Match",
  },
  {
    night: 1,
    match: "Gunther Vs CM Punk",
    title: "",
    type: "2 Out of 3 Falls Match",
  },
  {
    night: 1,
    match: "New Day Vs Usos",
    title: "Smackdown Tag Team Championship",
    type: "Tag Team Match",
  },
  {
    night: 1,
    match: "Bronson Reed Vs Dragon Lee Vs Sheamus Vs Ilja Dragunov",
    title: "United States Championship",
    type: "Fatal 4-Way Match",
  },
  {
    night: 1,
    match: "Undertaker Vs Randy Orton",
    title: "",
    type: "No Holds Barred Match",
  },
  {
    night: 1,
    match: "Raquel Rodriguez Vs Liv Morgan",
    title: "WWE Women's Championship",
    type: "Normal Match",
  },
  {
    night: 1,
    match: "Seth Rollins Vs Rey Mysterio",
    title: "World Heavyweight Championship",
    type: "Normal Match",
  },

  // ---------- Night 2 ----------
  {
    night: 2,
    match:
      "Penta Vs Jevon Evans Vs RVD Vs Cody Rhodes Vs Carmelo Hayes Vs Drew McIntyre",
    title: "Intercontinental Championship",
    type: "Ladder Match",
  },
  {
    night: 2,
    match: "Nikki Bella Vs Dakota Kai",
    title: "Women's United States Championship",
    type: "Steel Cage Match",
  },
  {
    night: 2,
    match: "John Cena Vs The Fiend",
    title: "",
    type: "Normal Match",
  },
  {
    night: 2,
    match: "Dudley Boys Vs Street Profits",
    title: "RAW Tag Team Championship",
    type: "Tag Team Match",
  },
  {
    night: 2,
    match: "LA Knight Vs Wade Barrett",
    title: "",
    type: "Extreme Rules Match",
  },
  {
    night: 2,
    match: "Alexa Bliss Vs Roxanne Perez",
    title: "Women's World Championship",
    type: "Normal Match",
  },
  {
    night: 2,
    match: "Roman Reigns Vs Shawn Michaels",
    title: "WWE Championship",
    type: "Extreme Rules Match",
  },
];

// ---------- Event ----------
const WMEvents: PPVEvent[] = [
  {
    year: 2027,
    banner: "Images/PPV/Wrestlemania/WrestlemaniaHeader2027.png",
    location: "Allegiant Stadium, Las Vegas, Nevada",
    date: "April 10–11, 2027",
    matches: WM2027Matches,
    imageFolder: "Wrestlemania/2027MC"
  },
];

export default function WrestleMania() {
  return (
    <PPVShow
      events={WMEvents}
      bannerAlt="WrestleMania Banner"
    />
  );
}
