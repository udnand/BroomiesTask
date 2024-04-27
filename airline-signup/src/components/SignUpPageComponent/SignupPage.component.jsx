import React from 'react';
import FlightImage from '../../assets/FlightImage.jpeg'
import './SignupPage.component.css';
import SignupForm from '../SignUpFormComponent/SignupForm.component';
const SignupPage = () => {
  
  return (
    <div className="hero container">
      <div className="hero-image">
       <img className='Flight-Image' src={FlightImage} alt='flight'></img>
      </div>
      <div className="square">
        <div className='image-content'>
        <h3><b>Altitude Air</b></h3>
        <p>_____</p>
        <p>We promise to ensure that your well being is taken care of while travelling with us. <br /> Boasting top in class fleet inventory and a 5 star approval for our in-flight experience, you know you're getting the best from Altitude with no attitude.</p>
        </div>
        </div>
      <div className="hero-content">
        <div className="head-content">
        <h2>Explore & Experience</h2>
        <p>Get onto your most comfortable journey yet. All the way up.</p>
        </div>
        <div className='signUpform'>
        <SignupForm></SignupForm>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
