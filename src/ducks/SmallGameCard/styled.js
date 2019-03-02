import styled from "styled-components";
import { PLUMP_PURPLE } from "../../utils/constants";

export const StyledSmallGameCard = styled.div`
  border: 1px solid lightgray;
  box-shadow: 0 1px 0px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.24);
  background: white;
  border-radius: 5px;
  transition: all 0.25s ease;
  width: 225px;
  margin: 5px 5px 5px 0px;
  font-size: 14px;
  padding: 5px;
  cursor: ${props => props.showPointer && "pointer"};
  height: 50px;
  min-width: 225px;
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
