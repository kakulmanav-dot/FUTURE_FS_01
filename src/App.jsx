import React  ,{useState}from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Project from './pages/Project'
// import Expireince from './pages/Expireince'
//import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

import CustomCursor from './components/CustomCursor'
import IntroAnimation from './components/IntroAnimation'
import { Route , Routes } from 'react-router-dom'

function App() {
  const [introDone , setintroDone] = useState(false);
  return (
    <>
    {!introDone && <IntroAnimation onFinish={()=> setintroDone(true)}/>}
      {introDone && ( 
      <div>
        <CustomCursor />
        <NavBar />
        <Home />
       
        <About />
        <Skills />
        <Project />
        {/* <Expireince />
        <Testimonials /> */}
        <Contact />
        <Footer />
      </div>
       )}
    </>
  );
}

export default App