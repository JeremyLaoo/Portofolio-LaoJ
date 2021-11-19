import React, { useState } from 'react';

import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './AboutMe/AboutMe'
import Experiences from './Experiences/Experiences'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import ScrollToTop from './ScrollToTop/index'

import Divider1 from './Divider/divider1'
import Divider2 from './Divider/divider2'


import SocialNetwork from './SocialNetwork/index'

function Main() {

  return (
    <div>
      
      <SocialNetwork/>
      <ScrollToTop />
      <AboutMe />
      <Divider1/>
      <Skills />
      <Divider2 />
      <Experiences />
      <Divider1/>

      <Projects />
      <Divider2 />


    </div>
  );
}

export default Main;
