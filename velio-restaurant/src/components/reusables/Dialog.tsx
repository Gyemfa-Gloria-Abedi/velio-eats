import React from "react";
import { IoIosClose } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleDialog } from "../../store/dialog/Dialog-slice";

const Dialog = ({ children }) => {
  const toggle = useAppSelector((state)=>state.dialog.close)
  const dispatch = useAppDispatch();
  const handleToggleDialog = () =>{
    dispatch(toggleDialog())
  };
  return (
    <div className="fixed inset-0 overflow-hidden flex items-center justify-center">
  {/* Overlay */}
  <div className="fixed inset-0 bg-black opacity-50"></div>
  
  {/* Dialog Box Container */}
  <div className="relative bg-white w-full max-w-md p-6 shadow-md">
    {/* Close Button */}
    <div className="absolute top-0 right-0 m-4 cursor-pointer hover:bg-gray-300 rounded-full">
      <IoIosClose className="w-9 h-9"  onClick={handleToggleDialog}/>
    </div>
    
    {/* Content */}
    <div className="self-center">{children}</div>
  </div>
</div>
  );
};

export default Dialog;
