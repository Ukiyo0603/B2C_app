import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Signup.css'
import { useFormik } from "formik";
import axios from 'axios';
import { CustomerSchema } from "./Schema";

function Signup() {
  const navigate = useNavigate();
  const state = require('country-state-city').State;
  const city = require('country-state-city').City;
  const statelist = state.getStatesOfCountry("IN");
  const [citylist, setcitylist] = useState([]);


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
        navigate('/otp')
      })
      .catch((error) => console.log(error))

  }

  const nestedChange = (e) => {
    handleChange(e);
    const temp = city.getCitiesOfState("IN", e.target.value);
    setcitylist(temp);
  }

  return (
    <div className="signup-container">
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
              <select className="state-input" name="state" value={values.state} onBlur={handleBlur} onChange={nestedChange} >
                <option value="">Select a state...</option>
                {statelist.map((b) => (
                  <option key={b.id} value={b.isoCode}>{b.name}</option>
                ))}
              </select>
            </div>

            <div className="field-input">
              <label>City</label>
              <select className="state-input" name="city" value={values.city} onBlur={handleBlur} onChange={handleChange} >
                <option value='select'>Select a city</option>
                {citylist.map((b) => (
                  <option key={b.id} value={b.name}>{b.name}</option>
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