import React, { useState } from "react";
import moment from "moment";
import {
  StyledSmallGameCard,
  StyledTeamLogo,
  StyledTeamContainer,
  StyledButtonsContainer,
  StyledVODIcon,
  StyledScore,
  StyledTeamName,
  StyledInfoContainer,
  StyledWidth
} from "./styled";
import { datediff, isTeamsVisibleByDefault } from "./utils";
import { TOTAL_SCORE_LESS_THEN } from "./constants";

moment().format();

const nowDate = new Date();

const PastGameButtons = ({
  changeScoreVisibility,
  isScoreVisible,
  onSelectGameClick
}) => (
  <StyledButtonsContainer>
    <div>
      <i
        onClick={event => {
          event.preventDefault();
          event.stopPropagation();
          changeScoreVisibility(!isScoreVisible);
        }}
        title={
          isScoreVisible
            ? "Click to hide score"
            : "Click to reaveal score of the game"
        }
        className={isScoreVisible ? "fas fa-eye-slash" : "fas fa-eye"}
      />
    </div>
    <div>
      <StyledVODIcon
        onClick={onSelectGameClick}
        title="Open VODs if available"
        className="fas fa-video"
      />
    </div>
  </StyledButtonsContainer>
);

const Teams = ({ game, teamOneProps, teamTwoProps }) => (
  <StyledWidth width="180px">
    <StyledTeamContainer {...teamOneProps}>
      <StyledTeamLogo logoUrl={game.competitors[0].logo} />
      <StyledTeamName {...teamOneProps}>
        {game.competitors[0].name}
      </StyledTeamName>
    </StyledTeamContainer>
    <StyledTeamContainer {...teamTwoProps}>
      <StyledTeamLogo logoUrl={game.competitors[1].logo} />
      <StyledTeamName {...teamTwoProps}>
        {game.competitors[1].name}
      </StyledTeamName>
    </StyledTeamContainer>
  </StyledWidth>
);

const SmallGameCard = props => {
  const { game, isTeamsHidden, selectedTeams = [], setSelectedGameId } = props;
  const [isScoreVisible, changeScoreVisibility] = useState(false);
  const [isTeamsVisible, changeTeamsVisibility] = useState(
    isTeamsVisibleByDefault(game.bracket) && !isTeamsHidden
  );

  const totalScores = game.scores[0] + game.scores[1];

  const isTeamOneSelected = selectedTeams.some(
    id => game.competitors[0].id === id
  );

  const isTeamTwoSelected = selectedTeams.some(
    id => game.competitors[1].id === id
  );

  const highlight = (isTeamOneSelected || isTeamTwoSelected) && isTeamsVisible;

  const teamOneProps = {
    highlight: isTeamOneSelected && isTeamsVisible,
    primaryColor: game.competitors[0].primaryColor
  };

  const teamTwoProps = {
    highlight: isTeamTwoSelected && isTeamsVisible,
    primaryColor: game.competitors[1].primaryColor
  };

  function handleOnCardClick() {
    if (nowDate < game.startDateObj) return;
    if (!isTeamsVisible) {
      changeTeamsVisibility(!isTeamsVisible);
      return;
    }
    if (totalScores < TOTAL_SCORE_LESS_THEN) return;
    onSelectGameClick();
  }

  function onSelectGameClick() {
    window.history.pushState(
      null,
      null,
      `${window.location.pathname}?match=${game.id}`
    );
    setSelectedGameId(game.id);
  }

  return (
    <StyledSmallGameCard
      showPointer={nowDate > game.startDateObj}
      highlight={highlight}
      onClick={handleOnCardClick}
      title={
        totalScores < TOTAL_SCORE_LESS_THEN ? "No scores or vods available" : ""
      }
    >
      <StyledInfoContainer>
        {!isTeamsVisible && (
          <StyledTeamContainer>
            Click to show teams in playoff game
          </StyledTeamContainer>
        )}
        {isTeamsVisible && (
          <Teams
            game={game}
            teamOneProps={teamOneProps}
            teamTwoProps={teamTwoProps}
          />
        )}
        {nowDate < game.startDateObj && (
          <div title={moment(game.startDateObj).format("HH:mm")}>
            {datediff(moment, nowDate, game.startDateObj)}
          </div>
        )}
        {isTeamsVisible &&
          nowDate >= game.startDateObj &&
          totalScores >= TOTAL_SCORE_LESS_THEN && (
            <div>
              <StyledScore>{isScoreVisible ? game.scores[0] : "-"}</StyledScore>
              <StyledScore>{isScoreVisible ? game.scores[1] : "-"}</StyledScore>
            </div>
          )}
        {isTeamsVisible &&
          nowDate >= game.startDateObj &&
          totalScores >= TOTAL_SCORE_LESS_THEN && (
            <PastGameButtons
              changeScoreVisibility={changeScoreVisibility}
              onSelectGameClick={onSelectGameClick}
              isScoreVisible={isScoreVisible}
            />
          )}
        {isTeamsVisible &&
          nowDate >= game.startDateObj &&
          totalScores < TOTAL_SCORE_LESS_THEN && (
            <i
              className="fas fa-video-slash"
              title={
                totalScores < TOTAL_SCORE_LESS_THEN
                  ? "No scores or vods available"
                  : ""
              }
            />
          )}
      </StyledInfoContainer>
    </StyledSmallGameCard>
  );
};

export default SmallGameCard;
