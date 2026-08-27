import React from 'react'

const App = () => {
  function inputTyping(){
    console.log("typing");

  }
  function inputChange(val){
   console.log(val);
  }
  function pageScrolling(elem){
    if(elem >0){
      console.log("scrolling down");
    }else{
      console.log("scrolling up");
    }

  }
  
  return (
    <div>
      <h1>Hello Sipun</h1>
      <button onClick={function(){
        console.log("clicked");
        
      }}>change user</button>
      <input  onChange={inputTyping} type='text' placeholder='EnterName'></input>
      <input  onChange={function(elem){
        inputChange(elem.target.value)
      }} type='text' placeholder='EnterBranch'></input>
      <div onMouseMove={() =>{console.log('nacho')}} className='box'></div>
      <div onWheel={(elem) =>{console.log(elem.deltaY)}} className='page1'></div>
      <div onWheel={(elem) =>{console.log(elem.deltaY)}} className='page2'></div>
      <div onWheel={(elem) =>{console.log(elem.deltaY)}} className='page3'></div>
    </div>
  )
}

export default App
