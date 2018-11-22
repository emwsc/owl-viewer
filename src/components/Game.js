import React from 'react';
import { TeamLogo } from '../theme/teamStyle'
import { GameCard, GameCard__Teams, GameCard__Team, GameCard__Info, GameCard__VS, GameCard__TeamTitle, GameCard__SeachVODButton } from '../theme/gameStyle'
import { useState, useEffect } from 'react';
import { searchGameOnTwitch, DEFAULT_SEARCH_TEXT, VIDEOS_NOT_FOUND, VIDEOS_FOUND } from '../utils/dataUtils';

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
            <GameCard__Teams>
                <GameCard__Team>
                    <TeamLogo big logoUrl={game.competitors[0].logo} />
                    <GameCard__TeamTitle >{game.competitors[0].name}</GameCard__TeamTitle>
                </GameCard__Team>
                {!isResultsVisibile && <GameCard__VS>VS</GameCard__VS>}
                {isResultsVisibile && <GameCard__VS>{game.scores[0].value + ' - ' + game.scores[1].value}</GameCard__VS>}
                <GameCard__Team>
                    <TeamLogo big logoUrl={game.competitors[1].logo} />
                    <GameCard__TeamTitle >{game.competitors[1].name}</GameCard__TeamTitle>
                </GameCard__Team>
            </GameCard__Teams>
            <GameCard__Info>{game.startDate.toLocaleDateString()}</GameCard__Info>
            <GameCard__Info>{game.bracket.stage.title}</GameCard__Info>
            <div>
                <label htmlFor="show-results">Show results</label>
                <input id="show-results" onClick={onResultsVisivilityClick} type="checkbox" />
            </div>
            <GameCard__SeachVODButton primaryColor={game.competitors[0].primaryColor} onClick={onOpenGameClick}>
                Search for VOD on twitch
            </GameCard__SeachVODButton>
        </GameCard>
    )
})

export default Game;