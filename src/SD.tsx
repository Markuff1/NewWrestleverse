import WeeklyShowPage, { WeeklyShowItem } from "./WeeklyShow";

const tagTeams: WeeklyShowItem[] = [];

const gmEntries: WeeklyShowItem[] = [
  { src: "/Images/Roster/BookerT.webp", name: "Booker T", gender: "Man" },
];

export default function SD() {
  return (
    <WeeklyShowPage
      tag="SD"
      classPrefix="SD"
      bannerSrc="/Images/SDHeader.webp"
      bannerAlt="SD Header"
      title="Friday Night Smackdown"
      description="WWE’s blue brand delivers high-energy action, intense rivalries, and unforgettable moments every week."
      schedule="Every Friday Night"
      tagTeams={tagTeams}
      gmEntries={gmEntries}
    />
  );
}
