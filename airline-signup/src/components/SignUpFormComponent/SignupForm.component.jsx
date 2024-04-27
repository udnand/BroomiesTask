import React, { useState } from 'react';
import './SignupForm.component.css';
import axios from 'axios';
import Success from '../Success.component';
import constants from '../../config/config';
const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

 const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      
    });
  };  

  const handleSubmit = (event) => {
    if(formData.password !== formData.confirmPassword){
      alert("Password and ConfirmPassword Does not Match")
    } else {
    event.preventDefault();
    axios.post(
                `${constants.signUpURL}`,
                {formData }
            )
            .then((res) => {
                if(res.data.StatusCode === 200) {
                  setSuccess(true);
                  console.log(success);
                }
            });
    console.log('Form submitted!', formData);
    }
  };

  return (
    
    <>
    <div className='btn-signIn'>
        <button className='bttn'>Sign In</button>
      </div>
     {success ? <Success> </Success> :
      <><div className="myform">
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="name">
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required />
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required />
                <label htmlFor="lastName">Last Name</label>
              </div>
            </div>
            <div className="other-details">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required />
                <label htmlFor="email">Email</label>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  required />
                <label htmlFor="username">Username</label>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  required />
                <label htmlFor="password">Password</label>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required />
                <label htmlFor="confirmPassword">Confirm Password</label>
              </div>
            </div>
            <button type="submit">GET STARTED</button>
          </form>
        </div></>}
    </>
  );
};

export default SignupForm;
