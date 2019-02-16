import React, { useState } from "react";
import {
  areEqualStages,
  useOnSelectedYear,
  useOnSelectGame,
  getRandomLoadingPhrase
} from "./utils";
import { Stage } from "./Stage/index";
import { StyledSchedule, StyledLoading } from "./styled";
import Filters from "./Filters";
import { initialState, NOT_FOUND_SCHEDULE_MSG } from "./constants";
import SideScreenVideos from "../SideScreenVideos";
import { Transition } from "react-spring";
import query from "query-string";
import OverwatchLoading from "../OverwatchLoading";

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

const Schedule = props => {
  const { location } = window;
  const qsParams = query.parse(location.search);
  const [selectedStage, setSelectedStage] = useState(null);
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [selectedGameId, setSelectedGameId] = useState(
    qsParams ? qsParams.match : null
  );
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

  if (!selectedGameId && qsParams && qsParams.match)
    setSelectedGameId(qsParams.match);
  if (selectedGameId && (!qsParams || !qsParams.match)) {
    setSelectedGameId(null);
    setVideoScreenState({ isVideosScreenVisible: false, vods: [] });
  }

  useOnSelectGame({
    selectedGameId: selectedGameId,
    setVideoScreenState
  });

  function setSelectedYear(year) {
    setState({ ...state, selectedYear: year });
  }

  function clearVods() {
    window.history.pushState(null, null, "/");
    document.title = "Full OWL schedule | OWL Viewer";
    setSelectedGameId(null);
    setVideoScreenState({ isVideosScreenVisible: false, vods: [] });
  }

  return (
    <main>
      {state.isLoading && (
        <StyledLoading>
          <OverwatchLoading /> <span>{getRandomLoadingPhrase()}</span>
        </StyledLoading>
      )}
      {!state.isLoading && state.schedule && state.schedule.stages && (
        <React.Fragment>
          <Filters {...filterProps} />
          <StyledSchedule>
            <ScheduleLayout {...layoutProps} />
          </StyledSchedule>
          <Transition
            items={videoScreen.isVideosScreenVisible}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {toggle =>
              toggle &&
              (props => (
                <SideScreenVideos
                  matchId={qsParams.match}
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
    </main>
  );
};

export default Schedule;
