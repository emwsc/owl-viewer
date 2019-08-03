import React, { useContext } from "react";
import { LanguageContext } from "../../../common/LanguageContenxt";
import { MAIN_PAGE_DICTIONARY, WORD_KEYS } from "../../../utils/language";
import { checkIsPlayoffStage } from "../../../utils/utils";
import SmallGameCard from "../../SmallGameCard";
import {
  StyledColumn,
  StyledDate,
  StyledColumnTitle,
  StyledGamesContainer
} from "./styled";

export const Section = ({
  title,
  dates,
  matches,
  setSelectedGameId,
  selectedTeams
}) => {
  const { lang } = useContext(LanguageContext);
  return (
    <div>
      <StyledColumnTitle>{title}</StyledColumnTitle>
      <StyledColumn>
        {(!dates || dates.length === 0) &&
          MAIN_PAGE_DICTIONARY[lang + WORD_KEYS.NO_GAMES]}
        {dates.map(date => (
          <div key={date}>
            <StyledDate>{date}</StyledDate>
            <StyledGamesContainer>
              {matches
                .filter(
                  game => game.startDateMoment.format("DD.MM.YYYY") === date
                )
                .map(game => (
                  <SmallGameCard
                    key={`schedule-${game.id}`}
                    game={game}
                    setSelectedGameId={setSelectedGameId}
                    selectedTeams={selectedTeams}
                    isPlayoffStage={checkIsPlayoffStage(game.bracket)}
                  />
                ))}
            </StyledGamesContainer>
          </div>
        ))}
      </StyledColumn>
    </div>
  );
};

export default Section;
