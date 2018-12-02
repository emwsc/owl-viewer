import React, { useState, useEffect } from 'react';

import { getSchedule } from './utils'

import { Stage } from './Stage/index'
import { SpecialStagesFilter } from '../SpecialStagesFilter/index';

import { StyledScheduleContentWrapper, StyledScheduleStages } from './styled'
import StyledStagesWrapper from '../../common/StagesWrapper';

import { areSchedulesEqual } from '../../utils/utils';
import { defaultStages } from '../../utils/constants';


const areEqualStages = (prevProps, nextProps) => {
    return prevProps.scheduleYear === nextProps.scheduleYear &&
        prevProps.visibleStages.filter(x => x.isVisible).length === nextProps.visibleStages.filter(x => x.isVisible).length
}

const ScheduleStages = React.memo(({ scheduleYear, visibleStages, stages, handleUpdateSearchWindow }) => {
    return (
        <StyledScheduleStages key={scheduleYear}>
            {stages.map(stage =>
                <Stage
                    visibleStages={visibleStages}
                    key={stage.id}
                    stage={stage}
                    updateSearchWindow={handleUpdateSearchWindow}
                />)}
        </StyledScheduleStages>
    )
}, areEqualStages)

const Schedule = React.memo(({ firebase, selectedYear, handleUpdateSearchWindow }) => {

    const [schedule, setSchedule] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [visibleStages, setVisibleStages] = useState([...defaultStages]);

    useEffect(() => {
        if (!isLoading) {
            setIsLoading(true)
            setSchedule({});
        };
        getSchedule(firebase, selectedYear).then(fetchedSchedule => {
            setSchedule(fetchedSchedule);
            setIsLoading(false);
        })
    }, [selectedYear]);

    function handleChangeStagesVisibility(stageTitle) {
        const newVisibleStages = visibleStages.map(stage => ({ ...stage }));
        const selectedStage = newVisibleStages.find(stage => stage.title === stageTitle);
        selectedStage.isVisible = !selectedStage.isVisible;
        setVisibleStages(newVisibleStages);
    }

    return (
        <React.Fragment>
            <StyledScheduleContentWrapper>
                {isLoading && <div>Loading...</div>}
                {!isLoading && schedule.stages &&
                    <ScheduleStages
                        scheduleYear={schedule.id}
                        stages={schedule.stages}
                        visibleStages={visibleStages}
                        handleUpdateSearchWindow={handleUpdateSearchWindow}
                    />
                }
                {!isLoading && !schedule.stages && <div>Schedule not found</div>}
            </StyledScheduleContentWrapper>
            <StyledStagesWrapper>
                <SpecialStagesFilter
                    changeStagesVisibility={handleChangeStagesVisibility}
                    stages={visibleStages.filter(stage => stage.allowedToFilter)}
                />
            </StyledStagesWrapper>
        </React.Fragment>
    )
}, areSchedulesEqual)

export { Schedule }