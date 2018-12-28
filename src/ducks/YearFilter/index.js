import React from "react";
import {
  StyledYears,
  StyledYear,
  StyledDelimiter,
  StyledYearFilterWrapper
} from "./styled";
import { areSchedulesEqual } from "../../utils/utils";

const YearFilter = React.memo(({ selectedYear, setSelectedYear }) => {
  return (
    <StyledYearFilterWrapper>
      <StyledYears>
        <StyledYear
          onClick={() => setSelectedYear(2018)}
          isSelected={selectedYear === 2018}
        >
          Season 1
        </StyledYear>
        <StyledDelimiter />
        <StyledYear
          onClick={() => setSelectedYear(2019)}
          isSelected={selectedYear === 2019}
        >
          Season 2
        </StyledYear>
      </StyledYears>
    </StyledYearFilterWrapper>
  );
}, areSchedulesEqual);

export { YearFilter };
