import React, { Component } from 'react';


import barcelona from "../images/barcelona.jpg";
import sydney from "../images/sydney.jpg";
import vancouver from "../images/vancouver.jpg";




class Cities extends Component {
    render() {
      return (
        <div className="citiesInfo">
        <h2>Barcelona</h2>
            <img src={barcelona} className="cityImg" alt="img"/>
            <h2>Sydney</h2>
            <img src={sydney} className="cityImg" alt="img"/>
            <h2>Vancouver</h2>
            <img src={vancouver} className="cityImg" alt="img"/>
        </div>
      );
    }
  }
  
  export default Cities;