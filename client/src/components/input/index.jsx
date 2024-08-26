import React, { useId } from 'react'

const Input = ({
    label,
    type = 'text',
    className,
    ...props
}) => {
    const id = useId()
    return (
        <div className='my-2'>
            {label && <label htmlFor={id} className='block ml-2 mb-1'>{label}</label>}
            <input
                id={id}
                type={type}
                className={`max-w-lg w-full px-4 py-2 outline-none rounded-lg ${className}`}
                {...props}
                required>
            </input>
        </div>
    )
}

export default Input
