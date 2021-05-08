import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Image } from "react-bootstrap";
import logo from "../images/logo.png";


function NavBar() {
  const navLogo = {
    width:"50%",
    height:"50%"
  }
  const navLink = {
    margin: "0em 1em 0em 1em",
    fontSize: "20px",
  }
  return (
    <div>
      <Navbar bg="light" style={{paddingLeft:"5em"}}>
        <Navbar.Brand href="#home"> <Image src={logo} alt="logo" style={navLogo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" style={navLink}>Home</Nav.Link>
            <Nav.Link href="#link"style={navLink}>Features</Nav.Link>
            <Nav.Link href="#link"style={navLink}>Meet the Team</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
