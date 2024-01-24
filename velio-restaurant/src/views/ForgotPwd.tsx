import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import groundSpice from "../assets/grounded-spices.jpg";

const ForgotPwd = () => (
    <div className="md:w-2/6 w-full  m-auto">
      <h2 className="text-center text-3xl font-bold leading-[70px] mt-16">Forgot Password?</h2>
      <Formik
        initialValues={{ email: ""}}
        validate={(values) => {
          const errors = {} as { email: string; password: string };
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col">
            <div className="mt-6 mb-4 flex flex-col gap-1">
              <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-amber-600 focus:ring-amber-600 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="you@example.com"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="flex justify-between">
              <NavLink to="/velio-restuarant-login" className="text-red-500">Cancel</NavLink>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-amber-600 p-2 rounded text-white"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    <p className="absolute bottom-0 text-gray-400">
      @copyright velio-restaurant
    </p>
    </div>
);

export default ForgotPwd;
