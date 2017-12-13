import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./App.css";
import ToggleDisplay from "react-toggle-display";

class Footer extends Component {
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
        <footer className="navbar-fixed-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="footerLogo">
                  <span className="createorlog4">Present</span>
                  <span className="createorlogN8">Yourself</span>
                  <p className="copyright">Copyright &#169; 2017</p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="menu">
                  <span>Menu</span>
                  <li>
                    <a href="/home">Home</a>
                  </li>

                  <li>
                    <a href="/About">About</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="adress">
                  <span>Contact Dev</span>
                  <li>
                    <i className="fa fa-github" aria-hidden="true" /> <a href="https://github.com/N8Bauer">GitHub</a>
                  </li>
                  <li>
                    <i className="fa fa-envelope" aria-hidden="true" /> <a href="#">N8Bdoesemailvia@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
