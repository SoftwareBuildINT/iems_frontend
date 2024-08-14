import React, { useState, useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TfiControlSkipForward, TfiControlSkipBackward } from "react-icons/tfi";
import Dropdown from "../Dropdown/Dropdown";
import useClickAway from "../hooks/useClickAway";
import "./alert.css";
import "../../assets/styles/common.css";

const Alert = () => {
  const alerts = [
    {
      alertId: "1",
      did: "P1DCMU20",
      location: "Ghatkopar",
      alertDescription: "AC-2 compressor not working",
      assignTo: "Sanjeev Singh",
      priority: "High",
      raisedOn: "29/07/2024",
      colsedOn: "31/07/2024",
      dueDays: "NA",
      status: "Resolved",
    },
    {
      alertId: "2",
      did: "P1DCMU24",
      location: "Vikhroli",
      alertDescription: "Signage scheduling issue",
      assignTo: "Sanjeev Singh",
      priority: "Medium",
      raisedOn: "01/08/2024",
      colsedOn: "03/08/2024",
      dueDays: "NA",
      status: "Resolved",
    },
    {
      alertId: "3",
      did: "P1DCMU27",
      location: "Thane",
      alertDescription: "AC-1 is not cooling",
      assignTo: "Sanjeev Singh",
      priority: "Low",
      raisedOn: "31/07/2024",
      colsedOn: "NA",
      dueDays: "3",
      status: "Assigned",
    },
    {
      alertId: "4",
      did: "P1DCMU35",
      location: "Dadar",
      alertDescription: "AC-1 is not working properly",
      assignTo: "Sanjeev Singh",
      priority: "High",
      raisedOn: "01/08/2024",
      colsedOn: "NA",
      dueDays: "2",
      status: "Assigned",
    },
    {
      alertId: "5",
      did: "P1DCMU43",
      location: "Saki Naka",
      alertDescription: "P1DCMU43 is offline since 02/08/2024",
      assignTo: "Sanjeev Singh",
      priority: "High",
      raisedOn: "02/08/2024",
      colsedOn: "03/08/2024",
      dueDays: "NA",
      status: "Resolved",
    },
    {
      alertId: "6",
      did: "P1DCMU20",
      location: "Ghatkopar",
      alertDescription: "AC-2 compressor not working",
      assignTo: "Sanjeev Singh",
      priority: "High",
      raisedOn: "29/07/2024",
      colsedOn: "31/07/2024",
      dueDays: "NA",
      status: "Resolved",
    },
    {
      alertId: "7",
      did: "P1DCMU24",
      location: "Vikhroli",
      alertDescription: "Signage scheduling issue",
      assignTo: "Sanjeev Singh",
      priority: "Medium",
      raisedOn: "01/08/2024",
      colsedOn: "03/08/2024",
      dueDays: "NA",
      status: "Resolved",
    },
    {
      alertId: "8",
      did: "P1DCMU27",
      location: "Thane",
      alertDescription: "AC-1 is not cooling",
      assignTo: "Sanjeev Singh",
      priority: "Low",
      raisedOn: "31/07/2024",
      colsedOn: "NA",
      dueDays: "3",
      status: "Assigned",
    },
    {
      alertId: "9",
      did: "P1DCMU35",
      location: "Dadar",
      alertDescription: "AC-1 is not working properly",
      assignTo: "Sanjeev Singh",
      priority: "High",
      raisedOn: "01/08/2024",
      colsedOn: "NA",
      dueDays: "2",
      status: "Assigned",
    },
    {
      alertId: "10",
      did: "P1DCMU43",
      location: "Saki Naka",
      alertDescription: "P1DCMU43 is offline since 02/08/2024",
      assignTo: "Sanjeev Singh",
      priority: "High",
      raisedOn: "02/08/2024",
      colsedOn: "03/08/2024",
      dueDays: "NA",
      status: "Resolved",
    },
    {
      alertId: "11",
      did: "P1DCMU20",
      location: "Ghatkopar",
      alertDescription: "AC-2 compressor not working",
      assignTo: "Sanjeev Singh",
      priority: "High",
      raisedOn: "29/07/2024",
      colsedOn: "31/07/2024",
      dueDays: "NA",
      status: "Resolved",
    },
    {
      alertId: "12",
      did: "P1DCMU24",
      location: "Vikhroli",
      alertDescription: "Signage scheduling issue",
      assignTo: "Sanjeev Singh",
      priority: "Medium",
      raisedOn: "01/08/2024",
      colsedOn: "03/08/2024",
      dueDays: "NA",
      status: "Resolved",
    },
    {
      alertId: "13",
      did: "P1DCMU27",
      location: "Thane",
      alertDescription: "AC-1 is not cooling",
      assignTo: "Sanjeev Singh",
      priority: "Low",
      raisedOn: "31/07/2024",
      colsedOn: "NA",
      dueDays: "3",
      status: "Assigned",
    },
    {
      alertId: "14",
      did: "P1DCMU35",
      location: "Dadar",
      alertDescription: "AC-1 is not working properly",
      assignTo: "Sanjeev Singh",
      priority: "High",
      raisedOn: "01/08/2024",
      colsedOn: "NA",
      dueDays: "2",
      status: "Assigned",
    },
    {
      alertId: "15",
      did: "P1DCMU43",
      location: "Saki Naka",
      alertDescription: "P1DCMU43 is offline since 02/08/2024",
      assignTo: "Sanjeev Singh",
      priority: "High",
      raisedOn: "02/08/2024",
      colsedOn: "03/08/2024",
      dueDays: "NA",
      status: "Resolved",
    },
    {
      alertId: "16",
      did: "P1DCMU20",
      location: "Ghatkopar",
      alertDescription: "AC-2 compressor not working",
      assignTo: "Sanjeev Singh",
      priority: "High",
      raisedOn: "29/07/2024",
      colsedOn: "31/07/2024",
      dueDays: "NA",
      status: "Resolved",
    },
    {
      alertId: "17",
      did: "P1DCMU24",
      location: "Vikhroli",
      alertDescription: "Signage scheduling issue",
      assignTo: "Sanjeev Singh",
      priority: "Medium",
      raisedOn: "01/08/2024",
      colsedOn: "03/08/2024",
      dueDays: "NA",
      status: "Resolved",
    },
    {
      alertId: "18",
      did: "P1DCMU27",
      location: "Thane",
      alertDescription: "AC-1 is not cooling",
      assignTo: "Sanjeev Singh",
      priority: "Low",
      raisedOn: "31/07/2024",
      colsedOn: "NA",
      dueDays: "3",
      status: "Assigned",
    },
    {
      alertId: "19",
      did: "P1DCMU35",
      location: "Dadar",
      alertDescription: "AC-1 is not working properly",
      assignTo: "Sanjeev Singh",
      priority: "High",
      raisedOn: "01/08/2024",
      colsedOn: "NA",
      dueDays: "2",
      status: "Assigned",
    },
    {
      alertId: "20",
      did: "P1DCMU43",
      location: "Saki Naka",
      alertDescription: "P1DCMU43 is offline since 02/08/2024",
      assignTo: "Sanjeev Singh",
      priority: "High",
      raisedOn: "02/08/2024",
      colsedOn: "03/08/2024",
      dueDays: "NA",
      status: "Resolved",
    },
  ];

  const cards = [
    {
      label: "Signage",
      data: "30",
      Icon: "src/assets/img/alerts/signage.svg",
      bgColor: "bg-gradient-to-tl from-purple-600 via-purple-500 to-purple-400",
    },
    {
      label: "AC",
      data: "692",
      Icon: "src/assets/img/alerts/ac.svg",
      bgColor: "bg-gradient-to-tl from-blue-600 via-blue-500 to-blue-400",
    },
    {
      label: "UPS",
      data: "138",
      Icon: "src/assets/img/alerts/ups.svg",
      bgColor: "bg-gradient-to-tl from-violet-600 via-violet-500 to-violet-400",
    },
    {
      label: "Sensors",
      data: "420",
      Icon: "src/assets/img/alerts/sensors.svg",
      bgColor: "bg-gradient-to-tl from-yellow-600 via-yellow-500 to-yellow-400",
    },
    {
      label: "ATM Machines",
      data: "331",
      Icon: "src/assets/img/alerts/atm.svg",
      bgColor: "bg-gradient-to-tl from-red-600 via-red-500 to-red-400",
    },
  ];

  const circleStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  };

  const totalData = cards.reduce((sum, card) => sum + Number(card.data), 0);

  const [checkedState, setCheckedState] = useState(
    new Array(alerts.length).fill(false)
  );
  const [isHeaderChecked, setIsHeaderChecked] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const alertTypeRef = useRef(null);
  const statusRef = useRef(null);

  const handleHeaderCheckboxChange = () => {
    const newCheckedState = new Array(alerts.length).fill(!isHeaderChecked);
    setCheckedState(newCheckedState);
    setIsHeaderChecked(!isHeaderChecked);
  };

  const handleRowCheckboxChange = (index) => {
    const newCheckedState = checkedState.map((item, idx) =>
      idx === index ? !item : item
    );
    setCheckedState(newCheckedState);
    setIsHeaderChecked(newCheckedState.every((state) => state));
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(parseInt(value));
    setCurrentPage(1);
  };

  // State for managing dropdown
  const [isAlertTypeDropdownOpen, setIsAlertTypeDropdownOpen] = useState(false);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);

  const [selectedAlertType, setSelectedAlertType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleAlertTypeSelection = (type) => {
    setSelectedAlertType(type);
    setIsAlertTypeDropdownOpen(false);
  };

  const handleStatusSelection = (status) => {
    setSelectedStatus(status);
    setIsStatusDropdownOpen(false);
  };

  const filteredAlerts = selectedStatus
    ? alerts.filter((alert) => alert.status === selectedStatus)
    : alerts;

  const paginatedAlerts = filteredAlerts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useClickAway(alertTypeRef, () => setIsAlertTypeDropdownOpen(false));
  useClickAway(statusRef, () => setIsStatusDropdownOpen(false));

  return (
    <div className="component-body">
      <h1 className="page-header select-none">Alerts</h1>
      <div className="grid w-full card-container">
        {cards.map((card, idx) => {
          const { bgColor } = card;
          return (
            <div key={idx}>
              <div className="alert-card select-none">
                <div className="pl-3">
                  <div
                    className={`circle-dimension ${bgColor}`}
                    style={circleStyle}
                  >
                    <img
                      src={card.Icon}
                      className="w-1/2 h-1/2 object-contain select-none"
                    />
                  </div>
                </div>
                <div className="pl-4">
                  <div className="alert-card-label">{card.label}</div>
                  <div className="font-bold alert-card-data">{card.data}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center select-none">
          <div className="page-header">Alert List {`(${totalData})`}</div>
          <div className="download-alert-button">
            <img src="src/assets/img/alerts/excel.svg" alt="excel" /> Download
            Alert
          </div>
        </div>
      </div>
      <div className="selection-filter">
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="Search DID"
            className="selection-item pr-10"
          />
          <IoSearchOutline className="absolute w-6 h-6 right-3 text-white opacity-50 cursor-pointer" />
        </div>
        <div className="relative" ref={alertTypeRef}>
          <div
            className="selection-item flex justify-between items-center cursor-pointer"
            onClick={() => setIsAlertTypeDropdownOpen(!isAlertTypeDropdownOpen)}
          >
            {selectedAlertType || "Select Alert Type"}
            <RiArrowDropDownLine className="w-5 h-5" />
          </div>
          {isAlertTypeDropdownOpen && (
            <div className="selection-dropdown shadow-lg">
              <div
                className="selection-dropdown-item"
                onClick={() => handleAlertTypeSelection("AC Alerts")}
              >
                AC Alerts
              </div>
              <div
                className="selection-dropdown-item"
                onClick={() => handleAlertTypeSelection("Signage Alerts")}
              >
                Signage Alerts
              </div>
              <div
                className="selection-dropdown-item"
                onClick={() => handleAlertTypeSelection("UPS Alerts")}
              >
                UPS Alerts
              </div>
            </div>
          )}
        </div>

        <div className="relative" ref={statusRef}>
          <div
            className="selection-item flex justify-between items-center cursor-pointer"
            onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
          >
            {selectedStatus || "Select Status"}
            <RiArrowDropDownLine className="w-5 h-5" />
          </div>
          {isStatusDropdownOpen && (
            <div className="selection-dropdown shadow-lg">
              <div
                className="selection-dropdown-item"
                onClick={() => handleStatusSelection("")}
              >
                Select Status
              </div>
              <div
                className="selection-dropdown-item"
                onClick={() => handleStatusSelection("New")}
              >
                New
              </div>
              <div
                className="selection-dropdown-item"
                onClick={() => handleStatusSelection("Assigned")}
              >
                Assigned
              </div>
              <div
                className="selection-dropdown-item"
                onClick={() => handleStatusSelection("Resolved")}
              >
                Resolved
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center relative ">
          <input
            type="date"
            className="selection-item"
            onFocus={(e) => e.target.showPicker()}
          />
        </div>

        <div className="flex items-center relative">
          <input
            type="date"
            className="selection-item"
            onFocus={(e) => e.target.showPicker()}
          />
        </div>
      </div>

      <div className="alert-table-container">
        <div className="overflow-x-auto">
          <table className="alert-table-body rounded-xl ">
            <thead className="border-separate border-spacing-x-5 border-spacing-y-2 bg-[#0f172b] ">
              <tr>
                <th className="alert-table-header flex">
                  <input
                    type="checkbox"
                    className="m-2"
                    checked={isHeaderChecked}
                    onChange={handleHeaderCheckboxChange}
                  />
                  Alert ID
                </th>
                <th className="alert-table-header">DID</th>
                <th className="alert-table-header">Location</th>
                <th className="alert-table-header">Alert Description</th>
                <th className="alert-table-header">Assign to</th>
                <th className="alert-table-header">Priority</th>
                <th className="alert-table-header">Raised on</th>
                <th className="alert-table-header">Closed on</th>
                <th className="alert-table-header">Due Days</th>
                <th className="alert-table-header">Status</th>
              </tr>
            </thead>
            <tbody>
              {paginatedAlerts.map((client, index) => (
                <tr key={index} className="alert-table-row text">
                  <td className="alert-table-cell">
                    <input
                      type="checkbox"
                      className="m-2"
                      checked={checkedState[index]}
                      onChange={() => handleRowCheckboxChange(index)}
                    />
                    {client.alertId}
                  </td>
                  <td className="alert-table-cell">{client.did}</td>
                  <td className="alert-table-cell">{client.location}</td>
                  <td className="alert-table-cell">
                    {client.alertDescription}
                  </td>
                  <td className="alert-table-cell">{client.assignTo}</td>
                  <td className="alert-table-cell">{client.priority}</td>
                  <td className="alert-table-cell">{client.raisedOn}</td>
                  <td className="alert-table-cell">{client.colsedOn}</td>
                  <td className="alert-table-cell">{client.dueDays}</td>
                  <td className="alert-table-cell">{client.status}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="alert-table-footer border-spacing-x-5 border-spacing-y-2">
              <tr>
                <td colSpan="5" className="p-3 pl-4 pr-4">
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
                <td colSpan="3" className="p-3 pl-4 pr-4">
                  <div className="flex justify-end">
                    Page {currentPage} of{" "}
                    {Math.ceil(filteredAlerts.length / itemsPerPage)}
                  </div>
                </td>
                <td colSpan="2" className="p-3 pl-4 pr-8">
                  <div className="flex justify-end gap-4">
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
                        currentPage === Math.ceil(filteredAlerts.length / itemsPerPage)
                      }
                    >
                      <IoIosArrowForward />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentPage(Math.ceil(filteredAlerts.length / itemsPerPage))
                      }
                      disabled={
                        currentPage === Math.ceil(filteredAlerts.length / itemsPerPage)
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
    </div>
  );
};

export default Alert;
