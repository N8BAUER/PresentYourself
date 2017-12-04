import React, { Component } from 'react';
import logo from './logo.svg';
import { Collapse, Navbar,  NavbarBrand, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import './App.css';


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
   this.state = {
     collapsed: true
   };
 }

 toggleNavbar() {
   this.setState({
     collapsed: !this.state.collapsed
   });
 }
 render() {
   return (
     <div>
       <Navbar color="faded" light>
         <NavbarBrand href="/" className="mr-auto">PresentYourself</NavbarBrand>
         <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
         <Collapse isOpen={!this.state.collapsed} navbar>
           <Nav navbar>
             <NavItem>
               <NavLink href="">Login</NavLink>
             </NavItem>
             <NavItem>
               <NavLink href="">Sign Up</NavLink>
             </NavItem>
           </Nav>
         </Collapse>
       </Navbar>
     </div>
   );
 }
}
