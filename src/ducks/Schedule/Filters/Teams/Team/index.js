import React from "react";
import { StyledTeam, StyledTeamLogo, StyledTeamTitle } from "./styled";

const Team = ({ team }) => {
  return (
    <StyledTeam borderColor={team.primaryColor}>
      <StyledTeamLogo logoUrl={team.logo} />
      <StyledTeamTitle>{team.name}</StyledTeamTitle>
    </StyledTeam>
  );
};

export default Team;
