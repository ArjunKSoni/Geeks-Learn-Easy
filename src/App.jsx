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
import Login from "./components/login";
import Signup from "./components/signup";
import Register from "./components/register";
import Maybeshow from "./extraGenerator/maybeshow";
import Pdfread from "./components/pdfread";
import Newsstate from "./context/newsState";
import Syllabus from "./components/syllabus";
import Intro from "./components/intro";
import ShowFooter from "./extraGenerator/showFooter";
import PyqRead from "./components/pdfreadPYQ";
import PdfReadImp from "./components/pdfReadImp";
import Doc from "./components/doc";

function App() {
  return (
    <Router>
      <Newsstate>
      <Authstate>
        <SubState>
          <NoteState>
            <Maybeshow>
          <Navbar />
            </Maybeshow>
      <Routes>
            <Route exact path={`/content`} element={<Content />} />
          <Route exact path='/about' element={<About />} />
                <Route exact path='/' element={<Intro />} />
                <Route exact path='/doc' element={<Doc />} />
            <Route exact path='/profile' element={<Profile />} />
            <Route exact path='/profileEdit' element={<ProfileEdit />} />
              <Route exact path='/home' element={<Home />} />
              <Route exact path='/addOrEditNotes' element={<AddOrEditNotes />} />
              <Route exact path='/mynotes' element={<MyNotes />} />
              <Route exact path='/news' element={<News />} />
                <Route exact path='/pyqRead' element={<PyqRead />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/pdfReadImp' element={<PdfReadImp />} />
                <Route exact path='/syllabus' element={<Syllabus />} />
              <Route exact path='/pdfread' element={<Pdfread />} />
              <Route exact path='/register' element={<Register />} />
              <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/subject' element={<Subject />} />
            <Route exact path='/editcourses' element={<EditCourses />} />
            <Route exact path='/addcontent' element={<AddContent />} />
      </Routes>
              <ShowFooter>
                <Footer />
              </ShowFooter>
          </NoteState>
        </SubState>
      </Authstate>
      </Newsstate>
    </Router>
  );
}
export default App;