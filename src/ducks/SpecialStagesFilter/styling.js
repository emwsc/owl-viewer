import styled from 'styled-components';
import { NICE_BLACK } from '../../utils/constants'

const StyledStage = styled.div`
cursor: pointer;
margin: 16px 0px 0px -10px;
padding: 5px 5px 5px 21px;
transition: all 0.25s ease;
background: ${props => (props.isSelected ? (props.primaryColor ? props.primaryColor : NICE_BLACK) : 'inherit')};
color: ${props => (props.isSelected ? 'white' : 'black')};
`;

export default StyledStage;
