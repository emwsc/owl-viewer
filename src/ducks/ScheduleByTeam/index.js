import React, { useState, useEffect } from 'react';
import { StyledTeamListWrapper } from './styling';
import TeamList from '../TeamList/index';
import GamesList from '../GamesList/index';
import StyledContentWrapper from '../../common/ContentWrapper';
import StyledStagesWrapper from '../../common/StagesWrapper';
import { SpecialStagesFilter } from '../SpecialStagesFilter/index';

import { getOwlTeams } from '../../utils/dataUtils';
import { defaultStages } from '../../utils/constants';

const ScheduleByTeam = React.memo((props) => {
  const {
    firebase,
    handleUpdateSearchWindow,
    setSearchWindowVisible,
    setSearchWindowText,
    setSelectedVideos,
  } = props;

  const [competitors, setCompetitors] = useState([]);
  const [selectedTeamId, setSelectedTeam] = useState(null);
  const [visibleStages, setVisibleStages] = useState([...defaultStages]);

  useEffect(() => {
    getOwlTeams(firebase).then(setCompetitors);
  }, []);

  function handleChangeStagesVisibility(stageTitle) {
    const newVisibleStages = visibleStages.map(stage => ({ ...stage }));
    const selectedStage = newVisibleStages.find(stage => stage.title === stageTitle);
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

  const selectedTeam = competitors.find(competitor => competitor.id === selectedTeamId);

  return (
    <React.Fragment>
      <StyledTeamListWrapper>
        <TeamList
          selectedTeamId={selectedTeamId}
          competitors={competitors}
          handleTeamSelect={handleTeamSelect}
        />
      </StyledTeamListWrapper>
      <StyledContentWrapper>
        {selectedTeamId
          && (
            <GamesList
              firebase={firebase}
              visibleStages={visibleStages}
              teamid={selectedTeamId}
              updateSearchWindow={handleUpdateSearchWindow}
            />
          )}
      </StyledContentWrapper>
      <StyledStagesWrapper>
        <SpecialStagesFilter
          primaryColor={selectedTeam && selectedTeam.primaryColor}
          changeStagesVisibility={handleChangeStagesVisibility}
          stages={visibleStages.filter(stage => stage.allowedToFilter)}
        />
      </StyledStagesWrapper>
    </React.Fragment>
  );
});

export { ScheduleByTeam };
