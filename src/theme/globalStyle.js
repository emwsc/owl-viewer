import { createGlobalStyle } from 'styled-components'
import styled, { keyframes } from 'styled-components'
import { FONT } from '../utils/constants';

const FadeInAnimation = keyframes`  
  from { opacity: 0; bottom: 25px; }
  to { opacity: 1; bottom: 50px; }
`;


export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: ${(props) => FONT};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #F6F6F6
  }
`


export const AppWrapper = styled.div`
display: grid;
grid-template: 'top top top' 'teams content stages';
grid-template-rows: 50px 1fr;
grid-template-columns: auto 1fr 200px;
grid-gap: 10px;
background: #F0F1F4;
height: calc(100vh - 20px);
`

export const TopMenuWrapper = styled.div`
grid-area: top;
`

export const Root = styled.div`
max-width: 1215px;
margin: 0 auto;
`

export const PopupWrapper = styled.div`
border-radius: 5px;
padding: 10px;
position: fixed;
right: 50px;
bottom: 50px;
width: 200px;
height: 100px;
box-shadow: -10px -10px 30px 4px rgba(0,0,0,0.1), 10px 10px 30px 4px rgba(45,78,255,0.15);
display: flex;
justify-content: center;
align-items: center;
animation: ${FadeInAnimation} 0.25s ease 1;
`