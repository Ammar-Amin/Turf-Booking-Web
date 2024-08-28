import React from 'react'

const Loader = () => {
    return (
        <div className='w-full h-[400px] flex justify-center items-center'>
            <div className="loader">
                <span className='loading-text'>Loading...</span>
                <div className="loading"></div>
            </div>
        </div>

    )
}

export default Loader
