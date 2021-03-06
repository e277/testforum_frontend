import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Navbar = () => {

    let AuthButtons = ''

    return (
        <>
            <nav className="absolute top-0 left-0 w-full flex flex-col bg-slate-700 py-4 px-8 sm:flex-row sm:justify-between sm:items-center">
                <div>
                    <Link to="/" className="text-2xl font-semibold text-white hover:text-gray-300">Apostle Fellowship</Link>
                </div>

                <div className="flex items-center justify-center mt-2 -mx-2 sm:mt-0">

                    if(!localStorage.getItem('user_token')) {
                        AuthButtons = (
                            <div>
                                <Link to="/login"
                                    className="px-3 py-1 text-sm font-semibold text-white transition-colors duration-200 transform border-2 rounded-md hover:bg-gray-700"
                                >Login</Link>

                                <Link to="/register"
                                    className="px-3 py-2 mx-2 text-sm font-semibold text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-gray-800"
                                >Register</Link>
                            </div>
                        )

                    } else {
                        AuthButtons = (
                            <button type="button"
                                className="flex items-center justify-center px-3 py-2 mx-2 text-sm font-semibold text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-gray-800"
                            >Logout<AiOutlineArrowRight className='ml-1' /></button>
                        )
                    }


                </div>
            </nav>
        </>
    )
}

export default Navbar