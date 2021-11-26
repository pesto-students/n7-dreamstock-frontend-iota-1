import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

export const Chart = (props) => (
  <HighchartsReact
    highcharts={Highcharts}
    constructorType={"stockChart"}
    {...props}
  />
);
