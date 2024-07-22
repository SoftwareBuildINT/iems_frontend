import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { LuArrowLeftToLine } from "react-icons/lu";
import { LuArrowRightToLine } from "react-icons/lu";

const Alertlist = () => {
  return (
    <div className="text-white justify-center items-center px-7 py-4 ">
      <div className="w-full overflow-x-auto">
        <table className="min-w-full rounded-lg ">
          <thead className="bg-[#19223F]">
            <tr>
              <th className="p-4 border-gray-700 text-left">
                <input type="checkbox" />
              </th>
              <th className="p-4 border-gray-700 text-xs text-left 2xl:text-lg">
                Alert Id
              </th>
              <th className="p-4 border-gray-700 text-xs text-left 2xl:text-lg">
                Location
              </th>
              <th className="p-4 border-gray-700 text-xs text-left 2xl:text-lg">
                Description
              </th>
              <th className="p-4 border-gray-700 text-xs text-left 2xl:text-lg">Device</th>
              <th className="p-4 border-gray-700 text-xs text-left 2xl:text-lg">
                Assigned to
              </th>
              <th className="p-4 border-gray-700 text-xs text-left 2xl:text-lg">
                Severity
              </th>
              <th className="p-4 border-gray-700 text-xs text-left 2xl:text-lg">
                Raised Date
              </th>
              <th className="p-4 border-gray-700 text-xs text-left 2xl:text-lg">
                Due Days
              </th>
              <th className="p-4 border-gray-700 text-xs text-left 2xl:text-lg">Status</th>
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
                  <td className="p-4 border-b border-gray-700 text-xs 2xl:text-lg">A001</td>
                  <td className="p-4 border-b border-gray-700 text-xs 2xl:text-lg">
                    Bangalore
                  </td>
                  <td className="p-4 border-b border-gray-700 text-xs 2xl:text-lg">
                    Singapore Connectivity Issue
                  </td>
                  <td className="p-4 border-b border-gray-700 text-xs 2xl:text-lg">
                    Bangalore
                  </td>
                  <td className="p-4 border-b border-gray-700 text-xs 2xl:text-lg">
                    Mukesh Singh
                  </td>
                  <td className="p-4 border-b border-gray-700 text-xs 2xl:text-lg">High</td>
                  <td className="p-4 border-b border-gray-700 text-xs 2xl:text-lg">
                    02-10-23 10:45
                  </td>
                  <td className="p-4 border-b border-gray-700 text-xs 2xl:text-lg">2</td>
                  <td className="p-4 border-b border-gray-700 text-xs 2xl:text-lg">
                    Assigned
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center p-2 bg-[#19223F] ">
          <div className="flex items-center ">
            <span className="mr-2 text-xs md:text-base 2xl:text-lg">Items Per Page:</span>
            <select className="bg-[#19223F] border px-3 py-2 rounded text-xs md:text-base 2xl:text-lg">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </div>
          <div className="flex items-center">
            <span className="text-xs md:text-base relative pl-2 pr-5 2xl:text-lg">
              Page 1 - 10 of 50
            </span>
            <button className="2xl:text-lg">
              <LuArrowLeftToLine />
            </button>
            <button className="p-2 rounded mr-2 2xl:text-lg">
              <IoIosArrowBack />
            </button>
            <button className="p-2 rounded ml-2 2xl:text-lg">
              <IoIosArrowForward />
            </button>
            <button className="2xl:text-lg">
              <LuArrowRightToLine />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alertlist;
