import { TurfForm } from '@/components'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateTurf = () => {
    const { id } = useParams()
    const [data, setData] = useState(null)

    async function getTurf() {
        try {
            const res = await axios.get(
                `${import.meta.env.VITE_BASE_API}/api/turf/${id}`
            )

            if (res) {
                console.log(res.data)
                setData(res.data)
            }
        } catch (err) {
            console.log(err.response?.data ?? "Error Editing Turf")
        }
    }

    useEffect(() => {
        getTurf()
    }, [id])

    if (!data) return <div className='h-[400px] flex justify-center items-center'>
        <span>
            Loading
        </span>
    </div>

    return (
        <div>
            {data && <TurfForm data={data} />}
        </div>
    )
}

export default UpdateTurf
