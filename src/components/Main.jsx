import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Main = () => {

    const [testimonies, setTestimonies] = useState([])

    const fetchTestimonies = async () => {
        await axios.get('/sanctum/csrf-cookie').then(() => {

            axios.get('/api/testimonies').then((response) => {
                console.log(response.data)
            }).then((response) => {
                setTestimonies(response.data)
            }).catch((error) => {
                console.log(error)
            })
        })
    }

    useEffect(() => {
        fetchTestimonies()
    }, [testimonies])


    return (
        <>
            <div className="flex flex-col flex-grow border-l border-r border-gray-300 mt-16">
                <div className="flex justify-between flex-shrink-0 px-8 py-4 border-b border-blue-300">
                    <h1 className="text-xl font-semibold">Home</h1>
                    <Link to='/login' className="flex items-center h-8 px-2 text-sm bg-gray-300 rounded-sm hover:bg-gray-400">Share Testimony</Link>
                </div>
                <div className="flex-grow overflow-auto">
                    {testimonies && (
                        testimonies.map((testimony, index) => (

                            <div key={index} className="flex w-full p-8 border-b border-gray-300">
                                <span className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
                                <div className="flex flex-col flex-grow ml-4">
                                    <div className="flex">
                                        <span className="font-semibold">{testimony?.test_title}</span>
                                        {/* <span className="ml-auto text-sm">{testimony.created_at}</span> */}
                                        <span className="ml-auto text-sm">
                                            {moment.utc(testimony?.created_at).local().startOf('seconds').fromNow()}
                                        </span>
                                    </div>
                                    <p className="mt-1">{testimony?.test_body}</p>
                                    <div className="flex mt-2">
                                        <span className="text-sm font-semibold">Username</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    )
}

export default Main