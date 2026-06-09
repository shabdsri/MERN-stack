'use client'
import axios from 'axios'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'

const UserManager = () => {
    const fetchusers = async () => {
        const [userList, setuserList] = useState([])

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

    return (
        <div>
            <div className='container mx-auto'>
                <h2 className='text-3xl font-bold text-center my-8'>User Manager</h2>
                <table>
                      <thead>

                        <tr>

                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                            <td></td>
                        </tr>
                      </tbody>

                </table>

            </div>
        </div>
    )

}

export default UserManager;