import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './App.css';
import ToggleDisplay from 'react-toggle-display';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
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
            <p href="" className="futureIMP">Future </p>
            </a>
          </div>
          </Navbar.Header>
          <Navbar.Brand href="/home" className="whiteout"><span className="createorlog3">Present</span><span className="createorlogN8">Yourself</span></Navbar.Brand>
          <Nav className="pull-right">
            <Button
                className="btn-margin"
                onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
              {
                  !isAuthenticated() && (
                      <Button
                          className="btn-margin"
                          onClick={this.login.bind(this)}
                      >
                        Login
                      </Button>
                  )
              }
              {
                  isAuthenticated() && (
                      <Button
                          className="btn-margin"
                          onClick={this.goTo.bind(this, 'profile')}
                      >
                        Profile
                      </Button>
                  )
              }
              {
                  isAuthenticated() && (
                      <Button
                          className="btn-margin"
                          onClick={this.logout.bind(this)}
                      >
                        Log Out
                      </Button>
                  )
              }
          </Nav>
        </Navbar>
        <footer className="navbar-fixed-bottom">
            <div className="container">
              <div className="row">

                       <div className="col-md-4 col-sm-6 col-xs-12">
                         <div className="footerLogo">
                  <span className="createorlog4">Present</span><span className="createorlogN8">Yourself</span>
                  <p className="copyright">Copyright &#169;  2017</p>
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
                                  <i className="fa fa-github" aria-hidden="true"></i> <a href="https://github.com/N8Bauer">GitHub</a>
                               </li>
                               <li>
                                  <i className="fa fa-envelope" aria-hidden="true"></i> <a href="#">N8Bdoesemailvia@gmail.com</a>
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

export default App;
