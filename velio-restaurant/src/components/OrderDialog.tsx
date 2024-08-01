import React, { useState, MouseEvent } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {toggleDialog} from "../store/dialog/Dialog-slice";
import Dialog from "./reusables/Dialog";
import menu from "../data/menu.json";
import  {Formik, Form, Field }from  'Formik';

const OrderDialog = ({itemId}) => {
  const findItem = menu.find((ele)=>ele.id === itemId);
  const toggle = useAppSelector((state)=>state.dialog.close);
  const dispatch = useAppDispatch();
  const handleCancelOrder = () =>{
    dispatch(toggleDialog())
  };

  const [price, setPrice] = useState(0);
  const [addOns, setAddOns]= useState([]);
const handleOrderSubmission = (e: MouseEvent<HTMLButtonElement>  ) =>{
  e.preventDefault();
  //input variables(NAME, PRICE, ADD-ONs)
  const inputVar = {
  "item-name" : findItem?.menu_name,
  "price": findItem?.price + "addOn",
  "add-ons": addOns
  }
  console.log(inputVar);
  


}

  return (
    <Dialog>
      <div className="flex ">
      <img src={findItem?.img} alt="food" className="w-40 h-40 mx-auto"/>
        <div className="w-2/4 self-center mt-2 px-2 pt-2">
        <h2 className="text-amber-500 font-bold text-lg">{findItem?.menu_name}</h2>
        <p className="my-3  font-thin text-xs">{findItem?.description}</p>
        <p className="font-medium mb-2"> {findItem?.price}<span> + add-ons</span> </p>
        <p className="text-center font-thin text-xs">Select to add an item or unselect to remove an item</p>
        {/* add-ons */}
        <div className="mt-2">
         <h2 className="font-medium w-fit border-b-2 border-amber-600 mb-2">Add-Ons</h2>
          {Object.keys(findItem?.["add-ons"])?.map(ele =>(
            <div>
              <div className="flex gap-2" key={ele}>
              <input type="checkbox" id={ele} className="border-0 focus:amber-600"/>
              <label className="text-gray-500 text-sm">{ele}</label>
            </div>
            </div>
          ))}
          
        </div>
        <button className="mt-4 border-2 text-amber-600 px-16 py-0.5 rounded-lg  ml-1" onClick={handleOrderSubmission}> Order</button>
          <div className="flex mt-2">
            <hr className="w-full self-center"/>          
            <p className="text-xs font-bold text-gray-500 w-fit">or</p>
            <hr className="w-full self-center"/>  
          </div>
        <div className="flex justify-between ">
          <button className="text-red-600 text-sm" onClick={handleCancelOrder}>Cancel</button>
        
        <div>
        <button className="text-sm">Save</button>
        </div>
        </div>
        </div>
      </div>
        
      {/* <Formik>
        <Form>
            <Field/>
        </Form>
      </Formik> */}
    </Dialog>
  );
};

export default OrderDialog;
