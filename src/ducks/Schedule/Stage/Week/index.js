import React from 'react';
import Game from '../../../Game/index'
import { StyledWeek, StyledGamesInWeek, StyledWeekTitle } from './styled';

const Week = React.memo(({ week, updateSearchWindow }) => {
    return (
        <StyledWeek >
            <StyledWeekTitle>{week.name}</StyledWeekTitle>
            <StyledGamesInWeek>
                {week.matches.map(game =>
                    <Game
                        key={'schedule-' + game.id}
                        game={game}
                        updateSearchWindow={updateSearchWindow}
                    />)}
            </StyledGamesInWeek>
        </StyledWeek>
    )
});

export { Week }