import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const AdminProtected = () => {
    const { user } = useSelector(state => state.auth)
    console.log(user)
    return user?.isAdmin ? <Outlet /> : <Navigate to='/booking' />
}

export default AdminProtected