// BarChartComponent.jsx
import React from "react";
import ReactEcharts from "echarts-for-react";
import "./chart.css";

const EnergySavingsChart = () => {
  const pieChartOption = {
    backgroundColor: "#0F172B",
    title: {
      text: "Energy Savings",
      left: "2%",
      textStyle: {
        color: "#fff",
        fontSize: 20,
      },
    },
    tooltip: {
      trigger: "item",
      backgroundColor: "#333",
      borderColor: "#777",
      textStyle: {
        color: "#fff",
      },
    },
    series: [
      {
        name: "Devices 1",
        type: "pie",
        radius: ["30%", "50%"],
        center: ["25%", "50%"], // Positioning the first pie chart
        data: [
          { value: 1048, name: "Device A" },
          { value: 735, name: "Device B" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        itemStyle: {
          color: function (params) {
            const colors = ["#6a5acd", "#ff6347"];
            return colors[params.dataIndex];
          },
        },
        label: {
          show: false,
        },
      },
      {
        name: "Devices 2",
        type: "pie",
        radius: ["30%", "50%"],
        center: ["70%", "50%"], // Positioning the second pie chart
        data: [
          { value: 2048, name: "Device C" },
          { value: 835, name: "Device D" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        itemStyle: {
          color: function (params) {
            const colors = ["#6a5acd", "#ff6347"];
            return colors[params.dataIndex];
          },
        },
        label: {
          show: false,
        },
      },
    ],
    legend: {
      bottom: "5%",
      left: "center",
      textStyle: {
        color: "#fff",
      },
    },
  };

  return (
    <div className="w-full bg-[#0F172B] rounded-xl">
      <ReactEcharts option={pieChartOption} className="p-2.5" />
    </div>
  );
};

export default EnergySavingsChart;
