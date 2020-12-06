import React from 'react';

import SignIn from '../../components/SignIn/SignIn';
import Footer from '../../components/Footer/Footer';

import './Landing.css';

function Landing(props) {
	return(
    <div className="expand">
  		<div className="flex-container-banner">
          <div className="banner_background text-center">
            <h1 className="banner_fontHeader">Welcome to Friends</h1>
            <p className="banner_fontBody">Connect with friends and the world around you.</p>
          </div>
          
          <div className="signin-component">
            <SignIn/>
          </div>
      </div>

      <Footer/>
    </div>
	);
}

export default Landing;