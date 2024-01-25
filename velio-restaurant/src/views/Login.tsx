import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import groundSpice from "../assets/grounded-spices.jpg";

const Login = () => (
  <div className="flex flex-row mx-auto md:-mt-16 md:justify-normal justify-center md:px-0 px-2">
    <div className="md:w-2/6 w-full  m-auto">
      <h2 className="text-center text-3xl font-bold leading-[70px]">Login</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
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
            <div className="mt-6 mb-4 flex flex-col gap-1">
              <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Password
              </label>
              <Field
                type="password"
                name="password"
                placeholder="At least 8 characters"
                className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-amber-600 focus:ring-amber-600 block w-full rounded-md sm:text-sm focus:ring-1"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>
            <NavLink to="/velio-restuarant-forgotPass" className="flex self-end mb-6 text-sky-500">
              Forgot Password?
            </NavLink>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-amber-600 p-2 rounded text-white"
            >
              Sign in
            </button>
            <div className="my-4 flex justify-center content-center gap-1">
              <div className="w-2/4 h-px bg-gray-200 self-center"></div>
              <p>Or</p>
              <div className="w-2/4 h-px bg-gray-200 self-center"></div>
            </div>
            <button className="flex bg--slate-400 mb-4 gap-1 p-2 bg-amber-50 justify-center ">
              <FcGoogle className="self-center" />
              <p className="self-center">Sign in with Google</p>
            </button>
            <button className="flex bg--slate-400 mb-4 gap-1 p-2 bg-amber-50 justify-center">
              <FaFacebook className="text-blue-600 self-center" />
              <p className="self-center">Sign in with Facebook</p>
            </button>
            <div className="flex justify-center gap-1">
              Don't have an account?
              <NavLink to="/velio-restuarant-signup" className="text-red-700">
                Sign up
              </NavLink>
            </div>
          </Form>
        )}
      </Formik>
    </div>
    <img
      src={groundSpice}
      alt="spices"
      className="h-full w-2/5 md:block hidden"
    />
    <p className="absolute bottom-0 text-gray-400">@copyright velio-restaurant</p>
  </div>
);

export default Login;
