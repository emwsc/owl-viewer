import styled from "styled-components";

export const StyledContentWrapper = styled.div`
  max-width: 1390px;
  margin: 0 auto;
  @media (max-width: 1400px) {
    max-width: 1000px;
  }
  @media (max-width: 1045px) {
    max-width: 800px;
  }

  @media (max-width: 755px) {
    max-width: 500px;
  }

  @media (max-width: 555px) {
    max-width: 100%;
    margin: 0px 10px;
  }
`;
