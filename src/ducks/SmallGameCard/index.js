import React, { useState } from "react";
import {
  StyledSmallGameCard,
  StyledTeamLogo,
  StyledTeamContainer,
  StyledButtonsContainer,
  StyledTwitchIcon,
  StyledScore,
  StyledTeamName
} from "./styled";
import { datediff, isTeamsVisibleByDefault, openGameVOD } from "./utils";

const SmallGameCard = React.memo(({ game, isTeamsHidden, selectedTeams }) => {
  console.log(game);
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

  const nowDate = new Date();

  return (
    <StyledSmallGameCard highlight={highlight}>
      {!isTeamsVisible && (
        <StyledTeamContainer
          onClick={() => changeTeamsVisibility(!isTeamsVisible)}
        >
          Click to show teams in playoff game
        </StyledTeamContainer>
      )}
      {isTeamsVisible && (
        <div>
          <StyledTeamContainer
            highlight={isTeamOneSelected && isTeamsVisible}
            primaryColor={game.competitors[0].primaryColor}
          >
            <StyledTeamLogo logoUrl={game.competitors[0].logo} />
            <StyledTeamName
              highlight={isTeamOneSelected && isTeamsVisible}
              primaryColor={game.competitors[0].primaryColor}
            >
              {game.competitors[0].name}
            </StyledTeamName>
          </StyledTeamContainer>
          <StyledTeamContainer
            highlight={isTeamTwoSelected && isTeamsVisible}
            primaryColor={game.competitors[1].primaryColor}
          >
            <StyledTeamLogo logoUrl={game.competitors[1].logo} />
            <StyledTeamName
              highlight={isTeamTwoSelected && isTeamsVisible}
              primaryColor={game.competitors[1].primaryColor}
            >
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
              onClick={() => openGameVOD(game.id)}
              title="Open VOD if available"
              className="fas fa-video"
            />
          </div>
        </StyledButtonsContainer>
      )}
    </StyledSmallGameCard>
  );
});

export default SmallGameCard;
