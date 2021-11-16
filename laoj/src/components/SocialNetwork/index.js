import React, { Component } from 'react';
import './SocialNetwork.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

class SocialNetwork extends Component {

    render(){
        return (
            <div className="social-network">
                <a href="mailto:jeremy.lao0390@gmail.com" className="icon" >
                    <FontAwesomeIcon 
                        style={{ height: 25, width: 25, background:'transparent' }} 
                        icon={faAt}
                    />
                </a>
                <a href="tel:+33629797712" className="icon">
                    <FontAwesomeIcon 
                        style={{ height: 25, width: 25, background:'transparent' }} 
                        icon={faMobileAlt}
                    />
                </a>
                <a href="https://www.linkedin.com/in/jeremylao/" className="icon">
                    <FontAwesomeIcon 
                        style={{ height: 25, width: 25, background:'transparent'}} 
                        icon={faLinkedin}

                    />
                </a>
                <a href="https://github.com/JeremyLaoo?tab=repositories" className="icon">
                    <FontAwesomeIcon 
                        style={{ height: 25, width: 25, background:'transparent'}} 
                        icon={faGithub}

                    />
                </a>
            </div>
        )
    }
}

export default SocialNetwork