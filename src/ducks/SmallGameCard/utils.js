export function datediff(moment, first, second) {
  const m1 = moment(first);
  m1.startOf("day");
  const m2 = moment(second);
  m2.startOf("day");
  const inDays = Math.abs(m1.diff(m2, "days"));
  if (inDays >= 1) return inDays + "d";
  return moment(second).format("HH:mm");
}

export function isTeamsVisibleByDefault(bracket) {
  if (!bracket) return true;
  if (bracket.indexOf("Title") > -1) return false;
  return true;
}
