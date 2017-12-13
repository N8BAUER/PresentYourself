import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "reactstrap";
import Auth from "./Auth/Auth";

class Home extends Component {
  auth = Auth();

  constructor(props) {
    super(props);
    console.log("ctor: this.auth", this.auth);
  }

  componentWillMount() {
    const { isAuthenticated, getProfile } = this.auth;

    if (isAuthenticated()) {
      getProfile();
    }
  }
  login() {
    this.auth.login();
  }

  render() {
    const { isAuthenticated } = this.auth;
    return (
      <div className="container">
        <div className="jumbotron">
          <div className="centerHome">
            {!isAuthenticated() && (
              <div>
                <p className="loginLive">
                  <a className="btn btn-primary btn-lg" onClick={this.login.bind(this)}>
                    Login/Sign Up
                  </a>
                </p>
                <p className="aboutText3">To access content please Login or Sign Up</p>
              </div>
            )}
            {isAuthenticated() && (
              <div>
                <h4 className="featuredPresenter">Featured Presenter</h4>
                <br />

                <div className="featuredStream2">
                  <iframe
                    width="700"
                    height="500"
                    src="https://gaming.youtube.com/embed/live_stream?channel=UCNmE9_dnUapqlya3vdY5hqQ&autoplay=1"
                    frameborder="0"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
