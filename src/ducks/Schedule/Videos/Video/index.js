import React from "react";
import { StyledVideo, StyledThumbnail } from "./styled";
import { openGameVOD } from "./utils";

const Video = video => {
  return (
    <StyledVideo onClick={() => openGameVOD(video.id)}>
      <StyledThumbnail src={video.thumbnail} />
      <div>{video.title}</div>
    </StyledVideo>
  );
};

export default Video;
