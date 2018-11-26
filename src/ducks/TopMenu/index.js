import React from 'react';
import { Link } from 'react-router-dom';
import { StyledTopMenu, StyledItem } from './styling';

const TopMenu = React.memo(() => (
  <StyledTopMenu>
    <Link to="/">
      <StyledItem>Full schedule</StyledItem>
    </Link>
    <Link to="/teams">
      <StyledItem>By teams</StyledItem>
    </Link>
  </StyledTopMenu>
));


export { TopMenu };
