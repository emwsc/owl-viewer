import React from "react";
import { StyledTeamContainer } from "../styled";
import { StyledTeamLogo, StyledTeamName, StyledWidth } from "./styled";

const Teams = ({ game, teamOneProps, teamTwoProps }) => (
  <StyledWidth width="180px">
    <StyledTeamContainer {...teamOneProps}>
      <StyledTeamLogo logoUrl={game.competitors[0].logo} />
      <StyledTeamName {...teamOneProps}>
        {game.competitors[0].name}
      </StyledTeamName>
    </StyledTeamContainer>
    <StyledTeamContainer {...teamTwoProps}>
      <StyledTeamLogo logoUrl={game.competitors[1].logo} />
      <StyledTeamName {...teamTwoProps}>
        {game.competitors[1].name}
      </StyledTeamName>
    </StyledTeamContainer>
  </StyledWidth>
);

export default Teams;
