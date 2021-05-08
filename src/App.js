import logo from "./logo.svg";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Container>
        <Col>
          <Team />
        </Col>
      </Container>
    </>
  );
}

export default App;
