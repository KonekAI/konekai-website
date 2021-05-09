import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Documentation from './components/Documentation';
import Home from './components/Home'
import { Route, Switch } from 'react-router-dom';

function App() {
  const footerStyle = {
    position:"absolute",
    bottom: "0",
  }
  return (
    <>
   <NavBar/>
        <Switch>
        <Route exact path="/" render={()=>(
          <Home/>
        )}/>
        <Route exact path="/docs" render={()=>(
          <Documentation/>
        )}/>
        </Switch>
        <Footer style={footerStyle}/> 
    </>
  );
}

export default App;
