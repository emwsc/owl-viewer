import React from "react";
import { StyledScheduleTitle, StyledStage } from "./styled";
import { Week } from "./Week/index";
import { checkIsPlayoffStage } from "./utils";

const Stage = React.memo(({ stage, selectedTeams }) => {
  const isPlayoffStage = checkIsPlayoffStage(stage.name);
  return (
    <StyledStage>
      <StyledScheduleTitle>{stage.name}</StyledScheduleTitle>
      {stage.weeks.map(week => (
        <Week
          key={week.id}
          week={week}
          isPlayoffStage={isPlayoffStage}
          selectedTeams={selectedTeams}
        />
      ))}
    </StyledStage>
  );
});

export { Stage };
