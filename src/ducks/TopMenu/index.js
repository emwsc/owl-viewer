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

const TopMenu = React.memo(() => (
  <StyledTopMenu>
    <StyledTopMenuItemsWrapper>
      <Link to="/">
        <StyledItem>
          <StyledItemIcon>
            <i className="fas fa-home" />
          </StyledItemIcon>
          Main
        </StyledItem>
      </Link>
      <Link to="/schedule">
        <StyledItem>
          <StyledItemIcon>
            <i className="far fa-calendar-alt" />
          </StyledItemIcon>
          Full schedule
        </StyledItem>
      </Link>
      {window.innerWidth > 500 && (
        <React.Fragment>
          <ChannelIncicator />
          <StyledAboutLink>
            <Link to="/about">
              <StyledItem>About</StyledItem>
            </Link>
          </StyledAboutLink>
        </React.Fragment>
      )}
    </StyledTopMenuItemsWrapper>
  </StyledTopMenu>
));

export { TopMenu };
