import {Container, Row } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Feature from './components/Feature';
function App() {
  return (
<>
<Container>
  <Row></Row>
  <Row>
    <Header />
  </Row>
  <Row>
    <Feature/>
  </Row>
</Container>

</>
  );
}

export default App;
