import React, { useState } from "react";
import { StyledVideos, StyledClose, StyledReveal } from "./styled";
import Video from "./Video";
import BigVideo from "./BigVideo";
import { getRevealText } from "./utils";

const Videos = ({ vods, clearVods }) => {
  const fullMatchVideo = vods.find(video => video.title.includes("Full"));
  const isExpandable = vods && vods.length > 0 && fullMatchVideo;
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <StyledVideos>
      <StyledClose onClick={() => clearVods()}>×</StyledClose>
      {fullMatchVideo && <BigVideo {...fullMatchVideo} />}
      {!isExpandable &&
        vods
          .filter(vod => !fullMatchVideo || vod.id !== fullMatchVideo.id)
          .map(vod => <Video key={vod.id} {...vod} />)}
      {isExpandable && (
        <React.Fragment>
          <StyledReveal onClick={() => setIsExpanded(!isExpanded)}>
            {getRevealText(isExpanded)}
          </StyledReveal>
          {isExpanded &&
            vods
              .filter(vod => !fullMatchVideo || vod.id !== fullMatchVideo.id)
              .map(vod => <Video key={vod.id} {...vod} />)}
        </React.Fragment>
      )}
    </StyledVideos>
  );
};

export default Videos;
