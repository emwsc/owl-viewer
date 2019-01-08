import React from "react";
import {
  StyledWeek,
  StyledGamesInWeek,
  StyledWeekTitle,
  StyledGamesByDate,
  StyledDate
} from "./styled";
import { timeConverter } from "../../../../utils/dataUtils";
import SmallGameCard from "../../../SmallGameCard";
import { ScheduleContextConsumer } from "../../context";

const Week = props => {
  const { week, isPlayoffStage, selectedTeams, setSelectedGameId } = props;
  const games = week.matches.map(game => ({
    ...game,
    startDateObj: timeConverter(game.startDate),
    startDateLocaleString: timeConverter(game.startDate).toLocaleDateString()
  }));
  const dates = [...new Set(games.map(game => game.startDateLocaleString))];
  return (
    <StyledWeek>
      <StyledWeekTitle>{week.name}</StyledWeekTitle>
      <StyledGamesInWeek>
        {dates.map(date => (
          <div key={date}>
            <StyledDate>{date}</StyledDate>
            <StyledGamesByDate>
              {games
                .filter(game => game.startDateLocaleString === date)
                .map(game => (
                  <SmallGameCard
                    key={"schedule-" + game.id}
                    game={game}
                    selectedTeams={selectedTeams}
                    isTeamsHidden={isPlayoffStage}
                    setSelectedGameId={setSelectedGameId}
                  />
                ))}
            </StyledGamesByDate>
          </div>
        ))}
      </StyledGamesInWeek>
    </StyledWeek>
  );
};

export { Week };
