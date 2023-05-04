import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import './Signup.css'

function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
    const [userInfo, setUserInfo] = useState();
    const [selectedState, setSelectedState] = useState("");
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
    
  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
    navigate("/home");
  };

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
          <form className="form-container" onSubmit={onSignupSubmit}>
            <h2 className="form-header">SIGN UP</h2>
            <hr className="form-input" />

            <div className="field-input">
              <label>First Name</label>
              <input required className="name-input" type="text" name="name" placeholder="Enter First Name" {...register('name', { required: true })} />
            </div>
            <p className="name-error">{errors.name && "First Name is required"}</p>
            
            <div className="field-input">
              <label>Last Name</label>
              <input required className="name-input" type="text" name="name" placeholder="Enter Last Name" {...register('name', { required: true })} />
            </div>
            <p className="name-error">{errors.name && "Name is required"}</p>

                      
            <div className="field-input">
              <label>Phone</label>
              <input required className="phone-input" type="text" name="number" placeholder="Enter your phone no." {...register('email', { required: true })} />
            </div>
            <p className="phone-error">{errors.email && "phone is required"}</p>

            <div className="field-input">
              <label>Password</label>
              <input required className="password-input" type="password" name="password" placeholder="Enter Password" {...register('password', { required: true }, { minLength: 4 })} />
            </div>
            <p className="password-error">{errors.password && "Password is required"}</p>

            <div className="field-input">
              <label>State</label>
              <select className="state-input" value={selectedState} onChange={onStateChange}>
                <option value="">Select a state...</option>
                {statesList.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <button className="submit-button">SIGN UP</button>
            <p className="login-link">Already registered? <Link to="/login">Log in here</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
