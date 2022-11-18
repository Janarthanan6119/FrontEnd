import React from 'react';
//import { useState } from 'react';
import {useFormik} from 'formik';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Video from './video';
import { Card } from "react-bootstrap";

export default function Login() {
  // const[email,Setemail]= useState(" ");
  // const[password,Setpassword]= useState(" ")
  const navigate = useNavigate();

  const navigatevideo = () => {
    // 👇️ navigate to /
    navigate('/video');
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      if (!values.email);
      if (!values.password);
      alert(`Account Created Successfully`);
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "***Required!!!";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Must be 8 Charecters!!";
      } else if (values.password.length < 8) {
        errors.password =
          "Must be 8 Characters & Use @ or * for a strong Password";
      }
      return errors;
    }
  });

  // function task(){
  //   alert(`Logging in`)
  // }
  return (
    <div className='login'>
      <Card>
      <form onSubmit={formik.handleSubmit}>
        <label>E-Mail</label> <br />
        <input type="text" 
        id="email"
        name="email"
        placeholder="E-Mail Id"
        onChange={formik.handlechange}
       value={formik.values.email}
        />
        {formik.errors.email ? (
                      <div>{formik.errors.email}</div>
                    ) : null}
        <br />
        <br />
        <label>Password</label> <br />
        <input 
        type="password" 
        id="password"
        name="password"
        placeholder="Enter Your Password"
        onChange={formik.handlechange}
        value={formik.values.password}
        />
        {formik.errors.password ? (
                      <div>{formik.errors.password}</div>
                    ) : null}
        <br />
        <br />
        <button>Login</button>
       </form>
       </Card>
       <Routes>
          <Route path="/video" element={<Video />} />
          
        </Routes>
    </div>
  )
}
