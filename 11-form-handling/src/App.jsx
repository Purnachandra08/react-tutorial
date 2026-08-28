import React from 'react'

const App = () => {
  const handleSubmit =(e) =>{
    e.preventDefault();
    console.log('Form Submitted');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
