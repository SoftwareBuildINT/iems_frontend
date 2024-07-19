import { Navbar } from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alert from "./components/Alert";

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
                <Alert />
                
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
