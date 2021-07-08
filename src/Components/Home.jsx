import React,{useEffect,useRef} from 'react'
import img from '../Assets/Images/blob.svg'
import {init} from 'ityped'
export default function Home() {

    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, { 
            showCursor: true,
            strings: ['Fullstack Dveloper', 'Designer' ] 
        })
    }, [])

    return (
        <div className="home-container">
            <div className="imp-links">
                <a href="fsh"><i class="uil uil-github"></i></a>
                <a href="as"><i class="uil uil-fast-mail"></i></a>
                <a href="as"><i class="uil uil-twitter"></i></a>
                <a href="as"><i className="uil uil-linkedin"></i></a>
            </div>
            <div className="bio-image-container">
                
            </div>
            <div className="bio-text-container">
                <p>Hi my name is</p><span><h1>Karan Barot</h1></span> 
                <p>
                    And I'm a <span ref={textRef}></span>
                </p>
                <button>Contact Me</button>
            </div>
            
            
        </div>
   
    )
}
