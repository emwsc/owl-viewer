import React from "react";
import { StyledVideos, StyledClose } from "./styled";
import Video from "./Video";

const Videos = ({ vods, clearVods }) => {
  return (
    <StyledVideos>
      <StyledClose onClick={() => clearVods()}>×</StyledClose>
      {vods.map(vod => (
        <Video key={vod.id} {...vod} />
      ))}
    </StyledVideos>
  );
};

export default Videos;
