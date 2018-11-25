import { createGlobalStyle } from 'styled-components'
import styled, { keyframes } from 'styled-components'

const FadeInAnimation = keyframes`  
  from { opacity: 0; bottom: 25px; }
  to { opacity: 1; bottom: 50px; }
`;


export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #F6F6F6
  }
`


export const AppWrapper = styled.div`
display: grid;
grid-template: 'teams content stages';
grid-template-columns: auto 1fr 200px;
grid-gap: 10px;
padding: 10px;
background: #F0F1F4;
height: calc(100vh - 20px);
`

export const TeamListWrapper = styled.div`
grid-area: teams;
border-right: 1px solid #BDBDBD;
`

export const ContentWrapper = styled.div`
grid-area: content;
overflow-y: auto;
height: calc(100vh - 20px);
display: flex;
flex-wrap: wrap;
justify-content: center;
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

export const StagesWrapper = styled.div`
grid-area: stages;
border-left: 1px solid #BDBDBD;
padding-left: 10px;
padding-right: 10px;
`

export const Root = styled.div`
max-width: 1215px;
margin: 0 auto;
`

export const FilterTitle = styled.div`
margin-left: 10px;
    color: #616161;
    margin-bottom: 10px;
`


export const SearchWindowWrapper = styled.div`
border-radius: 5px;
padding: 10px;
position: fixed;
right: 50px;
width: 200px;
bottom: 50px;
height: 100px;
box-shadow: -10px -10px 30px 4px rgba(0,0,0,0.1), 10px 10px 30px 4px rgba(45,78,255,0.15);
display: flex;
justify-content: center;
align-items: center;
animation: ${FadeInAnimation} 0.25s ease 1;
`