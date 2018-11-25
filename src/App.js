import React, { useState, useEffect } from 'react';
import firebase from 'firebase'

import { firebaseConfig } from './firebase/config'
import { defaultStages } from './utils/constants'

import { getOwlTeams } from './utils/dataUtils';

import { Root, AppWrapper, TeamListWrapper, ContentWrapper, GlobalStyle, StagesWrapper, PopupWrapper, TopMenuWrapper } from './theme/globalStyle'
import { TopMenu } from './ducks/TopMenu/index'
import TeamList from './ducks/TeamList/index'
import GamesList from './ducks/GamesList/index'
import SpecialStagesFilter from './ducks/SpecialStagesFilter/index';
import SearchVODPopup from './ducks/SearchVODPopup/index';

firebase.initializeApp(firebaseConfig);

const App = React.memo(() => {

  const [competitors, setCompetitors] = useState([]);
  const [selectedTeamId, setSelectedTeam] = useState(null);
  const [visibleStages, setVisibleStages] = useState([...defaultStages]);
  const [searchWindowVisibile, setSearchWindowVisible] = useState(false);
  const [searchWindowText, setSearchWindowText] = useState('');
  const [selectedVideos, setSelectedVideos] = useState(null);

  useEffect(() => {
    getOwlTeams(firebase).then(setCompetitors);
  }, []);


  function handleTeamSelect(teamid) {
    setSelectedTeam(teamid);
    setVisibleStages([...defaultStages]);
    setSearchWindowVisible(false);
    setSearchWindowText('params.text');
    setSelectedVideos(null);
  }

  function handleChangeStagesVisibility(stageTitle) {
    let newVisibleStages = visibleStages.map(stage => { return { ...stage } });
    let selectedStage = newVisibleStages.find(stage => stage.title === stageTitle);
    selectedStage.isVisible = !selectedStage.isVisible;
    setVisibleStages(newVisibleStages);
  }

  function handleUpdateSearchWindow(params) {
    setSearchWindowVisible(params.isVisible);
    setSearchWindowText(params.text);
    setSelectedVideos(params.selectedVideos);
  }

  let selectedTeam = competitors.find(competitor => competitor.id === selectedTeamId);


  return (
    <React.Fragment>
      <GlobalStyle />
      <Root>
        <AppWrapper>
          <TopMenuWrapper>
            <TopMenu />
          </TopMenuWrapper>
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
              primaryColor={selectedTeam ? selectedTeam.primaryColor : null}
              changeStagesVisibility={handleChangeStagesVisibility}
              stages={visibleStages.filter(stage => stage.allowedToFilter)}
            />
          </StagesWrapper>
        </AppWrapper>
        {searchWindowVisibile &&
          <PopupWrapper>
            <SearchVODPopup
              text={searchWindowText}
              selectedVideos={selectedVideos}
              primaryColor={selectedTeam ? selectedTeam.primaryColor : null}
            />
          </PopupWrapper>
        }

      </Root>
    </React.Fragment>
  );
})

export default App;