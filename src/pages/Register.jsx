// import axios from 'axios';
import axios from 'axios'
import React, { useState } from 'react'
import {
    Link,
    useNavigate
} from 'react-router-dom'


const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const handleRegistration = async (e) => {
        e.preventDefault();

        localStorage.setItem('name', name)
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)

        await axios.get('/sanctum/csrf-cookie').then(() => {

            // Register...
            const record = { name, email, password };

            axios.post('/api/register', record).then((response) => {
                console.log(response.data)
            })
        });

        navigate('/register')
    }

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

                            <form className="my-12 w-full" onSubmit={handleRegistration}>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 uppercase">Username</label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Jane Doe"
                                        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                    />
                                    {/* <span>{errors.name}</span> */}
                                </div>
                                <div>
                                    <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="john.doe@company.com"
                                        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                    />
                                    {/* <span>{errors.email}</span> */}
                                </div>
                                <div>
                                    <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="********"
                                        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                    />
                                    {/* <span>{errors.password}</span> */}
                                </div>

                                <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
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