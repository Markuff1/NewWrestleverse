import WeeklyShowPage, { WeeklyShowItem } from "./WeeklyShow";

const tagTeams: WeeklyShowItem[] = [
  { src: "/Images/Roster/TagTeam/AlphaAcadamy.webp", name: "Alpha Acadamy" },
  { src: "/Images/Roster/TagTeam/Angel&Berto.webp", name: "Angel & Berto" },
  { src: "/Images/Roster/TagTeam/AOP.webp", name: "AOP" },
  { src: "/Images/Roster/TagTeam/DudleyBoys.webp", name: "Dudley Boys" },
  { src: "/Images/Roster/TagTeam/JudgementDay.webp", name: "Judgement Day" },
  { src: "/Images/Roster/TagTeam/LWO.webp", name: "LWO" },
  { src: "/Images/Roster/TagTeam/NewBloodline.webp", name: "New Bloodline" },
  { src: "/Images/Roster/TagTeam/StreetProfits.webp", name: "Street Profits" },
  { src: "/Images/Roster/TagTeam/VikingRaiders.webp", name: "Viking Raiders" },
  { src: "/Images/Roster/TagTeam/WyattSix.webp", name: "Wyatt Six" },
];

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
      tagTeams={tagTeams}
      gmEntries={gmEntries}
    />
  );
}
