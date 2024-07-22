import { Navbar } from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Client from "./components/client/Client";
import ClientDetails from "./components/client/ClientDetails";
import CreateClient from "./components/client/CreateClient";
import Alert from "./components/alert/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Devicelist from "./components/device/Devicelist";

export default function App() {
  const bgColor = "#0F172B";
  const textColor = "#ffffff";

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/"
            element={<Navbar bgColor={bgColor} textColor={textColor} />}
          >
            <Route index element={<Dashboard />}></Route>
            <Route path="/client" element={<Client />}></Route>
            <Route
              path="/client-details/:clientId"
              element={<ClientDetails />}
            ></Route>
            <Route path="/create-client" element={<CreateClient />}></Route>
            <Route path="/alert" element={<Alert />}></Route>
            <Route path="/device-list" element={<Devicelist />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}
