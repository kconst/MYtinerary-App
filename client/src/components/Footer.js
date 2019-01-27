import React, { Component } from 'react';
import {Link} from 'react-router-dom' ;
import home from "../images/homeIcon.png";
import '../App.css';


class Footer extends Component {
    render() {
      return (
        <div className="footer">
            <Link to="/"> <img src={home} className="homeButton" alt="home"/></Link>
        </div>
      );
    }
  }
  
  export default Footer;