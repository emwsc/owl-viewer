import React from 'react';
import {
  StyledVideosSection,
  StyledClose,
  StyledBackground,
  StyledMatchWindowOpen,
  StyledVideosContainer,
} from './styled';
import Videos from '../Videos';

const SideScreenVideos = ({
  style, vods, clearVods, matchId,
}) => (
  <React.Fragment>
    <StyledBackground style={style} onClick={clearVods} />
    <StyledVideosSection style={style}>
      <StyledClose onClick={() => clearVods()}>×</StyledClose>
      <StyledMatchWindowOpen href={`/matches/${matchId}`}>
        <i className="fas fa-external-link-square-alt" />
      </StyledMatchWindowOpen>
      <StyledVideosContainer>
        <Videos vods={vods} matchId={matchId} />
      </StyledVideosContainer>
    </StyledVideosSection>
  </React.Fragment>
);

export default SideScreenVideos;
