import { TurfForm } from '@/components'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const UpdateTurf = () => {
    const { id } = useParams()
    let data;

    async function getTurf() {
        try {
            const res = await axios.get(
                `${import.meta.env.VITE_BASE_API}/api/turf/${id}`
            )

            if (res) {
                data = res
            }
        } catch (err) {
            console.log(err.response?.data ?? "Error Editing Turf")
        }
    }

    useEffect(() => {
        getTurf()
    }, [id])

    return (
        <div>
            <TurfForm data={data} />
        </div>
    )
}

export default UpdateTurf
