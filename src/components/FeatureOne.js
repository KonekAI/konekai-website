import { React, useState} from "react";
import { Card, Button, Image } from "react-bootstrap";
import Modal from "react-modal";
import blurb from '../images/blurb1.png';
import wikiGif from '../images/wiki-bot-gif.gif';

export default function FeatureOne() {
  const cardStyle = {
    backgroundColor: "rgba(255, 209, 102, 0.2)",
    border: "none",
    // height: "20em",
    borderRadius: "30px 0px 0px 30px ",
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

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "40px",
    },
  };
  const blurbStyle = {
      position: "relative",
      right: "-187px",
      top: "-84px",
      transform: "rotate(-12deg)",
      opacity: "44%",
    //   marginLeft:"-9em",
    //   marginBottom: "-50em"
  }
  const gifStyle = {
      borderRadius:"40px",
  }
  const modalBtnStyle={
    background: "rgba(248, 174, 186, 0.5)",
    border: "none",
    width: "85px",
    height: "50px",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    borderRadius:"60px",
    marginTop: "1em",
    display:"inline-block",
  }
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "5em",
        }}
      >
          <div>
              <div>
                  <img src={blurb} style={blurbStyle} alt=""/>
                  <span>TEST</span>
              </div>
          </div>
        <Card style={cardStyle}>
          <Card.Body style={bodyStyle}>
            <Card.Title style={{fontFamily:'Racing Sans One', fontSize:'30px'}}>Getting to know new team members has never</Card.Title>
            <Card.Title style={{fontFamily:'Racing Sans One', fontSize:'30px'}}>been this easy... </Card.Title>
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
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <Image src={wikiGif} style={gifStyle}/>
          <div>
          <Button onClick={closeModal} style={modalBtnStyle}>close</Button>
          </div>
        
      </Modal>
    </>
  );
}
