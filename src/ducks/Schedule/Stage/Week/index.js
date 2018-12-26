import React from "react";
import Game from "../../../Game/index";
import { isGameVisible } from "./utils";
import {
  StyledWeek,
  StyledGamesInWeek,
  StyledWeekTitle,
  StyledMsg,
  StyledGamesByDate,
  StyledDate
} from "./styled";
import { timeConverter } from "../../../../utils/dataUtils";

const Week = React.memo(({ week, visibleStages, updateSearchWindow }) => {
  const games = week.matches
    .filter(game => isGameVisible(game, visibleStages))
    .map(game => ({
      ...game,
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
                  <Game
                    key={"schedule-" + game.id}
                    game={game}
                    updateSearchWindow={updateSearchWindow}
                  />
                ))}
            </StyledGamesByDate>
          </div>
        ))}

        {games.length === 0 && (
          <StyledMsg>
            Games not found or hidden by special stages filter
          </StyledMsg>
        )}
      </StyledGamesInWeek>
    </StyledWeek>
  );
});

export { Week };
