import React, { useState, useEffect } from 'react';
import { StyledTeamListWrapper, StyledContentWrapper } from './styling';
import TeamList from './TeamList/index';
import GamesList from '../GamesList/index';
import StyledStagesWrapper from '../../common/StagesWrapper';
import { SpecialStagesFilter } from '../SpecialStagesFilter/index';

import { getOwlTeams } from './utils';
import { defaultStages } from '../../utils/constants';

const ScheduleByTeam = React.memo((props) => {
  const {
    firebase,
    handleUpdateSearchWindow,
    selectedYear
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
      <StyledContentWrapper flex>
        {selectedTeamId
          && (
            <GamesList
              firebase={firebase}
              selectedYear={selectedYear}
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
