import styled from "styled-components";
import { NICE_BLACK, FONT } from "../../utils/constants";







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
  transform: ${props => (!props.isExpanded ? "rotate(-90deg)" : "rotate(0deg)")};
`;

export const StyledContainer = styled.div`
  margin: 0px 20px;
`;
