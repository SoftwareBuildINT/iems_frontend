import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "2019", carbon: 4000 },
  { name: "2020", carbon: 3600 },
  { name: "2021", carbon: 3200 },
  { name: "2022", carbon: 2880 },
  { name: "2023", carbon: 1990 },
  { name: "2024", carbon: 1790 },
];

export default function CarbonChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{
          top: 30,
          right: 30,
          left: 0,
          bottom: 10,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1AB517" stopOpacity={0.9} />
            <stop offset="60%" stopColor="#1AB517" stopOpacity={0.7} />
            <stop offset="100%" stopColor="#1AB517" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        {/* <CartesianGrid strokeDasharray="1 1" /> */}
        {/* <XAxis dataKey="name" />
        <YAxis />
        <Tooltip /> */}
        <XAxis
          dataKey="name"
          tick={{ fill: "#8884d8", fontSize: 12, fontWeight: "bold" }}
          label={{
            value: "Year",
            position: "insideBottomRight",
            offset: -5,
            fill: "#8884d8",
            fontSize: 14,
          }}
        />
        <YAxis
          tick={{ fill: "#8884d8", fontSize: 12, fontWeight: "bold" }}
          label={{
            value: "Carbon Emissions",
            angle: -90,
            position: "insideLeft",
            fill: "#8884d8",
            fontSize: 14,
          }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#f5f5f5",
            borderColor: "#8884d8",
            borderRadius: 5,
          }}
          itemStyle={{ color: "#1AB517", fontWeight: "bold" }}
          labelStyle={{ color: "#8884d8", fontSize: 12, fontWeight: "bold" }}
        />
        <Area
          type="linear"
          dataKey="carbon"
          stroke="#8884d8"
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
