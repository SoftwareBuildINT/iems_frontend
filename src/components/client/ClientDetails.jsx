import React from "react";
import { useParams } from "react-router-dom";

const ClientDetails = () => {
  const { clientId } = useParams();

  // Fetch client details using the clientId
  // Here you would typically make an API call to get the client details

  return (
    <div>
      <h1>Client Details for {clientId}</h1>
      {/* Render client details here */}
    </div>
  );
};

export default ClientDetails;
