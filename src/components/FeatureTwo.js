import React from "react";
import { Card, Button } from "react-bootstrap";
import Modal from "react-modal";
import blurb2 from "../images/blurb2.png";

export default function FeatureTwo() {
  const cardStyle = {
    backgroundColor: "rgba(255, 209, 102, 0.2)",
    border: "none",
    // height: "20em",
    borderRadius: "0px 30px 30px 0px ",
    width: "80%",
    align: "right",
  };
  const cardBtnStyle = {
    backgroundColor: "rgba(20, 237, 198, 0.2)",
    flex: "end",
    radius: "60px",
    border: "none",
    borderRadius: "60px",
  };
  const bodyStyle = {
    marginLeft: "10em",
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const blurbStyle = {
    position: "relative",
    right: "110px",
    top: "-61px",
    transform: "rotate(-36deg)",
    opacity: 0.44,
  };

  const spanStyle = {
    position: "relative",
    right: "226px",
    bottom: "63px",
    fontFamily: "Racing Sans One",
    fontSize: "36px",
    zIndex: 7,
    opacity: 1,
  };

  return (
    <>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "flex-end",
        }}
      >
        <div>
          <img src={blurb2} style={blurbStyle} alt="" />
          <span style={spanStyle}>TEST</span>
        </div>

        <Card style={cardStyle}>
          <Card.Body style={bodyStyle}>
            <Card.Title>Getting to know new team members has never</Card.Title>
            <Card.Title>been this easy... </Card.Title>
            <br />
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
            <Button onClick={openModal} style={cardBtnStyle}>
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Button onClick={closeModal}>close</Button>
        </Modal>
      </div>
    </>
  );
}
