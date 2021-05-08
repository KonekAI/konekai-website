import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Team from "./components/Team";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Header />
        </Row>
        <Row>
          <Team />
        </Row>
      </Container>
    </>
  );
}

export default App;
