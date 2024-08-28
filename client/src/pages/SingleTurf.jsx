import { BookingForm, Loader } from '@/components'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleTurf = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [turf, setTurf] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [status, setStatus] = useState('Book Now')

    async function getTurf() {
        setLoading(true)
        try {
            const res = await axios.get(
                `${import.meta.env.VITE_BASE_API}/api/turf/${id}`
            )
            // console.log(res)
            setTurf(res.data)
            setLoading(false)
        } catch (error) {
            console.log(error.response)
            setLoading(false)
        }
    }

    useEffect(() => {
        getTurf()
    }, [])

    if (loading) return <div className='min-h-screen flex justify-center items-center'>
        <Loader />
    </div>

    return (
        <section className='w-full min-h-screen relative'>
            {
                turf.length != 0 &&
                <div className='mt-[76px]'>
                    <img src={turf.imageUrls[0]}
                        alt={turf.imageUrls[0]}
                        className='w-full h-[250px] sm:h-[400px] lg:h-[550px] xl:h-[747px] object-cover'
                    />
                    <div className='w-full sm:max-w-xl lg:max-w-2xl xl:max-w-4xl mx-auto p-5 md:py-14 lg:pb-20 flex flex-col gap-4 relative'>
                        <h1 className='text-2xl md:text-4xl lg:text-5xl'>{turf.name}</h1>
                        <p className='text-sm md:text-base lg:text-lg text-slate-700'>{turf.desc}</p>
                        <div className='flex gap-2'>
                            <div>
                                <span>Address : </span>
                                <span>{turf.location.address}, {turf.location.city}, </span>
                                <br />
                                <span>{turf.location.state}, {turf.location.pincode}</span>
                            </div>
                        </div>
                        <span>Price : {turf.pricePerHour} / hr</span>
                        <div className='flex justify-between lg:flex-col lg:gap-2'>
                            <span>Opening Time : {turf.openingTime}</span>
                            <span>Closing Time : {turf.closingTime}</span>
                        </div>
                        <button
                            className="mt-3 block mx-auto rounded-sm bg-green-600 px-8 py-2 md:text-lg font-semibold text-white shadow-sm hover:bg-green-700"
                            disabled={openModal}
                            onClick={() => setOpenModal(!openModal)}
                        >
                            {status}
                        </button>
                        {/* LAPTOP FORM  */}
                        <div className='hidden md:block'>
                            {
                                openModal && <BookingForm
                                    turfId={id}
                                    setOpenModal={setOpenModal}
                                    setStatus={setStatus}
                                />
                            }
                        </div>
                    </div>
                </div>
            }
            {/* MOBILE FORM  */}
            <div className='md:hidden'>
                {
                    openModal && <BookingForm
                        turfId={id}
                        setOpenModal={setOpenModal}
                        setStatus={setStatus}
                    />
                }
            </div>
        </section>
    )
}

export default SingleTurf
