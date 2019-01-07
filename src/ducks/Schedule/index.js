import React, { useState } from "react";
import { areEqualStages, useOnSelectedYear } from "./utils";
import { Stage } from "./Stage/index";
import { StyledSchedule } from "./styled";
import Filters from "./Filters";
import { initialState, NOT_FOUND_SCHEDULE_MSG } from "./constants";

const ScheduleLayout = React.memo(props => {
  const { selectedStage, stages, selectedTeams } = props;
  const stage = stages.find(stage => stage.name === selectedStage);
  return (
    <React.Fragment>
      {stage && <Stage stage={stage} selectedTeams={selectedTeams} />}
      {!stage && <div>{NOT_FOUND_SCHEDULE_MSG}</div>}
    </React.Fragment>
  );
}, areEqualStages);

const Schedule = () => {
  const [selectedStage, setSelectedStage] = useState(null);
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [state, setState] = useState(initialState);

  const filterProps = {
    selectedYear: state.selectedYear,
    selectedStage,
    selectedTeams,
    setSelectedYear,
    setSelectedStage,
    setSelectedTeams
  };

  const layoutProps = {
    selectedStage,
    selectedTeams,
    stages: state.schedule.stages
  };

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
          <Filters {...filterProps} />
          <StyledSchedule>
            <ScheduleLayout {...layoutProps} />
          </StyledSchedule>
        </React.Fragment>
      )}
      {!state.isLoading && !state.schedule.stages && (
        <div>{NOT_FOUND_SCHEDULE_MSG}</div>
      )}
    </React.Fragment>
  );
};

export default Schedule;
