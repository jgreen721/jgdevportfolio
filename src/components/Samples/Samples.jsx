import React, {useState,useEffect} from 'react'
import {RPSGame,BMICalculator,MakerSample,Pomodoro,WebsiteAgencyLanding} from "../../const"
import "./Samples.css"

const Samples = () => {
  const [samples,setSamples] = useState([
    {id:1,title:"Rock,Paper,Scissors",description:"",img:RPSGame,site:"",code:"",features:[],translate:-150},
    {id:2,title:"Landing Page Design(Maker)",description:"",img:MakerSample,site:"",code:"",features:[],translate:-50},
    {id:3,title:"Pomodoro Stopwatch",description:"",img:Pomodoro,site:"",code:"",features:[],translate:50},
    {id:4,title:"Landing Page Design (Agency)",description:"",img:WebsiteAgencyLanding,site:"",code:"",features:[],translate:150},
    {id:5,title:"BMI Calculator",description:"",img:BMICalculator,site:"",code:"",features:[],translate:250},
  ])
   const [curr,setCurr] = useState([])


;


  return (
    <div className="samples-section">
      <h1>Samples</h1>
      <ul className="sample-gallery-row">
        {samples.map(s=>(
          <li style={{'--translate':`${s.translate}%`}} key={s.id} className="sample-item">
            <div className="sample-img-parent">
              <img className="sample-img" src={s.img} alt="" />
            </div>
            <div className="sample-info">
            {s.translate == 50 &&
              <h3>{s.title}</h3>
            }
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Samples