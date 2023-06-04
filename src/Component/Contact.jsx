import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

const Contact = ({ handleFormSubmit }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message:
        "Hi Ayush, I am [Your Name] from [Company Name]. After examining your portfolio, we are pleased to notify you that we have a great opportunity for you.To discuss this matter further, we would like to schedule a meeting with you.Are you available on [Day, Date] at [Time, Time Zone]? Please reply to this email and let me know if you are available at that time. Regards,[Your Name]",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      name: Yup.string()
        .min(8, "Name must be at least 8 characters")
        .required("Required"),
      message: Yup.string().required("Message is Required"),
    }),
    onSubmit: async (values, action) => {
      try {
        await emailjs.send(
          "service_tunrpxs",
          "template_n8hnlx4",
          {
            from_name: values.name,
            from_email: values.email,
            from_message: values.message,
          },
          "D3MuP7iYpbh27MCpj"
        );
        handleFormSubmit();
        console.log(values);
        action.resetForm();
      } catch (error) {
        console.error("An error occurred while sending the email:", error);
      }
    },
  });

  return (
    <div className="pb-[30px] mb-6">
      <h1 className="text-center font-bold text-4xl pb-7">Contact Me</h1>
      <div className="w-full md:w-96 md:max-w-full mx-auto">
        <div className="p-3 border border-gray-300 sm:rounded-md">
          <form onSubmit={formik.handleSubmit}>
            <label className="block mb-2">
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
              <span className="text-white">Your Email address</span>
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
                  text-xl
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
