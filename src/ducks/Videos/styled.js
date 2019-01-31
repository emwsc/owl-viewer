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

export const StyledClose = styled.div`
  background: gray;
  width: 35px;
  height: 35px;
  font-size: 40px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
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
`;

export const StyledReveal = styled.div`
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 16px;
  user-select: none;
`;

export const StyledTwitchGame = styled.button`
  background: ${props => NICE_BLACK};
  color: white;
  font-weight: 700;
  padding: 5px;
  border-radius: 5px;
  margin-top: 5px;
  cursor: pointer;
  border: none;
  font-family: ${() => FONT};
  font-size: 12px;
`;

export const StyledMLG = styled.img`
  width: 48px;
`;

export const StyledTwichIcon = styled.i`
  font-size: 18px;
`;

export const StyledRevealArrow = styled.span`
  margin-right: 5px;
  transition: all 0.25s ease;
  display: inline-block;
  transform: ${props => (props.isExpanded ? "rotate(-90deg)" : "rotate(0deg)")};
`;

export const StyledContainer = styled.div`
  margin: 0px 20px;
`;
