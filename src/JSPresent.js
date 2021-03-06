import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "reactstrap";
import "./Chat.css";
import { FormControl, Grid, Row, Col } from "react-bootstrap";
import axios from "axios";
import Pusher from "pusher-js";
import Chat from "./Chat";

class JSPresent extends Component {
  render() {
    return (
      <Row className="show-GridOne">
        <div className="userLayout">
          <div className="featuredStream2">
            <h4 className="featuredPresenter3">
              Title: Number One Rated Presenter!
            </h4>
            <iframe
              width="700"
              height="500"
              src="https://gaming.youtube.com/embed/live_stream?channel=UC4_VXXvT25cb5YtkDvlAIIA&autoplay=1"
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

export default JSPresent;
