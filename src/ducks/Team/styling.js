import styled from 'styled-components';

export const StyledTeamSection = styled.div`
display: flex;
align-items: center;
margin-bottom: 10px;
cursor: pointer;
width: 250px;
`;

export const StyledTeamLogo = styled.div`
background-image: url( ${props => props.logoUrl});
width: 16px;
height: 16px;
background-repeat: no-repeat;
background-size: cover;
margin-right:10px;
margin-left:10px;
`;

export const StyledTeamTitle = styled.div`
background: ${props => (props.isSelected ? props.primaryColor : 'inherit')}; 
color:  ${props => (props.isSelected ? 'white' : 'black')}; ;
padding: 5px;
flex-grow: 2;
transition: all 0.25s ease;
:hover {
    background: ${props => props.primaryColor};
    color: white;
  }
`;
