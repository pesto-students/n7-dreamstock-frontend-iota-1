export const GenerateStockGraphDataObj = (stockName, chartData) => {
  console.log(stockName, " stockName");
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
  return stockObj;
};
