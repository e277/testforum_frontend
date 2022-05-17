import React from 'react'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Landing = () => {
    return (
        <>
            <header className="bg-white pattern min-h-screen">
                <div className="container px-6 mx-auto">

                    <Navbar />

                    <div className="container bg-slate-100 mx-auto flex justify-center w-full h-screen px-4 text-gray-700">
                        <div className="flex w-full max-w-screen-lg">
                            <Sidebar />
                            <Main />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Landing