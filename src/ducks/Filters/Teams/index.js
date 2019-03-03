import React, { useState, useEffect } from "react";
import Team from "./Team";
import { StyledTeams } from "./styled";
import { getOwlTeams, getCachedOwlTeams, sortTeams } from "./utils";

const Teams = React.memo(({ selectedTeams, setSelectedTeams }) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getCachedOwlTeams()
      .then(teams => {
        setTeams(teams.sort(sortTeams));
        if (!teams || teams.length === 0) return getOwlTeams();
        return null;
      })
      .then(teams => {
        if (teams) setTeams(teams);
      });
  }, []);

  function onTeamClick(teamId) {
    const array = [...selectedTeams];
    const index = selectedTeams.indexOf(teamId);
    if (index && index === -1) array.push(teamId);
    else array.splice(index, 1);
    setSelectedTeams(array);
  }

  return (
    <StyledTeams>
      {teams.map(team => (
        <Team
          key={team.id}
          team={team}
          isSelected={selectedTeams.some(id => id === team.id)}
          onTeamClick={onTeamClick}
        />
      ))}
    </StyledTeams>
  );
});

export default Teams;
