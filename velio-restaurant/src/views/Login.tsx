// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { NavLink } from "react-router-dom";

const Login = () => (
  <div className="w-2/4 p-4 mx-auto">
    <h1 className="text-center">Login</h1>
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
          <div className="flex self-end mb-6 text-sky-500">
            Forgot Password?
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-amber-600 p-2 rounded text-white"
          >
            Sign in
          </button>
          <div className="my-4 before:border">Or</div>
          <button className="flex bg--slate-400 mt-4 mb-1">
            <img src="#"/>
            <p>Sign in with Google</p>
          </button>
          <button className="flex bg--slate-400 mt-4 mb-1">
            <img src="#"/>
            <p>Sign in with F</p>
            </button>
          <div>
            Don't have an account? <NavLink to="#" className="text-red-700">Sign up</NavLink>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default Login;
