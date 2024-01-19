import React from 'react'
import { BiSearch, BiSearchAlt2  } from 'react-icons/bi'

export const SearchComponent = () => {
  return (
    <div className="flex content-center">
      <BiSearchAlt2  className="self-center" />
      {/* <div className="flex border-grey rounded p-2 bg-white border border-slate-300 rounded-md gap-2">
        <BiSearch className="self-center text-slate-400"/>
      <input
        placeholder="Search..."
        className="placeholder:text-slate-400 block bg-white focus:outline-none pr-2 self-center"
      />
      </div> */}
    </div>
  )
}
