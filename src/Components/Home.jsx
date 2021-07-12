import React,{useEffect,useRef} from 'react'
import img from '../Assets/Images/karan.jpeg'
import {init} from 'ityped'
export default function Home() {
    let textref = useRef()

    useEffect(()=>{
        init(textref.current,{ showCursor: true, strings: ["Web Developer","Web Designer"] });
    },[])
    return (
        <div className="home-container">
            <div className="text-container">
                <h3>Hey I am</h3>
                <h1 className="text-title">Karan Barot</h1>
                <h2>I am a <span ref={textref}></span></h2>
                <button>Contact Me</button>
            </div>
            <div className="image-container">
                <div className="image-box">
                    <img src=""/>
                </div>
            </div>
        </div>
   
    )
}
