import React from 'react'

const App = () => {

  // localStorage.setItem('age', 30)
  // const name = localStorage.getItem('name')
  // const age = localStorage.getItem('age')
  // localStorage.removeItem('age')
  // console.log(name)
  // console.log(age)

  // const user ={
  //   username: 'John',
  //   age: 30,
  //   city: 'New York'
  // }
  // localStorage.setItem('user', JSON.stringify(user))  

  const user = localStorage.getItem('user')
  const userObj = JSON.parse(user)
  console.log(userObj)
  return (
    <div>
      App
    </div>
  )
}

export default App
