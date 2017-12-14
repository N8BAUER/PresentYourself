import React, { Component } from "react";
import "./Chat.css";
import { FormControl, Grid, Row, Col } from "react-bootstrap";
import axios from "axios";
import Pusher from "pusher-js";

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      username: "",
      messages: []
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
    this.setState({ username: localStorage.username });
    this.pusher = new Pusher("7ac61b5276042e637516", {
      authEndpoint: "/pusher/auth",
      cluster: "mt1",
      encrypted: true
    });
    this.chatRoom = this.pusher.subscribe("private-reactchat");
  }
  componentDidMount() {
    this.chatRoom.bind(
      "messages",
      newmessage => {
        const newmessages = this.state.messages.concat([newmessage]);
        const numToDelete = newmessages.length > 4 ? newmessages.length - 4 : 0;
        const deletedItems = numToDelete > 0 ? newmessages.splice(0, numToDelete) : null;
        console.log("numToDelete", numToDelete);
        console.log("newmessages", newmessages);
        console.log("newmessage", newmessage);
        this.setState({ messages: newmessages });
      },
      this
    );
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  sendMessage(event) {
    event.preventDefault();
    if (this.state.value !== "") {
      axios
        .post("/message/send", {
          username: this.state.username,
          message: this.state.value
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
      this.setState({ value: "" });
    } else {
      console.log("enter message");
    }
  }
  render() {
    const messages = this.state.messages;
    const message = messages.map(item => {
      return (
        <Grid key={item.message}>
          {message}
          <Row className="show-grid">
            <Col xs={12}>
              <div className="chatmessage-container">
                <div className="message-box">
                  <p className="chatText">
                    <strong>{item.username}</strong>
                  </p>
                  <p className="chatText">{item.message}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      );
    });
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12}>
            {message}
            <div className="chat-container">
              <form onSubmit={this.sendMessage}>
                <Col xs={5} xsOffset={3}>
                  <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="Enter message here"
                    onChange={this.handleChange}
                  />
                </Col>
                <Col xs={4}>
                  <input
                    className="btn btn-primary"
                    value="Send"
                    type="submit"
                  />
                </Col>
              </form>
              <h4 className="text-center">Welcome, {this.state.username}</h4>
              <h5 className="text-center">Begin chatting here.</h5>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Chat;
