import React, { useState } from "react";
import { Transition } from "react-spring";
import query from "query-string";
import { areEqualStages, useOnSelectedYear, useOnSelectGame } from "./utils";
import { Stage } from "./Stage/index";
import { StyledSchedule, StyledLoading } from "./styled";
import Filters from "../Filters";
import { initialState, DICTIONARY, WORD_KEYS } from "./constants";
import SideScreenVideos from "../SideScreenVideos";
import OverwatchLoading from "../OverwatchLoading";
import { LanguageConsumer } from "../../common/LanguageContenxt";

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
      {!stage && (
        <div>
          <LanguageConsumer>
            {({ lang }) => DICTIONARY[lang + WORD_KEYS.NOT_FOUND_SCHEDULE_MSG]}
          </LanguageConsumer>
        </div>
      )}
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

  useOnSelectedYear({
    state,
    setState,
    selectedStage,
    setSelectedStage
  });

  useOnSelectGame({
    selectedGameId,
    setVideoScreenState
  });

  const filterProps = {
    selectedYear: state.selectedYear,
    selectedStage,
    selectedTeams,
    setSelectedYear,
    setSelectedStage,
    setSelectedTeams
  };

  const layoutProps = {
    selectedYear: state.schedule.year,
    selectedStage,
    selectedTeams,
    stages: state.schedule.stages,
    setSelectedGameId
  };

  if (!selectedGameId && qsParams && qsParams.match) {
    setSelectedGameId(qsParams.match);
  }
  if (selectedGameId && (!qsParams || !qsParams.match)) {
    setSelectedGameId(null);
    setVideoScreenState({ isVideosScreenVisible: false, vods: [] });
  }

  function setSelectedYear(year) {
    setState({ ...state, selectedYear: year });
  }

  function clearVods() {
    window.history.pushState(null, null, "/schedule");
    document.title = "Full OWL schedule | OWL Viewer";
    setSelectedGameId(null);
    setVideoScreenState({ isVideosScreenVisible: false, vods: [] });
  }

  return (
    <main>
      {state.isLoading && (
        <StyledLoading>
          <OverwatchLoading />
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
        <div>
          <LanguageConsumer>
            {({ lang }) => DICTIONARY[lang + WORD_KEYS.NOT_FOUND_SCHEDULE_MSG]}
          </LanguageConsumer>
        </div>
      )}
    </main>
  );
};

export default Schedule;
