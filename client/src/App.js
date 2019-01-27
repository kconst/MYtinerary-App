import React, { Component } from 'react';
import Footer from "../src/components/Footer";
import LandingPage from "./components/LandingPage3";
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Cities from './components/Cities';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Itinerary from './components/Itinerary';
// import Activities from './components/Activities';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={LandingPage}/>
        <Route path='/cities' component={Cities} />
        <Route path='/itinerary/:id' component={Itinerary} />
        {/* <Route path='/activity/:id/' component={Activities} /> */}
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Footer/>
      </div>
      </BrowserRouter>


    );
  }
}

export default App;
