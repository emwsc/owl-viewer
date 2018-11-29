import React, { useState, useEffect } from 'react';
import { getTeamSchedule } from './utils';
import Game from '../Game/index';
import { isGameVisible } from './utils';

const GamesList = React.memo(({
  firebase,
  teamid,
  visibleStages,
  updateSearchWindow,
  selectedYear
}) => {
  const [matches, setMatches] = useState(null);
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  useEffect(() => {
    setIsLoaderVisible(true);
    setMatches(null);
    getTeamSchedule(firebase, teamid, selectedYear).then((scheduledMatches) => {
      setMatches(scheduledMatches);
      setIsLoaderVisible(false);
    });
  }, [teamid, selectedYear]);

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
            {matches.length === 0 &&
              <div>
                No matches found
            </div>}
          </React.Fragment>
        )}
    </React.Fragment>
  );
});


export default GamesList;
