import React from 'react';

import { TeamSection, TeamTitle, TeamLogo } from './styling';

const Team = React.memo(({ competitor, handleTeamSelect, selectedTeamId }) => {
  function onTeamSectionClick() {
    handleTeamSelect(competitor.id);
  }

  return (
    <TeamSection onClick={onTeamSectionClick} borderColor={competitor.secondaryColor}>
      <TeamLogo logoUrl={competitor.logo} />
      <TeamTitle
        isSelected={selectedTeamId === competitor.id}
        primaryColor={competitor.primaryColor}
      >
        {competitor.name}
      </TeamTitle>
    </TeamSection>
  );
});

export default Team;
