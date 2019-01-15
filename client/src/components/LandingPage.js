import React, { Component } from 'react';
import {Link} from 'react-router-dom' ;
import logo from '../images/MYtineraryLogo.png';
import browseButton from '../images/circled-right-2.png';
import '../App.css';




class LandingPage extends Component {
    render() {
      return (
        <div className="landingPage">
          <div className="logoHeader">
            <img src={logo} className="MYtinerarylogo" alt="logo" />
          </div>
          <div className="bodyInfo"> 
          <p>Find your perfect trip, designed by insiders who know and love their cities.</p>
          </div>
          <h2>Start browsing</h2>
          <Link to="/cities"><img src={browseButton} className="browseButton" alt="browse"/></Link>
            <p>Want to build your own MYtinerary?</p>
            <div className="accountInfo" >
            <Link className="login-link" to="/login">Login</Link>
            <Link className="ceateAccount-link" to="/signup">Create Account</Link>
            </div>
        </div>
      );
    }
  }
  
  export default LandingPage;