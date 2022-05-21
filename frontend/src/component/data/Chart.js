import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Line,
} from "recharts";
import chartData from "./chartData";
function Chart() {
  return (
    <div style={{ height: "100%", backgroundColor: "" }}>
      <ResponsiveContainer>
        <LineChart
          width={500}
          data={chartData}
          height={300}
          margin={{
            top: 15,
            right: 60,
            left: 10,
            bottom: 0,
          }}
        >
          <XAxis />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
