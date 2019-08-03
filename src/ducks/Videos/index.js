import React, { useState, useEffect, useContext } from "react";
import { Transition, Spring } from "react-spring";
import {
  StyledReveal,
  StyledMLG,
  StyledTwichIcon,
  StyledRevealArrow,
  StyledContainer,
  StyledVodsNotFound
} from "./styled";
import Video from "./Video";
import BigVideo from "./BigVideo";
import { getRevealText, getMatchInfo } from "./utils";
import MatchInfo from "./MatchInfo";
import { TYPES, WORD_KEYS, DICTIONARY } from "./constants";
import {
  LanguageConsumer,
  LanguageContext
} from "../../common/LanguageContenxt";

const OtherVideos = ({ setIsExpanded, isExpanded, vods, fullMatchVideo }) => (
  <StyledContainer>
    <StyledReveal onClick={() => setIsExpanded(!isExpanded)}>
      <React.Fragment>
        <StyledRevealArrow isExpanded={isExpanded}>▼</StyledRevealArrow>
        <LanguageConsumer>
          {({ lang }) => getRevealText(isExpanded, lang)}
        </LanguageConsumer>
      </React.Fragment>
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
              .filter(vod => !fullMatchVideo || vod.id !== fullMatchVideo.id)
              .map(vod => (
                <Video key={vod.id} {...vod} />
              ))}
          </div>
        ))
      }
    </Transition>
  </StyledContainer>
);

const AllVideos = ({ vods, fullMatchVideo }) => (
  <StyledContainer>
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {props => (
        <div style={props}>
          {vods
            .filter(vod => !fullMatchVideo || vod.id !== fullMatchVideo.id)
            .map(vod => (
              <Video key={vod.id} {...vod} />
            ))}
        </div>
      )}
    </Spring>
  </StyledContainer>
);

const FullMatch = ({ fullMatchVideo }) => (
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {props => (
      <div style={props}>
        <BigVideo {...fullMatchVideo} />
      </div>
    )}
  </Spring>
);

const MLGIcon = () => <StyledMLG src="/MLG_2017.svg" alt="MLG" />;

const TwitchIcon = () => <StyledTwichIcon className="fab fa-twitch" />;

const Videos = React.memo(
  ({ vods, matchId }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [matchInfo, setMatchInfo] = useState(null);

    const fullMatchVideo = vods.find(video => video.title.includes("Full"));
    const isExpandable =
      vods &&
      vods.length > 1 &&
      (fullMatchVideo ||
        (matchInfo &&
          matchInfo.id &&
          matchInfo.vods &&
          matchInfo.vods.length > 0));

    useEffect(() => {
      if (matchId) getMatchInfo(matchId).then(setMatchInfo);
    }, [matchId]);

    const isVodsNotFound =
      matchId &&
      (!vods || vods.length === 0) &&
      (matchInfo && (!matchInfo.vods || matchInfo.vods.length === 0));

    const { lang } = useContext(LanguageContext);

    return (
      <React.Fragment>
        {matchInfo && matchInfo.id && <MatchInfo {...matchInfo} />}
        {isVodsNotFound && (
          <StyledVodsNotFound>
            {DICTIONARY[lang + WORD_KEYS.NO_VODS]}
          </StyledVodsNotFound>
        )}
        {fullMatchVideo && matchInfo && (
          <FullMatch
            fullMatchVideo={{
              ...fullMatchVideo,
              label: <MLGIcon />,
              type: TYPES.MLG,
              thumbnail:
                matchInfo &&
                matchInfo.vods &&
                matchInfo.vods.length > 0 &&
                matchInfo.vods[0].thumbnails.custom
                  ? matchInfo.vods[0].thumbnails.custom
                  : fullMatchVideo.thumbnail
            }}
          />
        )}
        {matchInfo &&
          matchInfo.vods &&
          matchInfo.vods.length > 0 &&
          matchInfo.vods.map(vod => (
            <FullMatch
              key={vod.id}
              fullMatchVideo={{
                ...vod,
                label: <TwitchIcon />,
                type: TYPES.TWITCH,
                thumbnail: vod.thumbnails.custom
                  ? vod.thumbnails.custom
                  : vod.thumbnails.generated
              }}
            />
          ))}
        {!isExpandable && matchInfo && vods.length > 0 && (
          <AllVideos vods={vods} fullMatchVideo={fullMatchVideo} />
        )}
        {isExpandable && matchInfo && (
          <OtherVideos
            setIsExpanded={setIsExpanded}
            isExpanded={isExpanded}
            vods={vods}
            fullMatchVideo={fullMatchVideo}
          />
        )}
      </React.Fragment>
    );
  },
  (prevProps, nextProps) =>
    prevProps.vods.length === nextProps.vods.length &&
    prevProps.matchId === nextProps.matchId
);

export default Videos;
