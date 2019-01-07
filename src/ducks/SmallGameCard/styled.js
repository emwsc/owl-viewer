import styled from "styled-components";
import { NICE_BLACK, PLUMP_PURPLE } from "../../utils/constants";

export const StyledSmallGameCard = styled.div`
  border: 1px solid lightgray;
  box-shadow: ${props =>
    props.highlightCard
      ? "0 0px 1px 2px #F44336"
      : "0 1px 0px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.24)"};
  background: white;
  border-radius: 5px;
  transition: all 0.25s ease;
  width: 225px;
  margin: 5px 5px 5px 0px;
  display: flex;
  font-size: 14px;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  z-index: -1;
  transform: ${props => props.highlightCard && "scale(1.1)"};
  margin-left: ${props => (props.highlightCard ? "15px" : "5px")};
  margin-right: ${props => (props.highlightCard ? "20px" : "5px")};
`;

// transform: scale(1.1);
//     margin-left: 15px;
//     margin-right: 20px;
//     box-shadow: 0 0px 1px 2px #181B32;
//     z-index: -1;

export const StyledTeamContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
`;

export const StyledTeamLogo = styled.div`
  background-image: url(${props => props.logoUrl});
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 5px;
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
`;

export const StyledTwitchIcon = styled.i`
  color: ${() => PLUMP_PURPLE};
`;

export const StyledScore = styled.div`
  margin: 5px;
`;
