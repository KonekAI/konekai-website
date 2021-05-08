import React from "react";
import { Card, Button } from "react-bootstrap";

export default function FeatureTwo() {
  
  const handleClick = () => {
    console.log("testing")
  }
  const cardStyle = {
      backgroundColor:"rgba(255, 209, 102, 0.2)",
      border: "none",
      // height: "20em",
      borderRadius: "0px 30px 30px 0px ",  
      width:"80%",
      align:"right",

  }
  const cardBtnStyle = {
      backgroundColor:"rgba(20, 237, 198, 0.2)",
      flex: "end",
      radius: "60px",
      border:"none",
      borderRadius:"60px"
  }
  const bodyStyle = {
      marginLeft:"10em"
  }
  return(
      <>
      <br/>
      <div
     style={{
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "flex-end",
    }}
      >
      <Card style={cardStyle}>
      <Card.Body style={bodyStyle}>
      <Card.Title>Getting to know new team members has never</Card.Title>
      <Card.Title>been this easy... </Card.Title>
      <br/>
      <Card.Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </Card.Text>
      <Button onClick={handleClick} style={cardBtnStyle}>Go somewhere</Button>
      </Card.Body>
      </Card>
      </div>
      </>
  )
}
