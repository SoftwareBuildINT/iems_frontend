// BarChartComponent.jsx
import React from "react";
import ReactEcharts from "echarts-for-react";
import EnergySavingsChart from "./EnergySavingsChart";
import "./chart.css";

const BarChartComponent = () => {
  const barChartOption = {
    title: {
      text: "Power Consumption",
      left: "2%",
      textStyle: {
        color: "#fff",
        fontSize: 20,
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      backgroundColor: "#333",
      borderColor: "#777",
      textStyle: {
        color: "#fff",
      },
    },
    xAxis: {
      type: "category",
      data: [
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
      ],
      axisLine: {
        lineStyle: {
          color: "#777",
        },
      },
      axisLabel: {
        textStyle: {
          color: "#fff",
        },
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#777",
        },
      },
      splitLine: {
        lineStyle: {
          color: "#333",
        },
      },
      axisLabel: {
        textStyle: {
          color: "#fff",
        },
      },
    },
    series: [
      {
        name: "Electricity Consumed",
        type: "bar",
        data: [120, 200, 150, 80, 70, 110, 130, 160, 170, 220, 230, 210],
        itemStyle: {
          color: "#6a5acd",
        },
        barWidth: "60%",
        label: {
          show: false,
          position: "center",
        },
      },
    ],
  };

  const pieChartOption = {
    backgroundColor: "#0F172B",
    title: {
      text: "Device Distribution",
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
    legend: {
      bottom: "5%",
      left: "center",
      textStyle: {
        color: "#fff",
      },
    },
    series: [
      {
        name: "Devices",
        type: "pie",
        radius: ["30%", "60%"],
        data: [
          { value: 1048, name: "Device A" },
          { value: 735, name: "Device B" },
          { value: 580, name: "Device C" },
          { value: 484, name: "Device D" },
          { value: 300, name: "Device E" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        legend: {
          bottom: "5%",
          left: "center",
        },
        itemStyle: {
          color: function (params) {
            // Custom colors for each segment
            const colors = [
              "#6a5acd",
              "#ff6347",
              "#ffeb3b",
              "#4caf50",
              "#00bcd4",
            ];
            return colors[params.dataIndex];
          },
        },
        label: {
          show: false,
        },
      },
    ],
  };

  return (
    <div className="chart-container">
      <div className="w-full grid col-container-1">
        <div className="left-chart-1">
          <ReactEcharts
            option={barChartOption}
            className="p-2.5 chart-height"
          />
        </div>
        <div className="right-chart-1">
          <ReactEcharts
            option={pieChartOption}
            className="p-2.5 chart-height"
          />
        </div>
      </div>
      <div className="w-full grid col-container-2">
        <div className="left-chart-2">
          <EnergySavingsChart />
        </div>
        <div className="right-chart-2">
          <EnergySavingsChart />
        </div>
      </div>
    </div>
  );
};

export default BarChartComponent;
