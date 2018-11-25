import React, { useState } from 'react';
import { GameCard, Teams, Team, Info, VS, TeamTitle, SeachVODButton, ShowResults, ButtonsContainer } from './styling'
import { searchGameOnTwitch, DEFAULT_SEARCH_TEXT, VIDEOS_NOT_FOUND, VIDEOS_FOUND } from '../../utils/dataUtils';

const Game = React.memo(function Game({ game, updateSearchWindow }) {

    const [isResultsVisibile, changeResultsVisibility] = useState(false);

    function onResultsVisivilityClick() {
        changeResultsVisibility(!isResultsVisibile);
    }

    function onOpenGameClick() {
        updateSearchWindow({ text: DEFAULT_SEARCH_TEXT, isVisible: true });
        searchGameOnTwitch(game.competitors[0].name, game.competitors[1].name, game.startDate).then(selectedVideos => {
            let text = !selectedVideos || selectedVideos.length === 0 ? VIDEOS_NOT_FOUND : VIDEOS_FOUND;
            updateSearchWindow({ text: text, isVisible: true, selectedVideos: selectedVideos });
        });
    }

    return (
        <GameCard leftColor={game.competitors[0].primaryColor} rightColor={game.competitors[1].primaryColor}>
            <Teams>
                <Team>
                    {/* <TeamLogo big logoUrl={game.competitors[0].logo} /> */}
                    <TeamTitle >{game.competitors[0].name}</TeamTitle>
                </Team>
                {!isResultsVisibile && <VS>VS</VS>}
                {isResultsVisibile && <VS>{game.scores[0] + ' - ' + game.scores[1]}</VS>}
                <Team>
                    {/* <TeamLogo big logoUrl={game.competitors[1].logo} /> */}
                    <TeamTitle >{game.competitors[1].name}</TeamTitle>
                </Team>
            </Teams>
            <Info>{game.startDate.toLocaleDateString()}</Info>
            <Info>{game.bracket}</Info>
            <ButtonsContainer>
                <ShowResults background={game.competitors[0].secondaryColor} onClick={onResultsVisivilityClick}>
                    <label htmlFor={'show-results-' + game.id}>Show results</label>
                    <input id={'show-results-' + game.id} onClick={onResultsVisivilityClick} type="checkbox" />
                </ShowResults>
                <SeachVODButton background={game.competitors[0].secondaryColor} onClick={onOpenGameClick}>
                    Search for VOD on twitch
            </SeachVODButton>
            </ButtonsContainer>
        </GameCard>
    )
})

export default Game;