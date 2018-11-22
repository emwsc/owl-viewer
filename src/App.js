import React from 'react';
import { Root, AppWrapper, TeamListWrapper, ContentWrapper, GlobalStyle, StagesWrapper, SearchWindowWrapper } from './theme/globalStyle'
import { getOwlTeams } from './utils/dataUtils';
import { useState, useEffect } from 'react';
import TeamList from './components/TeamList'
import Games from './components/Games'
import Stages from './components/Stages';
import SearchWindow from './components/SearchWindow';

//TODO: сделать переключение темы
//TODO: загружать games постфактум

const defaultStages = [
  {
    title: 'Stage 1',
    isVisible: true,
    allowedToFilter: false
  },
  {
    title: 'Stage 2',
    isVisible: true,
    allowedToFilter: false
  },
  {
    title: 'Stage 3',
    isVisible: true,
    allowedToFilter: false
  },
  {
    title: 'Stage 4',
    isVisible: true,
    allowedToFilter: false
  },
  {
    title: 'Stage 1 Title Matches',
    isVisible: false,
    allowedToFilter: true
  },
  {
    title: 'Stage 2 Title Matches',
    isVisible: false,
    allowedToFilter: true
  },
  {
    title: 'Stage 3 Title Matches',
    isVisible: false,
    allowedToFilter: true
  },
  {
    title: 'Stage 4 Title Matches',
    isVisible: false,
    allowedToFilter: true
  },
  {
    title: 'Quarterfinals',
    isVisible: false,
    allowedToFilter: true
  },
  {
    title: 'Semifinals',
    isVisible: false,
    allowedToFilter: true
  },
  {
    title: 'Grand Final',
    isVisible: false,
    allowedToFilter: true
  }
]


const App = React.memo(() => {

  const [competitors, setCompetitors] = useState([]);
  const [selectedTeamId, setSelectedTeam] = useState(null);
  const [visibleStages, setVisibleStages] = useState([...defaultStages]);
  const [searchWindowVisibile, setSearchWindowVisible] = useState(false);
  const [searchWindowText, setSearchWindowText] = useState('');
  const [selectedVideos, setSelectedVideos] = useState(null);

  useEffect(() => {
    getOwlTeams().then(teamInfo => {
      setCompetitors(teamInfo.competitors.map(item => item.competitor))
    });
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
    debugger;
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
            {selectedTeamId && <Games visibleStages={visibleStages} teamid={selectedTeamId} updateSearchWindow={handleUpdateSearchWindow} />}
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