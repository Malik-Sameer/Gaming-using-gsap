import React, { useRef } from 'react'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Navbar from './Components/Navbar/Navbar'
import Features from './Components/Features/Features'
import Story from './Components/Story/Story'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {


  return (

    <main className='relative min-h-screen w-screen overflow-x-hidden '>
      <Navbar/>
     <Hero/>
     <About/>
     <Features/>
     <Story/>
     <Contact/>
     <Footer/>
    </main>
  )
}

export default App