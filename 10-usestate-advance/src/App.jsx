import React, { useState } from 'react'

const App = () => {
  const [val, setval] = useState([10,20,30,40,50])


const [num, setnum] = useState({userName:'Sipun', age:20})
const btnClicked = () => {
  const newNum = {...num};
  newNum.userName ='Chiku';
  setnum(prev=>({...prev, age: 50}))
  setnum(newNum);
}
const arrUpdate = () => {
  const newVal = [...val];
  newVal[0] = 100;
  newVal.push(60);
  setval(newVal);
}

  return (
    <div>
      <h1>{num.userName}</h1>
      <h1>{num.age}</h1>
      <button onClick={btnClicked}>Change Name and Age</button>

      <h1>{val}</h1>
      <button onClick={arrUpdate}>Update Array</button>
    </div>
  )
}

export default App
