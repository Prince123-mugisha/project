import About from "./componets/About/About"
import Contact from "./componets/contact us/contact"
import Footer from "./componets/footer/footer"
import Hero from "./componets/hero/Hero"
import Member from "./componets/Members/Member"
import Navbar from "./componets/Navbar/Navbar"
import Project from "./componets/Project/Project"
import Title from "./componets/title/Title"
import Video from "./componets/Video/video"
import { useState } from "react"

function App() {
  
  const [playState, setPlaystate] = useState(false); 

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our project' title='We teach tech programs'/>
        <Project />
        <About /> 
        <Member />
        <Title subTitle='Contact us' title='Get in touch' />
        <Contact />
        <Footer/>
    

      </div>

  
      
    </>
  )
}

export default App
