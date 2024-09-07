import React from 'react'

const Row = ({ obj, deleteBooking }) => {

    return (
        <tr>
            <td className="whitespace-nowrap px-4 py-4">
                <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                        <img
                            className="h-10 w-10 rounded-full object-cover"
                            src={obj.turf.imageUrls[0]}
                            alt=""
                        />
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{obj.turf.name}</div>
                        <div className="text-sm text-gray-700">{obj.turf.location.address}</div>
                    </div>
                </div>
            </td>
            <td className="whitespace-nowrap px-12 py-4">
                <div className="text-sm text-gray-900 ">{obj.user.name}</div>
                <div className="text-sm text-gray-700">{obj.user.email}</div>
            </td>
            <td className="whitespace-nowrap px-4 py-4">
                <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                    {obj.paymentStatus}
                </span>
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                {obj.turf.pricePerHour}
            </td>
            <td className="whitespace-nowrap text-right text-sm font-medium">
                <span onClick={() => deleteBooking(obj._id)} className="text-gray-700 px-4 py-4 hover:underline cursor-pointer">
                    Delete
                </span>
            </td>
        </tr>
    )
}

export default Row
