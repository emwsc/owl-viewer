import React from "react";
import { StyledVideo, StyledThumbnail, StyledTitle } from "./styled";
import { openGameVOD } from "../utils";
import { TYPES } from "../constants";

const BigVideo = ({ id, title, thumbnail, label, type, url }) => {
  return (
    <StyledVideo
      title={"Click to open VOD " + title}
      onClick={() =>
        type === TYPES.MLG ? openGameVOD(id) : window.open(url, "_blank")
      }
    >
      <StyledThumbnail src={thumbnail} />
      <StyledTitle>
        {label} • {title}
      </StyledTitle>
    </StyledVideo>
  );
};

export default BigVideo;
