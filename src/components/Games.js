import React from 'react';
import { useState, useEffect } from 'react';
import { getTeamSchedule } from '../utils/dataUtils';
import Game from './Game';
import { GamesWrapper } from '../theme/gameStyle';


function isGameVisible(game, visibleStages) {
    return visibleStages.some(stage => stage.title === game.bracket && stage.isVisible);
}

const Games = React.memo(function Games({ firebase, teamid, visibleStages, updateSearchWindow }) {

    const [matches, setMatches] = useState(null);
    const [isLoaderVisible, setIsLoaderVisible] = useState(true);
    useEffect(() => {
        setIsLoaderVisible(true);
        setMatches(null);
        getTeamSchedule(firebase, teamid).then(matches => {
            setMatches(matches);
            setIsLoaderVisible(false);
        })
    }, [teamid])

    return (
        <React.Fragment>
            {isLoaderVisible && <div>Loading...</div>}
            {matches &&
                <React.Fragment>
                    {matches.filter(game => isGameVisible(game, visibleStages)).map((game, index) => {
                        return (<Game key={'game-' + index} game={game} updateSearchWindow={updateSearchWindow} />)
                    })}
                </React.Fragment>}
        </React.Fragment>
    )
})


export default Games;