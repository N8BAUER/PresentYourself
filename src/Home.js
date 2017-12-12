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

    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div className="container">
              <div className="jumbotron">
                  <div className="centerHome">
                  {
                      !isAuthenticated() && (
                          <div>
                             <p className="loginLive"><a className="btn btn-primary btn-lg" onClick={this.login.bind(this)}>Login/Sign Up</a></p>
                               <p className="aboutText3">
                                 To access content please Login or Sign Up
                               </p>


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
            </div>
        );
    }
}

export default Home;
