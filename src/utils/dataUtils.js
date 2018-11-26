import { CLIENT_ID } from '../twitch_api/integration';


export function timeConverter(unixTimestamp) {
  const a = new Date(unixTimestamp);
  return a;
}


export function getOwlTeams(firebase) {
  return new Promise((resolve) => {
    const db = firebase.firestore();
    db.collection('teams').orderBy('name').get().then((querySnapshot) => {
      const teams = [];
      querySnapshot.forEach((doc) => {
        teams.push(doc.data());
      });
      resolve(teams);
    });
  });
}

export function getTeamSchedule(firebase, teamid) {
  return new Promise((resolve) => {
    const db = firebase.firestore();
    db.collection('schedule').doc('2018').get().then((doc) => {
      const schedule = doc.data();
      let matches = [];
      schedule.stages.forEach((stage) => {
        stage.weeks.forEach((week) => {
          const selectedMatches = week.matches
            .filter(match => match.competitors.some(team => team.id === teamid))
            .map(match => ({ ...match, startDate: timeConverter(match.startDate) }));
          if (selectedMatches && selectedMatches.length > 0) {
            matches = matches.concat(selectedMatches);
          }
        });
      });
      resolve(matches);
    });
  });
}


function searchGameOnTwitchInner(teamOne, teamTwo, gameDate, offset = 0) {
  return fetch(`https://api.twitch.tv/kraken/channels/137512364/videos?limit=100&offset=${offset}`, {
    method: 'GET',
    headers: {
      'Client-ID': CLIENT_ID,
      Accept: 'application/vnd.twitchtv.v5+json',
    },
  }).then(response => response.json()).then((results) => {
    const selectedVideos = results.videos.filter((video) => {
      const date = new Date(video.recorded_at).toLocaleDateString();
      return date === gameDate && video.title.indexOf('Full Match') > -1 && video.title.indexOf(teamOne) > -1 && video.title.indexOf(teamTwo) > -1;
    });
    if (selectedVideos && selectedVideos.length > 0) { return selectedVideos; }
    if (results.videos.length === 0) { return null; }
    return searchGameOnTwitchInner(teamOne, teamTwo, gameDate, offset + 100);
  });
}

export function searchGameOnTwitch(game) {
  const { competitors, startDate } = game;
  const startDateStr = startDate.toLocaleDateString();
  return searchGameOnTwitchInner(competitors[0].name, competitors[1].name, startDateStr);
}


export const DEFAULT_SEARCH_TEXT = 'Search in progess...';
export const VIDEOS_NOT_FOUND = 'VODs not found';
export const VIDEOS_FOUND = 'VODs found';
