import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "reactstrap";

class Live extends Component {
  componentWillMount() {
    const { isAuthenticated, getProfile } = this.props.auth;

    if (isAuthenticated()) {
      getProfile();
    }
  }
  login() {
    this.props.auth.login();
  }

  // <p className="lead">
  //   // <Link to="/scheduled" className="btn btn-danger"><span className="createorlog2">Scheduled Presentations</span></Link>
  // </p>
  // <p className="lead2">
  //       // <Link to="/scheduled" className="btn btn-danger"><span className="createorlog2">Scheduled Presentations</span></Link>
  //     </p>
  // // <Link  className="btn btn-primary btn-lg" to="chat">Chat Room</Link>
  // <p className="weNeed">We need you to sign up/log in with  before you can access the presentations. 😁</p>
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        <div className="jumbotron">
          <div className="centerHome">
            {!isAuthenticated() && (
              <div>
                <p className="loginLive">
                  <a
                    className="btn btn-primary btn-lg"
                    onClick={this.login.bind(this)}
                  >
                    Login/Sign Up
                  </a>
                </p>

                <p className="aboutText3">
                  To access this content please Login or Sign Up
                </p>
              </div>
            )}
            {isAuthenticated() && (
              <div>
                <h4 className="livePresenter">Live Presenters</h4>
                <br />

                  <div className="featuredStream3">
                    <a href="/Nate">
                    <h4 href="JSPresentTwo" className="featuredPresenter3">
                       PresentYourself Presenter Developer!
                    </h4>
                    </a>
                                 <iframe width="700" height="500" src="https://gaming.youtube.com/embed/live_stream?channel=UCNmE9_dnUapqlya3vdY5hqQ" frameborder="0"   allowFullScreen></iframe>
                  </div>


                <div className="featuredStream3">
                  <a href="JSPresentTwo">
                    <h4 href="JSPresentTwo" className="featuredPresenter3">
                      Number Two Rated PresentYourself Presenter!
                    </h4>
                  </a>
                  <iframe
                    width="700"
                    height="500"
                    src="https://gaming.youtube.com/embed/live_stream?channel=UCNwKtOz1UTN0uKCKPcu31ig"
                    frameborder="0"
                    allowFullScreen
                  />
                </div>

                <br />
                <br />
                <br />

                <div className="featuredStream3">
                  <a href="JSPresent">
                    <h4 href="JSPresent" className="featuredPresenter3">
                      Number One Rated PresentYourself Presenter!
                    </h4>
                  </a>
                  <iframe
                    width="700"
                    height="500"
                    src="https://gaming.youtube.com/embed/live_stream?channel=UC4_VXXvT25cb5YtkDvlAIIA"
                    frameborder="0"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Live;
