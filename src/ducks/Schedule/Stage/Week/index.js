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
import SmallGameCard from "../../../SmallGameCard";
import { AppContextConsumer } from "../../../../AppContext";

const Week = React.memo(props => {
  const { week, isPlayoffStage } = props;
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
                  <AppContextConsumer key={"schedule-" + game.id}>
                    {context => (
                      <SmallGameCard
                        context={context}
                        game={game}
                        isTeamsHidden={isPlayoffStage}
                      />
                    )}
                  </AppContextConsumer>
                ))}
            </StyledGamesByDate>
          </div>
        ))}
      </StyledGamesInWeek>
    </StyledWeek>
  );
});

export { Week };
