import styled from "styled-components";
import { NICE_BLACK, FONT } from "../../utils/constants";

export const StyledVideosSection = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 300px;
  background: #f9f9f9;
  padding: 10px;
  z-index: 10;
`;

export const StyledClose = styled.div`
  background: gray;
  width: 35px;
  height: 35px;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: -35px;
  z-index: 100;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  color: white;
  cursor: pointer;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  border-left: 1px solid white;
`;

export const StyledMatchWindowOpen = styled.a`
  background: gray;
  width: 35px;
  height: 35px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: -35px;
  z-index: 100;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  color: white;
  cursor: pointer;
  top: 60px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  border-left: 1px solid white;
`;

export const StyledBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  display: block;
  z-index: 9;
`;
