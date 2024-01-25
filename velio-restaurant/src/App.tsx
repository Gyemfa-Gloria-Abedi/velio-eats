import { Routes, Route } from "react-router-dom";
import ClientDashboard from "./views/ClientDashboard"
import React from "react";
import Dashboard from "./views/Dashboard";
import AdminDashboard from "./views/AdminDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Dashboard/>} />
        <Route path="/velio-restuarant-client" element={<ClientDashboard/> } />
        <Route path="/velio-restuarant-admin" element={<AdminDashboard/>}/>
      </Routes>
    </>
  )
}

export default App
