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
        <h1>Create Client</h1>
      </div>
      <form className="w-full p-5">
        <div className="grid grid-cols-3 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="client-logo">
              Client Logo
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
              <span className="mt-2">Upload Logo</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="client-id">
              Client ID
            </label>
            <input
              type="text"
              id="client-id"
              name="clientId"
              className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="client-name">
              Client Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="client-name"
              name="clientName"
              className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="client-type">
              Client Type <span className="text-red-500">*</span>
            </label>
            <select
              id="client-type"
              name="clientType"
              className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Direct</option>
              <option>Indirect</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="client-status">
              Status
            </label>
            <select
              id="client-status"
              name="clientStatus"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
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
           + Create Client
          </button>
            </div>
        </div>
        
      </form>
    </div>
  );
};

export default CreateLocation;
