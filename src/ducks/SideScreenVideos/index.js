import React from "react";
import {
  StyledVideosSection,
  StyledClose,
  StyledBackground,
  StyledMatchWindowOpen
} from "./styled";
import Videos from "../Videos";

const SideScreenVideos = ({ style, vods, clearVods, matchId }) => {
  return (
    <React.Fragment>
      <StyledBackground style={style} onClick={clearVods} />
      <StyledVideosSection style={style}>
        <StyledClose onClick={() => clearVods()}>×</StyledClose>
        <StyledMatchWindowOpen href={"/matches/" + matchId}>
          <i className="fas fa-external-link-square-alt" />
        </StyledMatchWindowOpen>
        <Videos vods={vods} matchId={matchId} />
      </StyledVideosSection>
    </React.Fragment>
  );
};

export default SideScreenVideos;
