'use client'
import { Trash2 } from 'lucide-react';
import React, { useState } from 'react'

const ToDoApp = () => {
    
//    let count=1;
//    const [count, setCount] = useState(1);
     const [taskList, setTaskList] = useState([]);
   const addNewTask = (e) => {
    if ( e.code === 'Enter')
    {
        console.log(e.target.value);
        const newTask = { task : e.target.value , completed : false} ;
        setTaskList([...taskList, newTask]);
        e.target.value = " " ;
        
    }
   };

   const removeTask = (index) => {
    console.log(index);
    const temp = taskList;
    temp.splice(index, 1);
    setTaskList([...temp]);
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
                            return (  <div key={index} className='border rounded-lg p-4 mb-6 flex justify-between items-center'>
                                
                                <div>
                                    <input type="checkbox" 
                                    onChange = { e =>{
                                        const temp = taskList;
                                        temp[index].completed = e.target.checked;
                                        setTaskList([...temp]);
                                    }}/>
                                </div>
                                
                                <p>{obj.task}</p>
                                
                                {
                                    obj.completed ? (<p className='bg-green-100 text-green-500 font-bold  p-3 rounded-full'>Completed</p>)
                                        :
                                    (<p className='bg-yellow-100 text-yellow-500 font-bold  p-3 rounded-full'>Pending</p>)


                                }

                                <button onClick={() => {removeTask(index)}} 
                                className='bg-red-400 text-white p-3 rounded-xl'>
                                    <Trash2/>
                                </button>
                                
                                </div>)
                        }))
                    }

                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ToDoApp;