import React, { useState, useContext } from "react";
import { useOnLoad } from "./utils";
import { Transition } from "react-spring";
import Section from "./Section";
import moment from "moment";
import { StyledMainWrapper, StyledTable, StyledLoaderWrapper } from "./styled";
import OverwatchLoading from "../OverwatchLoading";
import { useOnSelectGame } from "../Schedule/utils";
import SideScreenVideos from "../SideScreenVideos";
import query from "query-string";
import Filters from "../Filters";
import { LanguageContext } from "../../common/LanguageContenxt";
import { MAIN_PAGE_DICTIONARY, WORD_KEYS } from "../../utils/language";

moment().format();

const Main = () => {
  const { lang } = useContext(LanguageContext);
  const { location } = window;
  const qsParams = query.parse(location.search);

  const [matches, setMatches] = useState({
    future: [],
    last: [],
    futureDates: [],
    lastDates: [],
    isLoading: true
  });

  const [selectedTeams, setSelectedTeams] = useState([]);
  const [selectedGameId, setSelectedGameId] = useState(
    qsParams ? qsParams.match : null
  );

  const [videoScreen, setVideoScreenState] = useState({
    vods: [],
    isVideosScreenVisible: false
  });

  useOnLoad(setMatches);

  if (!selectedGameId && qsParams && qsParams.match) {
    setSelectedGameId(qsParams.match);
  }
  if (selectedGameId && (!qsParams || !qsParams.match)) {
    setSelectedGameId(null);
    setVideoScreenState({ isVideosScreenVisible: false, vods: [] });
  }

  useOnSelectGame({
    selectedGameId,
    setVideoScreenState
  });

  function clearVods() {
    window.history.pushState(null, null, "/");
    document.title = "Full OWL schedule | OWL Viewer";
    setSelectedGameId(null);
    setVideoScreenState({ isVideosScreenVisible: false, vods: [] });
  }

  return (
    <React.Fragment>
      {matches.isLoading && (
        <StyledLoaderWrapper>
          <OverwatchLoading />
        </StyledLoaderWrapper>
      )}
      {!matches.isLoading && (
        <Filters
          selectedTeams={selectedTeams}
          setSelectedTeams={setSelectedTeams}
        />
      )}
      <StyledMainWrapper>
        {!matches.isLoading && (
          <React.Fragment>
            <StyledTable>
              <Section
                setSelectedGameId={setSelectedGameId}
                selectedTeams={selectedTeams}
                matches={matches.future}
                dates={matches.futureDates}
                title={MAIN_PAGE_DICTIONARY[lang + WORD_KEYS.CLOSEST_GAMES]}
              />
              <Section
                setSelectedGameId={setSelectedGameId}
                selectedTeams={selectedTeams}
                matches={matches.last}
                dates={matches.lastDates}
                title={MAIN_PAGE_DICTIONARY[lang + WORD_KEYS.LAST_GAMES]}
              />
            </StyledTable>
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
      </StyledMainWrapper>
    </React.Fragment>
  );
};

export default Main;
