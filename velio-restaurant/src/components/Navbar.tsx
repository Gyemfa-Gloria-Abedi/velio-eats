import React from 'react'
import { SearchComponent } from './SearchComponent'
import { FiLogIn } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=" flex justify-between  m-auto py-3 bg-white">
      <div className="self-center">Velio Restuarant</div>

      <ul className="flex justify-between w-1/4 content-center self-center">
        <NavLink to="#" className="">Blog</NavLink>
        <NavLink to="#">Menu</NavLink >
        <NavLink to="#">Order</NavLink >
      </ul>
      <ul className="flex justify-between content-center gap-4">
        <SearchComponent />
        <NavLink to="/velio-restuarant-login" className="flex justify-between content-center self-center gap-2 border-2 border-amber-600 bg-amber-600 py-1 px-4 rounded-3xl font-semibold">
          <FiLogIn className="self-center font-semibold" />
          <p>Login</p>
        </NavLink>
      </ul>
    </div>
  )
}

export default Navbar
