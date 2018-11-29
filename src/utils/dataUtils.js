import { CLIENT_ID } from '../twitch_api/integration';


export function timeConverter(unixTimestamp) {
  const a = new Date(unixTimestamp);
  return a;
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
  const startDateStr = timeConverter(startDate).toLocaleDateString();
  return searchGameOnTwitchInner(competitors[0].name, competitors[1].name, startDateStr);
}
