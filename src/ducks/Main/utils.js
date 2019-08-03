import { useEffect } from "react";

import configuredFirebase from "../../firebase/firebase";
import moment from "moment";
import { timeConverter } from "../../utils/dataUtils";
moment().format();

export const getMatches = () => {
  return new Promise(resolve => {
    const firestore = configuredFirebase.firestore();
    const matchesRef = firestore.collection("matches");
    const timeLimit =
      moment()
        .add(-7, "days")
        .unix() * 1000;
    matchesRef
      .where("startDate", ">=", timeLimit)
      .get()
      .then(querySnapshot => {
        const matches = [];
        querySnapshot.forEach(doc => matches.push(doc.data()));
        resolve(matches);
      });
  });
};

export const useOnLoad = setMatches => {
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
};
