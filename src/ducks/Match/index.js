import React, { useState } from 'react';
import { StyledMatch, StyledMatchGrid } from './styled';
import { useOnSelectGame } from '../Schedule/utils';
import OverwatchLoading from '../OverwatchLoading';
import Videos from '../Videos';

const Match = (props) => {
  const { matchId } = props.match.params;
  const [videoScreen, setVideoScreenState] = useState({
    vods: [],
    isVideosScreenVisible: false,
  });
  useOnSelectGame({
    selectedGameId: matchId,
    setVideoScreenState,
  });
  return (
    <StyledMatch>
      <StyledMatchGrid>
        {!videoScreen.isVideosScreenVisible && <OverwatchLoading />}
        {videoScreen.isVideosScreenVisible && (
          <Videos vods={videoScreen.vods} matchId={matchId} />
        )}
      </StyledMatchGrid>
    </StyledMatch>
  );
};

export default Match;
