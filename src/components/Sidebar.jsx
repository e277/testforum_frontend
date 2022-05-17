import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div className="flex flex-col w-64 py-4 pr-3">
                <Link to="/" className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300">Home</Link>
                <Link to="/testimonial" className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300">Testimonials</Link>
                {/* <Link to="/tithe" className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300">Tithes</Link> */}

                <div className="flex items-center justify-start px-3 py-2 mt-auto text-lg rounded-sm font-medium hover:bg-gray-200">
                    <span className="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full"></span>
                    <div className="flex flex-col ml-2">
                        <span className="mt-1 text-sm font-semibold leading-none">Username</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar