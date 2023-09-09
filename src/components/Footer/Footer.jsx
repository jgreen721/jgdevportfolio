import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer-header">JGDev</h3>
      <ul className="footer-media-links">
        <li className="footer-media-item">
          <a href="https://frontendmentor.io/profile/jgreen721" target="_blank" className="footer-media-link">FE.Mentor</a>
        </li>
        <li className="footer-media-item">
          <a href="https://frontendmentor.io" target="_blank" className="footer-media-link">LeetCode</a>
        </li>
        <li className="footer-media-item">
          <a href="https://codepen.io/jgreen721" target="_blank" className="footer-media-link">CodePen</a>
        </li>
      </ul>
      {/* <div className="footer-overlay"> */}
      <svg viewBox="0 0 1320 300">

  <path fill="rgb(0, 250, 154)" fillOpacity='0.5'/>
  <path fill="#00d2d3" fillOpacity='0.5'/>  
</svg>
      {/* </div> */}
    </footer>
  )
}

export default Footer