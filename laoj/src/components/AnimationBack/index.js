
import React, { Component } from 'react';
import './Skills.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Skills extends Component {

 

    render(){
        return (
            
            // <!-- Background & animion & navbar & title -->
            <div class="container-fluid">
          {/* <!-- Background animtion--> */}
              <div class="background">
                 <div class="cube"></div>
                 <div class="cube"></div>
                 <div class="cube"></div>
                 <div class="cube"></div>
                <div class="cube"></div>
              </div>
          {/* <!-- header --> */}
             <header>
          {/* <!-- navbar --> */}
               <nav>
                  <ul>
                     <li><a href="#">Home</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Portfolio</a></li>
                      <li><a href="#">Contact</a></li>
                   </ul>
                 </nav>
          {/* <!-- logo --> */}
                <div class="logo"><span>N</span></div>
          {/* <!-- title & content --> */}
                <section class="header-content">
                   <h1>Welcome</h1>
                  <p> Welcome to our studio. We are a passionated group of people,<br>
                     making high quality products designed to make your life easier.</p>
                  <button>Know more</button>
                  <button>Meet us</button>
                </section>
            </header>
            </div>
        )
    }
}

export default Skills

