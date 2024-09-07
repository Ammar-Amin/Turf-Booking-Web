import React from 'react'
import map from '@/assets/india-map.png'
import { WEBSITE_NAME } from '@/constant'

const Section2 = () => {
    return (
        <section className='w-full min-h-screen bg-slate-900 flex items-center'>
            <div className='md:pt-10'>
                <div className='uppercase text-green-400 p-6 py-10 md:pt-16 md:text-center'>
                    <h2 className='text-lg md:text-2xl md:mb-2 lg:text-3xl'>{WEBSITE_NAME} has</h2>
                    <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold my-3'>
                        Presence in 150+ Cities Across India
                    </h1>
                    <h3 className='md:text-lg md:mt-3 lg:text-xl lg:mt-5'>
                        JOIN WITH THE LARGEST SPORTS GROUND MANAGEMENT SOLUTION
                    </h3>
                </div>
                <img src={map} className='w-full lg:w-1/2 mx-auto mt-auto' />
            </div>
        </section>
    )
}

export default Section2
