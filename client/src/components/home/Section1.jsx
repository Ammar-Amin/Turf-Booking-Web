import React from 'react'
import banner from '@/assets/sports-banner.png'
import { WEBSITE_NAME } from '@/constant'
import { Link } from 'react-router-dom'

const Section1 = () => {
    return (
        <section className='w-full h-screen flex flex-col'>
            <div className='mt-auto pt-28 lg:pt-32 pb-10 px-6 md:text-center'>
                <div className='my-auto'>
                    <h1 className='mb-2 md:mb-5 xl:mb-8 font-medium text-3xl md:text-5xl xl:text-7xl'>Secure your turf pitch today!
                    </h1>
                    <div className='xl:text-xl'>
                        Browse our available times and locations, and book your next game on {" "}
                        <span className='font-medium'>
                            {WEBSITE_NAME}.
                        </span>
                        <div className='hidden md:block'> Book your perfect turf pitch in just a few clicks.</div>
                    </div>

                    <Link to='/booking'>
                        <button className='mt-2 md:mt-5 text-white font-bold text-[14px] lg:text-base bg-green-500 px-6 py-2 rounded-lg hover:opacity-90'>Explore</button>
                    </Link>
                </div>
            </div>
            <div className='mt-auto'>
                <img src={banner} alt='Sports Banner'
                    className='w-full h-[300px] md:h-[350px] lg:h-[450px] object-cover'
                />
            </div>
        </section>
    )
}

export default Section1
