import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";

const filters = [
    { label: 'Select Location', icon: <RiArrowDropDownLine /> },
    { label: 'Select Device', icon: <RiArrowDropDownLine /> },
    { label: 'Select Alert Type', icon: <RiArrowDropDownLine /> },
    { label: 'Select Raised Date', icon: <FaRegCalendarAlt style={{ fontSize: '14px' }} /> },
    { label: 'Select Due Date', icon: <FaRegCalendarAlt style={{ fontSize: '14px' }} /> },
    { label: 'Select Status', icon: <RiArrowDropDownLine /> },
  ];
  
  const FilterButton = ({ label, icon }) => {
    return (
      <div className="flex items-center p-1 px-4 bg-[#19223F] text-white rounded-full shadow-md max-w-xs min-w-24 my-2 mx-2">
        <span className='text-[#DAD6D6] text-xs 2xl:text-lg'>{label}</span>
        <span className="ml-2 text-xl">{icon}</span>
      </div>
    );
  };


const Selection = () => {
  return (
    <div className="flex max-md:flex-wrap max-xl:flex-wrap">
      {filters.map((filter, index) => (
        <FilterButton key={index} label={filter.label} icon={filter.icon} />
      ))}
    </div>
  );
};

export default Selection;