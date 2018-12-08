import styled from 'styled-components';
import { FONT, NICE_BLACK } from '../../utils/constants';

export const StyledGameCard = styled.div`
width: fit-content;
margin: 10px;
border-left: 5px solid;
border-right: 5px solid;
border-left-color: ${props => props.leftColor};
border-right-color: ${props => props.rightColor};
padding: 10px;
background: white;
border-radius: 5px;
transition: all 0.25s ease;
display: grid;
grid-template-rows: auto 30px;
grid-gap: 5px;
border-bottom: 1px solid lightgray;
border-top: 1px solid lightgray;
`;

export const StyledInfo = styled.div`
display: grid;
align-items: center;
grid-template-columns: 110px 64px 110px;
`;

export const StyledTeam = styled.div`
text-align:center;
`;


export const StyledAdditionalInfo = styled.div`
font-size: 12px;
text-align: center;
`;

export const StyledVS = styled.div`
text-align: center;
display: flex;
align-items: center;
font-weight: 700;
justify-content: center;
`;

export const StyledTeamTitle = styled.div`
font-weight: 700;
margin-top: 10px;
font-size: 14px;
`;

export const StyledSeachVODButton = styled.button`
background: ${(props) => NICE_BLACK};
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

export const StyledShowResults = styled.div`
background: ${ () => NICE_BLACK};
color: white;
font-weight: 700;
padding: 5px;
border-radius: 5px;
margin-top: 5px;
cursor: pointer;
border: none;
font-size: 12px;
width: fit-content;
display: flex;
align-items: center;
`;

export const StyledCheckbox = styled.input`
margin: 0;
margin-left: 5px;
`;

export const StyledButtonsContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
`;


export const StyledTeamLogo = styled.div`
background-image: url( ${props => props.logoUrl});
width: 32px;
height: 32px;
background-repeat: no-repeat;
background-size: cover;
margin: 0 auto;
`;
