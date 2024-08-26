import { logout } from '@/store/slice/authSlice'
import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Account = () => {

    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function handleClick() {
        try {
            const res = await axios.get(
                `${import.meta.env.VITE_BASE_API}/api/auth/logout`
            )
            console.log(res)
            if (res) {
                dispatch(logout())
                navigate('/')
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <section className='w-full min-h-screen'>
            <div className='min-h-screen flex flex-col justify-center items-center gap-5'>
                <span>Name : {user.name}</span>
                <span>Email : {user.email}</span>
                {
                    user.isAdmin && <Link to='/create-turf'
                        className='bg-green-700 text-white px-6 py-2 rounded-lg'>
                        List a Turf
                    </Link>
                }
                <button className='bg-red-600 text-white px-6 py-2 rounded-lg'
                    onClick={handleClick}>Logout</button>
            </div>
        </section>
    )
}

export default Account
