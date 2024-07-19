import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { LuArrowLeftToLine } from "react-icons/lu";
import { LuArrowRightToLine } from "react-icons/lu";

const Alertlist = () => {
  return (
    <div className="text-white flex justify-center items-center px-7 py-4 ">
      <div className="w-full overflow-x-auto">
        <table className="min-w-full rounded-lg">
          <thead className="bg-[#19223F]">
            <tr>
              <th className="p-4 border-gray-700 text-left">
                <input type="checkbox" />
              </th>
              <th className="p-4 border-gray-700 text-xs text-left">Alert Id</th>
              <th className="p-4 border-gray-700 text-xs text-left">Location</th>
              <th className="p-4 border-gray-700 text-xs text-left">Description</th>
              <th className="p-4 border-gray-700 text-xs text-left">Device</th>
              <th className="p-4 border-gray-700 text-xs text-left">Assigned to</th>
              <th className="p-4 border-gray-700 text-xs text-left">Severity</th>
              <th className="p-4 border-gray-700 text-xs text-left">Raised Date</th>
              <th className="p-4 border-gray-700 text-xs text-left">Due Days</th>
              <th className="p-4 border-gray-700 text-xs text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {Array(10)
              .fill(null)
              .map((_, index) => (
                <tr key={index} className="hover:bg-gray-700">
                  <td className="p-4 border-b border-gray-700">
                    <input type="checkbox" />
                  </td>
                  <td className="p-4 border-b border-gray-700 text-xs">A001</td>
                  <td className="p-4 border-b border-gray-700 text-xs">
                    Bangalore
                  </td>
                  <td className="p-4 border-b border-gray-700 text-xs">
                    Singapore Connectivity Issue
                  </td>
                  <td className="p-4 border-b border-gray-700 text-xs">
                    Bangalore
                  </td>
                  <td className="p-4 border-b border-gray-700 text-xs">
                    Mukesh Singh
                  </td>
                  <td className="p-4 border-b border-gray-700 text-xs">High</td>
                  <td className="p-4 border-b border-gray-700 text-xs">
                    02-10-23 10:45
                  </td>
                  <td className="p-4 border-b border-gray-700 text-xs">2</td>
                  <td className="p-4 border-b border-gray-700 text-xs">
                    Assigned
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center p-2 bg-[#19223F]">
          <div className="flex items-center">
            <span className="mr-2 text-xm">Items Per Page:</span>
            <select className="bg-[#19223F] border px-3 py-2 rounded">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </div>
          <div className="flex items-center">
            <span className="text-xm relative pr-10">Page 1 - 10 of 50</span>
            <button><LuArrowLeftToLine /></button>
            <button className="p-2 rounded mr-2">
              <IoIosArrowBack />
            </button>
            <button className="p-2 rounded ml-2">
              <IoIosArrowForward />
            </button>
            <button><LuArrowRightToLine /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alertlist;
