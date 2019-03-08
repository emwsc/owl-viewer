import React from "react";
import { DICTIONARY, WORDS_KEYS } from "../constants";
import { LanguageConsumer } from "../../../common/LanguageContenxt";
import Teams from "./Teams";
import { StyledTeamContainer, StyledHiddenText } from "../styled";

const TeamsLayout = props => (
  <LanguageConsumer>
    {({ lang }) => (
      <React.Fragment>
        {!props.isTeamsVisible && (
          <StyledTeamContainer>
            <StyledHiddenText>
              {DICTIONARY[lang + WORDS_KEYS.REVEAL_TEAMS]}
            </StyledHiddenText>
          </StyledTeamContainer>
        )}
        {props.isTeamsVisible && <Teams {...props} />}
      </React.Fragment>
    )}
  </LanguageConsumer>
);

export default TeamsLayout;
