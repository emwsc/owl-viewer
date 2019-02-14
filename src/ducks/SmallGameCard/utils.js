export function datediff(moment, first, second) {
  const m1 = moment(first);
  const m2 = moment(second);
  const inDays = Math.abs(m1.diff(m2, "days", true));
  if (inDays > 1) return (parseInt(inDays) + 1) + "d";
  if (inDays > 0 && inDays < 1) return "1d";
  return m2.format("hh:mm");
}

export function isTeamsVisibleByDefault(bracket) {
  if (!bracket) return true;
  if (bracket.indexOf("Title") > -1) return false;
  return true;
}
