import React, { useState } from "react";
import {
  StyledVideosSection,
  StyledClose,
  StyledReveal,
  StyledBackground
} from "./styled";
import Video from "./Video";
import BigVideo from "./BigVideo";
import { getRevealText } from "./utils";
import { Transition, Spring } from "react-spring";

const Videos = ({ style, vods, clearVods }) => {
  const fullMatchVideo = vods.find(video => video.title.includes("Full"));
  const isExpandable = vods && vods.length > 0 && fullMatchVideo;
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <React.Fragment>
      <StyledBackground style={style} onClick={clearVods} />
      <StyledVideosSection style={style}>
        <StyledClose onClick={() => clearVods()}>×</StyledClose>
        {fullMatchVideo && (
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {props => (
              <div style={props}>
                <BigVideo {...fullMatchVideo} />
              </div>
            )}
          </Spring>
        )}
        {!isExpandable && vods.length > 0 && (
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {props => (
              <div style={props}>
                {vods
                  .filter(
                    vod => !fullMatchVideo || vod.id !== fullMatchVideo.id
                  )
                  .map(vod => (
                    <Video key={vod.id} {...vod} />
                  ))}
              </div>
            )}
          </Spring>
        )}
        {isExpandable && (
          <React.Fragment>
            <StyledReveal onClick={() => setIsExpanded(!isExpanded)}>
              {getRevealText(isExpanded)}
            </StyledReveal>
            <Transition
              items={isExpanded}
              from={{ opacity: 0, transform: "translate3d(60px,0,0)" }}
              enter={{ opacity: 1, transform: "translate3d(0px,0,0)" }}
              leave={{ opacity: 0, transform: "translate3d(60px,0,0)" }}
            >
              {toggle =>
                toggle &&
                (props => (
                  <div style={props}>
                    {vods
                      .filter(
                        vod => !fullMatchVideo || vod.id !== fullMatchVideo.id
                      )
                      .map(vod => (
                        <Video key={vod.id} {...vod} />
                      ))}
                  </div>
                ))
              }
            </Transition>
          </React.Fragment>
        )}
      </StyledVideosSection>
    </React.Fragment>
  );
};

export default Videos;
