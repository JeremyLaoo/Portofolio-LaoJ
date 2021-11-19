import React, { Component } from 'react';
import './AboutMe.css';

class AboutMe extends Component {

 

    render(){
        return (
            
            <div className="div-aboutme" id="aboutme">
                <div className="container">
                    <div class="background">
                        <div class="cube"></div>
                        <div class="cube"></div>
                        <div class="cube"></div>
                        <div class="cube"></div>
                        <div class="cube"></div>
                    </div>
                    <div className="row header">
                        <div className="col-sm col-picture">
                            <img src="./images/profil.png" className="img-profil" alt="" />
                        </div>
                        <div className="col-sm col-text">
                            <div className="text-bienvenue">
                                Bienvenue, je suis
                            </div>
                            <div className="text-name">
                                Jérémy Lao
                            </div>
                            <div className="text-dev">
                                Développeur FullStack
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe