import React from "react";
import { StyledFilterItem } from "../styled";
import { StyledSeasons } from "./styled";

const Seasons = React.memo(({ selectedYear, setSelectedYear }) => {
  return (
    <StyledSeasons>
      <StyledFilterItem
        onClick={() => {
          setSelectedYear(2018);
        }}
        isSelected={selectedYear === 2018}
      >
        Season 1
      </StyledFilterItem>
      <StyledFilterItem
        onClick={() => {
          setSelectedYear(2019);
        }}
        isSelected={selectedYear === 2019}
      >
        Season 2
      </StyledFilterItem>
    </StyledSeasons>
  );
});

export default Seasons;
