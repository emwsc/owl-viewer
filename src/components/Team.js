import React from 'react';

import { TeamSection, TeamTitle, TeamLogo } from '../theme/teamStyle'

const Team = React.memo(function Team({ competitor, handleTeamSelect, selectedTeamId }) {

    function onTeamSectionClick() {
        handleTeamSelect(competitor.id)
    }

    return (
        <TeamSection whiteBackground onClick={onTeamSectionClick} borderColor={competitor.secondaryColor}>
            <TeamLogo hasMargin logoUrl={competitor.logo} />
            <TeamTitle isSelected={selectedTeamId === competitor.id} primaryColor={competitor.primaryColor}>{competitor.name}</TeamTitle>
        </TeamSection>
    )
})

export default Team;