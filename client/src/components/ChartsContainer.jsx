import { useState } from "react";

import Wrapper from "../assets/wrappers/ChartsContainer";
import AreaChartComponent from "./AreaChart";
import BarChartComponent from "./BarChart";
export default function ChartsConatiner({ data }) {
  const [barChart, setBarChart] = useState(true);
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "AreaChart" : "BarChart"}
      </button>
      {barChart ? (
        <BarChartComponent data={data} />
      ) : (
        <AreaChartComponent data={data} />
      )}
    </Wrapper>
  );
}
