import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./App.css";
import ToggleDisplay from "react-toggle-display";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  componentWillMount() {
    const { isAuthenticated, getProfile } = this.props.auth;
    if (isAuthenticated()) {
      getProfile();
    }
  }

  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
