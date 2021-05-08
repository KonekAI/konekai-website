import { Container, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Airplane from "./components/Airplane";
import Airplane2 from "./components/Airplane2";
import Feature from "./components/Feature";
import FeatureTwo from "./components/FeatureTwo";
import FeatureThree from "./components/FeatureThree";
import Team from "./components/Team";
function App() {
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
        <Row>
          <Team />
        </Row>
      </Container>
    </>
  );
}

export default App;
