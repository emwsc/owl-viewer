import React from "react";
import { StyledFilters } from "./styled";
import Seasons from "./Seasons";
import Teams from "./Teams";
import Stages from "./Stages";
import { StyledContentWrapper } from "../../common/StyledContentWrapper";

const Filters = props => {
  const {
    selectedYear,
    selectedStage,
    selectedTeams,
    setSelectedTeams,
    setSelectedYear,
    setSelectedStage
  } = props;

  return (
    <StyledFilters>
      <StyledContentWrapper>
        {setSelectedYear && (
          <Seasons
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
          />
        )}
        {setSelectedStage && (
          <Stages
            selectedStage={selectedStage}
            setSelectedStage={setSelectedStage}
          />
        )}
        <Teams
          selectedTeams={selectedTeams}
          setSelectedTeams={setSelectedTeams}
        />
      </StyledContentWrapper>
    </StyledFilters>
  );
};

export default Filters;
