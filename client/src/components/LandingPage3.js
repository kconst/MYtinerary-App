import React, { Component } from 'react';
import {Link} from 'react-router-dom' ;
import Toolbar from '../components/Toolbar/Toolbar';
import logo from '../images/MYtineraryLogo.png';
import browseButton from '../images/circled-right-2.png';
import '../App.css';




class LandingPage extends Component {
    render() {
      return (
        <div className="landingPage">
          <div className="toolBarHeader">
          <Toolbar/>
          </div>
          <div className="logoHeader">
            <img src={logo} className="MYtinerarylogo" alt="logo" />
          </div>
          <div className="bodyInfo"> 
          <p>Find your perfect trip, designed by insiders who know and love their cities.</p>
          </div>
          <h2>Start browsing</h2>
          <Link to="/cities"><img src={browseButton} className="browseButton" alt="browse"/></Link>
          <p>Want to build your own MYtinerary?</p>
        </div>
      );
    }
  }
  
  export default LandingPage;