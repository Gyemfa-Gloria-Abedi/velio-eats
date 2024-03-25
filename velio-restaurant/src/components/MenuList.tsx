import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { toggleDialog } from "../store/dialog/Dialog-slice";
import salad from "../assets/salad.jpg";
import { useState } from "react";
import OrderDialog from "./OrderDialog";

const MenuList = () => {
  
  const toggle = useAppSelector((state)=>state.dialog.close)
  const dispatch = useAppDispatch();
  const handleToggleDialog = () =>{
    dispatch(toggleDialog())
  };
  return (
    <div className="grid grid-col-3 gap-2">
      <div className="flex flex-col">
        <h2 className="mx-auto font-bold text-2xl border-b-2 border-amber-600">
          Our Menu
        </h2>
        <div className="flex gap-4 flex-wrap">
        <div className="w-1/4 shadow-md pb-4">
          <img src={salad} className="w-full h-48 rounded" alt="salad" />
          <div className="rounded px-2 mt-4">
            <h3 className="text-amber-500 font-bold text-lg">Fish salad</h3>
            <p className="text-base italic">
              Grilled Mediterranean sea bass fillet, seasoned to perfection
              Crisp mixed greens.
            </p>

            <p className="text-red-700 font-semibold">Price: <span className="text-amber-600">$3.00</span></p>
            <button
              className="border selfcenter border-amber-600 hover:bg-amber-600 py-1 px-4 rounded-lg mt-4"
              onClick={handleToggleDialog}
            >
              Order Now
            </button>
          </div>
        </div>
        </div>
      </div>
      {toggle && <OrderDialog />}
    </div>
  );
};

export default MenuList;
