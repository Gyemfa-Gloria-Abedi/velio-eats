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
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? menu.length - itemsToShow : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === menu.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="grid grid-col-3 gap-2">
      <div className="flex flex-col">
        <h2 className="mx-auto font-bold text-2xl border-b-2 border-amber-600">
          Our Menu
        </h2>
        <div className="flex gap-4  cursor-pointer">
          <IoIosArrowDropleft className="absolute left-16 mt-36 w-6 h-6" onClick={handlePrev}/>
          <IoIosArrowDropright className="absolute right-16 mt-36 w-6 h-6" onClick={handleNext}/>
        </div>
        <div className="flex gap-6 flex-wrap justify-center mt-4 m-auto" >
            {menu.slice(currentIndex, currentIndex + itemsToShow).map((item, index)=>(
          <div className="min-w-64 border shadow-md pb-4 cursor-pointer" key={index} onClick={()=>handleToggleDialog(item.id)}>
            <img src={item.img} className="w-full h-48 rounded" alt={item.menu_name} />
            <div className="rounded px-2 mt-4">
              <h3 className=" font-bold text-lg">{item.menu_name}</h3>
              <p className="text-sm">
                {item.description}
              </p>
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
