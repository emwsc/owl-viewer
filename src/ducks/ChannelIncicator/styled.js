import styled, { keyframes } from "styled-components";

const Live = keyframes`
    0% {
      box-shadow: 0 0 0 0 rgba(244, 67, 54, 0.58);
    }
    70% {
        box-shadow: 0 0 0 5px rgba(244, 67, 54, 0.25);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(244, 67, 54, 0.58);
    }
  }
`;

export const StyledTwitchLink = styled.a`
  cursor: pointer;
  color: white;
  text-decoration: none;
`;

export const StyledLive = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 4px 0 5px;
  border-radius: 50%;
  background: #f44336;
  cursor: pointer;
  box-shadow: 0 0 0 rgba(244, 67, 54, 0.58);
  animation: ${Live} 1.5s infinite;
`;
