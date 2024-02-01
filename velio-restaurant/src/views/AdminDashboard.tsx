import React from "react";
import Navbar from "../components/Navbar";
import AdminSidebar from "../components/AdminSidebar";

const AdminDashboard = () => {
  return (
    <div>
      <Navbar user="admin" className="border-b"/>
      <AdminSidebar />
    </div>
  );
};

export default AdminDashboard;
