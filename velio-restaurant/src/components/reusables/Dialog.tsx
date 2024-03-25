import React from "react";
import { IoIosClose } from "react-icons/io";

const Dialog = ({ children }) => {
  return (
    <div className="fixed inset-0 overflow-hidden bottom-0 min-w-screen min-h-screen  bg-black opacity-50 flex">
      <div className=" relative bg-white w-full px-8 pb-8 pt-2 m-auto max-w-md m-auto flex-col flex rounded-lg">
        <div className="self-end mb-4 cursor-pointer hover:bg-gray-300 rounded-full">
          <IoIosClose className="w-9 h-9" />
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Dialog;
