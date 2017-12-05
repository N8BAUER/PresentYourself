import React from 'react';
import './App.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import ToggleDisplay from 'react-toggle-display';
import $ from 'jquery';





export default class NavBar extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        islogged: false
      };
    }

    handleClick() {
      this.setState({
          islogged: !this.state.islogged
      });
    }

    render() {
      return (
        <div>
          <Navbar color="faded" light expand="md" className="nav">
            <div className="presentations">
              <p href="">Live Presentations</p>
              <p href="">Scheduled Presentations</p>
            </div>
            <NavbarBrand className="companyName" href="/">PresentYourself</NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="">Sign Up</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={ () => this.handleClick() } >Login</NavLink>
                </NavItem>
                <ToggleDisplay show={this.state.islogged} >
                <NavItem className="myChannel" >
                  <NavLink  >My Channel</NavLink>
                </NavItem>
              </ToggleDisplay>
              </Nav>
          </Navbar>
        </div>
      );
    }
  }
