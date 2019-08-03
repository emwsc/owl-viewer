import styled from "styled-components";
import { PLUMP_PURPLE } from "../../utils/constants";

export const StyledFilters = styled.div`
  background: ${() => PLUMP_PURPLE};
  font-size: 12px;
  margin-bottom: 10px;
  margin-top: 40px;
  padding-bottom: 10px;
  padding-top: 20px;
  width: 100%;
`;

export const StyledFilterItem = styled.div`
  background: #282829;
  border-radius: 5px;
  color: ${props => (props.isSelected ? "white" : "lightgray")};
  cursor: pointer;
  margin: 2px 5px 2px 0px;
  padding: 2px 5px;
  width: fit-content;
`;
