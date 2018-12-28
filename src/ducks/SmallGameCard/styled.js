import styled from "styled-components";
import { NICE_BLACK, PLUMP_PURPLE } from "../../utils/constants";

export const StyledSmallGameCard = styled.div`
  border: 1px solid lightgray;
  box-shadow: 0 1px 0px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.24);
  background: white;
  border-radius: 5px;
  transition: all 0.25s ease;
  width: 225px;
  margin: 5px;
  display: flex;
  font-size: 14px;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
`;

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
`;

export const StyledTwitchIcon = styled.i`
  color: ${() => PLUMP_PURPLE};
`;

export const StyledScore = styled.div`
  margin: 5px;
`;
