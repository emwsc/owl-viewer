import styled from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
`;

export const StyledLanguages = styled.div`
  position: absolute;
  top: 24px;
  right: 0px;
  width: 200px;
  height: fit-content;
  background: white;
  color: black;
  padding: 5px;
  box-shadow: 0px 0 7px 2px rgba(50, 50, 50, 0.75);
  border-radius: 5px;
  & > div {
    padding: 20px;
    text-align: center;
    &:hover {
      background: whitesmoke;
    }
  }
`;
