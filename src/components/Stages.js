import React from 'react';
import { StagesWrapper, Stage } from '../theme/stagesStyle'
import { FilterTitle } from '../theme/globalStyle'


const Stages = React.memo(function Stages({ stages, changeStagesVisibility, primaryColor }) {

    return (
        <React.Fragment>
            <FilterTitle>Special stages filter</FilterTitle>
            <StagesWrapper>
                {stages.map((stage, index) => <Stage onClick={() => { changeStagesVisibility(stage.title) }} isSelected={stage.isVisible} primaryColor={primaryColor} key={'stage-' + index}>{stage.title}</Stage>)}
            </StagesWrapper>
        </React.Fragment>
    )
});

export default Stages;