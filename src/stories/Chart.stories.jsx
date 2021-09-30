import React from "react";
import { Chart as ReactHighChart } from "../components/Chart";

export default {
  title: "Component/Chart",
};

const options = {
  title: {
    text: "My stock chart",
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9],
    },
  ],
};

export const Chart = () => <ReactHighChart options={options} />;
