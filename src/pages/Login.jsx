// import axios from 'axios'
import axios from 'axios'
import React, { useState } from 'react'
import {
    Link,
    useNavigate
} from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [errors, setErrors] = useState('')

    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()

        const data = { email, password }

        await axios.get('/sanctum/csrf-cookie').then(() => {

            // Login
            axios.post('/api/login', data).then((response) => {
                localStorage.setItem('user_token', response.data.user_token)
                console.log(`User Token:`, response.data.user_token);
            })
        })

        navigate('/testimony')
    }

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
                            <form className="my-12 w-full" onSubmit={handleLogin}>
                                <div>
                                    <label htmlFor='email' className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="john.doe@company.com"
                                        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                    />
                                </div>
                                <div>
                                    <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="********"
                                        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                    />
                                </div>

                                <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                                    Login
                                </button>
                                <p>Don't have an account? <Link to='/register' className='font-bold underline'>Sign Up</Link></p>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login