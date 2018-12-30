import styled from "styled-components";
import { PLUMP_PURPLE } from "../../../utils/constants";

export const StyledFilters = styled.div`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  background: ${() => PLUMP_PURPLE};
  padding-top: 20px;
  font-size: 12px;
`;

export const StyledFilterItem = styled.div`
  background: #282829;
  color: ${props => (props.isSelected ? "white" : "lightgray")};
  width: fit-content;
  padding: 2px 5px;
  border-radius: 5px;
  margin: 2px 5px 2px 0px;
  cursor: pointer;
`;
