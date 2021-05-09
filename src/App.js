import { Container, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Airplane from "./components/Airplane";
import FeatureOne from "./components/FeatureOne";
import Airplane2 from "./components/Airplane2";
import FeatureTwo from "./components/FeatureTwo";
import FeatureThree from "./components/FeatureThree";
import Team from "./components/Team";
import NavBar from "./components/Navbar";
import Footer from './components/Footer';
import features from "./images/features.png";
// import axios from "axios";
function App() {
  const containerStyle = {
    maxWidth: "100%",
    margin: "0",
    padding: "20px",
  };
  return (
    <>
      <NavBar />
      <Container style={containerStyle}>
        <Row></Row>
        <Row>
          <Header />
        </Row>
      </Container>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={features} />
      </div>

      <Container>
        <div id="features" style={{ marginTop: "3em" }}>
          <Row style={{ paddingTop: "20px" }}>
            <FeatureOne />
          </Row>
          <Row>
            <Airplane2 />
          </Row>
          <Row style={{ paddingTop: "20px" }}>
            <FeatureTwo />
          </Row>
          <Row style={{ padding: "20px" }}>
            <Airplane />
          </Row>
          <Row style={{ padding: "50px" }}>
            <FeatureThree />
          </Row>
        </div>
      </Container>
      <div id="team">
        <Row>
          <Team />
        </Row>
        </div>
        <Footer/>
      
    </>
  );
}

export default App;
