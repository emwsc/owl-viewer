import styled from "styled-components";

export const StyledTeam = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: white;
  margin: 2px 5px 2px 0px;
  border-radius: 5px;
`;

export const StyledTeamLogo = styled.div`
  background-image: url(${props => props.logoUrl});
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 5px;
  margin-left: 5px;
`;

export const StyledTeamTitle = styled.div`
  padding: 5px;
  flex-grow: 2;
  color: ${props => (props.isSelected ? "white" : "black")};
  background: ${props => (props.isSelected ? props.primaryColor : "white")};
  transition: all 0.25s ease;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
