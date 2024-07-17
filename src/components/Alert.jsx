import React from "react";
import Selection from "./Selection";
const data = [
  {
    label: "Signage",
    value: "01",
    icon: "src/assets/img/signage.svg",
    bgColor: "bg-[#11172A]",
    bgicon: "bg-blue-500 h-10 w-10 flex items-center rounded-full",
  },
  {
    label: "Ac",
    value: "413",
    icon: "src/assets/img/ac.svg",
    bgColor: "bg-[#11172A]",
    bgicon: "bg-fuchsia-400 h-10 w-10 flex items-center rounded-full",
  },
  {
    label: "UPS",
    value: "10",
    icon: "src/assets/img/ups.svg",
    bgColor: "bg-[#11172A]",
    bgicon: "bg-purple-500 h-10 w-10 flex items-center rounded-full",
  },
  {
    label: "Sensors",
    value: "300",
    icon: "src/assets/img/sensors.svg",
    bgColor: "bg-[#11172A]",
    bgicon: "bg-amber-400 h-10 w-10 flex items-center rounded-full",
  },
  {
    label: "ATM Machine",
    value: "150",
    icon: "src/assets/img/atm.svg",
    bgColor: "bg-[#11172A]",
    bgicon: "bg-rose-500 h-10 w-10 flex items-center rounded-full",
  },
];

const DashboardCard = ({ label, value, icon, bgColor, bgicon }) => {
  return (
    <div
      className={`flex items-center p-4 ${bgColor} rounded-md text-white shadow-md w-full max-w-xs`}
    >
      <div>
        <div className={`text-3xl ${bgicon}`}>
          <img className="ml-2" src={icon} alt="" />
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
      <div className="">
        <h1 className="my-3 text-2xl font-medium">Alerts</h1>
        <div className="flex justify-between space-x-4">
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
          <button className="border-solid border-[#A5A5A9] border-2	rounded-l px-2 py-1 text-xs">
            Download Alert
          </button>
        </div>
        <Selection />
      </div>
    </>
  );
};

export default Alert;
