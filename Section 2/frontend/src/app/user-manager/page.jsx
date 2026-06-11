'use client'
import axios from 'axios'
import { PenSquare, Trash2 } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const UserManager = () => {
    const [userList, setuserList] = useState([])
    const fetchusers = async () => {

        const res = await axios.get('http://localhost:5000/user/getall')
        if (res.status === 200) {
            console.log(res.data);
            setuserList(res.data)
        }

        else {
            toast.error('some error occured')
        }
    }

    useEffect(() => {
        fetchusers();
    }, []);

    const deleteUser = async (id) => {
        const res = await axios.delete(`http://localhost:5000/user/delete/${id}`)
        if(res.status ===200)
        {
            toast.success('User Deleted Successfully')
            fetchusers();

        }
        else
            toast.error('Some error occured')
    }

    return (
        <div>
            <div className='container mx-auto'>
                <h2 className='text-3xl font-bold text-center my-8'>User Manager</h2>
                <table className='w-full'>
                    <thead>

                        <tr className='border'>

                            <th className='p-3'>Id</th>
                            <th className='p-3'>Name</th>
                            <th className='p-3'>Email</th>
                            <th className='p-3'>City</th>
                            <th colSpan={2}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userList.map(user => {
                                return <tr key={user._id} className='border'>
                                    <td className='p-3'>{user._id}</td>
                                    <td className='p-3'>{user.name}</td>
                                    <td className='p-3'>{user.email}</td>
                                    <td className='p-3'>{user.city}</td>
                                    <td>
                                        <button onClick={() => deleteUser(user._id)} className='bg-red-500 text-white rounded-lg p-2'>
                                            <Trash2/>
                                        </button>
                                    </td>
                                    <td>

                                        <Link href={'/update-user/'+user._id} className='block w-fit bg-blue-500 text-white rounded-lg p-2'><PenSquare/></Link>
                                    </td>
                                </tr>
                            })


                        }
                    </tbody>

                </table>

            </div>
        </div>
    )

}

export default UserManager;