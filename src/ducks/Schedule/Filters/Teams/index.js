import React from 'react';
import Team from './Team';
import { StyledTeams } from './styled';

const Teams = React.memo(({ teams, selectedTeams, setSelectedTeams }) => {
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
