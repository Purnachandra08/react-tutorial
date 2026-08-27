import React,{useState} from 'react'

const App = () => {
  const [num, setNum] = useState(20)
  const [userName, setuserName] = useState('Sipun')
  const [val, setval] = useState(0)
  function increase(){
    setNum(num+1)
  }
  return (
    <div>
      <h1>This is {num}</h1>
      <button onClick={increase} className='btn'>Increment</button>
      
      <h1>This is {userName}</h1>
      <button onClick={()=>{setuserName('Chiku')}} className='btn'>Change Name</button>

      <h1>{val}</h1>

      <button onClick={()=>{setval(val+1)}} className='btn'>Increase</button>
      <button onClick={()=>{setval(val-1)}} className='btn'>Decrease</button>
      <button onClick={()=>{setval(0)}} className='btn'>Reset</button>
    </div>
  )
}

export default App
