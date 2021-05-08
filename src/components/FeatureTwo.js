import React from "react";
import { Card, Button } from "react-bootstrap";

export default function FeatureTwo() {
  const cardStyle = {
    backgroundColor: "rgba(255, 209, 102, 0.2)",
    borderRadius: "20px",
    width: "50%",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "flex-end",
      }}
    >
      <Card style={cardStyle}>
        <Card.Body
          style={{
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
