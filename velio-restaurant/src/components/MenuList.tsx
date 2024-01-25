import React from "react";
import salad from "../assets/salad.jpg";
import { useState } from "react";
import OrderDialog from "./OrderDialog";

const MenuList = () => {
  const [order, setOrder] = useState(false);
  return (
    <div className="grid grid-col-3 gap-2">
      <div className="flex flex-col rounded">
        <h2 className="mx-auto font-bold text-2xl border-b-2 border-amber-600">
          Our Menu
        </h2>
        <div className="w-1/4 shadow-md pb-4">
          <img src={salad} className="w-full h-48 rounded" alt="salad" />
          <div className="rounded px-2">
            <h3 className="mx-auto font-bold text-lg">Fish salad</h3>
            <p className="font-bold">Ingredients:</p>
            <p className=" text-base">
              {" "}
              Grilled Mediterranean sea bass fillet, seasoned to perfection
              Crisp mixed greens.
            </p>

            <p className="text-amber-600">$3.00</p>
            <button
              className="border selfcenter border-amber-600 hover:bg-amber-600 py-1 px-4 rounded-lg mt-4"
              onClick={() => setOrder(true)}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
      {order && <OrderDialog />}
    </div>
  );
};

export default MenuList;
