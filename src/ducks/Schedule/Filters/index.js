import React, { useState, useEffect } from "react";
import { getOwlTeams } from "./utils";
import { StyledFilters } from "./styled";
import Seasons from "./Seasons";
import Teams from "./Teams";
import { StyledContentWrapper } from "../../../common/StyledContentWrapper";

const Filters = ({ firebase }) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getOwlTeams(firebase).then(setTeams);
  }, []);

  return (
    <StyledFilters>
      <StyledContentWrapper>
        <Seasons />
        <Teams teams={teams} />
      </StyledContentWrapper>
    </StyledFilters>
  );
};

export default Filters;
