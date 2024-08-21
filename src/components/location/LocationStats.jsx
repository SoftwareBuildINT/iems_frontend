import React from "react";
import LineChart from "./LineChart"; // Adjust the path as necessary

const LocationStats = () => {
    const handleChartClick = (params) => {
        console.log('Chart clicked:', params);
    };

    const handleLegendSelectChanged = (params) => {
        console.log('Legend selection changed:', params);
    };

    const svgImagePath = "../src/assets/img/location/air-conditioner-1838.svg"; // Adjust the path to your SVG image
    const svgSignagePath = "../src/assets/img/location/signage.svg";
    const svgLightPath = "../src/assets/img/location/lights.svg";
    const svgACLightPath = "../src/assets/img/location/ac.svg"
    return (
        <div className="pt-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 p-4">
                <div className="bg-green-500 border-8 border-green-700 shadow-lg rounded-lg p-4">
                    <img src={svgACLightPath} alt="Card 1" className="w-full h-24 object-contain" />
                    <h3 className="text-lg text-center font-semibold">AC-1</h3>
                </div>
                <div className="bg-yellow-500 border-2 border-yellow-500 shadow-lg rounded-lg p-4">
                    <img src={svgImagePath} alt="Card 2" className="w-full h-24 object-contain mb-4" />
                    <h3 className="text-lg text-center font-semibold">AC-2</h3>
                </div>
                <div className="bg-red-500 border-2 border-green-500 shadow-lg rounded-lg p-4">
                    <img src={svgSignagePath} alt="Card 3" className="w-full h-24 object-contain mb-4" />
                    <h3 className="text-lg text-center font-semibold">Signage</h3>
                </div>
                <div className="bg-red-500 border-2 border-red-500 shadow-lg rounded-lg p-4">
                    <img src={svgLightPath} alt="Card 4" className="w-full h-24 object-contain mb-4" />
                    <h3 className="text-lg text-center font-semibold">Raw Power Earthing</h3>
                </div>
                <div className="bg-green-500 border-2 border-blue-500 shadow-lg rounded-lg p-4">
                    <img src={svgImagePath} alt="Card 5" className="w-full h-24 object-contain mb-4" />
                    <h3 className="text-lg text-center font-semibold">UPS Power Earthing</h3>
                </div>
                <div className="bg-green-500 border-8 border-green-700 shadow-lg rounded-lg p-4">
                    <img src={svgImagePath} alt="Card 1" className="w-full h-24 object-contain" />
                    <h3 className="text-lg text-center font-semibold">DVR</h3>
                </div>
            </div>
            <div className="p-3 bg-[#0F172B]">
                <LineChart
                    legendData={['Email', 'Union Ads', 'Video Ads']}
                    xAxisData={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']}
                    seriesData={[
                        { name: 'AC-1', data: [100, 500, 201, 134, 90] },
                        { name: 'AC-2', data: [220, 182, 191, 234, 290] },
                        { name: 'Signage', data: [150, 232, 201, 154, 190] }
                    ]}
                    onChartClick={handleChartClick}
                    onChartLegendSelectChanged={handleLegendSelectChanged}
                />
            </div>
        </div>
    );
};

export default LocationStats;
