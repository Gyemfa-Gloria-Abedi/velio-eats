import React from "react";
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
  return (
    <Dialog>
        <img src={findItem?.img} alt="food" className="rounded-full w-40 h-40 mx-auto"/>
        <h2 className="text-amber-500 font-bold text-lg text-center">{findItem?.menu_name}</h2>
        <p className="text-center my-3 italic">{findItem?.description}</p>
        <p className="text-center">Select to add an item or unselect to remove an item</p>
        <div className="flex justify-around mt-4">
          <button className="text-red-600" onClick={handleCancelOrder}>Cancel</button>
          <div className=" font-bold">{findItem?.price}<button className="bg-amber-600 px-3 py-1 rounded-lg font-medium ml-1"> Save</button></div>
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
