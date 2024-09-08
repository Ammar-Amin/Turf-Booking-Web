import React, { useEffect, useState } from 'react'
import Row from './Row'
import axios from 'axios'

const Table = () => {
    const [data, setData] = useState([])

    async function getBookings() {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_API}/api/booking`)
            if (res) {
                // console.log(res)
                setData(res.data)
            }
        } catch (err) {
            console.log(err.response)
        }
    }

    const deleteBooking = async (id) => {
        try {
            const res = await axios.delete(`${import.meta.env.VITE_BASE_API}/api/booking/${id}`)
            if (res) {
                // console.log(res.data)
                getBookings()
            }
        } catch (err) {
            console.log(err.response)
        }
    }

    useEffect(() => {
        getBookings()
    }, [])

    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100 text-sm font-normal text-left text-gray-600">
                <tr>
                    <th
                        scope="col"
                        className="px-4 py-3.5"
                    >
                        <span className='ml-3'>@</span>
                        <span className='ml-10'>Turf Details</span>
                    </th>
                    <th
                        scope="col"
                        className="px-12 py-3.5"
                    >
                        User's Name
                    </th>

                    <th
                        scope="col"
                        className="px-4 py-3.5"
                    >
                        Payment
                    </th>

                    <th
                        scope="col"
                        className="px-4 py-3.5"
                    >
                        Total
                    </th>
                    <th scope="col" className="relative px-4 py-3.5">
                        <span className="">Action</span>
                    </th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
                {data.length > 0 && data.map((obj) => (
                    <Row key={obj._id} obj={obj} deleteBooking={deleteBooking} />
                ))}
            </tbody>
        </table>
    )
}

export default Table
