import React, { useState, useEffect } from 'react';
import { getSchedule } from './utils'
import { Stage } from './Stage/index'
import { StyledContentWrapper } from './styled'

const Schedule = ({ firebase, selectedYear, handleUpdateSearchWindow }) => {
    const [schedule, setSchedule] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!isLoading) setIsLoading(true);
        getSchedule(firebase, selectedYear).then(fetchedSchedule => {
            setSchedule(fetchedSchedule);
            setIsLoading(false);
        })
    }, [selectedYear]);

    return (
        <StyledContentWrapper>
            <div>
                {isLoading && <div>Loading...</div>}
                {!isLoading && schedule.stages &&
                    schedule.stages.map(stage =>
                        <Stage
                            key={stage.id}
                            stage={stage}
                            updateSearchWindow={handleUpdateSearchWindow}
                        />)
                }
                {!isLoading && !schedule.stages && <div>Schedule not found</div>}
            </div>
        </StyledContentWrapper>
    )
}

export { Schedule }