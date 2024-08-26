import { TurfCard } from '@/components'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AllTurfs = () => {
    const [loading, setLoading] = useState(false)
    const [allTurfs, setAllTurfs] = useState([])

    async function getAllTurfs() {
        setLoading(true)
        try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_API}/api/turf`)
            // console.log(res)
            if (res) {
                setAllTurfs(res.data)
            }
            setLoading(false)
        } catch (err) {
            setLoading(false)
            console.log(err)
        }
    }

    useEffect(() => {
        getAllTurfs()
    }, [])

    return (
        <section className='w-full min-h-screen py-16'>
            <h1 className='mt-8 mb-1 md:mt-12 text-center text-2xl md:text-4xl lg:text-6xl'>Find and Book Your Perfect Turf</h1>
            {
                loading
                    ? <h1>Loading...</h1>
                    : <div className='flex flex-wrap justify-center items-center gap-4'>
                        {
                            allTurfs.length > 0 &&
                            allTurfs.map((turf, i) => {
                                return <TurfCard turf={turf} key={i} />
                            })
                        }
                    </div>
            }
        </section>
    )
}

export default AllTurfs
