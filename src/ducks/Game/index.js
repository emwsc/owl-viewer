import React, { useState } from 'react';
import {
  GameCard, Info, Team,
  AdditionalInfo, VS, TeamTitle,
  SeachVODButton, ShowResults,
  ButtonsContainer, TeamLogo, Checkbox,
} from './styling';
import {
  searchGameOnTwitch, DEFAULT_SEARCH_TEXT, VIDEOS_NOT_FOUND, VIDEOS_FOUND,
} from '../../utils/dataUtils';

const Game = React.memo(({ game, updateSearchWindow }) => {
  const [isResultsVisibile, changeResultsVisibility] = useState(false);

  function onResultsVisivilityClick() {
    changeResultsVisibility(!isResultsVisibile);
  }

  function onOpenGameClick() {
    updateSearchWindow({ text: DEFAULT_SEARCH_TEXT, isVisible: true });
    searchGameOnTwitch(game).then((selectedVideos) => {
      const text = !selectedVideos || selectedVideos.length === 0 ? VIDEOS_NOT_FOUND : VIDEOS_FOUND;
      updateSearchWindow({ text, isVisible: true, selectedVideos });
    });
  }

  return (
    <GameCard
      leftColor={game.competitors[0].primaryColor}
      rightColor={game.competitors[1].primaryColor}
    >
      <Info>
        <Team>
          <TeamLogo
            logoUrl={game.competitors[0].logo}
          />
          <TeamTitle>
            {game.competitors[0].name}
          </TeamTitle>
        </Team>
        <div>
          {!isResultsVisibile && <VS>VS</VS>}
          {isResultsVisibile && <VS>{`${game.scores[0]} - ${game.scores[1]}`}</VS>}
          <AdditionalInfo>{game.startDate.toLocaleDateString()}</AdditionalInfo>
          <AdditionalInfo>{game.bracket}</AdditionalInfo>
        </div>
        <Team>
          <TeamLogo
            logoUrl={game.competitors[1].logo}
          />
          <TeamTitle>
            {game.competitors[1].name}
          </TeamTitle>
        </Team>
      </Info>
      <ButtonsContainer>
        <ShowResults
          background={game.competitors[0].secondaryColor}
        >
          <label
            htmlFor={`show-results-${game.id}`}
          >
            Show results
          </label>
          <Checkbox
            id={`show-results-${game.id}`}
            onClick={onResultsVisivilityClick}
            type="checkbox"
          />
        </ShowResults>
        <SeachVODButton
          background={game.competitors[0].secondaryColor}
          onClick={onOpenGameClick}
        >
          Search for VOD on twitch
        </SeachVODButton>
      </ButtonsContainer>
    </GameCard>
  );
});

export default Game;
