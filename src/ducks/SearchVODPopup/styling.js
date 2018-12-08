import styled from 'styled-components';
import { NICE_BLACK } from '../../utils/constants'

export const StyledOpenWindowButton = styled.button`
background: ${() => NICE_BLACK};
color: white;
font-weight: 700;
padding: 5px;
border-radius: 5px;
margin-top: 5px;
cursor: pointer;
border: none;
`;
