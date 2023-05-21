import { React } from "react";
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import About from './components/about';
import Navbar from "./components/navbar";
import Sidepanal from "./components/sidepanal";
import Body from "./components/body";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex">
        <Sidepanal />
        <Body />
      </div>
      <div className='container'>
        <Routes>
          <Route exact path='/about' element={<About />} />
          {/* <Route exact path='/' element={<Home />} /> */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;