import React from "react";
import Telvin from "../images/Telvin.jpg";
import James from "../images/James.png";
import crystal from "../images/crystal.jpg";
import { Card, CardDeck, Button } from "react-bootstrap";

const Team = () => {
  const telvinCard = () => (
    <Card style={{ width: "16rem" }}>
      <Card.Img
        variant="top"
        src={Telvin}
        style={{ width: "100%", height: "230px" }}
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );

  const jamesCard = () => (
    <Card style={{ width: "16rem" }}>
      <Card.Img
        variant="top"
        src={James}
        style={{ width: "100%", height: "250px" }}
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );

  const crystalCard = () => (
    <Card style={{ width: "16rem" }}>
      <Card.Img
        variant="top"
        src={crystal}
        style={{ width: "100%", height: "250px" }}
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );

  return (
    <div
      style={{
        display: "flex",
        padding: "100px",
        justifyContent: "space-between",
      }}
    >
      {telvinCard()}
      {jamesCard()}
      {crystalCard()}
    </div>
  );
};

export default Team;
