import {useState} from "react"
import './App.css'
import {MobileMenu,Navbar,Hero,About,Samples,Contact,Footer} from "./components"

function App() {
  const [showMobile, setShowMobile] = useState(false)

  return (
    <div data-theme="dark" className="app">
      <Navbar setShowMobile={setShowMobile} showMobile={showMobile}/>
      {/* <MobileMenu showMobile={showMobile}/> */}
      <div className={showMobile ? "app-content blur-app" : "app-content"}>
      <Hero/>
      <About/>
      <Samples/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}

export default App
