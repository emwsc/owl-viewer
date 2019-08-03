import styled from "styled-components";
import { StyledContentWrapper } from "../../common/StyledContentWrapper";

export const StyledMainWrapper = styled(StyledContentWrapper)`
  margin-top: 15px;
`;

export const StyledLoaderWrapper = styled(StyledContentWrapper)`
  margin-top: 65px;
  @media (max-width: 555px) {
    margin-top: 85px;
  }
`;

export const StyledTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 555px) {
    display: block;
  }
`;
