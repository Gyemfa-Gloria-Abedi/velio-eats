import { Routes, Route } from "react-router-dom";
import ClientDashboard from "./views/ClientDashboard"
import React from "react";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Signup from "./views/Signup";
import ForgotPwd from "./views/ForgotPwd";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Dashboard/>} />
        <Route path="/velio-restuarant-client" element={<ClientDashboard/> } />
        <Route path="/velio-restuarant-login" element={<Login/>}/>
        <Route path="/velio-restuarant-signup" element={<Signup/>}/>
        <Route path="/velio-restuarant-forgotPass" element={<ForgotPwd/>}/>
      </Routes>
    </>
  )
}

export default App
