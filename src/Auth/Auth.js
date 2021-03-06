import { EventEmitter } from 'events';
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth0-variables';
import history from '../history';

var instance = null;

export default function _singleton() {
    if (instance) return instance
    instance = new Auth(...arguments)
    return instance
}

class Auth extends EventEmitter {
  auth0 = new auth0.WebAuth({
    domain: 'presentyourself.auth0.com',
    clientID: 'NfPf0Yx7NhViwf22JGqb9TXHwWZKufu6',
    redirectUri:'https://thawing-refuge-68921.herokuapp.com/callback',
    audience: 'https://presentyourself.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid profile'
  });

  userProfile = {};

  constructor() {
    super();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      console.log(err)
      console.log(authResult)
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/home');
      } else if (err) {
        history.replace('/home');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  setSession(authResult) {
    if (authResult && authResult.accessToken && authResult.idToken) {
      // Set the time that the access token will expire at
      let expiresAt = JSON.stringify(
        authResult.expiresIn * 1000 + new Date().getTime()
      );
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt);
      // navigate to the home route
      history.replace('/home');
    }
  }

  getAccessToken() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('No access token found');
    }
    return accessToken;
  }

  getProfile(cb) {
    if (!cb) {cb = console.log.bind(console, 'Auth.getProfile: No callback defined:')}
    let accessToken = this.getAccessToken();
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (err) {
        console.error('getProfile Error:', err)
        return cb(err)
      }
      // console.log(accessToken)
      // console.log("https://www.googleapis.com/youtube/v3/channels?part=id&mine=true&access_token=" + accessToken)
      if (profile) {
        this.userProfile = profile;
        localStorage.username = profile.nickname;
      }
      cb(err, profile);
    });
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.clear()
    this.userProfile = null;
    // navigate to the home route
    history.replace('/home');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}
