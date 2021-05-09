import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import logo from "../images/logo.png";
import {LinkContainer} from 'react-router-bootstrap';


function NavBar() {
  const navLogo = {
    width:"40%",
    height:"40%"
  }
  const navLink = {
    margin: "0em 1em 0em 1em",
    fontSize: "20px",
  }
  return (
    <div>
     <Navbar bg="light" style={{paddingLeft:"5em"}}>
        <Navbar.Brand href="/"> <Image src={logo} alt="logo" style={navLogo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" style={navLink}>Home</Nav.Link>
            <Nav.Link href="/#features"style={navLink}>Features</Nav.Link>
            <Nav.Link href="/#team"style={navLink}>Meet the Team</Nav.Link>
            <LinkContainer style={navLink} to="/docs">
            <Nav.Link >Docs</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
