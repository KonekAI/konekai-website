import React from "react";
import {
  Image,
  Jumbotron,
  Container,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import logo from "../images/logo.png";
import meetTeam from "../images/meetTeam.png";

export default function Header() {
  const client_id = "";
  const state = "";
  const uri = `https://slack.com/oauth/v2/authorize?scope=channels:read,groups:read,channels:manage,chat:write&client_id=${client_id}&state=${state}`;
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
    width: "560px",
    height: "315px",
    margin: "5em 5em 10em 8em",
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
                  src="https://www.youtube.com/embed/PE5-xHptkJQ"
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

                <a href={uri}>
                  <img
                    alt="Add to Slack"
                    height="40"
                    width="139"
                    src="https://platform.slack-edge.com/img/add_to_slack.png"
                    srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
                  />
                </a>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
      <div>{/* <Card.Img variant="top" src={line} /> */}</div>
    </>
  );
}
