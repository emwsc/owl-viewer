import React from 'react';
import { Years, Year, Delimiter } from './styled';

const YearFilter = ({ selectedYear, setSelectedYear }) => {
    return (
        <Years>
            <Year
                onClick={() => setSelectedYear(2018)}
                isSelected={selectedYear === 2018}>
                2018
            </Year>
            <Delimiter />
            <Year
                onClick={() => setSelectedYear(2019)}
                isSelected={selectedYear === 2019}>
                2019</Year>
        </Years>
    )
}

export { YearFilter }