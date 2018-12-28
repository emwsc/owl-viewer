import styled from "styled-components";

export const StyledContentWrapper = styled.div`
  max-width: 1390px;
  margin: 0 auto;
  @media (max-width: 1400px) {
    max-width: 1030px;
  }
  @media (max-width: 1045px) {
    max-width: 685px;
  }

  @media (max-width: 700px) {
    max-width: 400px;
  }
`;
