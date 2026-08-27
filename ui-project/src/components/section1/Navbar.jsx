import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 bg-gray-800 text-white'>
      <h4 className='bg-black text-white px-6 py-2 rounded-full'>Target Audience</h4>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Digital Marketing Platform
      </button>
    </div>
  )
}

export default Navbar
