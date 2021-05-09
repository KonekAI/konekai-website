import React from "react";
import { Image, Jumbotron, Container, Button, Row, Col} from "react-bootstrap";
import logo from "../images/logo.png";

export default function Header() {
  const client_id = "";
  const state = "";
  const uri = `https://slack.com/oauth/v2/authorize?scope=channels:read,groups:read,channels:manage,chat:write&client_id=${client_id}&state=${ state }`
  const headerStyle = {
      marginTop: "3em",
  }
  const logoStyle = {
    rightWidth: "350px",
    height: "150px",
    paddingTop: "10px",
    marginBottom:"3em",
  };
  const jumbotronStyle = {
    backgroundColor: "#fff",
  };
  const btnStyle = {
    background: "rgba(248, 174, 186, 0.5)",
    borderRadius: "60px",
    width: "130px",
    height: "50px",
    display:"inline-block",
    // marginLeft: "7em",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    border: "none",
  };
  const iframeStyle = {
    width:"560px",
    height:"315px",
    margin:"5em 0em 3em 0em",
    borderRadius: "50px",
      
  }

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
            <h1>Change the way your team</h1>
            <h1>works and plays!</h1>
            <br />
            <p style={{ width:"20em",
                        margin:"3em 0em 3em 0em",
                        fontSize:"20px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
           
          </div>
          </Col>
          <Col>
          <iframe
            style={iframeStyle}
            
            src="https://www.youtube.com/embed/PE5-xHptkJQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          </Col>
          </Row>
          
        </Container>
        <Container>
        <Row>
            <Col style={{display:"inline-block"}}>
            <Button style={btnStyle}>Learn More</Button>
            </Col>
          <Col>
          <a href={uri}>
          <img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" />
          </a>
          </Col>
          </Row>
        </Container>
       
      </Jumbotron>
    </div>
     <div>
     <svg
       width="100%"
       height="278"
    //    viewBox="0 0 1441 278"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
     >
       <path
         d="M1439 79.5744C1231 -58.0001 1027 -1.00005 856.5 179.5C686 360 447.714 237.5 369 179.5C309.43 135.606 160.5 -7.99977 2.5 158"
         stroke="#118AB2"
         stroke-opacity="0.2"
         stroke-width="6"
       />
     </svg>
     </div>
     </>
  );
}
