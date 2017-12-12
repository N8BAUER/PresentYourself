import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "reactstrap";
import "./Chat.css";
import { FormControl, Grid, Row, Col } from "react-bootstrap";
import axios from "axios";
import Pusher from "pusher-js";
import Chat from "./Chat";

class Nate extends Component {
  render() {
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
              src="https://gaming.youtube.com/embed/live_stream?channel=UCNmE9_dnUapqlya3vdY5hqQ"
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
