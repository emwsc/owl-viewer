import React, { useState, useEffect } from "react";
import { getSchedule, getCachedSchedule, areEqualStages } from "./utils";
import { Stage } from "./Stage/index";
import { areSchedulesEqual } from "../../utils/utils";
import { defaultStages } from "../../utils/constants";
import { StyledContentWrapper } from "../../common/StyledContentWrapper";
import { StyledSchedule } from "./styled";

const ScheduleLayout = React.memo(
  ({ scheduleYear, visibleStages, stages, handleUpdateSearchWindow }) => {
    return (
      <React.Fragment>
        {stages.slice(0, 1).map(stage => (
          <Stage
            visibleStages={visibleStages}
            key={stage.id}
            stage={stage}
            updateSearchWindow={handleUpdateSearchWindow}
          />
        ))}
      </React.Fragment>
    );
  },
  areEqualStages
);

const Schedule = React.memo(
  ({ firebase, selectedYear, handleUpdateSearchWindow }) => {
    // const [schedule, setSchedule] = useState({});
    // const [isLoading, setIsLoading] = useState(true);
    // const [visibleStages, setVisibleStages] = useState([...defaultStages]);

    const [state, setState] = useState({
      schedule: {},
      isLoading: true,
      visibleStages: [...defaultStages]
    });

    useEffect(
      () => {
        // if (!state.isLoading) {
        //     // setIsLoading(true)
        //     // setSchedule({});
        //     setState({ ...state, isLoading: true, schedule: {} })
        // };
        getCachedSchedule(selectedYear)
          .then(cachedSchedule => {
            // setSchedule(fetchedSchedule);
            // setIsLoading(false);
            if (cachedSchedule)
              setState({
                ...state,
                isLoading: false,
                schedule: cachedSchedule
              });
          })
          .then(() => getSchedule(selectedYear, firebase))
          .then(fetchedSchedule => {
            setState({ ...state, isLoading: false, schedule: fetchedSchedule });
          });
      },
      [selectedYear]
    );

    function handleChangeStagesVisibility(stageTitle) {
      const newVisibleStages = state.visibleStages.map(stage => ({ ...stage }));
      const selectedStage = newVisibleStages.find(
        stage => stage.title === stageTitle
      );
      selectedStage.isVisible = !selectedStage.isVisible;
      // setVisibleStages(newVisibleStages);
      setState({ ...state, visibleStages: newVisibleStages });
    }

    return (
      <React.Fragment>
        <StyledSchedule>
          {state.isLoading && <div>Loading...</div>}
          {!state.isLoading && state.schedule && state.schedule.stages && (
            <ScheduleLayout
              scheduleYear={state.schedule.year}
              stages={state.schedule.stages}
              visibleStages={state.visibleStages}
              handleUpdateSearchWindow={handleUpdateSearchWindow}
            />
          )}
          {!state.isLoading && !state.schedule.stages && (
            <div>Schedule not found</div>
          )}
        </StyledSchedule>
      </React.Fragment>
    );
  },
  areSchedulesEqual
);

export { Schedule };
