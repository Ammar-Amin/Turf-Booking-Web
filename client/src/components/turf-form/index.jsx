import React, { useState } from 'react'
import Input from '../input'

const TurfForm = ({ data }) => {

    const [formData, setFormData] = useState({
        name: data?.name || '',
        desc: data?.desc || '',
        location: {
            address: data?.location?.address || '',
            city: data?.location?.city || '',
            state: data?.location?.state || '',
            pincode: data?.location?.pincode || '',
        },
        pricePerHour: data?.pricePerHour || '',
        openingTime: data?.openingTime || '',
        closingTime: data?.closingTime || '',
        imageUrls: data?.imageUrls || [],
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: [e.target.value]
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
    }


    return (
        <section className='w-full min-h-screen px-3 flex items-center justify-center'>
            <div className='md:w-[500px] lg:w-[700px] p-5 md:p-10 flex flex-col border bg-green-200 rounded-lg mt-28 mb-10'>

                <h2 className="my-4 text-center text-2xl lg:text-3xl font-bold leading-tight">{
                    data ? "Update your Turf" : "List a new Turf"
                }</h2>

                <form className='mt-3 flex flex-col lg:flex-row lg:gap-4' onSubmit={handleSubmit}>
                    <div className='flex flex-col lg:w-1/2'>
                        <Input
                            label='Turf Name'
                            name='name'
                            placeholder="Enter the Turf's name"
                            onChange={handleChange}
                        />
                        <div>
                            <label className='block mt-2 ml-2 mb-1'>Description</label>
                            <textarea
                                type='text'
                                name='desc'
                                rows='3'
                                placeholder='Enter the Description'
                                className='w-full rounded-lg px-4 py-2 outline-none'
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className='block mt-2 ml-2 mb-1'>Address</label>
                            <textarea
                                type='text'
                                name='location.address'
                                rows='2'
                                placeholder='Enter the Address'
                                className='w-full rounded-lg px-4 py-2 outline-none'
                                onChange={handleChange}
                            />
                        </div>
                        <Input
                            label='City'
                            name='location.city'
                            onChange={handleChange}
                        />
                        <Input
                            label='State'
                            name='location.state'
                            onChange={handleChange}
                        />
                        <Input
                            label='Pincode'
                            type='number'
                            name='location.pincode'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex flex-col lg:w-1/2'>
                        <Input
                            label='Price Per Hour'
                            type='number'
                            name='pricePerHour'
                            placeholder='INR only /-'
                            onChange={handleChange}
                        />
                        <Input
                            label='Opening Time'
                            name='openingTime'
                            placeholder='12 hour format'
                            onChange={handleChange}
                        />
                        <Input
                            label='Closing Time'
                            name='closingTime'
                            placeholder='12 hour format'
                            onChange={handleChange}
                        />
                        <Input
                            type='file'
                        />
                        <div className='mt-5 flex justify-center'>
                            <button type='submit' className='px-8 py-2 bg-green-400 rounded-lg'>
                                {
                                    data ? 'Update' : 'Submit'
                                }
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default TurfForm
