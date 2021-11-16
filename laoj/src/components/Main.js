import React, { useState } from 'react';

import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar/Navbar'
import AboutMe from './AboutMe/AboutMe'
import Experiences from './Experiences/Experiences'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import ScrollToTop from './ScrollToTop/index'

import Divider1 from './Divider/divider1'
import Divider2 from './Divider/divider2'

import SocialNetwork from './SocialNetwork/index'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'



function Main() {

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  window.addEventListener('scroll', checkScrollTop)


  return (
    <div>
      <div className="buttonscroll">
        <FontAwesomeIcon 
          className="scrollTop" 
          onClick={scrollTop} 
          style={{ height: 40, width: 40, padding: 5, borderRadius: 5, opacity: 0.6, display: showScroll ? 'flex' : 'none', backgroundColor: '#eebb4d' }} 
          icon={faArrowCircleUp} 
        />
      </div>
      <SocialNetwork/>
      <ScrollToTop />
      <AboutMe />
      <Divider1/>
      <Skills />
      <Divider2 />
      <Experiences />
      <Projects />

      
    </div>
  );
}

export default Main;
