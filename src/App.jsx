import { Navbar } from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Client from "./components/client/Client";
import ClientDetails from "./components/client/ClientDetails";
import CreateClient from "./components/client/CreateClient";
import EditClient from "./components/client/EditClient"; // Import EditClient
import Alert from "./components/alert/Alert";
import Devicelist from "./components/device/Devicelist";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Location from "./components/location/Location";
import LocationDetails from "./components/location/LocationDetails"
import CreateLocation from "./components/location/CreateLocation";
import AddDevice from "./components/device/AddDevice";

export default function App() {
  const bgColor = "#0F172B";
  const textColor = "#ffffff";

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={<Navbar bgColor={bgColor} textColor={textColor} />}
        >
          <Route index element={<Dashboard title = "Dashboard"/>} />
          <Route path="client" element={<Client />} />
          <Route path="client-details/:clientId" element={<ClientDetails />} />
          <Route path="create-client" element={<CreateClient />} />
          <Route path="edit-client/:clientId" element={<EditClient />} /> {/* Add the route */}
          <Route path="alert" element={<Alert />} />
          <Route path="device-list" element={<Devicelist />} />
          <Route path="location" element={<Location />} />
          <Route path="Location-details/:locationId" element={<LocationDetails />} />
          <Route path="create-location" element={<CreateLocation />} />
          <Route path="add-device" element={<AddDevice/ >} />
        </Route>
      </Routes>
    </Router>
  );
}
