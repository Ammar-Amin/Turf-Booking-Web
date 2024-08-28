import { logout } from '@/store/slice/authSlice'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Account = () => {

    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data, setData] = useState([])

    async function handleLogout() {
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

    async function getBookings() {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_API}/api/booking`)
            if (res) {
                console.log(res)
                setData(res.data)
            }
        } catch (err) {
            console.log(err.response)
        }
    }

    useEffect(() => {
        getBookings()
    }, [])

    return (
        <section className='w-full min-h-screen'>
            <div className='mt-24 md:mt-14 lg:mt-0 mb-10 min-h-screen flex flex-col justify-center items-center gap-5'>
                <div className='flex gap-10 lg:text-xl'>
                    <span>Name : {user.name}</span>
                    <span>Email : {user.email}</span>
                </div>
                <div className='flex gap-10'>
                    {
                        user.isAdmin && <Link to='/create-turf'
                            className='bg-green-700 text-white px-6 py-2 rounded-lg'>
                            List a Turf
                        </Link>
                    }
                    <button className='bg-red-600 text-white px-6 py-2 rounded-lg'
                        onClick={handleLogout}>Logout</button>
                </div>

                <section className="mx-auto w-full max-w-[80rem] px-4 py-4">
                    <div className="flex flex-col space-y-4 md:items-center md:justify-between md:space-y-0">
                        <div className='md:flex md:justify-between md:gap-10 md:mb-4'>
                            <div>
                                <h2 className="text-lg lg:text-xl font-semibold">Bookings</h2>
                                <p className="mt-1 text-sm text-gray-700">
                                    This is a list of all Turf Bookings. You can Book a turf, edit or delete existing ones.
                                </p>
                            </div>
                            <div className='my-2'>
                                <Link to='/booking'>
                                    <button
                                        type="button"
                                        className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600"
                                    >
                                        Book New Turf
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="mt-6 flex flex-col">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                    <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                                    >
                                                        <span>Turf Details</span>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                                                    >
                                                        User's Name
                                                    </th>

                                                    <th
                                                        scope="col"
                                                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                                    >
                                                        Payment
                                                    </th>

                                                    <th
                                                        scope="col"
                                                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                                    >
                                                        Total
                                                    </th>
                                                    <th scope="col" className="relative px-4 py-3.5">
                                                        <span className="sr-only"></span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 bg-white">
                                                {data.length > 0 && data.map((obj) => (
                                                    <tr key={obj.name}>
                                                        <td className="whitespace-nowrap px-4 py-4">
                                                            <div className="flex items-center">
                                                                <div className="h-10 w-10 flex-shrink-0">
                                                                    <img
                                                                        className="h-10 w-10 rounded-full object-cover"
                                                                        src={obj.turf.imageUrls[0]}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium text-gray-900">{obj.turf.name}</div>
                                                                    <div className="text-sm text-gray-700">{obj.turf.location.address}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="whitespace-nowrap px-12 py-4">
                                                            <div className="text-sm text-gray-900 ">{obj.user.name}</div>
                                                            <div className="text-sm text-gray-700">{obj.user.email}</div>
                                                        </td>
                                                        <td className="whitespace-nowrap px-4 py-4">
                                                            <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                                {obj.paymentStatus}
                                                            </span>
                                                        </td>
                                                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                                            {obj.turf.pricePerHour}
                                                        </td>
                                                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                                                            <a href="#" className="text-gray-700">
                                                                Delete
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </section>
    )
}

export default Account
