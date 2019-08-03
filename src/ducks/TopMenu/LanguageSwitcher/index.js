import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../../common/LanguageContenxt";
import { StyledContainer, StyledLanguages } from "./styled";
import { getEmojiForLangCode } from "./utils";

const LanguageSwitcher = () => {
  const [isDropDownVisible, changeDropDownVisiblity] = useState(false);

  const { lang, setLang } = useContext(LanguageContext);

  useEffect(() => {
    document.onclick = event => {
      if (event.target.id !== "switchLangBtn") changeDropDownVisiblity(false);
    };
  }, []);

  return (
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
          <div onClick={() => setLang("ru")}>
            <span role="img" area-label="RU">
              🇷🇺
            </span>
            • Русский
          </div>
          <div onClick={() => setLang("en")}>
            <span role="img" area-label="ENG">
              🇺🇸
            </span>{" "}
            • English
          </div>
        </StyledLanguages>
      )}
    </StyledContainer>
  );
};

export default LanguageSwitcher;
