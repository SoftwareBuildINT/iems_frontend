import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./users.css";
import { FaEllipsisV, FaPencilAlt, FaTrash } from "react-icons/fa";
import { TfiControlSkipBackward, TfiControlSkipForward } from "react-icons/tfi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import TableComponent from "./TableComponent";

const User = () => {
  const navigate = useNavigate();
 
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [tabIndex, setTabIndex] = useState(0);

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(parseInt(value, 10));
    setCurrentPage(1);
  };

  const clients = [
    {
      
      Name: "Satyam",
      Email: "icici@example.com",
      Organization: "ICICI",
      contact: "9092347820",
      Role: "Admin",
      CreatedOn: "2024-08-21",
      status: "Active",
      category: "Users",
    },
    {
      
      Name: "Satyam",
      Email: "icici@example.com",
      Organization: "ICICI",
      contact: "9092347820",
      Role: "Admin",
      CreatedOn: "2024-08-21",
      status: "Inactive",
      category: "Users",
    },
    {
      
      Name: "Satyam",
      Email: "icici@example.com",
      Organization: "ICICI",
      contact: "9092347820",
      Role: "Admin",
      CreatedOn: "2024-08-21",
      status: "Inactive",
      category: "Users",
    },
    {
      
      Name: "Satyam",
      Email: "icici@example.com",
      Organization: "ICICI",
      contact: "9092347820",
      Role: "Admin",
      CreatedOn: "2024-08-21",
      status: "Inactive",
      category: "Users",
    },
    {
      
      Name: "Satyam",
      Email: "icici@example.com",
      Organization: "ICICI",
      contact: "9092347820",
      Role: "Admin",
      CreatedOn: "2024-08-21",
      status: "Inactive",
      category: "Users",
    },
    {
      
      Name: "Satyam",
      Email: "icici@example.com",
      Organization: "ICICI",
      contact: "9092347820",
      Role: "Admin",
      CreatedOn: "2024-08-21",
      status: "Inactive",
      category: "Users",
    },
    {
      
      Name: "Satyam",
      Email: "icici@example.com",
      Organization: "ICICI",
      contact: "9092347820",
      Role: "Admin",
      CreatedOn: "2024-08-21",
      status: "Inactive",
      category: "Users",
    },
    {
      
      Name: "Satyam",
      Email: "icici@example.com",
      Organization: "ICICI",
      contact: "9092347820",
      Role: "Admin",
      CreatedOn: "2024-08-21",
      status: "Inactive",
      category: "Users",
    },
    {
    
    Name: "Satyam",
    Email: "icici@example.com",
    Organization: "ICICI",
    contact: "9092347820",
    Role: "Admin",
    CreatedOn: "2024-08-21",
    status: "Active",
    category: "Users"
  }
    // Add more client data here...
  ];

  return (
    <>
      <div className="component-body">
        <h1 className="page-header select-none">User Management</h1>
        <div className="w-full mt-4">
          {/* Directly include the content you want to display */}
          <TableComponent clients={clients.filter((client) => client.category === "Users")} />
        </div>
       
      </div>
    </>
  );
}

export default User;
