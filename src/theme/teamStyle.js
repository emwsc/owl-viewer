import styled from 'styled-components'

export const TeamSection = styled.div`
display: flex;
align-items: center;
margin-bottom: 10px;
cursor: pointer;
/* border: 1px solid;
border-color: ${(props) => '#' + props.borderColor}; */
width: 250px;
`

export const TeamLogo = styled.div`
background-image: url( ${(props) => props.logoUrl});
width: ${(props) => props.big ? '32px' : '16px'};
height: ${(props) => props.big ? '32px' : '16px'};
background-repeat: no-repeat;
background-size: cover;
margin:${(props) => !props.hasMargin ? '0 auto' : 0};
margin-right:${(props) => props.hasMargin ? '10px' : ''};
margin-left:${(props) => props.hasMargin ? '10px' : ''};
`

export const TeamTitle = styled.div`
background: ${(props) => props.isSelected ? '#' + props.primaryColor : 'inherit'}; 
color:  ${(props) => props.isSelected ? 'white' : 'black'}; ;
padding: 5px;
flex-grow: 2;
transition: all 0.25s ease;
:hover {
    background: ${(props) => '#' + props.primaryColor};
    color: white;
  }
`