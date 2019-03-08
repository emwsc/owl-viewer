import React from "react";
import { getDaysToGame } from "../utils";
import moment from "moment";
moment().format();

const nowDate = new Date();

const Countdown = ({ game, lang }) => (
  <React.Fragment>
    {nowDate < game.startDateObj && (
      <div>
        <div>{getDaysToGame(moment, nowDate, game.startDateObj, lang)}</div>
        <div>{moment(game.startDateObj).format("HH:mm")}</div>
      </div>
    )}
  </React.Fragment>
);

export default Countdown;
