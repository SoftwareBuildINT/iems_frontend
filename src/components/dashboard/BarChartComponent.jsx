// BarChartComponent.jsx
import React from 'react';
import ReactEcharts from 'echarts-for-react';

const BarChartComponent = () => {
  const barChartOption = {
    backgroundColor: '#0F172B', // Background color
    title: {
      text: 'Power Consumption',
      left: 'center',
      textStyle: {
        color: '#fff', // Title color
        fontSize: 16,
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      backgroundColor: '#333', // Tooltip background color
      borderColor: '#777', // Tooltip border color
      textStyle: {
        color: '#fff', // Tooltip text color
      },
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      axisLine: {
        lineStyle: {
          color: '#777', // X-axis line color
        },
      },
      axisLabel: {
        textStyle: {
          color: '#fff', // X-axis label color
        },
      },
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#777', // Y-axis line color
        },
      },
      splitLine: {
        lineStyle: {
          color: '#333', // Grid line color
        },
      },
      axisLabel: {
        textStyle: {
          color: '#fff', // Y-axis label color
        },
      },
    },
    series: [
      {
        name: 'Electricity Consumed',
        type: 'bar',
        data: [120, 200, 150, 80, 70, 110, 130, 160, 170, 220, 230, 210],
        itemStyle: {
          color: '#6a5acd', // Bar color
        },
        barWidth: '60%', // Bar width
      },
    ],
  };

  const pieChartOption = {
    backgroundColor: '#0F172B', // Background color
    title: {
      text: 'Device Distribution',
      left: 'center',
      textStyle: {
        color: '#fff', // Title color
        fontSize: 16,
      },
    },
    tooltip: {
      trigger: 'item',
      backgroundColor: '#333', // Tooltip background color
      borderColor: '#777', // Tooltip border color
      textStyle: {
        color: '#fff', // Tooltip text color
      },
    },
    series: [
      {
        name: 'Devices',
        type: 'pie',
        radius: ['40%', '70%'],
        data: [
          { value: 1048, name: 'Device A' },
          { value: 735, name: 'Device B' },
          { value: 580, name: 'Device C' },
          { value: 484, name: 'Device D' },
          { value: 300, name: 'Device E' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
        itemStyle: {
          color: function(params) {
            // Custom colors for each segment
            const colors = ['#6a5acd', '#ff6347', '#ffeb3b', '#4caf50', '#00bcd4'];
            return colors[params.dataIndex];
          },
        },
      },
    ],
  };

  return (
    <div className="w-full mt-4 p-4 flex" style={{ backgroundColor: '#0F172B', borderRadius: '8px' }}>
      <div style={{ flex: 8 }}>
        <ReactEcharts
          option={barChartOption}
          style={{ height: '400px', width: '100%', padding: '10px' }}
        />
      </div>
      <div style={{ flex: 2 }}>
        <ReactEcharts
          option={pieChartOption}
          style={{ height: '400px', width: '100%', padding: '10px' }}
        />
      </div>
    </div>
  );
};

export default BarChartComponent;
