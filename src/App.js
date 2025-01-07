// import logo from './logo.svg';
import beyyondlogo from "./beyyondfavicon.png"
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={beyyondlogo} className="App-logo" alt="logo" />
        <p>
          About Beyyond
        </p>
        <Link to='/about'>
        About
        </Link> 
         
       
      </header>
    </div>
  );
}

export default App;
