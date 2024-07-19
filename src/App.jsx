import { Navbar } from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Clients from "./components/client/Client";
import ClientDetails from "./components/client/ClientDetails";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <>
                <Navbar bgColor="#0F172B" textColor="#ffffff" />
                <Dashboard />
              </>
            }
          />
          <Route
            path="/client"
            element={
              <>
                <Navbar bgColor="#0F172B" textColor="#ffffff" />
                <Clients />
              </>
            }
          />
          <Route
            path="/client-details/:clientId"
            element={
              <>
                <Navbar bgColor="#0F172B" textColor="#ffffff" />
                <ClientDetails />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
