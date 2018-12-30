import React, { useState } from "react";
import {
  StyledSmallGameCard,
  StyledTeamLogo,
  StyledTeamContainer,
  StyledButtonsContainer,
  StyledTwitchIcon,
  StyledScore
} from "./styled";
import { datediff, isTeamsVisibleByDefault } from "./utils";
import { searchGameOnTwitch } from "../../utils/dataUtils";
import {
  DEFAULT_SEARCH_TEXT,
  VIDEOS_NOT_FOUND,
  VIDEOS_FOUND
} from "../../utils/constants";

const SmallGameCard = React.memo(
  ({ game, isTeamsHidden, updateSearchWindow }) => {
    const [isScoreVisible, changeScoreVisibility] = useState(false);
    const [isTeamsVisible, changeTeamsVisibility] = useState(
      isTeamsVisibleByDefault(game.bracket) && !isTeamsHidden
    );
    const nowDate = new Date();

    function onOpenGameClick() {
      updateSearchWindow({ text: DEFAULT_SEARCH_TEXT, isVisible: true });
      searchGameOnTwitch(game).then(selectedVideos => {
        const text =
          !selectedVideos || selectedVideos.length === 0
            ? VIDEOS_NOT_FOUND
            : VIDEOS_FOUND;
        updateSearchWindow({ text, isVisible: true, selectedVideos });
      });
    }

    return (
      <StyledSmallGameCard>
        {!isTeamsVisible && (
          <StyledTeamContainer
            onClick={() => changeTeamsVisibility(!isTeamsVisible)}
          >
            Click to show teams in playoff game
          </StyledTeamContainer>
        )}
        {isTeamsVisible && (
          <div>
            <StyledTeamContainer>
              <StyledTeamLogo logoUrl={game.competitors[0].logo} />
              {game.competitors[0].name}
            </StyledTeamContainer>
            <StyledTeamContainer>
              <StyledTeamLogo logoUrl={game.competitors[1].logo} />
              {game.competitors[1].name}
            </StyledTeamContainer>
          </div>
        )}
        {nowDate < game.startDateObj && (
          <div>{datediff(nowDate, game.startDateObj)}d</div>
        )}
        {isTeamsVisible && nowDate >= game.startDateObj && (
          <div>
            <StyledScore>{isScoreVisible ? game.scores[0] : "-"}</StyledScore>
            <StyledScore>{isScoreVisible ? game.scores[1] : "-"}</StyledScore>
          </div>
        )}
        {isTeamsVisible && nowDate >= game.startDateObj && (
          <StyledButtonsContainer>
            <div>
              <i
                onClick={() => changeScoreVisibility(!isScoreVisible)}
                title={
                  isScoreVisible
                    ? "Click to hide score"
                    : "Click to reaveal score of the game"
                }
                className={isScoreVisible ? "fas fa-eye-slash" : "fas fa-eye"}
              />
            </div>
            <div>
              <StyledTwitchIcon
                onClick={onOpenGameClick}
                title="Search VOD on Twitch"
                className="fab fa-twitch"
              />
            </div>
          </StyledButtonsContainer>
        )}
      </StyledSmallGameCard>
    );
  }
);

export default SmallGameCard;