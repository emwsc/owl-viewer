import React from "react";
import { StyledTeam, StyledTeamLogo, StyledTeamTitle } from "./styled";

const Team = React.memo(({ team, isSelected, onTeamClick }) => {
  return (
    <StyledTeam onClick={() => onTeamClick(team.id)}>
      <StyledTeamLogo logoUrl={team.logo} />
      <StyledTeamTitle
        isSelected={isSelected}
        primaryColor={team.primaryColor}
        secondaryColor={team.secondaryColor}
      >
        {team.name}
      </StyledTeamTitle>
    </StyledTeam>
  );
});

export default Team;
