import React from 'react'

const Card = (props) => {
  return (
    <div className="parent">
        <div className="card">
            <h1>{props.user}</h1>
            <p>{props.domain}</p>
            <button>Follow</button>
        </div>
        
    </div>
    
  )
}

export default Card
