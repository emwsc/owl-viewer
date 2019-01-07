import React, { useState, useEffect } from "react";
import {
  getSchedule,
  getCachedSchedule,
  areEqualStages,
  useOnSelectedYear
} from "./utils";
import { Stage } from "./Stage/index";
import { areSchedulesEqual } from "../../utils/utils";
import { StyledSchedule } from "./styled";
import Filters from "./Filters";
import { initialState } from "./constants";

const ScheduleLayout = React.memo(props => {
  const { selectedStage, stages } = props;
  const stage = stages.find(stage => stage.name === selectedStage);
  return (
    <React.Fragment>
      {stage && <Stage stage={stage} />}
      {!stage && <div>Schedule not found</div>}
    </React.Fragment>
  );
}, areEqualStages);

const Schedule = () => {
  const [selectedStage, setSelectedStage] = useState(null);
  const [state, setState] = useState(initialState);

  // useEffect(
  //   () => {
  //     let tempSelectedStage = null;
  //     getCachedSchedule(state.selectedYear)
  //       .then(cachedSchedule => {
  //         if (cachedSchedule) {
  //           setState({
  //             ...state,
  //             isLoading: false,
  //             schedule: cachedSchedule
  //           });
  //         }
  //         setSelectedStage(
  //           cachedSchedule ? cachedSchedule.stages[0].name : null
  //         );
  //         tempSelectedStage = cachedSchedule
  //           ? cachedSchedule.stages[0].name
  //           : null;
  //       })
  //       .then(() => getSchedule(state.selectedYear))
  //       .then(fetchedSchedule => {
  //         const fetchedState = {
  //           ...state,
  //           isLoading: false,
  //           schedule: fetchedSchedule
  //         };
  //         if (state.selectedYear === fetchedSchedule.selectedYear) {
  //           if (!tempSelectedStage && !selectedStage)
  //             setSelectedStage(fetchedSchedule.stages[0].name);
  //           setState(fetchedState);
  //         }
  //       });
  //   },
  //   [state.selectedYear]
  // );

  useOnSelectedYear({
    state,
    setState,
    selectedStage,
    setSelectedStage
  });

  function setSelectedYear(year) {
    setState({ ...state, selectedYear: year });
  }

  return (
    <React.Fragment>
      {state.isLoading && <div>Loading...</div>}
      {!state.isLoading && state.schedule && state.schedule.stages && (
        <React.Fragment>
          <Filters
            selectedYear={state.selectedYear}
            selectedStage={selectedStage}
            setSelectedYear={setSelectedYear}
            setSelectedStage={setSelectedStage}
          />
          <StyledSchedule>
            <ScheduleLayout
              selectedStage={selectedStage}
              stages={state.schedule.stages}
              visibleStages={state.visibleStages}
            />
          </StyledSchedule>
        </React.Fragment>
      )}
      {!state.isLoading && !state.schedule.stages && (
        <div>Schedule not found</div>
      )}
    </React.Fragment>
  );
};

export default Schedule;
