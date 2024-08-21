import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEllipsisV, FaTrash, FaPencilAlt } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { TfiControlSkipForward, TfiControlSkipBackward } from "react-icons/tfi";
import Dropdown from "../Dropdown/Dropdown";

const TableComponent = ({ clients }) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(parseInt(value));
    setCurrentPage(1);
  };

  // const filteredAlerts = selectedStatus
  //   ? alerts.filter((alert) => alert.status === selectedStatus)
  //   : alerts;
  const filteredAlerts = clients;

  const paginatedAlerts = filteredAlerts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
      <div className="flex-1 overflow-y-auto pt-2 w-full">
        <div className="overflow-x-auto">
          <table className="table-auto w-full min-w-full">
            <thead className="border-separate border-spacing-x-5 border-spacing-y-2 bg-[#0f172b]">
              <tr>
                <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">
                  Device Id
                </th>
                <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">
                  DID
                </th>
                <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">
                  Location
                </th>
                <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">
                  Contact Number
                </th>
                <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">
                  E-mail ID
                </th>
                <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">
                  Organization
                </th>
                <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedAlerts.map((client, index) => (
                <tr
                  key={index}
                  className="text-xs md:text-sm lg:text-base border-b border-gray-600 cursor-pointer"
                >
                  <td className="px-4 py-2 flex items-center">
                    <img
                      src={`https://via.placeholder.com/30`}
                      alt="client avatar"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    {client.deviceId}
                  </td>
                  <td className="px-4 py-2">{client.locationId}</td>
                  <td className="px-4 py-2">{client.address}</td>
                  <td className="px-4 py-2">{client.contact}</td>
                  <td className="px-4 py-2">{client.email}</td>
                  <td className="px-4 py-2">{client.org}</td>
                  <td className="px-4 py-2 relative flex items-center">
                    {client.status}
                    <FaEllipsisV
                      className="ml-2 cursor-pointer"
                      onClick={(e) => toggleDropdown(index, e)}
                    />
                    {dropdownOpen === index && (
                      <div
                        className="absolute right-0 mt-2 w-32 bg-[#0f172b] rounded-md shadow-lg z-10"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div
                          className="flex items-center justify-between py-2 px-4 hover:bg-[#1a253f] cursor-pointer rounded-md"
                          onClick={(e) => handleEdit(client.clientId, e)}
                        >
                          Edit <FaPencilAlt className="ml-2 cursor-pointer" />
                        </div>
                        <div
                          className="flex items-center justify-between py-2 px-4 hover:bg-[#1a253f] cursor-pointer rounded-md"
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
            <tfoot className="alert-table-footer border-spacing-x-5 border-spacing-y-2">
              <tr>
                <td colSpan="4" className="p-3 pl-4 pr-4">
                  <div className="flex gap-4 items-center">
                    Items per page
                    <div className="flex items-center">
                      <Dropdown
                        header={`${itemsPerPage}`}
                        values={[5, 10, 25, 50]}
                        containerWidth="70px"
                        bgColor="#0f172b"
                        onChange={handleItemsPerPageChange}
                        dropDirection={"-290%"}
                        dropBorder={"1px solid"}
                      />
                    </div>
                  </div>
                </td>
                <td colSpan="2" className="p-3 pl-4 pr-4">
                  <div className="flex justify-end">
                    Page {currentPage} of{" "}
                    {Math.ceil(filteredAlerts.length / itemsPerPage)}
                  </div>
                </td>
                <td colSpan="1" className="p-3 pl-4 pr-4">
                  <div className="flex justify-between ">
                    <button
                      onClick={() => setCurrentPage(1)}
                      disabled={currentPage === 1}
                    >
                      <TfiControlSkipBackward />
                    </button>
                    <button
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <IoIosArrowBack />
                    </button>
                    <button
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={
                        currentPage ===
                        Math.ceil(filteredAlerts.length / itemsPerPage)
                      }
                    >
                      <IoIosArrowForward />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentPage(
                          Math.ceil(filteredAlerts.length / itemsPerPage)
                        )
                      }
                      disabled={
                        currentPage ===
                        Math.ceil(filteredAlerts.length / itemsPerPage)
                      }
                    >
                      <TfiControlSkipForward />
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
