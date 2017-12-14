import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "reactstrap";
import "./Chat.css";
import { FormControl, Grid, Row, Col } from "react-bootstrap";
import axios from "axios";
import Pusher from "pusher-js";
import Chat from "./Chat";

class Nate extends Component {

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
      <Row className="show-GridOne">
        <div className="userLayout">
          <div className="featuredStream2">
            <a href="/Nate">
              <h4 href="/Nate" className="featuredPresenter3">
                PresentYourself Presenter Developer!
              </h4>
            </a>
            <iframe
              width="700"
              height="500"
              src="https://gaming.youtube.com/embed/live_stream?channel=UCNmE9_dnUapqlya3vdY5hqQ&autoplay=1"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
        <Chat />
      </Row>
    );
  }
}

export default Nate;
