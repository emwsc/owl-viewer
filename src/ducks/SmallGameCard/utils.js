import { TOTAL_SCORE_LESS_THEN, DICTIONARY, WORDS_KEYS } from "./constants";

/**
 * Get count of days prior to game
 * @param {object} moment moment.js object
 * @param {object} first  first date (usially now date)
 * @param {object} second game date
 * @param {string} lang Language code
 */
export function getDaysToGame(moment, first, second, lang) {
  const daysName = lang === "en" ? "d" : "д";
  const m1 = moment(first);
  m1.startOf("day");
  const m2 = moment(second);
  m2.startOf("day");
  const inDays = Math.abs(m1.diff(m2, "days"));
  if (inDays >= 1) return `${inDays}${daysName}`;
  return null;
}

/**
 * Checking is current bracket not title match (like playoff or something)
 * @param {string} bracket Backet name
 */
export function checkIsNotTitleMatch(bracket) {
  if (!bracket) return true;
  if (bracket.indexOf("Title") > -1 || bracket.indexOf("PLAYOFF") > -1)
    return false;
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

export function getCardTitle(totalScores, lang) {
  return totalScores < TOTAL_SCORE_LESS_THEN
    ? DICTIONARY[lang + WORDS_KEYS.NO_DATA]
    : "";
}
