import React from "react";
import { TfiDashboard } from "react-icons/tfi";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiArticleLight } from "react-icons/pi";
import { LiaMotorcycleSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { HiChevronDown } from "react-icons/hi";
const AdminSidebar = () => {
  return (
    <div className="absolute top-0 bg-white h-screen p-8 cursor-pointer shadow-md text-lg text-zinc-500 ">
      <ul className="mt-16">
        <li className="flex gap-4 py-1.5 px-3 hover:bg-amber-600 rounded-lg hover:text-white">
          <TfiDashboard className="self-center" />
          <p>Dashboard</p>
        </li>
        <li className="flex gap-4 py-1.5 px-3 hover:bg-amber-600 rounded-lg my-9 hover:text-white">
          <IoFastFoodOutline className="self-center" />
          <p className="mr-32">Menu</p>
          <HiChevronDown className="self-center" />
        </li>
        <li className="flex gap-4 py-1.5 px-3 hover:bg-amber-600 rounded-lg hover:text-white">
          <PiArticleLight className="self-center" />
          <p className="mr-36">Blog</p>
          <HiChevronDown className="self-center" />
        </li>
        <li className="flex gap-4 py-1.5 pr-5 pl-3 hover:bg-amber-600 rounded-lg my-9 hover:text-white">
          <LiaMotorcycleSolid className="self-center" />
          <p className="mr-8">Delivery Contacts</p>
          <HiChevronDown className="self-center" />
        </li>
        <li className="flex gap-4 py-1.5 px-3 hover:bg-amber-600 rounded-lg hover:text-white border-t mt-9">
          <IoSettingsOutline className="self-center" />
          <p>Settings</p>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
