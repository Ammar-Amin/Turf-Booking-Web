import { TurfForm } from '@/components'
import React from 'react'
import { useParams } from 'react-router-dom'

const UpdateTurf = () => {
    const { id } = useParams()
    // id se turf k data fetch krna h 
    return (
        <div>
            <TurfForm data='1' />
        </div>
    )
}

export default UpdateTurf
