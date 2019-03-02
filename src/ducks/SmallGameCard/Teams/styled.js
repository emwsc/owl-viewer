import styled from "styled-components";

export const StyledTeamLogo = styled.div`
  background-image: url(${props => props.logoUrl});
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 5px;
`;

export const StyledTeamName = styled.span`
  transition: all 0.25s ease;
  color: ${props => (props.highlight ? "white" : "black")};
  padding-left: ${props => (props.highlight ? "2px" : "0px")};
  background: ${props => (props.highlight ? props.primaryColor : "white")};
`;

export const StyledWidth = styled.div`
  width: ${props => props.width};
`;
