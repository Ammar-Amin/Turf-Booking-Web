import { WEBSITE_NAME } from '@/constant'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RiMenu3Line } from "react-icons/ri";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import axios from 'axios';
import { login } from '@/store/slice/authSlice';


const Header = () => {

    const { status, user } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const navItems = [
        {
            title: 'Explore',
            route: '/booking',
            active: !status,
        },
        {
            title: 'Login',
            route: '/login',
            active: !status,
        },
        {
            title: 'Explore',
            route: '/booking',
            active: status,
        },
        {
            title: 'Create Turf',
            route: '/create-turf',
            active: user?.isAdmin,
        },
        {
            title: 'Account',
            route: '/account',
            active: status,
        },
    ]

    useEffect(() => {
        async function checkUserAuthStatus() {
            try {
                let res = await axios(`${import.meta.env.VITE_BASE_API}/api/auth/`)
                // console.log(res)
                if (res.status == 200) {
                    dispatch(login(res.data))
                }
            } catch (error) {
                console.log(error.response.data.message)
            }
        }
        checkUserAuthStatus()
    }, [])

    return (
        <header className='fixed top-0 z-50 w-full bg-gray-900 text-white'>
            <div className='max-w-[80rem] mx-auto flex justify-between items-center px-4 py-6'>
                <Link to='/' className='text-lg md:text-xl hover:text-slate-200'>{WEBSITE_NAME}</Link>

                {/* MOBILE  */}
                <div className='md:hidden'>
                    <Sheet>
                        <SheetTrigger>
                            <span className='text-xl'>
                                <RiMenu3Line />
                            </span>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle></SheetTitle>
                                <SheetDescription>
                                    <SheetClose asChild>
                                        <span className="h-full flex flex-col gap-4 pt-6 ">
                                            {navItems.map((item) => (item.active &&
                                                <SheetClose key={item.title} asChild>
                                                    <Link key={item.title} to={item.route}
                                                        className='p-2 border text-white font-medium'
                                                    >
                                                        {item.title}
                                                    </Link>
                                                </SheetClose>
                                            ))}
                                        </span>
                                    </SheetClose>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* TABS & LAPTOPS  */}
                <div className='hidden md:block'>
                    <span className="h-full flex gap-4">
                        {navItems.map((item) => (item.active &&
                            <Link key={item.title} to={item.route} className='hover:underline'>
                                {item.title}
                            </Link>
                        ))}
                    </span>
                </div>

            </div>
        </header>
    )
}

export default Header
