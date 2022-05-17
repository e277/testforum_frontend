import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

    return (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative">

                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                    {/*header*/}
                    <div className="flex items-center justify-between border-b-4 border-solid border-slate-200 rounded-t p-8">
                        <h3 className="text-3xl font-semibold">
                            Registration Form
                        </h3>
                    </div>

                    {/*body*/}

                    <div className="grid max-h-full w-screen place-items-center">
                        <div className="w-full bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">

                            <form
                                className="mt-6 w-full"
                            // onSubmit={formik.handleSubmit}
                            >

                                <div className="flex justify-between gap-3">
                                    <span className="w-full">
                                        <label className="block text-xs font-semibold text-gray-600 uppercase">Firstname</label>
                                        <input
                                            type="text"
                                            name="firstname"
                                            // value={formik.firstname.value}
                                            // onChange={formik.handleChange}
                                            placeholder="John"
                                            autoComplete="given-name"
                                            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                            required
                                        />
                                    </span>
                                    <span className="w-full">
                                        <label className="block text-xs font-semibold text-gray-600 uppercase">Lastname</label>
                                        <input
                                            type="text"
                                            name="lastname"
                                            // value={formik.lastname.value}
                                            // onChange={formik.handleChange}
                                            placeholder="Doe"
                                            autoComplete="family-name"
                                            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                            required
                                        />
                                    </span>
                                </div>
                                <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    // value={formik.email.value}
                                    // onChange={formik.handleChange}
                                    placeholder="john.doe@company.com"
                                    autoComplete="email"
                                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                    required
                                />

                                <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    // value={formik.password.value}
                                    // onChange={formik.handleChange}
                                    placeholder="********"
                                    autoComplete="new-password"
                                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                    required
                                />

                                <button
                                    type="submit"
                                    className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                                >
                                    Register
                                </button>
                                <p>Already have an account? <Link to='/login' className='font-bold underline'>Login</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register