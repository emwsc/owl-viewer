import React from 'react';
import Team from './Team'
import { FilterTitle } from '../theme/globalStyle'

const TeamList = React.memo(function TeamList({ selectedTeamId, competitors, handleTeamSelect }) {
    return (
        <React.Fragment>
            <FilterTitle>Team filter</FilterTitle>
            {competitors.map(competitor => <Team key={competitor.id} selectedTeamId={selectedTeamId} handleTeamSelect={handleTeamSelect} competitor={competitor} />)}
        </React.Fragment>
    )
})


export default TeamList;