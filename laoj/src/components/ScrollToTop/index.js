import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'

import { useWindowScroll } from 'react-use'
import './ScrollToTop.css';

const ScrollToTop = () => {

    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisibility] = useState(false);

    useEffect(()=>{
        if(pageYOffset > 400){
            setVisibility(true)
        }else{
            setVisibility(false)
        }
    }, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({top:0, behavior: "smooth"})

    if(!visible){
        return false;
    }

    return (
        
        <div className="scroll-to-top cursor-pointer text-center" onClick={scrollToTop}>
            <FontAwesomeIcon 
                className="icon"
                style={{ height: 40, width: 40,  backgroundColor: 'transparent', cursor: 'pointer' }} 
                icon={faArrowCircleUp} 
            />
        </div>
    )
    
}

export default ScrollToTop