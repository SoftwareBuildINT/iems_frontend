import React from "react";
import Selection from "./Selection";
import Alertlist from "./Alertlist";

const data = [
  {
    label: "Signage",
    value: "01",
    icon: "src/assets/img/alerts/signage.svg",
    bgColor: "bg-[#11172A]",
    bgicon:
      "bg-gradient-to-tl from-blue-500 to-blue-300 h-10 w-10 flex items-center rounded-full",
  },
  {
    label: "Ac",
    value: "413",
    icon: "src/assets/img/alerts/ac.svg",
    bgColor: "bg-[#11172A]",
    bgicon:
      "bg-gradient-to-tl from-fuchsia-400 to-fuchsia-200 h-10 w-10 flex items-center rounded-full",
  },
  {
    label: "UPS",
    value: "10",
    icon: "src/assets/img/alerts/ups.svg",
    bgColor: "bg-[#11172A]",
    bgicon:
      "bg-gradient-to-tl from-purple-800 to-purple-500 h-10 w-10 flex items-center rounded-full",
  },
  {
    label: "Sensors",
    value: "300",
    icon: "src/assets/img/alerts/sensors.svg",
    bgColor: "bg-[#11172A]",
    bgicon:
      "bg-gradient-to-tl from-amber-400 to-amber-200 h-10 w-10 flex items-center rounded-full",
  },
  {
    label: "ATM Machine",
    value: "150",
    icon: "src/assets/img/alerts/atm.svg",
    bgColor: "bg-[#11172A]",
    bgicon:
      "bg-gradient-to-tl from-rose-700 to-rose-500 h-10 w-10 flex items-center rounded-full",
  },
];

const DashboardCard = ({ label, value, icon, bgColor, bgicon }) => {
  return (
    <div
      className={`flex items-center p-4 ${bgColor} rounded-md text-white shadow-md w-[247px] my-2 mx-2`}
    >
      <div>
        <div className={`text-3xl ${bgicon}`}>
          <img className="flex items-center justify-center ml-2 w-6 h-6   " src={icon} alt="" />
        </div>
      </div>
      <div className="ml-4">
        <p className="text-xs text-[#878990]">{label}</p>
        <p className="text-lg font-bold">{value}</p>
      </div>
    </div>
  );
};

const Alert = () => {
  return (
      <>
        <div className="px-6">
          <h1 className="my-3 text-2xl font-medium ">Alerts</h1>
            <div className="flex max-md:flex-wrap max-xl:flex-wrap">
              {data.map((item, index) => (
                <DashboardCard
                  key={index}
                  label={item.label}
                  value={item.value}
                  icon={item.icon}
                  bgColor={item.bgColor}
                  bgicon={item.bgicon}
                />
              ))} 
          </div>
          <div className="flex items-center justify-between">
            <h1 className="my-3 text-2xl font-medium">Alerts List (100)</h1>
            <button className="border-solid border-[#A5A5A9] border	rounded px-3 py-2 text-xs flex gap-2">
              <img src="src/assets/img/alerts/excel.svg" alt="excel" /> Download
              Alert
            </button>
          </div>
          <Selection />
        </div>
        
        <Alertlist />
       
      </>
    );
  };

export default Alert;
