import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Dashboard from "../dashboard/Dashboard";
import "./location.css";
import LocationStats from "./LocationStats";
import LineChart from "./LineChart"

const LocationDetails = () => {
  const { clientId } = useParams();
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="component-body">
      <div className="page-header select-none">
        <h1>Location Details</h1>
      </div>
      <div className="client-card">
        <div className="item-container">
          <div className="card-item">
            <img
              src="../src/assets/img/diebold.jpg"
              alt="Logo"
              className="client-image"
            />
            <div className="divider-line"></div>
          </div>
          <div className="card-item">
            <span>Location Name</span>
            <span className="font-bold pt-2">Thane</span>
            <div className="divider-line"></div>
          </div>
          <div className="card-item">
            <span>Location ID</span>
            <span className="font-bold pt-2">LOCID1</span>
            <div className="divider-line"></div>
          </div>
          <div className="card-item hidden-1">
            <span>Contact Person</span>
            <span className="font-bold pt-2">Khilesh</span>
            <div className="divider-line"></div>
          </div>
          <div className="card-item hidden-1">
            <span>Contact Number</span>
            <span className="font-bold pt-2">+91 9773336701</span>
            <div className="divider-line"></div>
          </div>
          <div className="card-item hidden">
            <span>Created Date</span>
            <span className="font-bold pt-2">29 July 2024</span>
            <div className="divider-line"></div>
          </div>
          <div className="card-item">
            <span>Status</span>
            <span className="font-bold pt-2">Active</span>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="w-full mt-4">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Statistics</Tab>
            <Tab>Control</Tab>
            <Tab>User</Tab>
          </TabList>
          <TabPanel >
          <LocationStats />
          </TabPanel>
          <TabPanel>
            <h2>Location Content</h2>
            <p>Details about the client's locations go here.</p>
          </TabPanel>
          <TabPanel>
            <h2>User Content</h2>
            <p>Details about the client's users go here.</p>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default LocationDetails;
