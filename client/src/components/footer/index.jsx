import { WEBSITE_NAME } from '@/constant'
import React from 'react'

const Footer = () => {
    return (
        <footer className=" bg-gray-900">
            <div className="max-w-2xl mx-auto text-white py-10">
                <div className="text-center">
                    <h3 className="text-3xl mb-3 px-3"> Download our {WEBSITE_NAME} app </h3>
                    <p> Stay fit. All day, every day. </p>
                    <div className="flex flex-col md:flex-row items-center gap-3 justify-center my-10">
                        <div className="flex items-center border w-48 md:w-auto rounded-lg px-4 py-2 mx-2 cursor-pointer">
                            <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8" />
                            <div className="text-left ml-3">
                                <p className='text-xs text-gray-200'>Download on </p>
                                <p className="text-sm md:text-base"> Google Play Store </p>
                            </div>
                        </div>
                        <div className="flex items-center border w-48 md:w-auto rounded-lg px-4 py-2 mx-2 cursor-pointer">
                            <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" />
                            <div className="text-left ml-3">
                                <p className='text-xs text-gray-200'>Download on </p>
                                <p className="text-sm md:text-base"> Apple Store </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-28 flex flex-col items-center text-sm text-gray-400">
                    <ul className="flex items-center justify-center gap-3 md:gap-5 mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            About
                        </li>
                        <li>
                            Privacy Policy
                        </li>
                        <li>
                            Licensing
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 text-center dark:text-gray-400">© 2023 <a href='https://github.com/Ammar-Amin' target='_blank'>{WEBSITE_NAME}™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer
