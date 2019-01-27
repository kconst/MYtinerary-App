import React from 'react';
import {connect} from 'react-redux';

const HelloWorld = ({message}) => {
      return (
        <div>
            <h4>{message}</h4>
        </div>
      );
    }
  

 const mapStateToProps = (state) => {
     return {
         message: state.message
     }
 }
  
  export default connect(mapStateToProps)(HelloWorld);