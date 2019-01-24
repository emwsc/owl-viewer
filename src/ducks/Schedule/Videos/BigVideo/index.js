import React from "react";
import { StyledVideo, StyledThumbnail } from "./styled";
import { openGameVOD } from "../utils";

const BigVideo = video => {
  return (
    <StyledVideo title="Click to open" onClick={() => openGameVOD(video.id)}>
      <StyledThumbnail src={video.thumbnail} />
      <div>{video.title}</div>
    </StyledVideo>
  );
};

export default BigVideo;
