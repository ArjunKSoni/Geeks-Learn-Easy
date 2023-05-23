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
import Profile from "./components/profile";
import ProfileEdit from "./components/profileEdit";
import SubState from "./context/subState";
import AddContent from "./components/addContent";
import Authstate from "./context/authState";
import EditCourses from "./components/editCourses";
import Subject from "./components/subject";
import Notes from "./components/notes";
import Article from "./components/articles";

function App() {
  return (
    <Router>
      <Authstate>
        <SubState>
          <Navbar />
      <Routes>
            <Route exact path={`/content`} element={<Content />} />
          <Route exact path='/about' element={<About />} />
            <Route exact path='/profile' element={<Profile />} />
            <Route exact path='/profileEdit' element={<ProfileEdit />} />
            <Route exact path='/' element={<Home />} />
            <Route exact path='/notes' element={<Notes />} />
            <Route exact path='/articles' element={<Article />} />
            <Route exact path='/subject' element={<Subject />} />
            <Route exact path='/editcourses' element={<EditCourses />} />
            <Route exact path='/addcontent' element={<AddContent />} />
      </Routes>
      <Footer />
        </SubState>
      </Authstate>
    </Router>
  );
}
export default App;