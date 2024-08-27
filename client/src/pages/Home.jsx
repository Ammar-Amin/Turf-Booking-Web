import { Section1, Section2, Section3 } from '@/components/home'
import React from 'react'


const Home = () => {
    return (
        <main className='w-full min-h-screen bg-green-300'>
            <Section1 />
            <Section2 />
            <Section3 />
        </main>
    )
}

export default Home