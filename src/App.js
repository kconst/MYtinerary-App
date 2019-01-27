import React, { Component } from 'react';
import Footer from "../src/components/Footer";
import LandingPage from "../src/components/LandingPage";
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Cities from './components/Cities';
import Login from './components/Login';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={LandingPage}/>
        <Route path='/cities' component={Cities} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
