import React from 'react';
const Cards = ({children}) => {
  return (
    <div className="bg-white p-3 w-fit rounded shadow-md">
        {children}
    </div>
  )
}

export default Cards