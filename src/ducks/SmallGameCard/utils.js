/**
 * Get count of days prior to game
 * @param {object} moment moment.js object
 * @param {object} first  first date (usially now date)
 * @param {object} second game date
 */
export function getDaysToGame(moment, first, second) {
  const m1 = moment(first);
  m1.startOf("day");
  const m2 = moment(second);
  m2.startOf("day");
  const inDays = Math.abs(m1.diff(m2, "days"));
  if (inDays >= 1) return `${inDays}d`;
  return null;
}

/**
 * Checking is current bracket not title match (like playoff or something)
 * @param {string} bracket Backet name
 */
export function isTeamsVisibleByDefault(bracket) {
  if (!bracket) return true;
  if (bracket.indexOf("Title") > -1) return false;
  return true;
}

/**
 * Push to browser history to set correct url
 * @param {string} matchId 
 */
export function pushToBrowserHistory(matchId) {
  window.history.pushState(
    null,
    null,
    `${window.location.pathname}?match=${matchId}`
  );
}
