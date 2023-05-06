import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Signup.css'
import { useFormik } from "formik";
import axios from 'axios';
import { CustomerSchema } from "./Schema";

function Signup() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState();
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const statesList = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];

  const onStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const onCityChange = (e) => { // add a handler for city selection change
    setSelectedCity(e.target.value);
  };

  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
    navigate("/home");
  };

  const initialValues = {
    firstname: '',
    lastname: '',
    contact: '',
    state: '',
    city: '',
    address: '',
    password: '',
    confirmpassword: '',
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: CustomerSchema,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        action.resetForm();
        handlereq();
      },
    });


  const handlereq = () => {
    axios.post("https://admindb.onrender.com/api/customer/", {
      firstname: values.firstname,
      lastname: values.lastname,
      contact: values.contact,
      state: values.state,
      city: values.city,
      address: values.address,
      password: values.password,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error))

  }


  const onSignupSubmit = (e) => {
    e.preventDefault();
    // register user
    navigate("/home");
  };

  return (
    <div className="signup-container">
      {/* <img src="https://thumbs.dreamstime.com/b/flat-lay-composition-overturned-paper-bag-groceries-black-wooden-background-space-text-flat-lay-composition-157615767.jpg" alt="" className='bgimage'/> */}

      {/* printing submitted data on screen */}
      <pre className="text-white">{JSON.stringify(userInfo, undefined, 2)}</pre>

      <div className="signup-box">
        <div className="signup-form">
          <form className="form-container" onSubmit={handleSubmit}>
            <h2 className="form-header">SIGN UP</h2>
            <hr className="form-input" />

            <div className='flex flex-col py-2'>
              <label>Firstname</label>
              <input value={values.firstname} autoComplete="off" className='name-input' type="text" name='firstname' placeholder='Enter First Name' onBlur={handleBlur} onChange={handleChange} />
              {errors.firstname && touched.firstname ? (
                <p className="form-error">{errors.firstname}</p>
              ) : null}
            </div>
            <div className='flex flex-col py-2'>
              <label>Lastname</label>
              <input value={values.lastname} className='name-input' type="text" name='lastname' placeholder='Enter Last Name' onBlur={handleBlur} onChange={handleChange} />
              {errors.lastname && touched.lastname ? (
                <p className="form-error">{errors.lastname}</p>
              ) : null}
            </div>


            <div className='flex flex-col py-2'>
              <label>Contact Number</label>
              <input value={values.contact} className='phone-input' type="text" name='contact' placeholder='Enter Contact Number' onBlur={handleBlur} onChange={handleChange} />
              {errors.contact && touched.contact ? (
                <p className="form-error">{errors.contact}</p>
              ) : null}
            </div>

            <div className="field-input">
              <label>State</label>
              <select className="state-input" name="state" value={selectedState} onChange={onStateChange}>
                <option value="">Select a state...</option>
                {statesList.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div className="field-input">
              <label>City</label>
              <select className="state-input" name="city" value={selectedState} onChange={onStateChange}>
                <option value="">Select a city...</option>
                {statesList.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div className='flex flex-col py-2'>
              <label>Address</label>
              <textarea onBlur={handleBlur} onChange={handleChange} value={values.address} rows="5" name="address" placeholder='Enter address' className='address-input'>
              </textarea>
              {errors.address && touched.address ? (
                <p className="form-error">{errors.address}</p>
              ) : null}
            </div>


            <div className='flex flex-col py-2'>
              <label>Password</label>
              <input value={values.password} className='password-input' type="text" name='password' placeholder='Enter Password' onBlur={handleBlur} onChange={handleChange} />
              {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
            </div>

            <div className='flex flex-col py-2'>
              <label>Confirm Password</label>
              <input value={values.confirmpassword} className='password-input' type="text" name='confirmpassword' placeholder='Confirm Password' onBlur={handleBlur} onChange={handleChange} />
              {errors.confirmpassword && touched.confirmpassword ? (
                <p className="form-error">{errors.confirmpassword}</p>
              ) : null}
            </div>




            <button type="submit" className="submit-button">SIGN UP</button>
            <p className="login-link">Already registered? <Link to="/login">Log in here</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
