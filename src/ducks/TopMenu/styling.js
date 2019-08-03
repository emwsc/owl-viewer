import styled from "styled-components";
import { NICE_BLACK, PLUMP_PURPLE } from "../../utils/constants";
import { StyledContentWrapper } from "../../common/StyledContentWrapper";

export const StyledTopMenu = styled.header`
  width: 100%;
  /* height: 100%; */
  position: fixed;
  z-index: 100;
  height: 50px;
  background: ${() => NICE_BLACK};
  color: white;
  top: 0;
  @media (max-width: 555px) {
    font-size: 14px;
    width: 100%;
  }
`;

export const StyledTopMenuItemsWrapper = styled(StyledContentWrapper)`
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
  @media (max-width: 555px) {
    margin: 0 auto;
    width: 95%;
    justify-content: space-between;
  }
  & > a {
    text-decoration: none;
  }
`;

export const StyledItem = styled.div`
  margin-right: 10px;
  cursor: pointer;
  color: white;
  text-decoration: none;
`;

export const StyledItemIcon = styled.span`
  margin-right: 5px;
  color: ${() => PLUMP_PURPLE};
`;

export const StyledAboutLink = styled.span`
  margin-right: 15px;
  flex-grow: 2;
  text-align: right;
  & > a {
    text-decoration: none;
  }
`;
