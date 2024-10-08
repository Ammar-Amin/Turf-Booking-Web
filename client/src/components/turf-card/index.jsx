import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const TurfCard = ({ turf, deleteTurf }) => {
    const user = useSelector(state => state.auth.user)
    const isAdmin = user?.isAdmin
    return (
        <div className="mx-4 mt-4 md:mt-8 w-[300px] rounded-lg border-[1px] border-green-600">
            <img
                src={turf.imageUrls[0]}
                alt={turf.imageUrls[0]}
                className="h-[200px] w-full rounded-t-lg object-cover"
            />
            <div className="p-4 bg-[#c6ffcf] overflow-hidden rounded-b-lg">
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
                            <AlertDialog>
                                <AlertDialogTrigger>Delete</AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete this turf
                                            and remove turf's data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction>
                                            <button onClick={() => deleteTurf(turf._id)}>
                                                Continue
                                            </button>
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>

                            {/* Delete */}
                        </button>
                    </>
                }
            </div>
        </div>
    )
}

export default TurfCard
