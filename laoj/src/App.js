import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar'
import AboutMe from './components/AboutMe/AboutMe'
import Experiences from './components/Experiences/Experiences'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'



import { Button, Col, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <Skills />
      <Experiences />
      <Projects />

    </div>







  );
}

export default App;
