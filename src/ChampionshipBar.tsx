import React, { useRef } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Roster.css"; // Ensure the CSS file is correctly linked

const championships = [
    { id: 1, image: "/Images/Championships/UndisputedWWE.png", alt: "WWE Undisputed Championship", link: "/WWEUndisputedChamp" },
    { id: 2, image: "/Images/Championships/WomenUndisputed.png", alt: "Women's Undisputed Championship", link: "/WomenUndisputedChamp" },
    { id: 3, image: "/Images/Championships/WorldHeavyweight.png", alt: "World Heavyweight Championship", link: "/WorldHeavyweightChamp" },
    { id: 4, image: "/Images/Championships/WomenWorld.png", alt: "Women's World Championship", link: "/WomenWorldChamp" },
    { id: 5, image: "/Images/Championships/Intercontinental.png", alt: "Intercontinental Championship", link: "/IntercontinentalChamp" },
    { id: 6, image: "/Images/Championships/UnitedStates.png", alt: "United States Championship", link: "/UnitedStatesChamp" },
    { id: 5, image: "/Images/Championships/WomenIC.png", alt: "Women's Intercontinental Championship", link: "/WomenIntercontinentalChamp" },
    { id: 6, image: "/Images/Championships/WomenUS.png", alt: "Women's United States Championship", link: "/WomenUnitedStatesChamp" },
    { id: 7, image: "/Images/Championships/RawTag.png", alt: "Raw Tag Team Championships", link: "/RawTagTeamChamps" },
    { id: 8, image: "/Images/Championships/SDTag.png", alt: "Smackdown Tag Team Championships", link: "/SmackdownTagTeamChamps" },
    { id: 9, image: "/Images/Championships/MenMITB.png", alt: "Men's Money In The Bank", link: "/MMITB" },
    { id: 10, image: "/Images/Championships/WomenMITB.png", alt: "Women's Money In The Bank", link: "/WMITB" }
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
      <button className="scroll-button left" onClick={() => scroll(-800)}>
        &#9664;
      </button>
      <div className="championship-bar" ref={scrollRef}>
        {championships.map((champ) => (
          <Link key={champ.id} to={champ.link}>
            <img src={champ.image} alt={champ.alt} className="championship-image" />
          </Link>
        ))}
      </div>
      <button className="scroll-button right" onClick={() => scroll(800)}>
        &#9654;
      </button>
    </div>
  );
};

export default ChampionshipBar;
