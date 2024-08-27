import React from 'react'

const Box = ({ head, span }) => {
    return (
        <div className='w-[300px] p-10 md:p-7 mx-auto bg-white/20 rounded-lg md:mt-5'>
            <h4 className='font-medium text-lg lg:text-xl'>{head}</h4>
            <span className='lg:text-lg'>{span}</span>
        </div>
    )
}

export default Box
