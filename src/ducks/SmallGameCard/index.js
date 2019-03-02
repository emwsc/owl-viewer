import React, { useState } from "react";
import moment from "moment";
import {
  StyledSmallGameCard,
  StyledTeamContainer,
  StyledScore,
  StyledInfoContainer
} from "./styled";
import Teams from "./Teams";
import PastGameButtons from "./PastGameButtons";
import {
  getDaysToGame,
  isTeamsVisibleByDefault,
  pushToBrowserHistory
} from "./utils";
import { TOTAL_SCORE_LESS_THEN, DICTIONARY, WORDS_KEYS } from "./constants";
import { LanguageConsumer } from "../../common/LanguageContenxt";

moment().format();

const nowDate = new Date();

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
    pushToBrowserHistory(game.id);
    setSelectedGameId(game.id);
  }

  return (
    <LanguageConsumer>
      {lang => (
        <StyledSmallGameCard
          showPointer={nowDate > game.startDateObj}
          highlight={highlight}
          onClick={handleOnCardClick}
          title={
            totalScores < TOTAL_SCORE_LESS_THEN
              ? DICTIONARY[lang + WORDS_KEYS.NO_DATA]
              : ""
          }
        >
          <StyledInfoContainer>
            {!isTeamsVisible && (
              <StyledTeamContainer>
                {DICTIONARY[lang + WORDS_KEYS.REVEAL_TEAMS]}
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
              <div>
                <div>
                  {getDaysToGame(moment, nowDate, game.startDateObj, lang)}
                </div>
                <div>{moment(game.startDateObj).format("HH:mm")}</div>
              </div>
            )}
            {isTeamsVisible &&
              nowDate >= game.startDateObj &&
              totalScores >= TOTAL_SCORE_LESS_THEN && (
                <div>
                  <StyledScore>
                    {isScoreVisible ? game.scores[0] : "-"}
                  </StyledScore>
                  <StyledScore>
                    {isScoreVisible ? game.scores[1] : "-"}
                  </StyledScore>
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
                      ? DICTIONARY[lang + WORDS_KEYS.NO_DATA]
                      : ""
                  }
                />
              )}
          </StyledInfoContainer>
        </StyledSmallGameCard>
      )}
    </LanguageConsumer>
  );
};

export default SmallGameCard;
