import React, { useState } from "react";
import moment from "moment";
import {
  StyledSmallGameCard,
  StyledScore,
  StyledInfoContainer
} from "./styled";
import PastGameButtons from "./PastGameButtons";
import { checkIsNotTitleMatch, pushToBrowserHistory, getCardTitle } from "./utils";
import { TOTAL_SCORE_LESS_THEN, DICTIONARY, WORDS_KEYS } from "./constants";
import { LanguageConsumer } from "../../common/LanguageContenxt";
import TeamsLayout from "./TeamsLayouts";
import Countdown from "./Countdown";

moment().format();

const nowDate = new Date();

const SmallGameCard = props => {
  const { game, isTeamsHidden, selectedTeams = [], setSelectedGameId } = props;
  const isNotTitleMatch = checkIsNotTitleMatch(game.bracket);
  const [isScoreVisible, changeScoreVisibility] = useState(false);
  const [isTeamsVisible, changeTeamsVisibility] = useState(
    isNotTitleMatch && !isTeamsHidden
  );

  const totalScores = game.scores[0] + game.scores[1];
  const showPointer = nowDate > game.startDateObj;

  function handleOnCardClick() {
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
      {({ lang }) => (
        <StyledSmallGameCard
          isTitleMatch={!isNotTitleMatch}
          showPointer={showPointer}
          onClick={handleOnCardClick}
          title={getCardTitle(totalScores, lang)}
        >
          <StyledInfoContainer>
            <TeamsLayout
              game={game}
              selectedTeams={selectedTeams}
              isTeamsVisible={isTeamsVisible}
            />
            <Countdown game={game} lang={lang} />
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
