import React, { useState, useEffect } from "react";
import { getSchedule, getCachedSchedule, areEqualStages } from "./utils";
import { Stage } from "./Stage/index";
import { areSchedulesEqual } from "../../utils/utils";
import { defaultStages } from "../../utils/constants";
import { StyledSchedule } from "./styled";
import Filters from "./Filters";

const ScheduleLayout = React.memo(props => {
  const {
    selectedStage,
    scheduleYear,
    visibleStages,
    stages,
    handleUpdateSearchWindow
  } = props;
  debugger;
  return (
    <React.Fragment>
      {stages
        .filter(stage => stage.name === selectedStage)
        .map(stage => (
          <Stage
            visibleStages={visibleStages}
            key={stage.id}
            stage={stage}
            updateSearchWindow={handleUpdateSearchWindow}
          />
        ))}
    </React.Fragment>
  );
}, areEqualStages);

const Schedule = React.memo(({ firebase, handleUpdateSearchWindow }) => {
  const [selectedStage, setSelectedStage] = useState(null);
  const [state, setState] = useState({
    schedule: {},
    isLoading: true,
    visibleStages: [...defaultStages],
    selectedYear: 2019
  });

  useEffect(
    () => {
      let tempSelectedStage = null;

      getCachedSchedule(state.selectedYear)
        .then(cachedSchedule => {
          if (cachedSchedule) {
            setState({
              ...state,
              isLoading: false,
              schedule: cachedSchedule
            });
          }
          setSelectedStage(
            cachedSchedule ? cachedSchedule.stages[0].name : null
          );
          tempSelectedStage = cachedSchedule
            ? cachedSchedule.stages[0].name
            : null;
        })
        .then(() => getSchedule(state.selectedYear, firebase))
        .then(fetchedSchedule => {
          const fetchedState = {
            ...state,
            isLoading: false,
            schedule: fetchedSchedule
          };
          if (!tempSelectedStage && !selectedStage)
            setSelectedStage(fetchedSchedule.stages[0].name);
          setState(fetchedState);
        });
    },
    [state.selectedYear]
  );

  function setSelectedYear(year) {
    setState({ ...state, selectedYear: year });
  }

  return (
    <React.Fragment>
      {state.isLoading && <div>Loading...</div>}
      {!state.isLoading && state.schedule && state.schedule.stages && (
        <React.Fragment>
          <Filters
            firebase={firebase}
            selectedYear={state.selectedYear}
            selectedStage={selectedStage}
            setSelectedYear={setSelectedYear}
            setSelectedStage={setSelectedStage}
          />
          <StyledSchedule>
            <ScheduleLayout
              selectedStage={selectedStage}
              scheduleYear={state.schedule.year}
              stages={state.schedule.stages}
              visibleStages={state.visibleStages}
              handleUpdateSearchWindow={handleUpdateSearchWindow}
            />
          </StyledSchedule>
        </React.Fragment>
      )}
      {!state.isLoading && !state.schedule.stages && (
        <div>Schedule not found</div>
      )}
    </React.Fragment>
  );
}, areSchedulesEqual);

export { Schedule };
