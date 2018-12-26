import styled from "styled-components";

export const StyledContentWrapper = styled.div`
  height: calc(100vh - 100px);
  max-width: 100vh;
  margin: 0 auto;
  width: 100%;
  @media (max-width: 1000px) {
    max-width: 650px;
  }
  @media (max-width: 655px) {
    max-width: 350px;
  }
  /* overflow-y: auto;
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
} */
`;
