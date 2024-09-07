import { Table } from '@/components'
import { logout } from '@/store/slice/authSlice'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Account = () => {

    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

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

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <section className='w-full min-h-screen'>
            <div className='py-10 flex flex-col items-center gap-5'>
                <div className='mt-16 w-full px-5 flex flex-col gap-2 lg:text-xl'>
                    <span className='md:text-center'>Name : {user.name}</span>
                    <span className='md:text-center'>Email : {user.email}</span>
                </div>
                <div className='flex gap-10'>
                    {
                        user.isAdmin && <Link to='/create-turf'
                            className='text-xs lg:text-base bg-green-700 text-white px-6 py-2 rounded-lg'>
                            List a Turf
                        </Link>
                    }
                    <button className='text-xs lg:text-base bg-red-600 text-white px-6 py-2 rounded-lg'
                        onClick={handleLogout}>Logout</button>
                </div>

                <section className="w-full px-4 py-4">
                    <div className="flex flex-col space-y-4 md:items-center md:justify-between md:space-y-0">
                        <div className='md:flex md:justify-between md:gap-10 md:mt-8 md:mb-4'>
                            <div>
                                <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold">Bookings</h2>
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
                                <div className="inline-block py-2 align-middle md:px-6 lg:px-8">
                                    <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                        <Table />
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
