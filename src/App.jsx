import React from 'react'
import './App.css'

// portfolio components
import Bio from './components/Bio'
import Challenges from './components/Challenges'
import Stories from './components/Stories'
import Solutions from './components/Solutions'
import Reflections from './components/Reflections'
import References from './components/References'

function App() {
  return (
    <div id="portfolio">
      <header>
        <h1>Digital Portfolio – Battle for Schools</h1>
      </header>

      <Bio />
      <Challenges />
      <Stories />
      <Solutions />
      <Reflections />
      <References />
    </div>
  )
}

export default App
