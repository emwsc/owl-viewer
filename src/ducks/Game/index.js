import React, { useState } from 'react';
import {
  StyledGameCard, StyledInfo, StyledTeam,
  StyledAdditionalInfo, StyledVS, StyledTeamTitle,
  StyledSeachVODButton, StyledShowResults,
  StyledButtonsContainer, StyledTeamLogo, StyledCheckbox,
} from './styling';
import {
  searchGameOnTwitch,
} from '../../utils/dataUtils';
import {
  DEFAULT_SEARCH_TEXT, VIDEOS_NOT_FOUND, VIDEOS_FOUND
} from '../../utils/constants'
import { timeConverter } from '../../utils/dataUtils'
import { StyledPopupWrapper } from '../../theme/globalStyle'
import { SearchVODPopup } from '../SearchVODPopup/index'

const Game = React.memo(({ game, updateSearchWindow }) => {
  const startDateLocaleString = timeConverter(game.startDate).toLocaleDateString();

  const [isResultsVisibile, changeResultsVisibility] = useState(false);


  const [searchWindowVisibile, setSearchWindowVisible] = useState(false);
  const [searchWindowText, setSearchWindowText] = useState('');
  const [selectedVideos, setSelectedVideos] = useState(null);

  const handleUpdateSearchWindow = (params) => {
    setSearchWindowVisible(params.isVisible);
    setSearchWindowText(params.text);
    setSelectedVideos(params.selectedVideos);
  }



  function onResultsVisivilityClick() {
    changeResultsVisibility(!isResultsVisibile);
  }

  function onOpenGameClick() {
    var elem = window.document.getElementById('popup');
    if (elem) elem.parentNode.removeChild(elem);
    handleUpdateSearchWindow({ text: DEFAULT_SEARCH_TEXT, isVisible: true });
    searchGameOnTwitch(game).then((selectedVideos) => {
      const text = !selectedVideos || selectedVideos.length === 0 ? VIDEOS_NOT_FOUND : VIDEOS_FOUND;
      handleUpdateSearchWindow({ text, isVisible: true, selectedVideos });
    });
  }

  return (
    <React.Fragment>
      <StyledGameCard
        leftColor={game.competitors[0].primaryColor}
        rightColor={game.competitors[1].primaryColor}
      >
        <StyledInfo>
          <StyledTeam>
            <StyledTeamLogo
              logoUrl={game.competitors[0].logo}
            />
            <StyledTeamTitle>
              {game.competitors[0].name}
            </StyledTeamTitle>
          </StyledTeam>
          <div>
            {!isResultsVisibile && <StyledVS>VS</StyledVS>}
            {isResultsVisibile && <StyledVS>{`${game.scores[0]} - ${game.scores[1]}`}</StyledVS>}
            <StyledAdditionalInfo>{startDateLocaleString}</StyledAdditionalInfo>
            <StyledAdditionalInfo>{game.bracket}</StyledAdditionalInfo>
          </div>
          <StyledTeam>
            <StyledTeamLogo
              logoUrl={game.competitors[1].logo}
            />
            <StyledTeamTitle>
              {game.competitors[1].name}
            </StyledTeamTitle>
          </StyledTeam>
        </StyledInfo>
        <StyledButtonsContainer>
          <StyledShowResults
            background={game.competitors[0].secondaryColor}
          >
            <label
              htmlFor={`show-results-${game.id}`}
            >
              Show results
          </label>
            <StyledCheckbox
              id={`show-results-${game.id}`}
              onClick={onResultsVisivilityClick}
              type="checkbox"
            />
          </StyledShowResults>
          <StyledSeachVODButton
            background={game.competitors[0].secondaryColor}
            onClick={onOpenGameClick}
          >
            Search for VOD on twitch
        </StyledSeachVODButton>
        </StyledButtonsContainer>
      </StyledGameCard>
      {searchWindowVisibile
        && (
          <StyledPopupWrapper id='popup'>
            <SearchVODPopup
              text={searchWindowText}
              selectedVideos={selectedVideos}
            />
          </StyledPopupWrapper>
        )
      }
    </React.Fragment>

  );
});

export default Game;
