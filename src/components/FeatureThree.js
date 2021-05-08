import React from "react";
import { Card, Button } from "react-bootstrap";

export default function FeatureThree() {
  const cardStyle = {
    backgroundColor: "rgba(255, 209, 102, 0.2)",
    border: "none",
    // height: "20em",
    borderRadius: "30px 0px 0px 30px ",
    width: "80%",
    align: "right",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Card style={cardStyle}>
        <Card.Body
          style={{
            marginLeft: "10em",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card.Title>been this easy... </Card.Title>
          <Card.Text>hello?</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
