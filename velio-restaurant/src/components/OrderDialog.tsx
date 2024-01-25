import React from "react";
import Dialog from "./reusables/Dialog";
import food from "../assets/salad.jpg";
import  {Formik, Form, Field }from  'Formik';

const OrderDialog = () => {
  return (
    <Dialog>
        <img src={food} alt="food"/>
        <h2>Fish salad</h2>
        <p>Desription</p>
        <p>Select to add an item or unselect to remove an item</p>
      <Formik>
        <Form>
            <Field
        </Form>
      </Formik>
    </Dialog>
  );
};

export default OrderDialog;
