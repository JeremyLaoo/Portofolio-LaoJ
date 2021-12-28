import React from 'react';

import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SocialNetwork from './SocialNetwork/index'

import AboutMe from './AboutMe/AboutMe'
import Experiences from './Experiences/Experiences'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import ScrollToTop from './ScrollToTop/index'

import Divider1 from './Divider/divider1'
import Divider2 from './Divider/divider2'


function Main() {

  return (
    <div>
      
      <ScrollToTop />
      <SocialNetwork/>

      <AboutMe />
      <SocialNetwork/>

      <Divider1/>
      <Skills />
      <Divider2 />
      <Experiences />
      <Projects />
      <Divider2 />

      <script src="https://unpkg.com/scrollreveal"></script>
    </div>
    
  );
}

export default Main;
