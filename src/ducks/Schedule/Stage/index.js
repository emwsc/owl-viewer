import React from 'react';
import { StyledScheduleTitle, StyledStage } from './styled'
import { Week } from './Week/index'

const Stage = React.memo(({ stage, visibleStages, updateSearchWindow }) => {
    return (
        <StyledStage>
            <StyledScheduleTitle>
                {stage.name}
            </StyledScheduleTitle>
            {stage.weeks.map((week) =>
                <Week
                    visibleStages={visibleStages}
                    key={week.id}
                    week={week}
                    updateSearchWindow={updateSearchWindow}
                />)}
        </StyledStage>
    )
})

export { Stage };