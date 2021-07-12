import React, { useState } from 'react'
import {CSSTransition} from 'react-transition-group'
export default function Navbar(props) {


    const [open,setOpen] = useState(false)

    return (
        <div className="nav-bar">
            <div className="nav-bar-title">
                <h1>Karan Barot</h1>
            </div>
            <div className={`nav-menu-links ${open===true&& "active"}`}>
                <ul>
                    <li><a href="www.google.com "><i className="uil uil-estate"></i>Home</a></li>
                    <li><a href="www.google.com "><i className="uil uil-user"></i>About</a></li>
                    <li><a href="www.google.com "><i className="uil uil-lightbulb-alt"></i>Skills</a></li>
                    <li><a href="www.google.com "><i className="uil uil-bag"></i>Portfolio</a></li>
                    <li><a href="www.google.com "><i className="uil uil-clipboard-notes"></i>Services</a></li>
                    <li><a href="www.google.com "><i className="uil uil-envelope-add"></i>Contact</a></li>
                </ul>
            </div>
            <div className="nav-bar-button">
                <i className="uil uil-apps" onClick={()=>setOpen(!open)}></i>
            </div>
         
        </div>
    )
}

