import styled, { keyframes, createGlobalStyle } from "styled-components";
import { FONT } from "../utils/constants";

const FadeInAnimation = keyframes`  
  from { opacity: 0; bottom: 25px; }
  to { opacity: 1; bottom: 50px; }
`;

export const StyledGlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: ${() => FONT};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #FAFAFA;
  }
`;

export const StyledAppWrapper = styled.div`
  /* display: grid; */
  /* grid-template: 'top' 'year' 'content'; */
  /* grid-template-rows: 50px 30px 1fr; */
  /* grid-template-columns: 250px 1fr 250px; */
  /* grid-gap: 10px; */
  /* background: #F5EFED; */
  /* min-height: 100vh; */
`;

export const StyledTopMenuWrapper = styled.div`
  /* grid-area: top; */
`;

export const StyledRoot = styled.div`
  /* max-width: 1300px;
margin: 0 auto; */
`;

export const StyledPopupWrapper = styled.div`
  border-radius: 5px;
  padding: 10px;
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 200px;
  height: 100px;
  box-shadow: -10px -10px 30px 4px rgba(0, 0, 0, 0.1),
    10px 10px 30px 4px rgba(45, 78, 255, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${FadeInAnimation} 0.25s ease 1;
`;

export const YearFilterWrapper = styled.div`
  /* grid-area: year; */
  position: fixed;
  width: 100%;
  height: 50px;
  top: 50px;
  background: #6247aa;
  padding-top: 20px;
`;
