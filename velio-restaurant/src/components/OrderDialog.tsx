import React from "react";
import Dialog from "./reusables/Dialog";
import food from "../assets/salad.jpg";
import  {Formik, Form, Field }from  'Formik';

const OrderDialog = () => {
  return (
    <Dialog>
        <img src={food} alt="food" className="rounded-full w-40 h-40 mx-auto"/>
        <h2 className="text-amber-500 font-bold text-lg text-center">Fish salad</h2>
        <p className="text-center my-3">Desription</p>
        <p className="text-center">Select to add an item or unselect to remove an item</p>
        <div className="flex justify-around mt-4">
          <button className="text-red-600">Cancel</button>
          <button className="bg-amber-600 px-3 py-1 rounded-lg"> Save</button>
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
