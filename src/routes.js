import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Profile from './Profile';
import Chat from './Chat';
import Callback from './Callback';
import Auth from './Auth/Auth';
import history from './history';
import About from './About.js';
import Live from './live.js';
import JSPresent from './JSPresent';
import JSPresentTwo from './JSPresentTwo';
import Nate from './Nate';
import FutureImplementations from './FutureImplementations';



const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history} component={App}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/About" render={(props) => <About auth={auth} {...props} />} />
          <Route path="/Live" render={(props) => <Live auth={auth} {...props} />} />
          <Route path="/JSPresent" render={(props) => <JSPresent auth={auth} {...props} />} />
          <Route path="/JSPresentTwo" render={(props) => <JSPresentTwo auth={auth} {...props} />} />
          <Route path="/Nate" render={(props) => <Nate auth={auth} {...props} />} />
          <Route path="/FutureImplementations" render={(props) => <FutureImplementations auth={auth} {...props} />} />
          <Route path="/chat" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <div className="chatDiv">
              <Chat auth={auth} {...props} />
              </div>
            )
          )} />
          <Route path="/profile" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Profile auth={auth} {...props} />
            )
          )} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
        </div>
      </Router>
  );
}
