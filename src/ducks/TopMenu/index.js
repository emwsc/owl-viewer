import React from "react";
import { Link } from "react-router-dom";
import {
  StyledTopMenu,
  StyledItem,
  StyledTopMenuItemsWrapper,
  StyledItemIcon,
  StyledAboutLink
} from "./styling";
import ChannelIncicator from "../ChannelIncicator";
import { LanguageConsumer } from "../../common/LanguageContenxt";
import { MAIN_PAGE_DICTIONARY, WORD_KEYS } from "../../utils/language";
import LanguageSwitcher from "./LanguageSwitcher";

const TopMenu = React.memo(() => (
  <LanguageConsumer>
    {lang => (
      <StyledTopMenu>
        <StyledTopMenuItemsWrapper>
          <Link to="/">
            <StyledItem>
              <StyledItemIcon>
                <i className="fas fa-home" />
              </StyledItemIcon>
              {MAIN_PAGE_DICTIONARY[lang + WORD_KEYS.MAIN]}
            </StyledItem>
          </Link>
          <Link to="/schedule">
            <StyledItem>
              <StyledItemIcon>
                <i className="far fa-calendar-alt" />
              </StyledItemIcon>
              {MAIN_PAGE_DICTIONARY[lang + WORD_KEYS.FULL_SCHEDULE]}
            </StyledItem>
          </Link>
          {window.innerWidth > 500 && (
            <React.Fragment>
              <ChannelIncicator />
              <StyledAboutLink>
                <Link to="/about">
                  <StyledItem>
                    {MAIN_PAGE_DICTIONARY[lang + WORD_KEYS.ABOUT]}
                  </StyledItem>
                </Link>
              </StyledAboutLink>
            </React.Fragment>
          )}
          <StyledItem>
            <LanguageSwitcher />
          </StyledItem>
        </StyledTopMenuItemsWrapper>
      </StyledTopMenu>
    )}
  </LanguageConsumer>
));

export { TopMenu };
