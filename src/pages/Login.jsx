import React from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'

const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            console.log(`Formik submit values`, values)
        }
    })
    console.log(`Formik values`, formik.values)

    return (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative">

                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                    {/*header*/}
                    <div className="flex items-center justify-between border-b-4 border-solid border-slate-200 rounded-t p-8">
                        <h3 className="text-3xl font-semibold">
                            Login Form
                        </h3>
                    </div>

                    {/*body*/}

                    <div className="grid max-h-full w-screen place-items-center">
                        <div className="w-full bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">

                            <form
                                className="mt-6 w-full"
                                onSubmit={formik.handleSubmit}
                            >

                                <label htmlFor='email' className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    placeholder="john.doe@company.com"
                                    autoComplete="email"
                                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                />

                                <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    placeholder="* * * * * * * *"
                                    autoComplete="password"
                                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                />

                                <button
                                    type="submit"
                                    className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                                >
                                    Login
                                </button>
                                <p>
                                    Don't have an account? <Link to='/register' className='font-bold underline'>Sign Up</Link>
                                </p>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login