import { Container, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Feature from "./components/Feature";
import FeatureTwo from "./components/FeatureTwo";
import FeatureThree from "./components/FeatureThree";
import Team from "./components/Team";
import { useEffect } from "react";
import axios from 'axios';
function App() {
  useEffect(()=>{
    axios.get(`https://konek-ai.herokuapp.com/oauthButton`,{
      target: 'https://konek-ai.herokuapp.com',
      logLevel: 'debug',
      changeOrigin: true
  })
    .then(res=>res.json());
  })
  return (
    <>
      <Container>
        <Row></Row>
        <Row>
          <Header />
        </Row>
        <Row>
          <Feature />
        </Row>
        <Row style={{ paddingTop: "20px" }}>
          <FeatureTwo />
        </Row>
        <Row style={{ paddingTop: "20px" }}>
          <FeatureThree />
        </Row>
        <Row>
          <Team />
        </Row>
      </Container>
    </>
  );
}

export default App;
