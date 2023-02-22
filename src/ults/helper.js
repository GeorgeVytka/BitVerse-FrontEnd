export function datereturn(date) {
  var dateFormate = new Date(date);
  return (
    (dateFormate.getMonth() > 8
      ? dateFormate.getMonth() + 1
      : "0" + (dateFormate.getMonth() + 1)) +
    "/" +
    (dateFormate.getDate() > 9
      ? dateFormate.getDate()
      : "0" + dateFormate.getDate()) +
    "/" +
    dateFormate.getFullYear()
  );
}
