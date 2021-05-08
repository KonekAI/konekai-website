import { Container, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
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
