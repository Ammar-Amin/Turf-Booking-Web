import React from 'react'
import map from '@/assets/india-map.png'
import { WEBSITE_NAME } from '@/constant'

const Section2 = () => {
    return (
        <section className='bg-slate-900'>
            <div className='uppercase text-green-400 p-6 py-10 md:pt-16 md:text-center'>
                <h2 className='md:text-lg md:mb-2 lg:text-xl'>{WEBSITE_NAME} has</h2>
                <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold'>
                    Presence in 150+ Cities Across India
                </h1>
                <h3 className='md:text-lg md:mt-3 lg:text-xl lg:mt-5'>
                    JOIN WITH THE LARGEST SPORTS GROUND MANAGEMENT SOLUTION
                </h3>
            </div>
            <img src={map} className='w-full lg:w-1/2 mx-auto' />
        </section>
    )
}

export default Section2
