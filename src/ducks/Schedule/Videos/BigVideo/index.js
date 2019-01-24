import React from "react";
import { StyledVideo, StyledThumbnail, StyledTitle } from "./styled";
import { openGameVOD } from "../utils";

const BigVideo = video => {
  return (
    <StyledVideo title="Click to open" onClick={() => openGameVOD(video.id)}>
      <StyledThumbnail src={video.thumbnail} />
      <StyledTitle>{video.title}</StyledTitle>
    </StyledVideo>
  );
};

export default BigVideo;
