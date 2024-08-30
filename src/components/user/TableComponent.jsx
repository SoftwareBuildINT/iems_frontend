import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEllipsisV, FaTrash, FaPencilAlt } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { TfiControlSkipForward, TfiControlSkipBackward } from "react-icons/tfi";

const TableComponent = ({ clients }) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(parseInt(value));
    setCurrentPage(1);
  };

  const filteredClients = clients.filter(client =>
    (selectedFilter === "All" || client.status === selectedFilter) &&
    (client.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.Email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.Organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.Role.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const paginatedClients = filteredClients.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCreateClient = () => {
    navigate("/create-client"); // Adjust the path according to your routing
  };

  const handleRowClick = (clientId) => {
    // Implement row click functionality
  };

  const toggleDropdown = (index, e) => {
    e.stopPropagation();
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleEdit = (clientId, e) => {
    e.stopPropagation();
    navigate(`/edit-client/${clientId}`);
  };

  const handleDelete = (clientId, e) => {
    e.stopPropagation();
    setSelectedClient(clientId);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    console.log("Deleted client:", selectedClient);
    setDeleteModalOpen(false);
    setSelectedClient(null);
  };

  const toggleFilterMenu = () => {
    setFilterMenuOpen(!filterMenuOpen);
  };

  const applyFilter = (filter) => {
    setSelectedFilter(filter);
    setFilterMenuOpen(false);
    setCurrentPage(1); // Reset to first page after filtering
  };

  return (
    <>
      <div className="flex-1 overflow-y-auto pt-2 w-full">
        <div className="mb-4 flex justify-between items-center">
          <button
            className="font-bold px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg"
            onClick={handleCreateClient}
          >
            + Create Client
          </button>
          <input
            type="text"
            placeholder="Search Client..."
            className="searchbar-text px-4 py-2 border rounded-lg"
            style={{ paddingRight: "3rem" }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <lord-icon
            src="https://cdn.lordicon.com/pagmnkiz.json"
            trigger="hover"
            colors="primary:#ffffff, secondary:#9ce5f4"
            className="searchbar-icon"
          ></lord-icon>
          <div className="relative">
            <button
              className="flex items-center px-4 py-2 border bg-[#0a101f] text-white border-gray-300 rounded-md focus:outline-none"
              onClick={toggleFilterMenu}
            >
              Filter By: {selectedFilter}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
              >
                <path d="M472 168H40a24 24 0 0 1 0-48h432a24 24 0 0 1 0 48zm-80 112H120a24 24 0 0 1 0-48h272a24 24 0 0 1 0 48zm-96 112h-80a24 24 0 0 1 0-48h80a24 24 0 0 1 0 48z"></path>
              </svg>
            </button>
            {filterMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#0f172b] rounded-md shadow-lg z-10">
                <div
                  className="py-2 px-4 hover:bg-[#1a253f] cursor-pointer rounded-md"
                  onClick={() => applyFilter("All")}
                >
                  All
                </div>
                <div
                  className="py-2 px-4 hover:bg-[#1a253f] cursor-pointer rounded-md"
                  onClick={() => applyFilter("Active")}
                >
                  Active
                </div>
                <div
                  className="py-2 px-4 hover:bg-[#1a253f] cursor-pointer rounded-md"
                  onClick={() => applyFilter("Inactive")}
                >
                  Inactive
                </div>
                {/* Add more filter options as needed */}
              </div>
            )}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full min-w-full">
            <thead className="border-separate border-spacing-x-5 border-spacing-y-2 bg-[#0f172b]">
              <tr>
                <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">
                  Name
                </th>
                <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">
                  Email
                </th>
                <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">
                  Organization
                </th>
                <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">
                  Contact Number
                </th>
                <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">
                  Role
                </th>
                <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">
                  Created On
                </th>
                <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedClients.map((client, index) => (
                <tr
                  key={index}
                  className="text-xs md:text-sm lg:text-base border-b border-gray-600 cursor-pointer"
                  onClick={() => handleRowClick(client.clientId)}
                >
                  <td className="px-4 py-2">{client.Name}</td>
                  <td className="px-4 py-2">{client.Email}</td>
                  <td className="px-4 py-2">{client.Organization}</td>
                  <td className="px-4 py-2">{client.contact}</td>
                  <td className="px-4 py-2">{client.Role}</td>
                  <td className="px-4 py-2">{client.CreatedOn}</td>
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
                          Delete <FaTrash className="ml-2 cursor-pointer" />
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="6" className="p-3 pl-4 pr-4">
                  <div className="flex justify-between">
                    <span>
                      Page {currentPage} of{" "}
                      {Math.ceil(filteredClients.length / itemsPerPage)}
                    </span>
                  </div>
                </td>
                <td colSpan="1" className="p-3 pl-4 pr-4">
                  <div className="flex justify-between">
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
                        Math.ceil(filteredClients.length / itemsPerPage)
                      }
                    >
                      <IoIosArrowForward />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentPage(
                          Math.ceil(filteredClients.length / itemsPerPage)
                        )
                      }
                      disabled={
                        currentPage ===
                        Math.ceil(filteredClients.length / itemsPerPage)
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
