import React, { useEffect, useState } from "react";
import { getMatches } from "./utils";
import { Transition } from "react-spring";
import SmallGameCard from "../SmallGameCard";
import moment from "moment";
import {
  StyledMainWrapper,
  StyledColumn,
  StyledTable,
  StyledLoaderWrapper,
  StyledDate,
  StyledColumnTitle,
  StyledGamesContainer
} from "./styled";
import OverwatchLoading from "../OverwatchLoading";
import { useOnSelectGame } from "../Schedule/utils";
import SideScreenVideos from "../SideScreenVideos";
import query from "query-string";
import Filters from "../Filters";
import { checkIsPlayoffStage } from "../../utils/utils";
import { timeConverter } from "../../utils/dataUtils";
import { LanguageConsumer } from "../../common/LanguageContenxt";
import { MAIN_PAGE_DICTIONARY, WORD_KEYS } from "../../utils/language";

moment().format();

const Section = ({
  title,
  dates,
  matches,
  setSelectedGameId,
  selectedTeams
}) => (
  <div>
    <StyledColumnTitle>{title}</StyledColumnTitle>
    <StyledColumn>
      {dates.map(date => (
        <div key={date}>
          <StyledDate>{date}</StyledDate>
          <StyledGamesContainer>
            {matches
              .filter(
                game => game.startDateMoment.format("DD.MM.YYYY") === date
              )
              .map(game => (
                <SmallGameCard
                  key={`schedule-${game.id}`}
                  game={game}
                  setSelectedGameId={setSelectedGameId}
                  selectedTeams={selectedTeams}
                  isPlayoffStage={checkIsPlayoffStage(game.bracket)}
                />
              ))}
          </StyledGamesContainer>
        </div>
      ))}
    </StyledColumn>
  </div>
);

const Main = () => {
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

  useEffect(() => {
    getMatches().then(results => {
      const games = results.map(game => ({
        ...game,
        startDateObj: timeConverter(game.startDate),
        startDateMoment: moment(game.startDate)
      }));
      const now = moment();
      const futureGames = games.filter(game =>
        game.startDateMoment.isSameOrAfter(now)
      );
      const lastGames = games.filter(game =>
        game.startDateMoment.isBefore(now)
      );
      setMatches({
        future: futureGames,
        last: lastGames,
        futureDates: [
          ...new Set(
            futureGames.map(game => game.startDateMoment.format("DD.MM.YYYY"))
          )
        ],
        lastDates: [
          ...new Set(
            lastGames.map(game => game.startDateMoment.format("DD.MM.YYYY"))
          )
        ].reverse(),
        isLoading: false
      });
    });
  }, []);

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
    <LanguageConsumer>
      {({ lang }) => (
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
      )}
    </LanguageConsumer>
  );
};

export default Main;
