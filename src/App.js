import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import ToggleDisplay from 'react-toggle-display';
import './App.css';
import Navbar from './NavBar';



class App extends Component {


  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}


export default App;
