import React, { Component } from 'react';
import Toolbar from "./Toolbar/Toolbar";




class SignUp extends Component {
    render() {
      return (
        <div className="signupDetails">
        <Toolbar/>
            <h2>Welcome to our app.</h2>
            <p>Please register with your details below.</p>
        </div>
      );
    }
  }
  
  export default SignUp;