import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./App.css";
import ToggleDisplay from "react-toggle-display";

class Header extends Component {
  componentWillMount() {
    const { isAuthenticated, getProfile } = this.props.auth;
    console.log("this.props.auth", this.props.auth);
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
        <Navbar className="no-border" fluid inverse>
          <Navbar.Header>
            <div className="presentations">
              <a href="/Live">
                <p href="/Live">Live </p>
              </a>
              <a href="/FutureImplementations">
                <p href="" className="futureIMP">
                  Future{" "}
                </p>
              </a>
            </div>
          </Navbar.Header>
          <Navbar.Brand href="/home" className="whiteout">
            <span className="createorlog3">Present</span>
            <span className="createorlogN8">Yourself</span>
          </Navbar.Brand>
          <Nav className="pull-right">
            <Button className="btn-margin" onClick={this.goTo.bind(this, "home")}>
              Home
            </Button>
            {!isAuthenticated() && (
              <Button className="btn-margin" onClick={this.login.bind(this)}>
                Login
              </Button>
            )}
            {isAuthenticated() && (
              <Button className="btn-margin" onClick={this.goTo.bind(this, "profile")}>
                Profile
              </Button>
            )}
            {isAuthenticated() && (
              <Button className="btn-margin" onClick={this.logout.bind(this)}>
                Log Out
              </Button>
            )}
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
