import moment from "moment";

const options = { style: "currency", currency: "INR" };
const numberFormat = new Intl.NumberFormat("en-US", options);

export const GenerateStockGraphDataObj = (stockName, chartData) => {
  console.log(stockName, " stockName");
  console.log(chartData, " chartData");
  const stockObj = {
    rangeSelector: {
      selected: 1,
    },

    title: {
      text: stockName + " Stock Price",
    },

    series: [
      {
        name: stockName,
        data: chartData,
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  };

  const configPrice = {
    yAxis: [
      {
        offset: 20,

        labels: {
          formatter: function () {
            return numberFormat.format(this.value);
          },
          x: -15,
          style: {
            color: "#000",
            position: "absolute",
          },
          align: "left",
        },
      },
    ],
    tooltip: {
      shared: true,
      formatter: function () {
        return (
          numberFormat.format(this.y, 0) +
          "</b><br/>" +
          moment.unix(this.x).format("MMMM Do YYYY")
        );
      },
    },
    plotOptions: {
      series: {
        showInNavigator: false,
        gapSize: 6,
      },
    },
    rangeSelector: {
      selected: 1,
    },
    title: {
      text: stockName + " Stock Price",
    },
    chart: {
      height: 400,
    },

    credits: {
      enabled: false,
    },

    legend: {
      enabled: false,
    },
    xAxis: {
      labels: {
        formatter: function () {
          return moment.unix(this.value).format("DD/MM")
        },
        style: {
          color: "#000",
        },
      },
    },
    rangeSelector: {
      buttons: [
        {
          type: "day",
          count: 1,
          text: "1d",
        },
        {
          type: "day",
          count: 7,
          text: "7d",
        },
        {
          type: "month",
          count: 1,
          text: "1m",
        },
        {
          type: "month",
          count: 3,
          text: "3m",
        },
        {
          type: "all",
          text: "All",
        },
      ],
      selected: 4,
    },
    series: [
      {
        name: stockName,
        data: chartData,
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  };
  return configPrice;
};
