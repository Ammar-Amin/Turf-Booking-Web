import { Input } from '@/components'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const [error, setError] = useState(null)

    function handleChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setError(null)
        try {
            const res = await axios.post(
                `${import.meta.env.VITE_BASE_API}/api/auth/register`,
                data,
                { headers: { "Content-Type": "application/json" } }
            )
            if (res) {
                navigate('/login')
            }
        } catch (err) {
            // console.log(err.response.data.message)
            setError(err.response.data.message)
        }
    }

    return (
        <section className='w-full min-h-screen px-3 flex items-center justify-center'>
            <div className='w-[85%] md:w-[500px] lg:w-[600px] p-5 md:p-10 flex flex-col border bg-green-200 rounded-lg mt-24'>

                <h2 className="my-4 text-center text-2xl lg:text-3xl font-bold leading-tight">Sign up to create account</h2>

                <form className='mt-3 flex flex-col' onSubmit={handleSubmit}>
                    <Input
                        label='Full Name'
                        name='name'
                        placeholder='Enter your name'
                        value={data.name}
                        onChange={handleChange}
                    />
                    <Input
                        label='Email'
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        value={data.email}
                        onChange={handleChange}
                    />
                    <Input
                        label='Password'
                        type='password'
                        name='password'
                        placeholder='Enter you password'
                        value={data.password}
                        onChange={handleChange}
                    />
                    {
                        error && <span className='mt-2 text-red-500 font-medium text-center'>{error}</span>
                    }
                    <div className='mt-5 flex justify-center'>
                        <button type='submit' className='px-8 py-2 bg-green-400 rounded-lg'>Submit</button>
                    </div>
                </form>

                <p className="mt-4 text-center text-sm">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-blue-600 transition-all duration-200 hover:underline"
                    >
                        Log In
                    </Link>
                </p>

            </div>
        </section>
    )
}

export default SignUp
