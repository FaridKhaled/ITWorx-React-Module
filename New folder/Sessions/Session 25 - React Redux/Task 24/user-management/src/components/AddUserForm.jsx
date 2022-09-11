import React from "react";
import { useFormik } from "formik";

function AddUserForm() {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      fullName: "",
      userName: "",
      email: "",
    },
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col">
      <label htmlFor="fullName" className="text-black font-bold">
        Full Name
      </label>
      <input
        id="fullName"
        name="fullName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.fullName}
        className="block border rounded border-gray-800 mb-5 h-9"
      />

      <label htmlFor="userName" className="text-black font-bold">
        User Name
      </label>
      <input
        id="userName"
        name="userName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.userName}
        className="block border rounded border-gray-800 mb-5 h-9"
      />

      <label htmlFor="email" className="text-black font-bold">
        Email Address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        className="block border rounded border-gray-800 mb-5 h-9"
      />

      <label htmlFor="userGroup" className="text-black font-bold">
        User Group
      </label>
      <select
        id="userGroup"
        name="userGroup"
        onChange={formik.handleChange}
        value={formik.values.userGroup}
        className="block border rounded border-gray-800 mb-5 h-9"
      />
    </form>
  );
}

export default AddUserForm;
