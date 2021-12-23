import React, { Component } from 'react';
import './SocialNetwork.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faMobileAlt, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

class SocialNetwork extends Component {

    render(){
        return (
            <div className="social-network">
                <a href="mailto:jeremy.lao0390@gmail.com" className="icon" >
                    <FontAwesomeIcon 
                        className="picto"
                        icon={faAt}
                    />
                </a>
                <a href="tel:+33629797712" className="icon">
                    <FontAwesomeIcon
                        className="picto"
                        icon={faMobileAlt}
                    />
                </a>
                <a href="https://www.linkedin.com/in/jeremylao/" className="icon">
                    <FontAwesomeIcon 
                        className="picto"
                        icon={faLinkedin}

                    />
                </a>
                <a href="https://github.com/JeremyLaoo?tab=repositories" className="icon">
                    <FontAwesomeIcon
                        className="picto"
                        icon={faGithub}

                    />
                </a>
                <a href="./cv_laoj.pdf" className="icon" download="CV_LAO_JEREMY_DEVELOPPEUR_WEB">
                    <FontAwesomeIcon
                        className="picto"
                        icon={faCloudDownloadAlt}

                    />
                </a>
                
            </div>
        )
    }
}

export default SocialNetwork