import styled from 'styled-components'

export const GameCard = styled.div`
width: fit-content;
margin: 10px;
border-left: 5px solid;
border-right: 5px solid;
border-left-color: ${(props) => props.leftColor};
border-right-color: ${(props) => props.rightColor};
padding: 10px;
background: white;
border-radius: 5px;
transition: all 0.25s ease;
`

export const Teams = styled.div`
display: grid;
grid-template-columns: 120px 64px 120px;
border-bottom: 1px solid lightgray;
padding-bottom: 10px;
`

export const Team = styled.div`
text-align:center;
`


export const Info = styled.div`
margin-top: 5px;
font-size: 12px;
text-align: center;
`

export const VS = styled.div`
text-align: center;
display: flex;
align-items: center;
font-weight: 700;
justify-content: center;
`

export const TeamTitle = styled.div`
font-weight: 700;
margin-top: 10px;
font-size: 14px;
`

export const SeachVODButton = styled.button`
background: ${(props) => props.background};
color: white;
font-weight: 700;
padding: 5px;
border-radius: 5px;
margin-top: 5px;
cursor: pointer;
border: none;
font-family: 'Open Sans',sans-serif;
font-size: 12px;
`

export const ShowResults = styled.div`
background: ${(props) => props.background};
color: white;
font-weight: 700;
padding: 5px;
border-radius: 5px;
margin-top: 5px;
cursor: pointer;
border: none;
font-size: 12px;
width: fit-content;
`

export const ButtonsContainer = styled.div`
display: flex;
justify-content: space-evenly;
`