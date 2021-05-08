import React from "react";
import airplane2 from "../images/airplane2.png";
import { Card } from "react-bootstrap";

function Airplane() {
  return (
    <Card.Img variant="top" src={airplane2} style={{ width: "1000rem" }} />
  );
}

export default Airplane;
