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
import MyNotes from "./components/myNotes";
import AddOrEditNotes from "./extraGenerator/AddOrEditNotes";
import NoteState from "./context/noteState";
import News from "./components/news";

function App() {
  return (
    <Router>
      <Authstate>
        <SubState>
          <NoteState>
          <Navbar />
      <Routes>
            <Route exact path={`/content`} element={<Content />} />
          <Route exact path='/about' element={<About />} />
            <Route exact path='/profile' element={<Profile />} />
            <Route exact path='/profileEdit' element={<ProfileEdit />} />
            <Route exact path='/' element={<Home />} />
              <Route exact path='/addOrEditNotes' element={<AddOrEditNotes />} />
              <Route exact path='/mynotes' element={<MyNotes />} />
              <Route exact path='/news' element={<News />} />
            <Route exact path='/subject' element={<Subject />} />
            <Route exact path='/editcourses' element={<EditCourses />} />
            <Route exact path='/addcontent' element={<AddContent />} />
      </Routes>
      <Footer />
          </NoteState>
        </SubState>
      </Authstate>
    </Router>
  );
}
export default App;