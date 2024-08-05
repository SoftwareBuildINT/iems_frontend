import React, { useState } from "react";
import { FaEllipsisV, FaTrash, FaPencilAlt } from "react-icons/fa";
import "./alert.css";
import "../../assets/styles/common.css";

const Alert = () => {
  const clients = [
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
      status: "Pending",
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
      status: "Pending",
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
    // Add more clients as needed
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
    new Array(clients.length).fill(false)
  );

  const [isHeaderChecked, setIsHeaderChecked] = useState(false);

  const handleHeaderCheckboxChange = () => {
    const newCheckedState = new Array(clients.length).fill(!isHeaderChecked);
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
                    ></img>
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
          <div className="border rounded-xl p-2 flex gap-2 hover:bg-[#0f172b] cursor-pointer">
            <img src="src/assets/img/alerts/excel.svg" alt="excel" /> Download
            Alert
          </div>
        </div>
        <div className="alert-table-container">
          <div className="overflow-x-auto">
            <table className="alert-table-body rounded-xl ">
              <thead className="border-separate border-spacing-x-5 border-spacing-y-2 bg-[#0f172b] ">
                <tr>
                  <th className="alert-table-header">
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
                {clients.map((client, index) => (
                  <tr key={index} className="alert-table-row text">
                    <td className="alert-table-cell flex items-center">
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
                  {/* <td colSpan="10" className="p-2">
                    <div className="flex justify-end">
                      <button
                        className="font-bold px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg"
                      >
                        + Create Client
                      </button>
                    </div>
                  </td> */}

                  <td colSpan="5" className="p-2">
                    <div>Items per page 10</div>
                  </td>
                  <td colSpan="3" className="p-2">
                    <div className="flex justify-end">Page 1-10 of 50</div>
                  </td>
                  <td colSpan="2" className="p-2">
                    <div className="flex justify-end">arrows</div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
