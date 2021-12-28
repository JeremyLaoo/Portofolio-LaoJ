import React, { Component } from 'react';

import './Skills.css';

class Skills extends Component {

 

    render(){
        return (

            <div className="div-skills" id="skills">
                <div className="titleSkills">
                    <h1>Compétences</h1>
                </div>
                <div className="listcardSkills">
                    <div className="contentSkill">
                        <div className="skill">
                            <h3>Technologies Développement Web</h3>
                            <ul>
                                <li>React</li>
                                <li>JavaScript</li>
                                <li>PHP</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JQuery</li>
                                <li>BootStrap</li>
                                <li>Material UI</li>
                                <li>Symfony</li>
                                <li>Laravel</li>
                                <li>NodeJS</li>
                                <li>ExpressJS</li>
                                <li>Redux</li>
                            </ul>
                        </div>
                    </div>
                    <div className="contentSkill">
                        <div className="skill">
                            <h3>Autre Technologies</h3>
                            <ul>
                                <li>React Native</li>
                                <li>Photoshop</li>
                                <li>Figma</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            
            // <div className="div-skills" id="skills">
            //     <div className="titleSkill">
            //         <h1>Compétences</h1>
            //     </div>
            //     <div className="listSkill">
            //             <h3>Technologies Développement Web</h3>
            //             <ul>
            //                 <li>React</li>
            //                 <li>JavaScript</li>
            //                 <li>PHP</li>
            //                 <li>HTML</li>
            //                 <li>CSS</li>
            //                 <li>JQuery</li>
            //                 <li>BootStrap</li>
            //                 <li>Material UI</li>
            //                 <li>Symfony</li>
            //                 <li>Laravel</li>
            //                 <li>NodeJS</li>
            //                 <li>ExpressJS</li>
            //                 <li>Redux</li>
            //             </ul>
            //     </div>
            //     <div className="listSkill">
            //         <h3>Autre Technologies</h3>
            //             <ul>
            //                 <li>React Native</li>
            //                 <li>Photoshop</li>
            //                 <li>Figma</li>
            //             </ul>
            //     </div>
            // </div>
            
        )
    }
}

export default Skills