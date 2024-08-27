import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Input } from '../'
import axios from 'axios'

const BookingForm = ({
    turfId,
    setOpenModal,
    setStatus,
}) => {
    const { _id } = useSelector(state => state.auth.user)
    const [formInput, setFormInput] = useState({
        turf: turfId,
        user: _id,
        bookingDate: '',
        startTime: '',
        endTime: '',
        totalAmount: '',
    })
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    function handleChange(e) {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setError(null)
        setLoading(true)
        console.log(formInput)
        try {
            const res = await axios.post(
                `${import.meta.env.VITE_BASE_API}/api/booking`,
                formInput,
                { headers: { "Content-Type": "application/json" } }
            )
            if (res) {
                console.log(res)
                setStatus("Booked")
                setLoading(false)
                setOpenModal(false)
            }
        } catch (err) {
            // console.log(err.response)
            setError(err.response.data.message ?? "Booking Failed!")
            setLoading(false)
        }
    }

    return (
        <section className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'>
            <div className='absolute top-1 right-1 px-2 bg-slate-700 rounded-full cursor-pointer'
                onClick={() => setOpenModal(false)}>
                x
            </div>
            <form className='p-7 flex flex-col bg-black/60 rounded-lg' onSubmit={handleSubmit}>
                <Input
                    label='Booking Date'
                    type='date'
                    name='bookingDate'
                    className='text-black'
                    value={formInput.bookingDate}
                    onChange={handleChange}
                />
                <Input
                    label='Start Time : '
                    type='time'
                    name='startTime'
                    className='text-black'
                    placeholder='Enter your email'
                    value={formInput.startTime}
                    onChange={handleChange}
                />
                <Input
                    label='End Time :'
                    type='time'
                    name='endTime'
                    className='text-black'
                    placeholder='Enter you password'
                    value={formInput.endTime}
                    onChange={handleChange}
                />
                <Input
                    label='Total Amount :'
                    type='number'
                    name='totalAmount'
                    className='text-black'
                    placeholder='in INR /-'
                    value={formInput.totalAmount}
                    onChange={handleChange}
                />
                {
                    error && <span className='mt-2 text-red-400 font-medium text-center'>{error}</span>
                }
                <div className='mt-5 flex justify-center'>
                    <button type='submit' className='px-8 py-2 bg-green-500 rounded-lg'>
                        {loading ? 'Booking...' : 'Book'}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default BookingForm
