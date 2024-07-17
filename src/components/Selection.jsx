import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";

const filters = [
    { label: 'Select Location', icon: <RiArrowDropDownLine /> },
    { label: 'Select Device', icon: <RiArrowDropDownLine /> },
    { label: 'Select Alert Type', icon: <RiArrowDropDownLine /> },
    { label: 'Select Raised Date', icon: <FaRegCalendarAlt /> },
    { label: 'Select Due Date', icon: <FaRegCalendarAlt /> },
    { label: 'Select Status', icon: <RiArrowDropDownLine /> },
  ];
  
  const FilterButton = ({ label, icon }) => {
    return (
      <div className="flex items-center justify-between p-2 px-4 bg-gray-800 text-white rounded-full shadow-md w-full max-w-xs">
        <span className='text-[#DAD6D6] text-xs'>{label}</span>
        <span className="ml-2 text-2xl">{icon}</span>
      </div>
    );
  };


const Selection = () => {
  return (
    <div className="flex justify-between space-x-4">
      {filters.map((filter, index) => (
        <FilterButton key={index} label={filter.label} icon={filter.icon} />
      ))}
    </div>
  );
};

export default Selection;