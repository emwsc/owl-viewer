import styled from "styled-components";
import { NICE_BLACK, PLUMP_PURPLE } from "../../utils/constants";

export const StyledYearFilterWrapper = styled.div`
  /* grid-area: year; */
  position: fixed;
  width: 100%;
  height: 50px;
  top: 50px;
  background: ${() => PLUMP_PURPLE};
  padding-top: 20px;
`;

export const StyledYears = styled.div`
  display: flex;
  background: ${() => NICE_BLACK};
  color: white;
  border-radius: 5px;
  width: fit-content;
  margin: 0 auto;
`;

export const StyledYear = styled.div`
  margin: 5px 10px 5px 10px;
  cursor: pointer;
  color: ${props => (props.isSelected ? "white" : "#9E9E9E")};
  font-weight: ${props => (props.isSelected ? "bold" : "normal")};
`;

export const StyledDelimiter = styled.div`
  background: white;
  width: 2px;
  border-radius: 2px;
  margin-top: 4px;
  margin-bottom: 4px;
`;
