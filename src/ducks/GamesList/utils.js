import { timeConverter } from '../../utils/dataUtils'

export function isGameVisible(game, visibleStages) {
  return visibleStages.some(stage => stage.title === game.bracket && stage.isVisible);
}


export function getTeamSchedule(firebase, teamid, selectedYear) {
  return new Promise((resolve) => {
    const db = firebase.firestore();
    db.collection('schedule').doc(selectedYear.toString()).get().then((doc) => {
      const schedule = doc.data();
      let matches = [];
      if (!schedule) {
        resolve(matches);
        return;
      }
      schedule.stages.forEach((stage) => {
        stage.weeks.forEach((week) => {
          const selectedMatches = week.matches
            .filter(match => match.competitors.some(team => team.id === teamid));
          if (selectedMatches && selectedMatches.length > 0) {
            matches = matches.concat(selectedMatches);
          }
        });
      });
      resolve(matches);
    });
  });
}