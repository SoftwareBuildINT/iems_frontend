import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoFilter } from "react-icons/io5";
import { FaEllipsisV, FaTrash, FaPencilAlt } from "react-icons/fa";
import { TfiControlSkipForward, TfiControlSkipBackward } from "react-icons/tfi";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Dropdown from "../Dropdown/Dropdown";

const Location = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSiteStatus, setSelectedSiteStatus] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sites, setSites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const sites = [
  //   {
  //     siteId: "P1DCMU07",
  //     siteName: "Dombivali East",
  //     city: "Mumbai",
  //     siteManager: "Buildint",
  //     managerNumber: "9092347820",
  //     status: "Active",
  //   },
  //   {
  //     siteId: "P1DCMU16",
  //     siteName: "Titwala Thane",
  //     city: "Mumbai",
  //     siteManager: "Buildint",
  //     managerNumber: "9092347820",
  //     status: "Active",
  //   },
  //   {
  //     siteId: "P1DCMU20",
  //     siteName: "Ghatkopar Amrut Nagar",
  //     city: "Mumbai",
  //     siteManager: "Buildint",
  //     managerNumber: "9092347820",
  //     status: "Active",
  //   },
  //   {
  //     siteId: "P1DCMU25",
  //     siteName: "Purshottam Plaza, Kasarwadavli",
  //     city: "Mumbai",
  //     siteManager: "Buildint",
  //     managerNumber: "9092347820",
  //     status: "Active",
  //   },
  //   {
  //     siteId: "P1DCMU27",
  //     siteName: "Thane Sawarkarnagar",
  //     city: "Mumbai",
  //     siteManager: "Buildint",
  //     managerNumber: "9092347820",
  //     status: "Active",
  //   },
  //   {
  //     siteId: "P1DCMU07",
  //     siteName: "Dombivali East",
  //     city: "Mumbai",
  //     siteManager: "Buildint",
  //     managerNumber: "9092347820",
  //     status: "Inactive",
  //   },
  //   {
  //     siteId: "P1DCMU16",
  //     siteName: "Titwala Thane",
  //     city: "Mumbai",
  //     siteManager: "Buildint",
  //     managerNumber: "9092347820",
  //     status: "Active",
  //   },
  //   {
  //     siteId: "P1DCMU20",
  //     siteName: "Ghatkopar Amrut Nagar",
  //     city: "Mumbai",
  //     siteManager: "Buildint",
  //     managerNumber: "9092347820",
  //     status: "Active",
  //   },
  //   {
  //     siteId: "P1DCMU25",
  //     siteName: "Purshottam Plaza, Kasarwadavli",
  //     city: "Mumbai",
  //     siteManager: "Buildint",
  //     managerNumber: "9092347820",
  //     status: "Active",
  //   },
  //   {
  //     siteId: "P1DCMU27",
  //     siteName: "Thane Sawarkarnagar",
  //     city: "Mumbai",
  //     siteManager: "Buildint",
  //     managerNumber: "9092347820",
  //     status: "Active",
  //   },
  //   {
  //     siteId: "P1DCMU07",
  //     siteName: "Dombivali East",
  //     city: "Mumbai",
  //     siteManager: "Buildint",
  //     managerNumber: "9092347820",
  //     status: "Inactive",
  //   },
  //   {
  //     siteId: "P1DCMU16",
  //     siteName: "Titwala Thane",
  //     city: "Mumbai",
  //     siteManager: "Buildint",
  //     managerNumber: "9092347820",
  //     status: "Active",
  //   },
  //   {
  //     siteId: "P1DCMU20",
  //     siteName: "Ghatkopar Amrut Nagar",
  //     city: "Mumbai",
  //     siteManager: "Buildint",
  //     managerNumber: "9092347820",
  //     status: "Active",
  //   },
  //   {
  //     siteId: "P1DCMU25",
  //     siteName: "Purshottam Plaza, Kasarwadavli",
  //     city: "Mumbai",
  //     siteManager: "Buildint",
  //     managerNumber: "9092347820",
  //     status: "Active",
  //   },
  //   {
  //     siteId: "P1DCMU27",
  //     siteName: "Thane Sawarkarnagar",
  //     city: "Mumbai",
  //     siteManager: "Buildint",
  //     managerNumber: "9092347820",
  //     status: "Active",
  //   },
  // ];

  useEffect(() => {
    const fetchSites = async () => {
      try {
        const response = await fetch("http://localhost:3005/sites");
        if (!response.ok) {
          throw new Error("Failed to fetch sites");
        }
        const data = await response.json();
        setSites(
          data.map((site) => ({
            siteId: site.dev_id,
            siteName: site.name,
            city: site.city_name,
            siteManager: site.msc_name,
            managerNumber: site.phone_no,
            status: site.status, // Assuming status is always "Active" as per your example
          }))
        );
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchSites();
  }, []);

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

  const handleRowClick = (locationId) => {
    navigate(`/location-details/${locationId}`);
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(parseInt(value));
    setCurrentPage(1);
  };

  const filteredSites = sites
    .filter((site) => {
      const query = searchQuery.toLowerCase();
      return site.siteId.toLowerCase().includes(query);
      // site.siteName.toLowerCase().includes(query) ||
      // site.city.toLowerCase().includes(query) ||
      // site.siteManager.toLowerCase().includes(query) ||
      // site.managerNumber.toLowerCase().includes(query) ||
      // site.status.toLowerCase().includes(query)
    })
    .filter((site) => {
      return selectedSiteStatus ? site.status === selectedSiteStatus : true;
    });

  const paginatedSites = filteredSites.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleDropdown = (index, event) => {
    event.stopPropagation();
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleSiteTypeSelection = (type) => {
    setSelectedSiteStatus(type);
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

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center h-[80vh] w-full">
  //       <div className="loader"></div>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div className="flex flex-col items-start justify-start p-3 pt-4 pl-1 2xl:gap-2 2xl:pt-6">
      <div className="select-none flex flex-col md:flex-row justify-between w-full pb-4 pr-3 space-y-4 md:space-y-0">
        <div>
          <h1 className="font-bold text-xl md:text-2xl 2xl:text-3xl pl-3 mdl:pl-5">
            Location Master
          </h1>
          <h4 className="text-xs md:text-sm pl-3 md:pl-5">Location list /</h4>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-2 w-full md:w-auto px-3 md:px-0">
          <div className="relative w-full md:w-auto flex items-center">
            <input
              type="text"
              placeholder="Search Location..."
              className="w-full md:w-auto px-3 py-2 pr-12 border border-gray-300 bg-transparent rounded-md focus:outline-none focus:ring-1 "
              // defaultValue={searchQuery}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              // onKeyDown={(e) => {
              //   if (e.key === "Enter") {
              //     setSearchQuery(e.target.value);
              //   }
              // }}
              style={{ paddingRight: "3rem" }}
            />
            <lord-icon
              src="https://cdn.lordicon.com/pagmnkiz.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#9ce5f4"
              style={{
                width: "30px",
                height: "30px",
                position: "absolute",
                right: "0",
                margin: "10px",
                cursor: "pointer",
              }}
            ></lord-icon>
          </div>
          <div className="relative w-full md:w-auto">
            <select
              onChange={(event) => {
                handleSiteTypeSelection(event.target.value);
              }}
              className="w-full md:w-auto appearance-none px-3 py-2 pr-10 border bg-[#0a101f] text-white border-gray-300 rounded-md focus:outline-none focus:ring-1"
            >
              <option value="">Filter By</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
            <IoFilter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" />
          </div>
          <button
            className="font-bold px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg"
            onClick={() => navigate("/create-location")}
          >
            + Add Location
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-3 w-full">
        <div className="overflow-x-auto">
          {loading ? (
            <div className="flex items-center justify-center h-[50vh] w-full">
              <div className="loader"></div>
            </div>
          ) : (
            <table className="table-auto w-full min-w-full">
              <thead className="border-separate border-spacing-x-5 border-spacing-y-2 bg-[#0f172b] select-none">
                <tr>
                  <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">
                    Site ID
                  </th>
                  <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">
                    Site Name
                  </th>
                  <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">
                    City
                  </th>
                  <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">
                    Site Manager
                  </th>
                  <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">
                    Manager Number
                  </th>
                  <th className="px-4 py-2 text-left text-xs md:text-sm lg:text-base">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedSites.map((client, index) => (
                  <tr
                    key={index}
                    className="text-xs md:text-sm lg:text-base border-b border-gray-600 cursor-default"
                  >
                    <td
                      className="px-4 py-2 flex items-center cursor-pointer"
                      onClick={() => handleRowClick(client.siteId)}
                    >
                      {client.siteId}
                    </td>
                    <td className="px-4 py-2 min-w-[380px]">
                      {client.siteName}
                    </td>
                    <td className="px-4 py-2">{client.city}</td>
                    <td className="px-4 py-2">{client.siteManager}</td>
                    <td className="px-4 py-2">{client.managerNumber}</td>
                    <td className="px-4 py-2 relative flex items-center gap-2">
                      <span className="w-14">{client.status}</span>
                      <FaEllipsisV
                        className="cursor-pointer"
                        onClick={(e) => toggleDropdown(index, e)}
                      />
                      {dropdownOpen === index && (
                        <div
                          className="absolute right-0 mt-2 w-32 bg-[#0f172b] rounded-md shadow-lg z-10"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div
                            className="flex items-center justify-between py-2 px-4 hover:bg-[#1a253f] cursor-pointer rounded-md"
                            onClick={(e) => handleEdit(client.siteId, e)}
                          >
                            Edit{" "}
                            <FaPencilAlt
                              className="ml-2 cursor-pointer"
                              onClick={(e) => handleEdit(client.siteId, e)}
                            />
                          </div>
                          <div
                            className="flex items-center justify-between py-2 px-4 hover:bg-[#1a253f] cursor-pointer rounded-md"
                            onClick={(e) => handleDelete(client.siteId, e)}
                          >
                            Delete <FaTrash className="ml-2" />
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="alert-table-footer border-spacing-x-5 border-spacing-y-2 select-none">
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
                  <td colSpan="1" className="p-3 pl-4 pr-4">
                    <div className="flex justify-center">
                      Page {currentPage} of{" "}
                      {Math.ceil(filteredSites.length / itemsPerPage)}
                    </div>
                  </td>
                  <td colSpan="1" className="p-3 pl-4 pr-8">
                    <div className="flex justify-between max-w-[80px]">
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
                          Math.ceil(filteredSites.length / itemsPerPage)
                        }
                      >
                        <IoIosArrowForward />
                      </button>
                      <button
                        onClick={() =>
                          setCurrentPage(
                            Math.ceil(filteredSites.length / itemsPerPage)
                          )
                        }
                        disabled={
                          currentPage ===
                          Math.ceil(filteredSites.length / itemsPerPage)
                        }
                      >
                        <TfiControlSkipForward />
                      </button>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          )}
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
