import React from "react";
import { Navbar} from "react-bootstrap";
import logo from '../images/footer-icon.png';



function Footer() {
  return (
    <>
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home" style={{margin:"10px"}}>
      <img
        alt=""
        src={logo}
        width="30"
        height="30"
        style={{marginRight:"10px"}}
        className="d-inline-block align-top"
      />{' '}
      KONEK | AI
    </Navbar.Brand>
  </Navbar>
    </>
  );
}

export default Footer;
