import { WEBSITE_NAME } from '@/constant'
import React from 'react'
import { useSelector } from 'react-redux'
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


const Header = () => {

    const authStatus = useSelector(state => state.auth.status)
    console.log(authStatus)


    const navItems = [
        {
            title: 'Book Now',
            route: '/booking',
            active: !authStatus,
        },
        {
            title: 'Login',
            route: '/login',
            active: !authStatus,
        },
        {
            title: 'Book Now',
            route: '/booking',
            active: authStatus,
        },
        {
            title: 'Account',
            route: '/account',
            active: authStatus,
        },
    ]

    return (
        <header className='w-full bg-gray-900 text-white'>
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
