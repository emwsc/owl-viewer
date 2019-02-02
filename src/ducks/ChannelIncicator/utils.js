import { CLIENT_ID } from "../../twitch_api/integration";

export function checkIsOWLChannelOnline() {
  return fetch(
    "https://api.twitch.tv/helix/streams?user_login=overwatchleague",
    {
      method: "GET",
      headers: {
        "Client-ID": CLIENT_ID,
        Accept: "application/vnd.twitchtv.v5+json"
      }
    }
  )
    .then(response => response.json())
    .then(results => {
      return (
        results &&
        results.data &&
        results.data.length > 0 &&
        results.data[0].type === "live"
      );
    });
}
