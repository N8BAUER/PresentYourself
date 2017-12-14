import React from "react";
import { Redirect, Route, Router } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Profile from "./Profile";
import Chat from "./Chat";
import Callback from "./Callback";
import Auth from "./Auth/Auth";
import history from "./history";
import About from "./About.js";
import Live from "./live.js";
import JSPresent from "./JSPresent";
import JSPresentTwo from "./JSPresentTwo";
import Nate from "./Nate";
import FutureImplementations from "./FutureImplementations";
import Footer from "./Footer";
import Header from "./Header";

const auth = Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeMainRoutes = () => {

  return (
    <Router history={history} component={App}>
      <div>
        <Route
          exact
          path="/"
          render={props => {
            return (
              <div>
                <Header auth={auth} {...props} />
                <Home auth={auth} {...props} />
                <Footer auth={auth} {...props} />
              </div>
            );
          }}
        />
        <Route
          exact
          path="/home"
          render={props => {
            return (
              <div>
                <Header auth={auth} {...props} />
                <Home auth={auth} {...props} />
                <Footer auth={auth} {...props} />
              </div>
            );
          }}
        />
        <Route exact path="/About" render={props => {
          return (
            <div>
              <Header auth={auth} {...props} />
              <About auth={auth} {...props} />
              <Footer auth={auth} {...props} />
            </div>
          );
        }}/>
        <Route exact path="/Live" render={props => {
          return (
            <div>
              <Header auth={auth} {...props} />
              <Live auth={auth} {...props} />
              <Footer auth={auth} {...props} />
            </div>
          );
        }}/>
        <Route exact path="/JSPresent" render={props => {
          return (
            <div>
              <Header auth={auth} {...props} />
              <JSPresent auth={auth} {...props} />
              <Footer auth={auth} {...props} />
            </div>
          );
        }}/>
        <Route exact path="/JSPresentTwo" render={props => {
          return (
            <div>
              <Header auth={auth} {...props} />
              <JSPresentTwo auth={auth} {...props} />
              <Footer auth={auth} {...props} />
            </div>
          );
        }}/>
        <Route exact path="/Nate" render={props => !auth.isAuthenticated() ? (
          <Redirect to="/home" />
        ) : (
            <div>
              <Header auth={auth} {...props} />
              <Nate auth={auth} {...props} />
              <Footer auth={auth} {...props} />
            </div>
          )
        }
        />
        <Route exact path="/FutureImplementations" render={props => {
          return (
            <div>
              <Header auth={auth} {...props} />
              <FutureImplementations auth={auth} {...props} />
              <Footer auth={auth} {...props} />
            </div>
          );
        }}/>
        <Route
          exact
          path="/chat"
          render={props =>
            !auth.isAuthenticated() ? (
              <Redirect to="/home" />
            ) : (
              <div className="chatDiv">
                <Chat auth={auth} {...props} />
              </div>
            )
          }
        />
        <Route
          exact
          path="/profile"
          render={props => !auth.isAuthenticated() ? (<Redirect to="/home" />) : (
            <div>
            <Header auth={auth} {...props} />
            <Profile auth={auth} {...props} />
            <Footer auth={auth} {...props} />
            </div>
            )
          }
        />
        <Route
          exact
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
      </div>
    </Router>
  );
};
