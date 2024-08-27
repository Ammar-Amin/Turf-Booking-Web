import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const TurfCard = ({ turf }) => {
    const user = useSelector(state => state.auth.user)
    const isAdmin = user?.isAdmin
    return (
        <div className="mx-4 mt-4 md:mt-8 w-[300px] rounded-lg border-[1px] border-green-600">
            <img
                src={turf.imageUrls[0]}
                alt={turf.imageUrls[0]}
                className="h-[200px] w-full rounded-t-lg object-cover"
            />
            <div className="p-4 bg-[#cdffd5] overflow-hidden rounded-b-lg">
                <h1 className="text-lg font-semibold">{turf.name}</h1>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {turf.desc}
                </p>
                <Link to={`/turf/${turf._id}`}>
                    <button
                        type="button"
                        className="mt-3 rounded-sm bg-green-600 px-3 py-1 text-[12px] font-semibold text-white shadow-sm hover:bg-green-500"
                    >
                        Book Now
                    </button>
                </Link>
                {
                    isAdmin
                    &&
                    <>
                        <Link to={`/update-turf/${turf._id}`}>
                            <button
                                type="button"
                                className="mt-3 ml-[34px] rounded-sm bg-blue-500 px-3 py-1 text-[12px] font-semibold text-white shadow-sm hover:opacity-80"
                            >
                                Edit
                            </button>
                        </Link>
                        <button
                            type="button"
                            className="mt-3 ml-[34px] rounded-sm bg-red-500 px-3 py-1 text-[12px] font-semibold text-white shadow-sm hover:opacity-80"
                        >
                            Delete
                        </button>
                    </>
                }
            </div>
        </div>
    )
}

export default TurfCard
