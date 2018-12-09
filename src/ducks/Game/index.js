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
// import { StyledPopupWrapper } from '../../theme/globalStyle'
// import { SearchVODPopup } from '../SearchVODPopup/index'

const Game = React.memo(({ game, updateSearchWindow }) => {

  const startDateLocaleString = timeConverter(game.startDate).toLocaleDateString();
  const [isResultsVisibile, changeResultsVisibility] = useState(false);

  function onResultsVisivilityClick() {
    changeResultsVisibility(!isResultsVisibile);
  }

  function onOpenGameClick() {
    // var elem = window.document.getElementById('popup');
    // if (elem) elem.parentNode.removeChild(elem);
    updateSearchWindow({ text: DEFAULT_SEARCH_TEXT, isVisible: true });
    searchGameOnTwitch(game).then((selectedVideos) => {
      const text = !selectedVideos || selectedVideos.length === 0 ? VIDEOS_NOT_FOUND : VIDEOS_FOUND;
      updateSearchWindow({ text, isVisible: true, selectedVideos });
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

          </StyledTeam>
          <div>
            {!isResultsVisibile && <StyledVS>VS</StyledVS>}
            {isResultsVisibile && <StyledVS>{`${game.scores[0]} - ${game.scores[1]}`}</StyledVS>}
          </div>
          <StyledTeam>
            <StyledTeamLogo
              logoUrl={game.competitors[1].logo}
            />
          </StyledTeam>
        </StyledInfo>
        <StyledInfo>
          <StyledTeam>

            <StyledTeamTitle>
              {game.competitors[0].name}
            </StyledTeamTitle>
          </StyledTeam>
          <div>
            <StyledAdditionalInfo>{startDateLocaleString}</StyledAdditionalInfo>
            <StyledAdditionalInfo>{game.bracket}</StyledAdditionalInfo>
          </div>
          <StyledTeam>

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

    </React.Fragment>

  );
});

export default Game;
