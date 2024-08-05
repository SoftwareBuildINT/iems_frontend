import React from "react";
import ReactECharts from "echarts-for-react";

const LineChart = ({
    title = '',
    legendData = ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
    xAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    seriesData = [
        { name: 'Email', data: [120, 132, 101, 134, 90, 230, 210] },
        { name: 'Union Ads', data: [220, 182, 191, 234, 290, 330, 310] },
        { name: 'Video Ads', data: [150, 232, 201, 154, 190, 330, 410] },
        { name: 'Direct', data: [320, 332, 301, 334, 390, 330, 320] },
        { name: 'Search Engine', data: [820, 932, 901, 934, 1290, 1330, 1320] }
    ],
    onChartClick,
    onChartLegendSelectChanged
}) => {
    const option = {
        title: {
            text: title
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: legendData
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            show: false // Hide the grid lines
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xAxisData,
            axisLine: {
                show: false // Hide the axis line
            },
            splitLine: {
                show: false // Hide the split lines
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                show: false // Hide the axis line
            },
            splitLine: {
                show: false // Hide the split lines
            }
        },
        series: seriesData.map(item => ({
            name: item.name,
            type: 'line',
            stack: 'Total',
            data: item.data
        }))
    };

    const onEvents = {
        'click': onChartClick,
        'legendselectchanged': onChartLegendSelectChanged
    };

    return (
        <div>
            <ReactECharts option={option} onEvents={onEvents} />
        </div>
    );
};

export default LineChart;
