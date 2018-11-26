import React, { useState, useEffect } from 'react';
import { getTeamSchedule } from '../../utils/dataUtils';
import Game from '../Game/index';
import { isGameVisible } from './utils';

const GamesList = React.memo(({
  firebase, teamid, visibleStages, updateSearchWindow,
}) => {
  const [matches, setMatches] = useState(null);
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  useEffect(() => {
    setIsLoaderVisible(true);
    setMatches(null);
    getTeamSchedule(firebase, teamid).then((scheduledMatches) => {
      setMatches(scheduledMatches);
      setIsLoaderVisible(false);
    });
  }, [teamid]);

  return (
    <React.Fragment>
      {isLoaderVisible && <div>Loading...</div>}
      {matches
        && (
          <React.Fragment>
            {matches.filter(game => isGameVisible(game, visibleStages)).map(game => (
              <Game
                key={game.id}
                game={game}
                updateSearchWindow={updateSearchWindow}
              />))}
          </React.Fragment>
        )}
    </React.Fragment>
  );
});


export default GamesList;
