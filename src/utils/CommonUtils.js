import { USER_INFO } from "./Constants";

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

export const ClearLoggedInUserInfo = () => {
  USER_INFO.name = "";
  USER_INFO.email = "";
  USER_INFO.googleId = "";
  USER_INFO.imageUrl = "";
  USER_INFO.familyName = "";
  USER_INFO.givenName = "";
  USER_INFO.userWalletAmount = "";
};

export const SetLoggedInUserInfo = (userObj) => {
  USER_INFO.name = userObj.name ? userObj.name : "";
  USER_INFO.email = userObj.email ? userObj.email : "";
  USER_INFO.googleId = userObj.googleId ? userObj.googleId : "";
  USER_INFO.imageUrl = userObj.imageUrl ? userObj.imageUrl : "";
  USER_INFO.familyName = userObj.familyName ? userObj.familyName : "";
  USER_INFO.givenName = userObj.givenName ? userObj.givenName : "";
  USER_INFO.userWalletAmount = userObj.userWalletAmount
    ? userObj.userWalletAmount
    : "";
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