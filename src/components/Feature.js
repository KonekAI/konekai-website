import React from 'react';
import {Card, Button} from 'react-bootstrap';

export default function Feature() {
    const cardStyle = {
        backgroundColor:"rgba(255, 209, 102, 0.2)",
        border: "none",
        height: "20em",
        borderRadius: "20px"
        
        
    }
    const cardBtnStyle = {
        backgroundColor:"#14EDC6",
        opacity: "20%"
    }
    return(
        <>
        <br/>
        <Card style={cardStyle}>
        <Card.Body style={{opacity:1}}>
        <Card.Title>Getting to know new team members has never</Card.Title>
        <Card.Title>been this easy... </Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </Card.Text>
        <Button variant="primary" style={cardBtnStyle}>Go somewhere</Button>
        </Card.Body>
        </Card>
        </>
    )
  
}