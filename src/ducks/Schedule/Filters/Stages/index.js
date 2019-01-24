import React from "react";
import { StyledStages } from "./styled";
import { StyledFilterItem } from "../styled";
import { defaultStages } from "../../../../utils/constants";

const Stages = React.memo(({ selectedStage, setSelectedStage }) => {
  return (
    <StyledStages>
      {defaultStages
        .filter(stage => !stage.isStagePlayoff)
        .map(stage => (
          <StyledFilterItem
            isSelected={stage.title === selectedStage}
            onClick={() => {
              setSelectedStage(stage.title);
            }}
            key={stage.title}
          >
            {stage.title}
          </StyledFilterItem>
        ))}
    </StyledStages>
  );
});

export default Stages;
