import React, { useState } from "react";
import { areEqualStages, useOnSelectedYear, useOnSelectGame } from "./utils";
import { Stage } from "./Stage/index";
import { StyledSchedule } from "./styled";
import Filters from "./Filters";
import { initialState, NOT_FOUND_SCHEDULE_MSG } from "./constants";
import Videos from "./Videos";
import { ScheduleContextProvider } from "./context";

const ScheduleLayout = React.memo(props => {
  const { selectedStage, stages, selectedTeams, setSelectedGameId } = props;
  const stage = stages.find(stage => stage.name === selectedStage);
  return (
    <React.Fragment>
      {stage && (
        <Stage
          stage={stage}
          selectedTeams={selectedTeams}
          setSelectedGameId={setSelectedGameId}
        />
      )}
      {!stage && <div>{NOT_FOUND_SCHEDULE_MSG}</div>}
    </React.Fragment>
  );
}, areEqualStages);

const Schedule = () => {
  const [selectedStage, setSelectedStage] = useState(null);
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [selectedGameId, setSelectedGameId] = useState([]);
  const [vods, setVods] = useState([]);
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
    stages: state.schedule.stages,
    setSelectedGameId
  };

  useOnSelectedYear({
    state,
    setState,
    selectedStage,
    setSelectedStage
  });

  useOnSelectGame({ selectedGameId, setVods });

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
          {vods && vods.length > 0 && (
            <Videos vods={vods} clearVods={setSelectedGameId} />
          )}
        </React.Fragment>
      )}
      {!state.isLoading && !state.schedule.stages && (
        <div>{NOT_FOUND_SCHEDULE_MSG}</div>
      )}
    </React.Fragment>
  );
};

export default Schedule;
