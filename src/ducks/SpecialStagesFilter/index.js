import React from 'react';
import StyledStage from './styling';
import StyledFilterTitle from '../../common/FilterTitle';


const SpecialStagesFilter = React.memo(({ stages, changeStagesVisibility, primaryColor }) => (
  <React.Fragment>
    <StyledFilterTitle>Special stages filter</StyledFilterTitle>
    {stages.map(stage => (
      <StyledStage
        onClick={() => { changeStagesVisibility(stage.title); }}
        isSelected={stage.isVisible}
        primaryColor={primaryColor}
        key={stage.title}
      >
        {stage.title}
      </StyledStage>
    ))}
  </React.Fragment>
));

export { SpecialStagesFilter };
