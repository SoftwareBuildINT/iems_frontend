import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEllipsisV, FaTrash, FaPencilAlt } from "react-icons/fa";

const TableComponent = ({ clients }) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  const handleRowClick = (clientId) => {
    navigate(`/client-details/${clientId}`);
  };

  const toggleDropdown = (index, event) => {
    event.stopPropagation();
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleEdit = (clientId, event) => {
    event.stopPropagation();
    navigate(`/edit-device/${deviceId}`);
  };

  const handleDelete = (clientId, event) => {
    event.stopPropagation();
    setSelectedClient(clientId);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    console.log("Deleted client:", selectedClient);
    setDeleteModalOpen(false);
    setSelectedClient(null);
  };

  return (
    <>
      <div className="flex-1 overflow-y-auto p-3 w-full">
        <div className="overflow-x-auto">
          <table className="table-auto w-full min-w-full">
            <thead className="border-separate border-spacing-x-5 border-spacing-y-2 bg-[#19223F]">
              <tr>
                <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">Client Name</th>
                <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">Client ID</th>
                <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">No. of Locations</th>
                <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">Contact Number</th>
                <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">E-mail ID</th>
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
                    <img
                      src={`https://via.placeholder.com/30`}
                      alt="client avatar"
                      className="w-8 h-8 rounded-full mr-2"
                    />
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
                          Edit <FaPencilAlt className="ml-2 cursor-pointer" />
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
                      onClick={() => navigate('/add-device')}
                    >
                      + Add Device
                    </button>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {deleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="bg-[#0f172b] rounded-lg p-4 w-1/3">
            <h2 className="text-lg font-bold mb-4">Confirm Delete</h2>
            <p className="mb-4">Are you sure you want to delete this client?</p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-gray-800 hover:bg-gray-600 rounded-lg mr-2"
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
    </>
  );
};

export default TableComponent;
