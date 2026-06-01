import React from 'react'

const MyButton = ({ children }) => {
  return (
    <button className='bg-fuchsia-400 text-white px-6 py-2 rounded-lg'>
       {children}
    </button>
  )
}

export default MyButton;