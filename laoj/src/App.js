import React, { useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";

import Navbar from './components/Navbar/Navbar'

import MainScreen from './components/Main';
import AboutMe from './components/AboutMe/AboutMe';
import Experiences from './components/Experiences/Experiences'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'




function App() {
  return (
  
 <div>
    <Navbar />

    <Routes>
      <Route path="/" element={<MainScreen/>}/>
      <Route path="/AboutMe" element={<AboutMe/>} />
    </Routes>
 </div>

        
        
          
          


      

 
      
      
      









  );
}

export default App;
