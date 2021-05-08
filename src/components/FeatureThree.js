import React from "react";
import { Card, Button } from "react-bootstrap";

export default function FeatureThree() {
  const cardStyle = {
    backgroundColor: "#FFD166",
    opacity: "20%",
  };
  const cardBtnStyle = {
    backgroundColor: "#14EDC6",
    opacity: "20%",
  };
  return (
    <>
      <br />
      <Card>
        <Card.Body>
          <Card.Title>Getting to know new team members has never</Card.Title>
          <Card.Title>been this easy... </Card.Title>
          <Card.Text>hello?</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}
