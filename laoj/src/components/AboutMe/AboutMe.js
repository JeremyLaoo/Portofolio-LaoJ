import React, { Component } from 'react';
import './AboutMe.css';

import { useSpring, animated} from 'react-spring'
import Typical from 'react-typical'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'



const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const AboutMe = () => {

  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
        return (
            
            <div className="div-aboutme" id="aboutme">
                <div className="container">
                    
                    <div className="row ">
                        <div className="col-sm col-picture">
                            {/* ANIMATION IMG */}
                            <animated.div
                                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                onMouseLeave={() => set({ xys: [1, 0, 1] })}
                                style={{ transform: props.xys.interpolate(trans) }}
                            >
                                <img src="./images/profil.png" className="img-profil" alt="" />
                            </animated.div>
                        </div>
                        <div className="col-sm col-text">
                            <div className="text-bienvenue">
                                Bienvenue, je suis
                            </div>
                            <div className="text-name">
                                Jérémy Lao
                            </div>
                            <div className="text-dev">
                                <Typical
                                    steps={['Développeur FullStack', 1000]}
                                    loop={Infinity}
                                    wrapper="p"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row-button">
                        <div className="">
                           <button type="button" href="#" className="btn-ok">
                               <span className="btn--CV">CV</span>
                               <span className="btn--icon">
                               <FontAwesomeIcon
                                    icon={faCloudDownloadAlt}
                                    className="icon--button"
                                />
                               </span>
                           </button>
                        </div>
                        <div className="">
                           <button type="button" href="#" className="btn-ok">test</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

export default AboutMe