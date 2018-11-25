import React from 'react';
import { StyledTopMenu, StyledItem } from './styling';

const TopMenu = React.memo(function TopMenu() {
    return (
        <StyledTopMenu>
            <StyledItem>Full schedule</StyledItem>
            <StyledItem>By teams</StyledItem>
        </StyledTopMenu>
    )
});


export { TopMenu };