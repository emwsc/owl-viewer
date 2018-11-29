import React from 'react';
import { StyledYears, StyledYear, StyledDelimiter } from './styled';

const YearFilter = ({ selectedYear, setSelectedYear }) => {
    return (
        <StyledYears>
            <StyledYear
                onClick={() => setSelectedYear(2018)}
                isSelected={selectedYear === 2018}>
                2017-2018
            </StyledYear>
            <StyledDelimiter />
            <StyledYear
                onClick={() => setSelectedYear(2019)}
                isSelected={selectedYear === 2019}>
                2018-2019
                </StyledYear>
        </StyledYears>
    )
}

export { YearFilter }