import React from "react";
import Navbar from "../components/Navbar";
import AdminSidebar from "../components/AdminSidebar";
import Dashboard from "../components/non-reusables/Dashboard";

const AdminDashboard = () => {
  return (
    <div>
      <Navbar user="admin" className="border-b"/>
      <AdminSidebar />
      <div>
        <Dashboard/>
      
      </div>
    </div>
  );
};

export default AdminDashboard;
