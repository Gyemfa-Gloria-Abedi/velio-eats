import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { toggleDialog } from "../store/dialog/Dialog-slice";
import OrderDialog from "./OrderDialog";
import menu from "../data/menu.json";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosArrowDropright, IoIosArrowDropleft,  IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const MenuList = () => {
  const toggle = useAppSelector((state)=>state.dialog.close)
  const dispatch = useAppDispatch();
  const [selectedItemId, setSelectedItemId] = useState(0);

  const handleToggleDialog = (id:number) =>{
    setSelectedItemId(id);
    dispatch(toggleDialog())
  };
  return (
    <div className="grid grid-col-3 gap-2">
      <div className="flex flex-col">
        <h2 className="mx-auto font-bold text-2xl border-b-2 border-amber-600">
          Our Menu
        </h2>
        <div className="flex gap-4">
          <IoIosArrowDropleft/>
          <IoIosArrowDropright />
        </div>
        <div className="flex gap-6 flex-wrap mt-4" >
            {menu.map((item, index)=>(
          <div className="w-1/4 border shadow-md pb-4" key={index}>
            <HiOutlineDotsHorizontal className=""/>
            <img src={item.img} className="w-full h-48 rounded" alt={item.menu_name} />
            <div className="rounded px-2 mt-4">
              <h3 className=" font-bold text-lg">{item.menu_name}</h3>
              <p className="text-base italic">
                {item.description}
              </p>
  
              <div className="flex justify-between mt-4">
                <p className=" font-bold self-center">{item.price}</p>
              <button
                className="border  border-amber-600 hover:bg-amber-600 py-1 px-4 rounded-2xl self-center"
                onClick={()=>handleToggleDialog(item.id)}
              >
                Order Now
              </button></div>
            </div>
          </div>
          ))}
        </div>
        
      </div>
      {toggle && <OrderDialog itemId={selectedItemId}/>}
    </div>
  );
};

export default MenuList;
