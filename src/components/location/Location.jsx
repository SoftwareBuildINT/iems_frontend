import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoFilter } from "react-icons/io5";
import { FaEllipsisV, FaTrash, FaPencilAlt } from "react-icons/fa";

const Location = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen !== null) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownOpen]);

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
      clientId: "SB26621F63",
      locations: "066",
      contact: "9092347820",
      email: "arunram12@gmail.com",
      status: "Active",
    },
    {
      clientName: "HDFC Bank",
      clientId: "SB26621F64",
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

  const handleRowClick = (locationId) => {
    navigate(`/location-details/${locationId}`);
  };

  const toggleDropdown = (index, event) => {
    event.stopPropagation();
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleEdit = (locationId, event) => {
    event.stopPropagation();
    navigate(`/edit-client/${locationId}`);
  };


  const handleDelete = (locationId, event) => {
    event.stopPropagation();
    setSelectedClient(locationId);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    // Perform delete operation here
    console.log("Deleted Location:", selectedLocation);
    setDeleteModalOpen(false);
    setSelectedClient(null);
  };

  return (
    <div className="flex flex-col items-start justify-start p-3 pt-4 pl-1 2xl:gap-2 2xl:pt-6">
      <div className="select-none flex flex-col md:flex-row justify-between w-full pb-4 pr-3 space-y-4 md:space-y-0">
        <div>
          <h1 className="font-bold text-xl md:text-2xl 2xl:text-3xl pl-3 mdl:pl-5">Location</h1>
          <h4 className="text-xs md:text-sm pl-3 md:pl-5">Location list /</h4>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-2 w-full md:w-auto px-3 md:px-0">
          <div className="relative w-full md:w-auto flex items-center">
            <input
              type="text"
              placeholder="Search Location..."
              className="w-full md:w-auto px-3 py-2 pr-12 border border-gray-300 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              style={{ paddingRight: "3rem" }} // Adjust padding to accommodate the icon
            />
            <lord-icon
              src="https://cdn.lordicon.com/pagmnkiz.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#9ce5f4"
              style={{ width: "30px", height: "30px", position: "absolute", right: "0", margin: "10px" }}
            ></lord-icon>
          </div>

          <div className="relative w-full md:w-auto">
            <select className="w-full md:w-auto appearance-none px-3 py-2 pr-10 border bg-[#0a101f] text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">Filter By</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <IoFilter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" />
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-3 w-full">
        <div className="overflow-x-auto">
          <table className="table-auto w-full min-w-full">
            <thead className="border-separate border-spacing-x-5 border-spacing-y-2 bg-[#19223F]">
              <tr>
                <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">Location ID</th>
                <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">Location Name</th>
                <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">City</th>
                <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">Location Manager</th>
                <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">Manager Number</th>
                <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">Status</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr
                  key={index}
                  className="text-xs md:text-sm lg:text-base border-b border-gray-600 cursor-pointer"
                  onClick={() => handleRowClick(client.clientId)}
                >
                  <td className="px-4 py-2 flex items-center">
                    {client.clientName}
                  </td>
                  <td className="px-4 py-2">{client.clientId}</td>
                  <td className="px-4 py-2">{client.locations}</td>
                  <td className="px-4 py-2">{client.contact}</td>
                  <td className="px-4 py-2">{client.email}</td>
                  <td className="px-4 py-2 relative flex items-center">
                    {client.status}
                    <FaEllipsisV
                      className="ml-2 cursor-pointer"
                      onClick={(e) => toggleDropdown(index, e)}
                    />
                    {dropdownOpen === index && (
                      <div className="absolute right-0 mt-2 w-32 bg-[#001f3f] rounded-md shadow-lg z-10" onClick={(e) => e.stopPropagation()}>
                        <div
                          className="flex items-center justify-between py-2 px-4 hover:bg-blue-500 cursor-pointer rounded-md"
                          onClick={(e) => handleEdit(client.clientId, e)}
                        >
                          Edit <FaPencilAlt
                            className="ml-2 cursor-pointer"
                            onClick={(e) => handleEdit(client.clientId, e)}
                          />

                        </div>
                        <div
                          className="flex items-center justify-between py-2 px-4 hover:bg-blue-500 cursor-pointer rounded-md"
                          onClick={(e) => handleDelete(client.clientId, e)}
                        >
                          Delete <FaTrash className="ml-2" />
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="border-separate border-spacing-x-5 border-spacing-y-2 bg-[#19223F]">
              <tr>
                <td colSpan="6" className="p-2">
                  <div className="flex justify-end">
                    <button
                      className="font-bold px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg"
                      onClick={() => navigate('/create-location')}
                    >
                      + Add Location
                    </button>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Delete Modal */}
      {deleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="bg-white rounded-lg p-4 w-1/3">
            <h2 className="text-lg font-bold mb-4">Confirm Delete</h2>
            <p className="mb-4">Are you sure you want to delete this client?</p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg mr-2"
                onClick={() => setDeleteModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;
