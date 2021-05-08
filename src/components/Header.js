import React from 'react';
import {Image, Jumbotron, Container} from 'react-bootstrap';
import logo from '../images/logo.png';

export default function Header(){
    const logoStyle = {
        width: "631px",
        height: "255px",
    }
    return (
        <>
        <br/>
        <Image src={logo} alt="logo" style={logoStyle}/>
        <Jumbotron fluid>
        <Container>
        <h1>Change the way your team</h1>
        <h1>plays!</h1>
        <p>
        This is a modified jumbotron that occupies the entire horizontal space of
        its parent.
        </p>
        </Container>
        </Jumbotron>
        </>
    )
};