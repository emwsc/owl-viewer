import React from 'react';
import { useState, useEffect } from 'react';
import { getOwlTeamDetailedData } from '../utils/dataUtils';
import Game from './Game';
import { GamesWrapper } from '../theme/gameStyle';


function isGameVisible(game, visibleStages) {
    return visibleStages.some(stage => stage.title === game.bracket.stage.title && stage.isVisible);
}

const Games = React.memo(function Games({ teamid, visibleStages, updateSearchWindow }) {

    const [competitor, setCompetitor] = useState(null);
    const [isLoaderVisible, setIsLoaderVisible] = useState(true);
    useEffect(() => {
        setIsLoaderVisible(true);
        setCompetitor(null);
        getOwlTeamDetailedData(teamid).then(competitor => {
            setCompetitor(competitor);
            setIsLoaderVisible(false);
        })
    }, [teamid])

    return (
        <React.Fragment>
            {isLoaderVisible && <div>Loading...</div>}
            {competitor !== null &&
                <React.Fragment>
                    <GamesWrapper>
                        {competitor.schedule.filter(game => isGameVisible(game, visibleStages)).map((game, index) => {
                            return (<Game key={'game-' + index} game={game} updateSearchWindow={updateSearchWindow} />)
                        })}
                    </GamesWrapper>
                </React.Fragment>}
        </React.Fragment>
    )
})


export default Games;