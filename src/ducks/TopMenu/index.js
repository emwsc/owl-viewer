import React from "react";
import { Link } from "react-router-dom";
import {
  StyledTopMenu,
  StyledItem,
  StyledTopMenuItemsWrapper
} from "./styling";
import { areSchedulesEqual } from "../../utils/utils";

const TopMenu = React.memo(
  () => (
    <StyledTopMenu>
      <StyledTopMenuItemsWrapper>
        <Link to="/">
          <StyledItem>Full schedule</StyledItem>
        </Link>
        <Link to="/teams">
          <StyledItem>By teams</StyledItem>
        </Link>
      </StyledTopMenuItemsWrapper>
    </StyledTopMenu>
  ),
  areSchedulesEqual
);

export { TopMenu };
