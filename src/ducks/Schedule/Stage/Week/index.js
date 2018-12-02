import React from 'react';
import Game from '../../../Game/index'
import { isGameVisible } from './utils'
import { StyledWeek, StyledGamesInWeek, StyledWeekTitle, StyledMsg } from './styled';

const Week = React.memo(({ week, visibleStages, updateSearchWindow }) => {

    const filteredGames = week.matches.filter(game => isGameVisible(game, visibleStages));

    return (
        <StyledWeek >
            <StyledWeekTitle>{week.name}</StyledWeekTitle>
            <StyledGamesInWeek>
                {filteredGames.map(game =>
                    <Game
                        key={'schedule-' + game.id}
                        game={game}
                        updateSearchWindow={updateSearchWindow}
                    />)}
                {filteredGames.length === 0 && <StyledMsg>Games not found or hidden by special stages filter</StyledMsg>}
            </StyledGamesInWeek>
        </StyledWeek>
    )
});

export { Week }