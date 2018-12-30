export function datediff(first, second) {
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

export function isTeamsVisibleByDefault(bracket) {
  if (!bracket) return true;
  if (bracket.indexOf("Title") > -1) return false;
  return true;
}
