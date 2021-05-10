import React from "react";
import {
  Image,
  Jumbotron,
  Container,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import logo from "../images/logo.png";

export default function Header() {
  const headerStyle = {
    marginTop: "3em",
  };
  const logoStyle = {
    rightWidth: "350px",
    height: "150px",
    paddingTop: "10px",
    marginBottom: "3em",
  };
  const jumbotronStyle = {
    backgroundColor: "#fff",
  };
  const btnStyle = {
    background: "rgba(248, 174, 186, 0.5)",
    borderRadius: "60px",
    width: "130px",
    height: "50px",
    // display: "inline-block",
    // marginLeft: "7em",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    border: "none",
  };
  const iframeStyle = {
    width: "680px",
    height: "369px",
    margin: "5em 0em 10em 8em",
    borderRadius: "50px",
  };

  return (
    <>
      <div style={headerStyle}>
        <Jumbotron fluid style={jumbotronStyle}>
          <Container
            style={{
              display: "flex",
              justifyContent: "space-between",
              // justifyContent: "flex-end",
            }}
          >
            <Row>
              <Col>
                <div style={{ flexDirection: "column" }}>
                  <Image src={logo} alt="logo" style={logoStyle} />
                  <h1 style={{ fontFamily: "Racing Sans One" }}>
                    {" "}
                    Collaborate and Learn{" "}
                  </h1>
                  <h1 style={{ fontFamily: "Racing Sans One" }}>
                    Using the Power of AI
                  </h1>
                  <br />
                  <p
                    style={{
                      width: "22em",
                      margin: "3em 0em 3em 0em",
                      fontSize: "20px",
                      fontColor: "grey",
                    }}
                  >
                    Get the power of AI backing your teams and research groups.
                    Productivity and collaboration is made easy with solidified fact checking 
                    and onboarding on the fly! 
                  </p>
                </div>
              </Col>
              <Col>
                <iframe
                  style={iframeStyle}
                  src="https://www.youtube.com/embed/C9wP7TfajJY?autoplay=1&mute=1"
                  title="KONEK | AI"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  maxWidth: "315px",
                }}
              >
                <a href="#features">
                  <Button style={btnStyle}>Learn More</Button>
                </a>

                {/* <a href={uri}> */}
                  <img
                    alt="Add to Slack"
                    height="100%"
                    width="150"
                    src="https://platform.slack-edge.com/img/add_to_slack.png"
                    srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
                  />
                  
                 
                {/* </a> */}
              </Col>
              <div>
                  <p style={{color:"green", marginLeft:"10.5em"}}>Coming Soon</p>
                  </div>
            </Row>
          </Container>
        </Jumbotron>
      </div>
      <div>{/* <Card.Img variant="top" src={line} /> */}</div>
    </>
  );
}
