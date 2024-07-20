import React from "react";
import { useParams } from "react-router-dom";

const ClientDetails = () => {
  const { clientId } = useParams();

  return (
    <div className="flex flex-col items-start justify-start pt-4 pl-1 2xl:gap-2 2xl:pt-6">
      <div className="font-bold text-2xl pb-2 pl-5 2xl:text-3xl select-none pb-4">
        <h1>Client Details</h1>
      </div>
      <div className="w-full h-[200px] bg-[#50596C] text-white flex items-center p-4 rounded-lg select-none">
        <div className="flex w-full">
          <div className="flex-1 flex flex-col items-center justify-center relative">
            <img src="path-to-logo.png" alt="Logo" className="h-20" />
            <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white"></div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center relative">
            <span>Client Name</span>
            <span className="font-bold pt-2">Diebold</span>
            <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white"></div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center relative">
            <span>Client Type</span>
            <span className="font-bold pt-2">Active</span>
            <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white"></div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center relative">
            <span>Client Status</span>
            <span className="font-bold pt-2">Status</span>
            <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white"></div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center relative">
            <span>Additional Info 1</span>
            <span className="font-bold pt-2">Info 1</span>
            <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white"></div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center relative">
            <span>Additional Info 2</span>
            <span className="font-bold pt-2">Info 2</span>
            <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white"></div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center relative">
            <span>Additional Info 3</span>
            <span className="font-bold pt-2">Info 3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
