import React, { useState, useEffect } from 'react';
import { TeamListWrapper } from './styling'
import TeamList from '../TeamList/index'
import GamesList from '../GamesList/index'
import { ContentWrapper } from '../../common/ContentWrapper'
import { StagesWrapper } from '../../common/StagesWrapper'
import { SpecialStagesFilter } from '../SpecialStagesFilter/index';

import { getOwlTeams } from '../../utils/dataUtils';
import { defaultStages } from '../../utils/constants'

const ScheduleByTeam = React.memo(function ScheduleByTeam(props) {

    const { firebase, handleUpdateSearchWindow, setSearchWindowVisible, setSearchWindowText, setSelectedVideos } = props;

    const [competitors, setCompetitors] = useState([]);
    const [selectedTeamId, setSelectedTeam] = useState(null);
    const [visibleStages, setVisibleStages] = useState([...defaultStages]);

    useEffect(() => {
        getOwlTeams(firebase).then(setCompetitors);
    }, []);

    function handleChangeStagesVisibility(stageTitle) {
        let newVisibleStages = visibleStages.map(stage => { return { ...stage } });
        let selectedStage = newVisibleStages.find(stage => stage.title === stageTitle);
        selectedStage.isVisible = !selectedStage.isVisible;
        setVisibleStages(newVisibleStages);
    }

    function handleTeamSelect(teamid) {
        setSelectedTeam(teamid);
        setVisibleStages([...defaultStages]);
        setSearchWindowVisible(false);
        setSearchWindowText('params.text');
        setSelectedVideos(null);
    }

    let selectedTeam = competitors.find(competitor => competitor.id === selectedTeamId);

    return (
        <React.Fragment>
            <TeamListWrapper>
                <TeamList
                    selectedTeamId={selectedTeamId}
                    competitors={competitors}
                    handleTeamSelect={handleTeamSelect}
                />
            </TeamListWrapper>
            <ContentWrapper>
                {selectedTeamId &&
                    <GamesList
                        firebase={firebase}
                        visibleStages={visibleStages}
                        teamid={selectedTeamId}
                        updateSearchWindow={handleUpdateSearchWindow}
                    />}
            </ContentWrapper>
            <StagesWrapper>
                <SpecialStagesFilter
                    primaryColor={selectedTeam && selectedTeam.primaryColor}
                    changeStagesVisibility={handleChangeStagesVisibility}
                    stages={visibleStages.filter(stage => stage.allowedToFilter)}
                />
            </StagesWrapper>
        </React.Fragment>
    )
})

export { ScheduleByTeam }