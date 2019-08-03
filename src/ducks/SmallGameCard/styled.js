import styled, { css } from "styled-components";
import { PLUMP_PURPLE } from "../../utils/constants";

const cup = css`
  &:before {
    position: absolute;
    top: -3px;
    left: -8px;
    background: transparent;
    font-family: "Font Awesome 5 Free";
    content: "\f091";
    font-size: 12px;
    font-weight: bold;
    color: ${PLUMP_PURPLE};
  }
`;

export const StyledSmallGameCard = styled.div`
  background: white;
  border-radius: 5px;
  border: 1px solid lightgray;
  cursor: ${props => props.showPointer && "pointer"};
  font-size: 14px;
  height: 50px;
  margin: 5px 5px 5px 0px;
  min-width: 225px;
  padding: 5px;
  position: relative;
  transition: all 0.25s ease;
  width: 225px;
  z-index: 0;
  ${props => props.isTitleMatch && cup}
  @media (max-width: 555px) {
    width: 100vw;
  }
`;

export const StyledInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledTeamContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
  width: fit-content;
  border: ${props =>
    props.highlight ? `1px solid ${props.primaryColor}` : "none"};
  padding-left: ${props => (props.highlight ? "5px" : "0px")};
`;

export const StyledScore = styled.div`
  margin: 5px;
`;

export const StyledHiddenText = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`;
