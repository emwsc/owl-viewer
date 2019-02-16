import styled from "styled-components";
import { StyledContentWrapper } from "../../common/StyledContentWrapper";

export const StyledMatch = styled(StyledContentWrapper)`
  margin-top: 60px;
  @media (max-width: 555px) {
    margin: 85px 0 0 0;
  }
`;

export const StyledMatchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-template-rows: auto auto auto;
  margin: 0 auto;
  width: 750px;
  & > div:nth-child(1) {
    color: black;
    font-size: 21px;
    display: block;
    width: 650px;
    grid-row-start: 1;
    grid-row-end: 1;
    grid-column-start: 1;
    grid-column-end: 2;
  }
  & > div:nth-child(2) {
    grid-row-start: 2;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 1;
  }
  & > div:nth-child(3) {
    grid-row-start: 2;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 2;
  }

  & > div:nth-child(4) {
    grid-row-start: 3;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 2;
  }
  @media (max-width: 770px) {
    display: block;
    width: 100%;

    & > div:nth-child(1) {
      font-size: 16px;
      width: auto;
    }
  }
`;
