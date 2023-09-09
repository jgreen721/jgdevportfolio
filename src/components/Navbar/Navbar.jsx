import React, {useState} from 'react'
import { MobileMenu } from '..'
import "./Navbar.css"

const Navbar = ({setShowMobile,showMobile}) => {
    // const [showMobile, setShowMobile] = useState(false)
  return (
    <nav className="nav">
        <div className="nav-logo-div">
            <h2 className="nav-logo-header">
                <div className="nav-logo-inline-text">J</div>
                <div className="nav-logo-inline-text">G</div>
                <div className="nav-logo-inline-text">D</div>
                <div className="nav-logo-inline-text">E</div>
                <div className="nav-logo-inline-text">V</div>
            </h2>
        </div>
        <ul className="nav-links">
            <li className="nav-link-item">
                <a href="#about" className="nav-link">
                    <h4 className="nav-link-h4">About</h4>
                </a>
            </li>
            <li className="nav-link-item">
                <a href="#samples" className="nav-link">
                    <h4 className="nav-link-h4">Samples</h4>
                </a>
            </li>
            <li className="nav-link-item">
                <a href="#contact" className="nav-link">
                    <h4 className="nav-link-h4">Contact</h4>
                </a>
            </li>
        </ul>
        <div className="mobile-nav-burger-parent">
            <div onClick={()=>setShowMobile(!showMobile)} className="burger">
                <div className={showMobile ? "line lower-line" : "line"}></div>
                <div className={showMobile ? "line fade-line" : "line"}></div>
                <div className={showMobile ? "line raise-line" : "line"}></div>
            </div>
        </div>
        <MobileMenu showMobile={showMobile}/>

    </nav>
  )
}

export default Navbar