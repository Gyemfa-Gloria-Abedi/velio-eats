import React from 'react';
import food from "../../assets/auth-food.jpg";

const MenuCards = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg border">
      <img src={food} alt="food" className="rounded-full w-10 h-10 "/>
      <h5 className='font-bold'>Jollof</h5>
      <div className="flex gap-2 text-xs">
        <p>$3</p>
        <p>3 orders</p>
        <p>within 1hr</p>
      </div>
    </div>
  )
}

export default MenuCards