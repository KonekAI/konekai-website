import React from "react";
import { Image, Jumbotron, Container, Button, Card } from "react-bootstrap";
import logo from "../images/logo.png";

export default function Header() {
  const logoStyle = {
    rightWidth: "350px",
    height: "150px",
    paddingTop: "10px",
  };
  const jumbotronStyle = {
    backgroundColor: "#fff",
  };
  const btnStyle = {
    background: "rgba(248, 174, 186, 0.5)",
    borderRadius: "60px",
    width: "130px",
    height: "50px",
    marginLeft: "7em",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    border: "none",
  };

  const handleClick = () => {
    console.log("this works?");
  };
  return (
    <div>
      <Image src={logo} alt="logo" style={logoStyle} />
      <Jumbotron fluid style={jumbotronStyle}>
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            // justifyContent: "flex-end",
          }}
        >
          <div style={{ flexDirection: "column" }}>
            <h1>Change the way your team</h1>
            <h1>plays!</h1>
            <br />
            <p style={{ width: "350px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/PE5-xHptkJQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Container>
      </Jumbotron>
      <Button style={btnStyle}>Learn More</Button>

      <svg
        width="1441"
        height="278"
        viewBox="0 0 1441 278"
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
  );
}
