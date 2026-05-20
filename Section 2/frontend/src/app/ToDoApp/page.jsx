'use client'
import React, { useState } from 'react'

const ToDoApp = () => {
    
//    let count=1;
//    const [count, setCount] = useState(1);
     const [taskList, setTaskList] = useState([ 
        { task: 'Dhaniya lao' , completed : false} ,
        { task: 'Dahi lao' , completed : false} ,
        { task: 'Samosa lao' , completed : false}
     ]
     )
   const addNewTask = (e) => {
    if ( e.code === 'Enter')
    {
        console.log(e.target.value);
        e.target.value = " " ;
        
    }
   };

  return (
    <div> 
        <h1 className='text-center text-3xl font-bold'>ToDoApp</h1>
        <div className='container mx-auto py-10'>


            {/* <h1 className='text-3xl'>{count}</h1>
            <button className='text-black border-2' onClick={() => { setCount(count+1) ; console.log(count);}}>Click me</button> */}
             
        

            <div className='border rounded-md'>
                <div className='p-4'>
                    <input type="text" onKeyDown = {addNewTask}  className='px-4 py-2 border w-full' placeholder='Enter your task here...' />
                </div>
                <div className='p-4 border-t'>
                    {
                        taskList.length === 0 ? 
                        (<p className='font-bold text-center text-gray-400 text-xl'>No ToDo's to show 😂...</p>)
                        : ( taskList.map(( obj , index  ) => {
                            return ( <div key={index} className='border rounded-lg p-4 mb-6'>
                                <p>{obj.task}</p></div>)
                        }))
                    }

                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ToDoApp;