import React, {useRef,useState} from 'react'
import "./Hero.css"

const Hero = () => {
  const leftRef = useRef();
  const rightRef = useRef();
  const [offsetNumber,setOffsetNumber] =useState(()=>innerWidth > 950 ? 75 : innerWidth > 550 ? 50 : 20);



  onresize=(e)=>{
    console.log("reSizing: " + innerWidth + " offsetNumber: " + offsetNumber +  " .");
    if(innerWidth > 950){
      setOffsetNumber(75)
    }
    else if(innerWidth > 550){
      setOffsetNumber(50)

    }
    else{
      setOffsetNumber(20)
    }

    //keep UI offsets consistent -- update on resize incase of change in value.
    let leftY = (-window.pageYOffset * .7) - offsetNumber
    let rightY = (window.pageYOffset * .5) + offsetNumber
  
        leftRef.current.style.transform = `translateX(${leftY}px)`
        rightRef.current.style.transform = `translateX(${rightY}px)`
  }

  onscroll=(e)=>{
    let leftY = (-window.pageYOffset * .7) - offsetNumber
    let rightY = (window.pageYOffset * .5) + offsetNumber

          leftRef.current.style.transform = `translateX(${leftY}px)`
          rightRef.current.style.transform = `translateX(${rightY}px)`
   
  }
  return (
    <header className="hero">
       {/* <div className="hero-overlay"></div>  */}
       <div className="hero-content">
         <h1 ref={leftRef} className="hero-h1 hero-h1-one">FrontEnd</h1>
         <h1 ref={rightRef} className="hero-h1 hero-h1-two">Designer</h1>
       </div>
    </header>
  )
}

export default Hero