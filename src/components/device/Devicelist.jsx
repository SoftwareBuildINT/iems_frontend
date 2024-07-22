import React from "react";
import Deviceselection from "./Deviceselection";
import Devicetable from "./Devicetable";

const Devicelist = () => {
  return (
    <>
      <div className="px-6">
        <div className="flex items-center justify-between">
          <h1 className="my-3 text-2xl font-medium 2xl:text-3xl">
            Device List
          </h1>
          <div className="flex items-center border border-gray-500 rounded px-3 py-2  w-[250px]">
            <input
              type="text"
              placeholder="Search Device"
              className="bg-transparent text-white placeholder-gray-400 outline-none"
            />
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
              ></path>
            </svg>
          </div>
        </div>
        <Deviceselection />
        <Devicetable />
      </div>
    </>
  );
};

export default Devicelist;
