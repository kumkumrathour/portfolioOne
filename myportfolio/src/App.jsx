import React from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import SocialLinks from './Components/SocialLinks'
import About from './Components/About'
import Portfolio from './Components/Portfolio'

function App() {

  return (
    <div className="App">
    <NavBar/>
    <Home/>
    <SocialLinks/>
    <About/>
    <Portfolio/>
    </div>
  )
}

export default App
