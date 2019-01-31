import React, { useState } from "react";
import {
  StyledSmallGameCard,
  StyledTeamLogo,
  StyledTeamContainer,
  StyledButtonsContainer,
  StyledVODIcon,
  StyledScore,
  StyledTeamName,
  StyledInfoContainer
} from "./styled";
import { datediff, isTeamsVisibleByDefault } from "./utils";

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

const SmallGameCard = props => {
  const { game, isTeamsHidden, selectedTeams, setSelectedGameId } = props;
  const [isScoreVisible, changeScoreVisibility] = useState(false);
  const [isTeamsVisible, changeTeamsVisibility] = useState(
    isTeamsVisibleByDefault(game.bracket) && !isTeamsHidden
  );

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
    if(nowDate < game.startDateObj) return;
    if (!isTeamsVisible) {
      changeTeamsVisibility(!isTeamsVisible);
      return;
    }
    onSelectGameClick();
  }

  function onSelectGameClick() {
    window.history.pushState(null, null, `/?match=${game.id}`);
    setSelectedGameId(game.id);
  }

  return (
    <StyledSmallGameCard
      showPointer={nowDate > game.startDateObj}
      highlight={highlight}
      onClick={handleOnCardClick}
    >
      <StyledInfoContainer>
        {!isTeamsVisible && (
          <StyledTeamContainer>
            Click to show teams in playoff game
          </StyledTeamContainer>
        )}
        {isTeamsVisible && (
          <div>
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
          <PastGameButtons
            changeScoreVisibility={changeScoreVisibility}
            onSelectGameClick={onSelectGameClick}
            isScoreVisible={isScoreVisible}
          />
        )}
      </StyledInfoContainer>
    </StyledSmallGameCard>
  );
};

export default SmallGameCard;
