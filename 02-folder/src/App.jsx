import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
      <div className= 'card'>
        <h1>Sipun</h1>
        <p>lorem ipsum</p>
      </div>
      <Card />
      <Navbar />
    </div>
  )
}

export default App
