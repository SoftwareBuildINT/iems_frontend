import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const CreateLocation = () => {
  const handleFileInputClick = () => {
    document.getElementById('client-logo').click();
  };

  return (
    <div className="flex flex-col items-start justify-start pt-4 pl-1 2xl:gap-2 2xl:pt-6">
      <div className="font-bold text-2xl pb-2 pl-5 2xl:text-3xl select-none">
        <h1>Create Location</h1>
      </div>
      <form className="w-full p-5">
        <div className="grid grid-cols-3 gap-4">
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="client-logo">
              Upload Document
            </label>
            <input
              type="file"
              id="client-logo"
              name="clientLogo"
              className="hidden"
            />
            <button
              type="button"
              onClick={handleFileInputClick}
              className="h-[150px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent border rounded shadow flex flex-col items-center justify-center"
            >
              <FontAwesomeIcon icon={faUpload} size="2x" />
              <span className="mt-2">Upload Document</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="client-status">
              Branch Code
            </label>
            <select
              id="client-status"
              name="clientStatus"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
            >
              <option>Diebold</option>
              <option>Euronet</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="client-name">
              Device Id <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="device-name"
              name="deviceName"
              className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="client-type">
              Device Type <span className="text-red-500">*</span>
            </label>
            <select
              id="client-type"
              name="clientType"
              className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>i-atm</option>
              <option>Zion</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="client-status">
              Client Name
            </label>
            <select
              id="client-status"
              name="clientStatus"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
            >
              <option>Diebold</option>
              <option>Euronet</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="client-id">
              MSE Name
            </label>
            <input
              type="text"
              id="client-id"
              name="clientId"
              className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="client-id">
              Rate Per Unit
            </label>
            <input
              type="number"
              id="client-id"
              name="clientId"
              className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="client-status">
              Zone
            </label>
            <select
              id="client-status"
              name="clientStatus"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
            >
              <option>India</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="client-status">
              Region
            </label>
            <select
              id="client-status"
              name="clientStatus"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
            >
              <option>North</option>
              <option>South</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="client-status">
              State
            </label>
            <select
              id="client-status"
              name="clientStatus"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
            >
              <option>Maharashtra</option>
              <option>Gujarat</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="client-status">
              City
            </label>
            <select
              id="client-status"
              name="clientStatus"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
            >
              <option>Mumbai</option>
              <option>Delhi</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="client-id">
              Phone Number
            </label>
            <input
              type="number"
              id="client-id"
              name="clientId"
              className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="client-id">
              SIM Number
            </label>
            <input
              type="number"
              id="client-id"
              name="clientId"
              className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="client-id">
              Latitude
            </label>
            <input
              type="number"
              id="client-id"
              name="clientId"
              className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="client-id">
              Longitude
            </label>
            <input
              type="number"
              id="client-id"
              name="clientId"
              className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="flex items-center justify-end">
          <div className='p-3'>
            <button
              type="button"
              className="font-bold px-4 py-2 bg-gradient-to-r from-yellow-400 to-green-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg"
            >
              Cancel
            </button>
          </div>
          <div>
            <button
              type="button"
              className="font-bold px-4 py-2 bg-gradient-to-r from-yellow-400 to-green-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg"
            >
              + Create Location
            </button>
          </div>
        </div>

      </form>
    </div>
  );
};

export default CreateLocation;
