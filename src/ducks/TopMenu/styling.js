import styled from "styled-components";
import { NICE_BLACK } from "../../utils/constants";

export const StyledTopMenu = styled.div`
  width: 100%;
  /* height: 100%; */
  position: fixed;
  height: 50px;
  background: ${() => NICE_BLACK};
  color: white;
`;

export const StyledTopMenuItemsWrapper = styled.div`
  max-width: 100vh;
  margin: 0 auto;
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
