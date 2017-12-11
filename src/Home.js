import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';

class Home extends Component {
    componentWillMount() {
        const { isAuthenticated, getProfile } = this.props.auth;

        if (isAuthenticated() ) {
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
                  {
                      !isAuthenticated() && (
                          <div>
                             <p className="login"><a className="btn btn-primary btn-lg" onClick={this.login.bind(this)}>Login/Sign Up</a></p>

                                <h4 className="featuredPresenterHome">Featured Presenter</h4><br />

                          <div className="featuredStream">
                            <iframe width="700" height="500" src="https://gaming.youtube.com/embed/live_stream?channel=UCNmE9_dnUapqlya3vdY5hqQ" frameborder="0"   allowFullScreen></iframe>

                          </div>


                          </div>
                      )
                  }
                  {
                      isAuthenticated() && (
                          <div>

                                <h4 className="featuredPresenter">Featured Presenter</h4><br />

                          <div className="featuredStream2">
                            <iframe width="700" height="500" src="https://gaming.youtube.com/embed/live_stream?channel=UCNmE9_dnUapqlya3vdY5hqQ" frameborder="0"   allowFullScreen></iframe>

                          </div>
                          </div>
                      )
                  }
                  </div>
              </div>
                {this.props.children}
            </div>
        );
    }
}

export default Home;
