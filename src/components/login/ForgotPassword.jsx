// src/ForgotPassword.js
import React from 'react';

const ForgotPassword = ({ onBackToLogin }) => {
  return (
    <div className="w-full md:w-2/5 flex items-center justify-center relative">
      <div className="absolute left-0 md:left-[-10%] w-full md:w-[110%] h-full bg-[#091224] flex flex-col justify-center p-[100px] shadow-lg z-10 rounded-none md:rounded-l-[30px]">
        <h1 className="text-start text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#E6FC5F]">Forgot Password</h1>
        <form className="w-full max-w-sm">
          <div className="mb-4 text-white">
            <label className="block text-start text-white text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-full bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 md:px-9 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send OTP
            </button>
          </div>
        </form>
        <button
          className="mt-4 text-sm text-yellow-500 hover:text-yellow-700"
          onClick={onBackToLogin}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
