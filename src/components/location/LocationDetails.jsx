import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './client.css'; // Import your custom CSS

const ClientDetails = () => {
  const { clientId } = useParams();
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="flex flex-col items-start justify-start pt-4 pl-1 2xl:gap-2 2xl:pt-6">
      <div className="font-bold text-2xl pb-2 pl-5 2xl:text-3xl select-none pb-4">
        <h1>Client Details</h1>
      </div>
      <div className="w-full h-[200px] bg-[#0F172B] text-white flex items-center p-4 rounded-lg select-none">
        <div className="flex w-full">
          <div className="flex-1 flex flex-col items-center justify-center relative">
            <img src="src/assets/img/buildint.png" alt="Logo" className="h-20" />
            <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white"></div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center relative">
            <span>Client Name</span>
            <span className="font-bold pt-2">Diebold</span>
            <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white"></div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center relative">
            <span>Client Type</span>
            <span className="font-bold pt-2">Active</span>
            <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white"></div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center relative">
            <span>Client Status</span>
            <span className="font-bold pt-2">Status</span>
            <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white"></div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center relative">
            <span>Additional Info 1</span>
            <span className="font-bold pt-2">Info 1</span>
            <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white"></div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center relative">
            <span>Additional Info 2</span>
            <span className="font-bold pt-2">Info 2</span>
            <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white"></div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center relative">
            <span>Additional Info 3</span>
            <span className="font-bold pt-2">Info 3</span>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="w-full mt-4">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Dashboard</Tab>
            <Tab>Location</Tab>
            <Tab>User</Tab>
          </TabList>

          <TabPanel>
            <h2>Dashboard Content</h2>
            <p>Details about the client's dashboard go here.</p>
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

export default ClientDetails;
