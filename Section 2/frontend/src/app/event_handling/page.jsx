'use client';
import React from 'react';

const EventHandling = () => {
  return (
    <div className='h-screen cursor-none'
    onMouseMove={(e) => 
    { console.log(e.clientX, e.clientY);
        const box = document.getElementById('box');
        box.style.left = e.clientX + 'px';
        box.style.top = e.clientY + 'px';
     }}>
        <div className='bg-yellow-200 size-8 absolute' id='box'></div>
      <h1 className='text-center text-3xl font-bold'>Event Handling</h1>
      <hr />
      <div className='container mx-auto'>
        <button onClick = { () => {alert('Button Clicked')}}  className='bg-blue-500 rounded-md p-3 text-white'>
            Click Me</button>

        <input type="text" className='my-5 border p-3 block'
        onChange={(e) => { console.log(e.target.value);}}/> 

        <input type="file" className='my-5 border p-3 block'
        onChange={(e) => { console.log(e.target.files);}}/>    
        
        <input type="text" className='my-5 border p-3 block'
        onKeyDown={(e) => { console.log(e.code);}}/>

        <input type="color"
        onChange={(e) => { console.log(document.body.style.background = e.target.value);
        }} />

      </div>
    </div>
    
  )
}

export default EventHandling