import React, { useState } from "react";
import { areEqualStages, useOnSelectedYear, useOnSelectGame } from "./utils";
import { Stage } from "./Stage/index";
import { StyledSchedule } from "./styled";
import Filters from "./Filters";
import { initialState, NOT_FOUND_SCHEDULE_MSG } from "./constants";
import Videos from "./Videos";
import { Transition } from "react-spring";

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
  const [selectedGameId, setSelectedGameId] = useState(null);
  const [videoScreen, setVideoScreenState] = useState({
    vods: [],
    isVideosScreenVisible: false
  });
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

  useOnSelectGame({ selectedGameId, setVideoScreenState });

  function setSelectedYear(year) {
    setState({ ...state, selectedYear: year });
  }

  function clearVods() {
    setSelectedGameId(null);
    setVideoScreenState({ isVideosScreenVisible: false, vods: [] });
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
          {/* {videoScreen.isVideosScreenVisible && (
            <Videos vods={videoScreen.vods} clearVods={clearVods} />
          )} */}
          <Transition
            items={videoScreen.isVideosScreenVisible}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {toggle =>
              toggle &&
              (props => (
                <Videos
                  style={props}
                  vods={videoScreen.vods}
                  clearVods={clearVods}
                />
              ))
            }
          </Transition>
        </React.Fragment>
      )}
      {!state.isLoading && !state.schedule.stages && (
        <div>{NOT_FOUND_SCHEDULE_MSG}</div>
      )}
    </React.Fragment>
  );
};

export default Schedule;
