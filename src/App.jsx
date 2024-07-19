import { Navbar } from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Client from "./components/client/Client";
import ClientDetails from "./components/client/ClientDetails";
import CreateClient from "./components/client/CreateClient"; // Import the CreateClient component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const bgColor = "#0F172B";
  const textColor = "#ffffff";

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <>
                <Navbar bgColor={bgColor} textColor={textColor} />
                <Dashboard />
              </>
            }
          />
          <Route
            path="/client"
            element={
              <>
                <Navbar bgColor={bgColor} textColor={textColor} />
                <Client />
              </>
            }
          />
          <Route
            path="/client-details/:clientId"
            element={
              <>
                <Navbar bgColor={bgColor} textColor={textColor} />
                <ClientDetails />
              </>
            }
          />
          <Route
            path="/create-client"
            element={
              <>
                <Navbar bgColor={bgColor} textColor={textColor} />
                <CreateClient /> {/* Add the CreateClient component */}
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
