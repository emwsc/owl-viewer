import React from "react";
import { timeConverter } from "../../../utils/dataUtils";
import { StyledMatchInfo } from "./styled";

const MatchInfo = props => {
  const { startDate, competitors, bracket } = props;
  const [teamOne, teamTwo] = competitors;

  return (
    <StyledMatchInfo>
      <div>{`${teamOne.name} vs ${teamTwo.name}`}</div>
      <div>
        {timeConverter(startDate).toLocaleDateString()} •{bracket}
      </div>
    </StyledMatchInfo>
  );
};

export default MatchInfo;
