import { Navbar } from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Client from "./components/client/Client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Clients from "./components/client/Client";
import ClientDetails from "./components/client/ClientDetails";

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
        </Routes>
      </Router>
    </>
  );
}
