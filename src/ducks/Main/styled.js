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

export const StyledColumn = styled.div``;

export const StyledDate = styled.div`
  margin: 10px 0px;
  font-size: 16px;
  font-weight: bold;
`;

export const StyledColumnTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const StyledGamesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
