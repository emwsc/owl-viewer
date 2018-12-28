import React, { useState } from "react";
import {
  StyledSmallGameCard,
  StyledTeamLogo,
  StyledTeamContainer,
  StyledCheckbox,
  StyledShowResults,
  StyledButtonsContainer,
  StyledTwitchIcon,
  StyledScore
} from "./styled";
import { datediff } from "./utils";

const SmallGameCard = React.memo(({ game, updateSearchWindow }) => {
  const [isScoreVisible, changeScoreVisibility] = useState(false);
  const nowDate = new Date();
  return (
    <StyledSmallGameCard>
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
      {nowDate < game.startDateObj && (
        <div>{datediff(nowDate, game.startDateObj)}d</div>
      )}
      {nowDate >= game.startDateObj && (
        <div>
          <StyledScore>{isScoreVisible ? game.scores[0] : "-"}</StyledScore>
          <StyledScore>{isScoreVisible ? game.scores[1] : "-"}</StyledScore>
        </div>
      )}
      {nowDate >= game.startDateObj && (
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
              title="Search VOD on Twitch"
              className="fab fa-twitch"
            />
          </div>
        </StyledButtonsContainer>
      )}
    </StyledSmallGameCard>
  );
});

export default SmallGameCard;
