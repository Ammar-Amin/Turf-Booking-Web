import { Input } from '@/components'
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    function handleChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(data)
        try {
            const res = await axios.post('/api/auth/login', data)
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <section className='w-full min-h-screen px-3 flex items-center justify-center'>
            <div className='md:w-[500px] lg:w-[600px] p-5 md:p-10 flex flex-col border bg-green-200 rounded-lg mt-14'>

                <h2 className="my-4 text-center text-2xl lg:text-3xl font-bold leading-tight">Log in to your account</h2>

                <form className='mt-3 flex flex-col' onSubmit={handleSubmit}>
                    <Input
                        label='Email'
                        type='email'
                        name='email'
                        placeholder='Enter you email'
                        onChange={handleChange}
                    />
                    <Input
                        label='Password'
                        type='password'
                        name='password'
                        placeholder='Enter you password'
                        onChange={handleChange}
                    />
                    <div className='mt-5 flex justify-center'>
                        <button type='submit' className='px-8 py-2 bg-green-400 rounded-lg'>Submit</button>
                    </div>
                </form>

                <p className="mt-4 text-center text-sm">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-blue-600 transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>

            </div>
        </section>
    )
}

export default Login
