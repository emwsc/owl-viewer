import React from 'react';
import Team from '../Team/index';
import StyledFilterTitle from '../../common/FilterTitle';

const TeamList = React.memo(({ selectedTeamId, competitors, handleTeamSelect }) => (
  <React.Fragment>
    <StyledFilterTitle>Team filter</StyledFilterTitle>
    {competitors.map(competitor => (
      <Team
        key={competitor.id}
        selectedTeamId={selectedTeamId}
        handleTeamSelect={handleTeamSelect}
        competitor={competitor}
      />
    ))}
  </React.Fragment>
));


export default TeamList;
