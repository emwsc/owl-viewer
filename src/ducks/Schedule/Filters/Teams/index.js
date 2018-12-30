import React from "react";
import Team from "./Team";
import { StyledTeams } from "./styled";

const Teams = ({ teams }) => {
  return (
    <StyledTeams>
      {teams.map(team => (
        <Team key={team.id} team={team} />
      ))}
    </StyledTeams>
  );
};

export default Teams;
