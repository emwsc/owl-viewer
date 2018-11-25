import React from 'react';
import firebase from 'firebase'
import { Root, AppWrapper, TeamListWrapper, ContentWrapper, GlobalStyle, StagesWrapper, SearchWindowWrapper } from './theme/globalStyle'
import { getOwlTeams } from './utils/dataUtils';
import { useState, useEffect } from 'react';
import TeamList from './components/TeamList'
import Games from './components/Games'
import Stages from './components/Stages';
import SearchWindow from './components/SearchWindow';
import { firebaseConfig } from './firebase/config'
import { defaultStages } from './utils/constants'

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
          <TeamListWrapper>
            <TeamList selectedTeamId={selectedTeamId} competitors={competitors} handleTeamSelect={handleTeamSelect} />
          </TeamListWrapper>
          <ContentWrapper>
            {selectedTeamId && <Games firebase={firebase} visibleStages={visibleStages} teamid={selectedTeamId} updateSearchWindow={handleUpdateSearchWindow} />}
          </ContentWrapper>
          <StagesWrapper>
            <Stages primaryColor={selectedTeam ? selectedTeam.primaryColor : null} changeStagesVisibility={handleChangeStagesVisibility} stages={visibleStages.filter(stage => stage.allowedToFilter)} />
          </StagesWrapper>
        </AppWrapper>
        {searchWindowVisibile &&
          <SearchWindowWrapper>
            <SearchWindow text={searchWindowText} selectedVideos={selectedVideos} primaryColor={selectedTeam ? selectedTeam.primaryColor : null} />
          </SearchWindowWrapper>
        }

      </Root>
    </React.Fragment>
  );
})

export default App;