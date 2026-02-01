import { MatchTypeInfo } from "./MatchTypeInfo";
import "./MatchTypeTooltip.css";

type Props = {
  matchType: string;
};

function MatchTypeTooltip({ matchType }: Props) {
  const description = MatchTypeInfo[matchType];

  if (!description) return null;

  return (
    <span className="MatchTypeTooltip">
      <span className="InfoIcon">I</span>
      <span className="TooltipContent">
        <strong>{matchType}</strong>
        <br />
        {description}
      </span>
    </span>
  );
}

export default MatchTypeTooltip;
