import React, { useState, useEffect } from "react";
import { getOwlTeams, getCachedOwlTeams, sortTeams } from "./utils";
import { StyledFilters } from "./styled";
import Seasons from "./Seasons";
import Teams from "./Teams";
import Stages from "./Stages";
import { StyledContentWrapper } from "../../../common/StyledContentWrapper";

const Filters = props => {
  const {
    firebase,
    selectedYear,
    selectedStage,
    selectedTeams,
    setSelectedTeams,
    setSelectedYear,
    setSelectedStage
  } = props;
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getCachedOwlTeams()
      .then(teams => {
        setTeams(teams.sort(sortTeams));
        if (!teams || teams.length === 0) return getOwlTeams(firebase);
        return null;
      })
      .then(teams => {
        if (teams) setTeams(teams);
      });
  }, []);

  return (
    <StyledFilters>
      <StyledContentWrapper>
        <Seasons
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
        <Stages
          selectedStage={selectedStage}
          setSelectedStage={setSelectedStage}
        />
        <Teams
          teams={teams}
          selectedTeams={selectedTeams}
          setSelectedTeams={setSelectedTeams}
        />
      </StyledContentWrapper>
    </StyledFilters>
  );
};

export default Filters;
