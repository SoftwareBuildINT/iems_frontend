import React from "react";
import { FaRegSnowflake } from "react-icons/fa";

const data = [
  { label: 'Signage', value: '01', icon: '📺', bgColor: 'bg-[#11172A]' },
  { label: 'Ac', value: '413', icon: <FaRegSnowflake/>, bgColor: 'bg-[#11172A]' },
  { label: 'UPS', value: '10', icon: '🔋', bgColor: 'bg-[#11172A]' },
  { label: 'Sensors', value: '300', icon: '📡', bgColor: 'bg-[#11172A]' },
  { label: 'ATM Machine', value: '150', icon: '🏦', bgColor: 'bg-[#11172A]' },
];

const DashboardCard  = ({ label, value, icon, bgColor }) => {
  return (
    <div className={`flex items-center p-4 ${bgColor} rounded-md text-white shadow-md w-full max-w-xs`}>
      <div className="text-3xl">{icon}</div>
      <div className="ml-4">
        <p className="text-sm">{label}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};

const Alert = () => {
  return (
    <div className="flex justify-between space-x-4">
      {data.map((item, index) => (
        <DashboardCard
          key={index}
          label={item.label}
          value={item.value}
          icon={item.icon}
          bgColor={item.bgColor}
        />
      ))}
    </div>
  );
};

export default Alert;
