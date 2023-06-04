import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = ({ handleFormSubmit }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      name: Yup.string()
        .min(8, "Name must be at least 8 characters")
        .required("Required"),
      message: Yup.string().required("Message is Required"),
    }),
    onSubmit: async (values, action) => {
      handleFormSubmit();
      action.resetForm();
    },
  });

  return (
    <div className="pb-[80px] mb-10">
      <h1 className="text-center font-bold text-4xl pb-7">Contact Me</h1>
      <div className="w-full md:w-96 md:max-w-full mx-auto">
        <div className="p-6 border border-gray-300 sm:rounded-md">
          <form onSubmit={formik.handleSubmit}>
            <label className="block mb-6">
              <span className="text-white">Your name</span>
              <input
                type="text"
                name="name"
                id="name"
                className="
                  block
                  w-full
                  text-black
                  font-bold
                  text-2xl
                  mt-1
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                placeholder="Joe Bloggs"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name && formik.touched.name ? (
                <h1 className="text-pink-700">{formik.errors.name}</h1>
              ) : (
                ""
              )}
            </label>
            <label className="block mb-6">
              <span className="text-white">Email address</span>
              <input
                name="email"
                type="email"
                className="
                  block
                  w-full
                  font-bold
                  text-2xl
                  text-black
                  mt-1
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                placeholder="joe.bloggs@example.com"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email ? (
                <h1 className="text-pink-700">{formik.errors.email}</h1>
              ) : (
                ""
              )}
            </label>
            <label className="block mb-6">
              <span className="text-white">Message</span>
              <textarea
                name="message"
                className="
                  text-black
                  font-bold
                  text-2xl
                  block
                  w-full
                  mt-1
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                rows="3"
                placeholder="Tell us what you're thinking about..."
                onChange={formik.handleChange}
                value={formik.values.message}
              ></textarea>
            </label>
            <div className="mb-6">
              <button
                type="submit"
                className="
                  h-10
                  px-5
                  text-indigo-100
                  bg-indigo-700
                  rounded-lg
                  transition-colors
                  duration-150
                  focus:shadow-outline
                  hover:bg-indigo-800
                "
              >
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
