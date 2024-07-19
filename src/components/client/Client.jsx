import React from "react";
import { useNavigate } from "react-router-dom";
import { IoFilter } from "react-icons/io5";

const Clients = () => {
  const navigate = useNavigate();
  const responsiveStyle = {
    margin: "70px auto",
  };

  const clients = [
    {
      clientName: "ICICI Bank",
      clientId: "SB26621F62",
      locations: "066",
      contact: "9092347820",
      email: "arunram12@gmail.com",
      status: "Active",
    },
    {
      clientName: "UNION Bank",
      clientId: "SB26621F62",
      locations: "066",
      contact: "9092347820",
      email: "arunram12@gmail.com",
      status: "Active",
    },
    {
      clientName: "HDFC Bank",
      clientId: "SB26621F62",
      locations: "066",
      contact: "9092347820",
      email: "arunram12@gmail.com",
      status: "Active",
    },
    {
      clientName: "SBI Bank",
      clientId: "SB26621F62",
      locations: "066",
      contact: "9092347820",
      email: "arunram12@gmail.com",
      status: "Active",
    },
    {
      clientName: "Hitachi Payment Services",
      clientId: "SB26621F62",
      locations: "066",
      contact: "9092347820",
      email: "arunram12@gmail.com",
      status: "Active",
    },
    // Add more clients as needed
  ];

  const handleRowClick = (clientId) => {
    navigate(`/client-details/${clientId}`);
  };

  return (
    <div className="flex flex-col items-start justify-start p-3 pt-4 pl-1 2xl:gap-2 2xl:pt-6" style={responsiveStyle}>
      <div className="flex justify-between w-full items-center pb-4 pr-3">
        <div>
          <h1 className="font-bold text-2xl pl-5 2xl:text-3xl">Client Management</h1>
          <h4 className="text-xs pl-5">Client List /</h4>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Client..."
              className="px-3 py-2 pr-10 border border-gray-300 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.34 1.659a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"/>
            </svg>
          </div>
          <div className="relative">
            <select className="appearance-none px-3 py-2 pr-10 border bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">Filter By</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <IoFilter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" />
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-3 w-full">
        <table className="table-auto w-full">
          <thead className="border-separate border-spacing-x-5 border-spacing-y-2 bg-[#19223F]">
            <tr>
              <th className="px-4 py-2 text-left">Client Name</th>
              <th className="px-4 py-2 text-left">Client ID</th>
              <th className="px-4 py-2 text-left">No. of Locations</th>
              <th className="px-4 py-2 text-left">Contact Number</th>
              <th className="px-4 py-2 text-left">E-mail ID</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr
                key={index}
                className="text-s border-b border-gray-600 cursor-pointer"
                onClick={() => handleRowClick(client.clientId)}
              >
                <td className="px-4 py-2">{client.clientName}</td>
                <td className="px-4 py-2">{client.clientId}</td>
                <td className="px-4 py-2">{client.locations}</td>
                <td className="px-4 py-2">{client.contact}</td>
                <td className="px-4 py-2">{client.email}</td>
                <td className="px-4 py-2">{client.status}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="border-separate border-spacing-x-5 border-spacing-y-2 bg-[#19223F]">
            <tr>
              <td colSpan="6" className="p-2">
                <div className="flex justify-end">
                  <button className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-[#C7DB58]">
                    + Create Client
                  </button>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Clients;
