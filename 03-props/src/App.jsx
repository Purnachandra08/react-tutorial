import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className="parent">
      <Card user='Sipun' domain='Frontend Developer'/>
      <Card user='Chiku' domain='Backend Developer'/>
      <Card user='omm' domain='Full Stack Developer'/>
    </div>
  )
}

export default App
