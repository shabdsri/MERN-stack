'use client'
import axios from 'axios'
import { Trash2 } from 'lucide-react'
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

    const deleteUser = {id} => {
        const res = await axios.delete(`http://localhost:5000/user/delete/${id}`)
    }

    return (
        <div>
            <div className='container mx-auto'>
                <h2 className='text-3xl font-bold text-center my-8'>User Manager</h2>
                <table>
                    <thead>

                        <tr className='border'>

                            <th className='p-3'>Id</th>
                            <th className='p-3'>Name</th>
                            <th className='p-3'>Email</th>
                            <th className='p-3'>City</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userList.map(user => {
                                return <tr key={user._id} className='border'>
                                    <td className='p-3'>{user.name}</td>
                                    <td className='p-3'>{user.email}</td>
                                    <td className='p-3'>{user.city}</td>
                                    <td>
                                        <button className='bg-red-500 text-white rounded-lg p-2'>
                                            <Trash2/>
                                        </button>
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