import styled, { keyframes } from 'styled-components'


export const GamesWrapper = styled.div`
overflow-y: auto;
height: calc(100vh - 20px);
::-webkit-scrollbar-track
{
	background-color: #F5F5F5;
}

::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
	background-color: gray;
}
`

export const GameCard = styled.div`
width: fit-content;
margin: 30px auto;
border-left: 5px solid;
border-right: 5px solid;
border-left-color: ${(props) => '#' + props.leftColor};
border-right-color: ${(props) => '#' + props.rightColor};
padding: 10px;
background: white;
border-radius: 5px;
transition: all 0.25s ease;
/* :hover {
    box-shadow:0px 12px 56px 2px #424242;
  } */
`

export const GameCard__Teams = styled.div`
display: grid;
grid-template-columns: 120px 64px 120px;
border-bottom: 1px solid lightgray;
padding-bottom: 10px;
`

export const GameCard__Team = styled.div`
text-align:center;
`


export const GameCard__Info = styled.div`
margin-top: 5px;
font-size: 12px;
text-align: center;
`

export const GameCard__VS = styled.div`
text-align: center;
display: flex;
align-items: center;
font-weight: 700;
justify-content: center;
`

export const GameCard__TeamTitle = styled.div`
font-weight: 700;
margin-top: 10px;
font-size: 14px;
`

export const GameCard__SeachVODButton = styled.button`
background: ${(props) => '#' + props.primaryColor};
color: white;
font-weight: 700;
padding: 5px;
border-radius: 5px;
margin-top: 5px;
cursor: pointer;
border: none;
`