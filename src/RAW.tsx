import WeeklyShowPage, { WeeklyShowItem } from "./WeeklyShow";

const gmEntries: WeeklyShowItem[] = [
  { src: "/Images/Roster/JBL.webp", name: "Wade Barrett", gender: "Man" },
];

export default function RAW() {
  return (
    <WeeklyShowPage
      tag="R"
      classPrefix="RAW"
      bannerSrc="/Images/RAWHeader.webp"
      bannerAlt="RAW Header"
      title="Monday Night RAW"
      description="Monday Night’s flagship WWE show delivers top superstars, thrilling matches, and exciting storylines every week."
      schedule="Every Monday Night"
      gmEntries={gmEntries}
    />
  );
}
