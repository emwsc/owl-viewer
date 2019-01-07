import React, { useState } from "react";
import {
  StyledSmallGameCard,
  StyledTeamLogo,
  StyledTeamContainer,
  StyledButtonsContainer,
  StyledTwitchIcon,
  StyledScore
} from "./styled";
import { datediff, isTeamsVisibleByDefault, openGameVOD } from "./utils";

const SmallGameCard = React.memo(({ game, isTeamsHidden, selectedTeams }) => {
  const [isScoreVisible, changeScoreVisibility] = useState(false);
  const [isTeamsVisible, changeTeamsVisibility] = useState(
    isTeamsVisibleByDefault(game.bracket) && !isTeamsHidden
  );

  const isSelected = selectedTeams.some(
    id => game.competitors[0].id === id || game.competitors[1].id === id
  );
  const nowDate = new Date();
  return (
    <StyledSmallGameCard highlightCard={isSelected && isTeamsVisible}>
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
