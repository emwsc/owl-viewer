import React from "react";
import { StyledTeamContainer } from "../../styled";
import { StyledTeamLogo, StyledTeamName, StyledWidth } from "./styled";
import { DICTIONARY, WORDS_KEYS } from "../../constants";
import { LanguageConsumer } from "../../../../common/LanguageContenxt";

const Teams = ({ game, selectedTeams, isTeamsVisible }) => {
  const isTeamOneSelected = selectedTeams.some(
    id => game.competitors[0].id === id
  );

  const isTeamTwoSelected = selectedTeams.some(
    id => game.competitors[1].id === id
  );

  const teamOneProps = {
    highlight: isTeamOneSelected && isTeamsVisible,
    primaryColor: game.competitors[0].primaryColor
  };

  const teamTwoProps = {
    highlight: isTeamTwoSelected && isTeamsVisible,
    primaryColor: game.competitors[1].primaryColor
  };

  return (
    <LanguageConsumer>
      {({ lang }) => (
        <StyledWidth width="180px">
          <StyledTeamContainer {...teamOneProps}>
            {game.competitors[0].logo && (
              <StyledTeamLogo logoUrl={game.competitors[0].logo} />
            )}
            <StyledTeamName {...teamOneProps}>
              {game.competitors[0].name
                ? game.competitors[0].name
                : DICTIONARY[lang + WORDS_KEYS.TO_BE_DETERMINED]}
            </StyledTeamName>
          </StyledTeamContainer>
          <StyledTeamContainer {...teamTwoProps}>
            {game.competitors[1].logo && (
              <StyledTeamLogo logoUrl={game.competitors[1].logo} />
            )}
            <StyledTeamName {...teamTwoProps}>
              {game.competitors[1].name
                ? game.competitors[1].name
                : DICTIONARY[lang + WORDS_KEYS.TO_BE_DETERMINED]}
            </StyledTeamName>
          </StyledTeamContainer>
        </StyledWidth>
      )}
    </LanguageConsumer>
  );
};

export default Teams;
