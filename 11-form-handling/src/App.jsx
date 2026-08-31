import React, { useState } from 'react'

const App = () => {
  const [name, setname] = useState('')
  const handleSubmit =(e) =>{
    e.preventDefault();
    console.log('Form Submitted by:', name);
    setname('');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setname(e.target.value)} type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
