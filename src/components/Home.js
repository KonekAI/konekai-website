import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Airplane from "./Airplane";
import FeatureOne from "./FeatureOne";
import Airplane2 from "./Airplane2";
import FeatureTwo from "./FeatureTwo";
import Team from "./Team";
import features from "../images/features.png";

function App() {
    const containerStyle = {
      maxWidth: "100%",
      margin: "0",
      padding: "20px",
    };
    return (
      <>
        <Container style={containerStyle}>
          <Row></Row>
          <Row>
            <Header />
          </Row>
        </Container>
  
       
  
        <Container>
          <div id="features" style={{ marginTop: "3em" }}>
          <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={features} alt=""/>
        </div>
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
          </div>
        </Container>
        <div id="team">
          <Row>
            <Team />
          </Row>
          </div> 
      </>
    );
  }
  
  export default App;