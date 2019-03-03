import React, { useState, useEffect } from "react";
import { LanguageConsumer } from "../../../common/LanguageContenxt";
import { StyledContainer, StyledLanguages } from "./styled";
import { getEmojiForLangCode } from "./utils";

const LanguageSwitcher = () => {
  const [isDropDownVisible, changeDropDownVisiblity] = useState(false);

  useEffect(() => {
    document.onclick = event => {
      if (event.target.id !== "switchLangBtn") changeDropDownVisiblity(false);
    };
  }, []);

  return (
    <LanguageConsumer>
      {({ lang, setLang }) => (
        <StyledContainer>
          <div
            id="switchLangBtn"
            onClick={() => changeDropDownVisiblity(!isDropDownVisible)}
          >
            {getEmojiForLangCode(lang)}
            {lang}
          </div>
          {isDropDownVisible && (
            <StyledLanguages>
              <div onClick={() => setLang("ru")}>🇷🇺 • Русский</div>
              <div onClick={() => setLang("en")}>🇺🇸 • English</div>
            </StyledLanguages>
          )}
        </StyledContainer>
      )}
    </LanguageConsumer>
  );
};

export default LanguageSwitcher;
