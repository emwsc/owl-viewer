import styled from "styled-components";
import { NICE_BLACK, PLUMP_PURPLE } from "../../utils/constants";
import { StyledContentWrapper } from "../../common/StyledContentWrapper";

export const StyledTopMenu = styled.div`
  width: 100%;
  /* height: 100%; */
  position: fixed;
  height: 50px;
  background: ${() => NICE_BLACK};
  color: white;
  top: 0;
`;

export const StyledTopMenuItemsWrapper = styled(StyledContentWrapper)`
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const StyledItem = styled.div`
  margin: 3px;
  margin-left: 10px;
  cursor: pointer;
  color: white;
  text-decoration: none;
`;

export const StyledItemIcon = styled.span`
  margin-right: 5px;
  color: ${() => PLUMP_PURPLE};
`;
