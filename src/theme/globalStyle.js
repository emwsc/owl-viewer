import styled, { keyframes, createGlobalStyle } from "styled-components";
import { FONT, PLUMP_PURPLE } from "../utils/constants";

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
