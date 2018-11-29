import React from 'react';
import { StyledScheduleTitle, StyledStage } from './styled'
import { Week } from './Week/index'

const Stage = React.memo(({ stage, updateSearchWindow }) => {
    return (
        <StyledStage>
            <StyledScheduleTitle>
                {stage.name}
            </StyledScheduleTitle>
            {stage.weeks.map((week) =>
                <Week
                    key={week.id}
                    week={week}
                    updateSearchWindow={updateSearchWindow}
                />)}
        </StyledStage>
    )
})

export { Stage };