import { Routes, Route } from "react-router-dom";
import ClientDashboard from "./views/ClientDashboard"
import React from "react";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Dashboard/>} />
        <Route path="/velio-restuarant-client" element={<ClientDashboard/> } />
      </Routes>
    </>
  )
}

export default App
