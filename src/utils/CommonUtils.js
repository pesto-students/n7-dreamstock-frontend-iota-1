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

export const ReturnColorBasedOnProfitLoss = (str) => {
  let color = "white";
  if (str) {
    if (str.includes("+")) {
      color = "green";
    } else if (str.includes("-")) {
      color = "red";
    }
  }
  return color;
};

export const ConvertChartData = (chartData) => {
  let response = [];
  for (let i = 0; i < chartData.c.length; i++) {
    let individualItemArray = [
      // chartData.t[i],
      // chartData.o[i],
      // chartData.h[i],
      // chartData.l[i],
      chartData.t[i],
      chartData.c[i],
    ];
    response.push(individualItemArray);
  }
  return response;
};