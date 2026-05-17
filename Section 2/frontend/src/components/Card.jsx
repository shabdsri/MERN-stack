import React from 'react'

const Card = ({ title, desc, btnText}) => {
  return (
    <div className='border-2 border-gray-200 p-6 space-y-4 rounded-xl'>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <p>{desc}</p>
      <button className='bg-blue-500 text-white px-6 py-2 rounded'>{btnText}</button>
    </div>
  )
}

export default Card;