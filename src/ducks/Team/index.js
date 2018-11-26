import React from 'react';

import { StyledTeamSection, StyledTeamTitle, StyledTeamLogo } from './styling';

const StyledTeam = React.memo(({ competitor, handleTeamSelect, selectedTeamId }) => {
  function onTeamSectionClick() {
    handleTeamSelect(competitor.id);
  }

  return (
    <StyledTeamSection onClick={onTeamSectionClick} borderColor={competitor.secondaryColor}>
      <StyledTeamLogo logoUrl={competitor.logo} />
      <StyledTeamTitle
        isSelected={selectedTeamId === competitor.id}
        primaryColor={competitor.primaryColor}
      >
        {competitor.name}
      </StyledTeamTitle>
    </StyledTeamSection>
  );
});

export default StyledTeam;
