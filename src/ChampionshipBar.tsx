import React, { useRef } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Roster.css"; // Ensure the CSS file is correctly linked

const championships = [
    { image: "/Images/ChampionshipGraphics/Undisputed.webp", alt: "WWE Undisputed Championship", link: "/WWEUndisputedChamp" },
    { image: "/Images/ChampionshipGraphics/WomenUndisputed.webp", alt: "Women's Undisputed Championship", link: "/WomenUndisputedChamp" },
    { image: "/Images/ChampionshipGraphics/WorldHeavyweight.webp", alt: "World Heavyweight Championship", link: "/WorldHeavyweightChamp" },
    { image: "/Images/ChampionshipGraphics/WomenWorld.webp", alt: "Women's World Championship", link: "/WomenWorldChamp" },
    { image: "/Images/ChampionshipGraphics/IC.webp", alt: "Intercontinental Championship", link: "/IntercontinentalChamp" },
    { image: "/Images/ChampionshipGraphics/US.webp", alt: "United States Championship", link: "/UnitedStatesChamp" },
    { image: "/Images/ChampionshipGraphics/WomenIC.webp", alt: "Women's Intercontinental Championship", link: "/WomenIntercontinentalChamp" },
    { image: "/Images/ChampionshipGraphics/WomenUS.webp", alt: "Women's United States Championship", link: "/WomenUnitedStatesChamp" },
    { image: "/Images/ChampionshipGraphics/RAWTT.webp", alt: "Raw Tag Team Championships", link: "/RawTagTeamChamps" },
    { image: "/Images/ChampionshipGraphics/SDTT.webp", alt: "Smackdown Tag Team Championships", link: "/SmackdownTagTeamChamps" },
    { image: "/Images/Championships/RawMenMITB.webp", alt: "Men's RAW Money In The Bank", link: "/RawMMITB" },
    { image: "/Images/Championships/SDMenMITB.webp", alt: "Men's Smackdown Money In The Bank", link: "/SmackdownMMITB" },
    { image: "/Images/Championships/WomenMITB.webp", alt: "Women's Money In The Bank", link: "/WMITB" },
    // Retired — kept at the end of the bar for the historical record.
    { image: "/Images/Championships/MenMITB.webp", alt: "Men's Money In The Bank (Retired)", link: "/MMITB" }
];

const ChampionshipBar: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (scrollOffset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div className="championship-bar-container">
      <button className="scroll-button left" onClick={() => scroll(-750)}>
        &#9664;
      </button>
      <div className="championship-bar" ref={scrollRef}>
        {championships.map((champ) => (
          <Link key={champ.link} to={champ.link}>
            <img src={champ.image} alt={champ.alt} className="championship-image" />
          </Link>
        ))}
      </div>
      <button className="scroll-button right" onClick={() => scroll(750)}>
        &#9654;
      </button>
    </div>
  );
};

export default ChampionshipBar;
