export const RemoveElementFromArray = (array, index) => {
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
};

export const ConvertMillisIntoDate = (millis) => {
  let date = new Date(millis);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    date.getUTCDate() +
    " " +
    months[date.getUTCMonth()] +
    ", " +
    date.getUTCFullYear()
  );
};
