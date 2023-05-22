import { React } from "react";
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import About from './components/about';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import Content from "./components/content";

function App() {
  return (
    <Router>
      <Navbar />
      <Content />
      <Routes>
          <Route exact path='/about' element={<About />} />
        <Route exact path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;