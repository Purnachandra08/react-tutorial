import React, { useEffect, useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(100)
  useEffect(function(){
    console.log('use effect is running')
  },[num])
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={()=>{
        setnum(num + 1)
      }}> Click</button>
      <h1>{num2}</h1>
      <button onClick={()=>{
        setnum2(num2 + 1)
      }}> Click</button>
    </div>
  )
}

export default App
