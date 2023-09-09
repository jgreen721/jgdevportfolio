import React from 'react'
import "./MobileMenu.css"

const MobileMenu = ({showMobile}) => {
  return (
    <div className={showMobile ? "mobile-menu show-mobile-menu" : "mobile-menu hide-mobile-menu"}>
        <div className="mobile-overlay"></div>
        <ul className="mobile-links">
            <li className="mobile-link-item">
                <a href="#about" className="mobile-link">
                    <h2 className="mobile-link-h2">About</h2>
                </a>
            </li>
            <li className="mobile-link-item">
                <a href="#samples" className="mobile-link">
                    <h2 className="mobile-link-h2">Samples</h2>
                </a>
            </li>
            <li className="mobile-link-item">
                <a href="#contact" className="mobile-link">
                    <h2 className="mobile-link-h2">Contact</h2>
                </a>
            </li>
        </ul>
        
    </div>
  )
}

export default MobileMenu