import styled from 'styled-components'


export const StagesWrapper = styled.div`

`

export const Stage = styled.div`
cursor: pointer;
margin: 16px 0px 0px -10px;
padding: 5px 5px 5px 21px;
transition: all 0.25s ease;
background: ${(props) => props.isSelected ? '#' + props.primaryColor : 'inherit'};
color: ${(props) => props.isSelected ? 'white' : 'black'};
`