import React from "react";
import { Link } from "react-router-dom";
import {
  StyledTopMenu,
  StyledItem,
  StyledTopMenuItemsWrapper,
  StyledItemIcon,
  StyledAboutLink
} from "./styling";
import { areSchedulesEqual } from "../../utils/utils";
import ChannelIncicator from "../ChannelIncicator";

const TopMenu = React.memo(
  () => (
    <StyledTopMenu>
      <StyledTopMenuItemsWrapper>
        <Link to="/">
          <StyledItem>
            <StyledItemIcon>
              <i className="far fa-calendar-alt" />
            </StyledItemIcon>
            Full schedule
          </StyledItem>
        </Link>
        <ChannelIncicator />
        <StyledAboutLink>
          <Link to="/about">
            <StyledItem>About</StyledItem>
          </Link>
        </StyledAboutLink>
      </StyledTopMenuItemsWrapper>
    </StyledTopMenu>
  ),
  areSchedulesEqual
);

export { TopMenu };
