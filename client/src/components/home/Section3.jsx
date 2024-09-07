import React from 'react'
import Box from './Box'
import { Link } from 'react-router-dom'

const Section3 = () => {
    return (
        <section className='w-full py-10'>
            <div className='p-3 text-center'>
                <h1 className='font-semibold text-3xl md:text-4xl lg:text-6xl'>Why Choose Use ?</h1>
                <div className='my-7 w-full max-w-5xl mx-auto flex flex-col gap-4 md:flex-row'>
                    <Box
                        head="Easy Online Booking: "
                        span="Reserve your turf in just a few clicks."
                    />
                    <Box
                        head="Flexible Timing:"
                        span="Choose the time that suits you best."
                    />
                    <Box
                        head="Top-Notch Facilities:"
                        span="Book only the best, well-maintained turfs."
                    />
                </div>
                <Link to='/booking'>
                    <div className='pt-7 md:pt-3 font-bold text-lg lg:text-2xl text-green-800 underline'>
                        Book Now and Get Ready to Play!
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Section3
