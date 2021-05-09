import { Navbar, Nav, Image } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Documentation from './components/Documentation';
import Home from './components/Home'

import { Route, Switch } from 'react-router-dom';
import logo from "./images/logo.png";
// import axios from "axios";
function App() {
  const navLogo = {
    width:"40%",
    height:"40%"
  }
  const navLink = {
    margin: "0em 1em 0em 1em",
    fontSize: "20px",
  }
  // const containerStyle = {
  //   maxWidth: "100%",
  //   margin: "0",
  //   padding: "20px",
  // };
  const footerStyle = {
    position:"absolute",
    bottom: "0",
  }
  return (
    <>
   <NavBar/>
        
        <Switch>
        <Route exact path="/" render={()=>(
          <Home/>
        )}/>
        <Route exact path="/docs" render={()=>(
          <Documentation/>
        )}/>
        </Switch>
        <Footer style={footerStyle}/>
      
    </>
  );
}

export default App;
