import React from 'react';

const ActiveSitesCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="flex items-center bg-gray-800 rounded-lg p-4 shadow-md text-white">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-500">
          <svg className="h-8 w-8" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M3 9h18M4 12v10h16V12M4 9h16v1a1 1 0 01-1 1H5a1 1 0 01-1-1V9z" />
          </svg>
        </div>
        <div className="ml-4">
          <div className="text-gray-400">Active Sites</div>
          <div className="text-2xl font-bold">50</div>
        </div>
      </div>
    </div>
  );
}

export default ActiveSitesCard;
