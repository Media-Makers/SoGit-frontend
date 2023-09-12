import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import "./nav.css"
class Header extends Component {
  render() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
        <Navbar.Brand as= {Link} to="/"> 
          <img
            src="/images/SoGit.png"
            width="45"
            height="45"
            // className="d-inline-block align-top"
            alt="SoGit logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link as={ Link } to="/profile">Profile</Nav.Link> 
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
