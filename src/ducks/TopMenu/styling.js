import styled from 'styled-components';
import { NICE_BLACK } from '../../utils/constants'

export const StyledTopMenu = styled.div`
width: 100%;
height: 100%;
background: ${() => NICE_BLACK};
color: white;
display: flex;
align-items: center;
`;


export const StyledItem = styled.div`
margin: 3px;
margin-left: 10px;
cursor: pointer;
color: white;
text-decoration: none;
`;
