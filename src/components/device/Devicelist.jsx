import React, { useState } from "react";
import "./device.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TableComponent from "./TableComponent"; // Adjust the path as needed

const Devicelist = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const clients = [
    {
      clientName: "ICICI Bank",
      clientId: "SB26621F62",
      locations: "066",
      contact: "9092347820",
      email: "arunram12@gmail.com",
      status: "Active",
      category: "i-ATM",
    },
    {
      clientName: "UNION Bank",
      clientId: "SB26621F62",
      locations: "066",
      contact: "9092347820",
      email: "arunram12@gmail.com",
      status: "Active",
      category: "Piazza",
    },
    {
      clientName: "UNION Bank",
      clientId: "SB26621F62",
      locations: "066",
      contact: "9092347820",
      email: "arunram12@gmail.com",
      status: "Active",
      category: "iZion",
    },
    // Add more clients as needed
  ];

  return (
    <>
      <div className="component-body">
        <h1 className="page-header select-none">Device Management</h1>
        <div className="w-full mt-4">
          <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
              <Tab>i-ATM</Tab>
              <Tab>Piazza</Tab>
              <Tab>iZion</Tab>
            </TabList>

            <TabPanel>
              <TableComponent clients={clients.filter(client => client.category === "i-ATM")} />
            </TabPanel>
            <TabPanel>
              <TableComponent clients={clients.filter(client => client.category === "Piazza")} />
            </TabPanel>
            <TabPanel>
              <TableComponent clients={clients.filter(client => client.category === "iZion")} />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Devicelist;
