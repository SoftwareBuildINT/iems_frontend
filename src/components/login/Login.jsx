// src/LoginPage.js
import React, { useState } from "react";
import { TiInfoLarge } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";

const Login = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#091224]">
      <div className="w-full md:w-3/5 relative h-2/5 md:h-full">
        <img
          src="src/assets/img/login/login.png"
          alt="Background"
          className="object-cover w-full h-full"
        />
        <img
          src="src/assets/img/login/buildintloginwhite.png"
          alt="Logo"
          className="absolute top-4 left-4 w-16 h-auto md:w-24"
        />
      </div>
      {showForgotPassword ? (
        <ForgotPassword onBackToLogin={() => setShowForgotPassword(false)} />
      ) : (
        <div className="w-full md:w-2/5 flex items-center justify-center relative">
          <div className="absolute left-0 md:left-[-10%] w-full md:w-[110%] h-full bg-[#091224] flex flex-col justify-center p-[100px] shadow-lg z-10 rounded-none md:rounded-l-[30px]">
            <div className="absolute top-4 right-4 w-10 h-auto md:w-24 text-white italic flex">
              <span>
                <TiInfoLarge />
              </span>
              <span className="text-xs"> Need Help?</span>
            </div>
            <h1 className="text-start text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#E6FC5F]">
              Welcome to i-EMS
            </h1>
            <h2 className="text-start text-md md:text-lg font-bold mb-2 md:mb-3 text-white">
              Login
            </h2>
            <form className="w-full max-w-sm">
              <div className="mb-4 text-white">
                <label
                  className="block text-start text-white text-sm mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-start text-white text-sm mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-6 flex flex-col md:flex-row items-center justify-between">
                <label className="inline-flex items-center text-white mb-2 md:mb-0">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-yellow-500"
                  />
                  <span className="ml-2">Remember Me</span>
                </label>
                <a
                  href="#"
                  className="text-sm text-yellow-500 hover:text-yellow-700"
                  onClick={() => setShowForgotPassword(true)}
                >
                  Forgot Password?
                </a>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="w-full bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 md:px-9 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
