//import DatePicker from "react-datepicker";
// import { useState } from "react";
import {useFormik} from 'formik';
//import Date from "./date";
import { Card } from "react-bootstrap";

export default function Sign ()
    {
        // const[fname,Setfname] = useState(" ");
        // const[lname,Setlname] = useState(" ");
        const formik = useFormik({
            initialValues: {
              fname: " ",
              lname: " ",
              email: "",
              password: ""
            },
            onSubmit: (values) => {
              if(!values.fname);
              if(!values.lname)
              if(!values.email);
              if(!values.password);
              alert(`Account Created Successfully`);
            },
            validate: (values) => {
              const errors = {};
              if(!values.fname){
                errors.fname ="*Required";
              }
              else if(values.fname.length<3){
                errors.fname = "Give Atleast 3 Characters"
              }
              if(!values.lname){
                errors.fname ="*Required";
              }
              else if(values.lname.length<6){
                errors.fname = "Give Atleast 6 Characters"
              }
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
        
        // function after(){
        //     alert(`Welcome to Specials`)
        // }
          
    return(
    <>
    <div className='signdiv'>
    <h1>Signing in</h1>
    <Card>
         <form onSubmit={formik.handleSubmit}>
        <label>First Name</label>
        <br />
        <input 
        type="text" 
        id="fname"
        name="fname"
        placeholder="Your First Name"
        onChange={formik.handlechange}
        value={formik.values.fname}
        />
        {formik.errors.fname ? (
                      <div>{formik.errors.fname}</div>
                    ) : null}
        <br />
        <label>Last Name</label>
        <br />
        <input 
        type="text" 
        id="lname"
        name="lname"
        placeholder="Your Last Name"
        onChange={formik.handlechange}
        value={formik.values.lname}
        />
        {formik.errors.lname ? (
                      <div>{formik.errors.lname}</div>
                    ) : null}
        <br />
         
        <label>E-mail</label>
        <br />
        <input type="email" 
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
        <label>Password</label>
        <br />
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
        <button>Submit</button>
       </form> 
    </Card>
    </div>
    </>
    )
    }
