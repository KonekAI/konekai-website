import React from 'react';
import {Image, Jumbotron, Container, Button} from 'react-bootstrap';
import logo from '../images/logo.png';

export default function Header(){
    const logoStyle = {
        width: "631px",
        height: "255px",
    }
    const jumbotronStyle = {
        backgroundColor: "#fff",
    }
    const btnStyle = {
        background: "rgba(248, 174, 186, 0.5)",
        borderRadius: "60px",
        width: "200px",
        height: "75px",
        marginLeft: "3em",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "30px",
        border: "none"
    }
    return (
        <>
        <br/>
        <Image src={logo} alt="logo" style={logoStyle}/>
        <Jumbotron fluid style={jumbotronStyle}>
        <Container>
        <h1>Change the way your team</h1>
        <h1>plays!</h1>
        <br/>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        </Container>
        </Jumbotron>
        <Button style={btnStyle}>Learn More</Button>{''}
        </>
    )
};