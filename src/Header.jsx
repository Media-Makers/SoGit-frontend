import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
        <Navbar.Brand as= {Link} to="/"> 
          <img
            src="/images/SoGit.png"
            width="45"
            height="45"
            className="d-inline-block align-top"
            alt="SoGit logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={ Link } to="/feed">Feed</Nav.Link> 
            <Nav.Link as={ Link } to="/profile">Profile</Nav.Link> 
            <Nav.Link href="/post">Post</Nav.Link> 
            <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item href="/settings/action1">Action 1</NavDropdown.Item> 
              <NavDropdown.Item href="/settings/action2">Action 2</NavDropdown.Item> 
              <NavDropdown.Item href="/settings/action3">Action 3</NavDropdown.Item> 
              <NavDropdown.Divider />
              <NavDropdown.Item href="/settings/separated-link">Separated link</NavDropdown.Item> 
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
