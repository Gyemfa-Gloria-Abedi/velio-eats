import { Routes, Route } from "react-router-dom";
import ClientDashboard from "./views/ClientDashboard"
import React from "react";

import { useAppDispatch, useAppSelector } from "./app/hooks";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Signup from "./views/Signup";
import ForgotPwd from "./views/ForgotPwd";
import AdminDashboard from "./views/AdminDashboard";

function App() {
  const toggle = useAppSelector((state)=>state.dialog.close)
  return (
    <div className={toggle ? `fixed` :''}>
      <Routes>
        <Route path="/" element={ <Dashboard/>} />
        <Route path="/velio-restuarant-client" element={<ClientDashboard/> } />
        <Route path="/velio-restuarant-login" element={<Login/>}/>
        <Route path="/velio-restuarant-signup" element={<Signup/>}/>
        <Route path="/velio-restuarant-forgotPass" element={<ForgotPwd/>}/>
        <Route path="/velio-restuarant-admin" element={<AdminDashboard/>}/>
      </Routes>
    </div>
  )
}

export default App
