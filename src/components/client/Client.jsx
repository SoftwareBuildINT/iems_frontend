import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoFilter } from "react-icons/io5";
import { FaEllipsisV, FaTrash, FaPencilAlt } from "react-icons/fa";
import "./client.css";

const Client = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];

  const handleSelect = (option) => {
    setSelectedOption(option.value);
    setIsOpen(false);
  };

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

  const toggleDropdown = (index, event) => {
    event.stopPropagation();
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleEdit = (clientId, event) => {
    event.stopPropagation();
    navigate(`/edit-client/${clientId}`);
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
    <div className="component-body">
      <div className="client-body">
        <div>
          <h1 className="page-header">Client Management</h1>
          <h4 className="text-xs md:text-sm pt-1">Client List /</h4>
        </div>
        <div className="client-utility">
          <div className="searchbar">
            <input
              type="text"
              placeholder="Search Client..."
              className="searchbar-text"
              style={{ paddingRight: "3rem" }}
            />
            <lord-icon
              src="https://cdn.lordicon.com/pagmnkiz.json"
              trigger="hover"
              colors="primary:#ffffff, secondary:#9ce5f4"
              class="searchbar-icon"
            ></lord-icon>
          </div>
          <div className="flex w-full gap-2">
            <div className="relative w-full custom-select-container">
              <div
                className={`custom-select ${isOpen ? "open" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                {selectedOption
                  ? options.find((opt) => opt.value === selectedOption).label
                  : "Filter By"}
                <IoFilter />
              </div>
              {isOpen && (
                <div className="custom-options">
                  {options.map((option) => (
                    <div
                      key={option.value}
                      className="custom-option"
                      style={{ backgroundColor: option.backgroundColor }}
                      onClick={() => handleSelect(option)}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="custom-reset" onClick={() => handleSelect("")}>
              <lord-icon
                src="https://cdn.lordicon.com/rsbokaso.json"
                trigger="hover"
                colors="primary:#ffffff"
                style={{ width: "24px", height: "24px" }}
              ></lord-icon>
            </div>
          </div>
        </div>
      </div>
      <div className="client-table-container">
        <div className="overflow-x-auto">
          <table className="client-table-body">
            <thead className="border-separate border-spacing-x-5 border-spacing-y-2 bg-[#0f172b]">
              <tr>
                <th className="client-table-header">
                  Client Name
                </th>
                <th className="client-table-header">
                  Client ID
                </th>
                <th className="client-table-header">
                  No. of Locations
                </th>
                <th className="client-table-header">
                  Contact Number
                </th>
                <th className="client-table-header">
                  E-mail ID
                </th>
                <th className="client-table-header">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr
                  key={index}
                  className="client-table-row text"
                  onClick={() => handleRowClick(client.clientId)}
                >
                  <td className="client-table-cell flex items-center">
                    <img
                      src={`https://via.placeholder.com/30`}
                      alt="client avatar"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    {client.clientName}
                  </td>
                  <td className="client-table-cell">{client.clientId}</td>
                  <td className="client-table-cell">{client.locations}</td>
                  <td className="client-table-cell">{client.contact}</td>
                  <td className="client-table-cell">{client.email}</td>
                  <td className="client-table-cell relative flex items-center">
                    {client.status}
                    <FaEllipsisV
                      className="ml-2 cursor-pointer"
                      onClick={(e) => toggleDropdown(index, e)}
                    />
                    {dropdownOpen === index && (
                      <div
                        className="absolute right-0 mt-2 w-32 bg-[#001f3f] rounded-md shadow-lg z-10"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div
                          className="flex items-center justify-between py-2 px-4 hover:bg-blue-500 cursor-pointer rounded-md"
                          onClick={(e) => handleEdit(client.clientId, e)}
                        >
                          Edit{" "}
                          <FaPencilAlt
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
            <tfoot className="border-separate border-spacing-x-5 border-spacing-y-2 bg-[#0f172b]">
              <tr>
                <td colSpan="6" className="p-2">
                  <div className="flex justify-end">
                    <button
                      className="font-bold px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg"
                      onClick={() => navigate("/create-client")}
                    >
                      + Create Client
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
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-lg font-bold mb-4">Confirm Delete</h2>
            <p className="mb-4">
              Are you sure you want to delete client {selectedClient}?
            </p>
            <div className="flex justify-end">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                onClick={() => setDeleteModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
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

export default Client;
