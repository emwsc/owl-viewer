export function datediff(first, second) {
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

export function isTeamsVisibleByDefault(bracket) {
  if (!bracket) return true;
  if (bracket.indexOf("Title") > -1) return false;
  return true;
}

export function openGameVOD(matchid) {
  fetch(
    `https://api.overwatchleague.com/vods?tag=esports-match-${matchid}&locale=en-en`
  )
    .then(result => result.json())
    .then(result => {
      debugger;
      if (result.code === 404) {
        alert("VOD not found");
        return;
      }
      const item = result.data.find(item => item.title.indexOf("Full") > -1);
      if (!item || item.available !== 1 || !item.embed) {
        alert("Full game VOD not available");
        return;
      }
      const url = item.embed;
      window.open(url, "_blank");
    });
}
