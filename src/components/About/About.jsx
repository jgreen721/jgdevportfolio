import React,{useEffect} from 'react'
import "./About.css"

const About = () => {
  var aboutBlurbs=[
    {id:1,title:"The Start...",blurb:"Got started on codecademys IDE and became real good at doing Javascript without any context/understanding outside of code regurgitations."},
    {id:2,title:"Ground beneath my feet", blurb:"Attended 24 week MERN course at UCLA extension. Learned CRUD workflow with some basic validations/authentications on the backend. Most importantly though, finished with a foundation to run with"},
    {id:3,title:"The pandemic boost", blurb:"Daily practice of a few hours became daily practice of full days, consuming YT builds/tutorials to build off everything I learned in bootcamp. Gained deeper understanding of design and coding principals."},
    {id:4,title:"And now", blurb:"Continuing my learning in lower level languages while always practicing front-end design thru challenge websites and applying for work opportunity to learn and grow from."}
  ]


  return (
    <div className="about-section">
      <div className="about-header">
        <div className="about-em">
          <h1> About</h1>
        </div> 
        <div className="me-h1">
          <h1>Me</h1>
        </div>
      </div>

      <p className="about-blurb">Programming for 5+ years. Got started on codecademies and then enrolled into a <span className="gasp">(gasp)</span> bootcamp with a 24 week MERN stack program at <span className="ucla">UCLA</span>. From there, continued daily practice and digesting the learned material. Pandemic hit and the few hours a day became full-day investments of playing on the computer/consuming material off youtube. Now, dutifully knocking off any challenge on <span className="frontendmentor">FrontEndMentor</span> with pixal perfect conversion of design file templates.</p>
    </div>
  )
}

export default About