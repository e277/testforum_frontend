import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

const Testimonial = () => {

    const BACKEND_URL = `http://127.0.0.1:8000/api/`
    const [title, setTitle] = useState('')
    const [type, setType] = useState('')
    const [body, setBody] = useState('')


    const handleTestimonies = async (e) => {
        e.preventDefault()

        console.log(title)
        console.log(type)
        console.log(body)

        localStorage.setItem('test_title', title)
        localStorage.setItem('type', type)
        localStorage.setItem('test_body', body)

        fetch(`${BACKEND_URL}sanctum/csrf-cookie`).then(() => {

            fetch(`${BACKEND_URL}testimonies`, {
                method: 'POST',
                body: JSON.stringify({
                    test_title: localStorage.getItem('test_title'),
                    type: localStorage.getItem('type'),
                    test_body: localStorage.getItem('test_body'),
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }).then((response) => response.json())
                .then((json) => console.log(json))
                .catch((err) => console.log(err))
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        // Save the testimony
        handleTestimonies()
    }, [])




    const OPTIONS = [
        { value: 'overcome', label: 'Overcome' },
        { value: 'salvation', label: 'Salvation' },
        { value: 'faith', label: 'Faith' },
        { value: 'fear', label: 'Fear' }
    ]

    //   const MyComponent = () => (
    //     <Select options={options} />
    //   )


    return (
        <>
            <Navbar />
            <div className="flex w-[700px] mx-auto bg-slate-300 mt-24 p-8 border-b-4 border-gray-300 rounded-md shadow-lg">
                <form onSubmit={handleTestimonies} className="flex flex-col flex-grow ml-4 space-y-8">
                    <div className='flex flex-col'>
                        <label>Testimony Title</label>
                        <input
                            type="text"
                            name="test_title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder='Testimony Title'
                            className='p-3 bg-white border border-slate-500 rounded-sm'
                        />
                    </div>
                    <div className="flex flex-col">
                        <label>Testimony Type</label>
                        <select name="type" value={type} onChange={(e) => setType(e.target.value)} className='p-3 bg-white border border-slate-500 rounded-sm'>
                            <option value="">Please select</option>
                            {OPTIONS.map(choice => (
                                <option key={choice.value}>
                                    {choice.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label>Testimony</label>
                        <textarea
                            name="test_body"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            placeholder="Share your testimony"
                            className="w-full p-3 bg-white border border-slate-500 rounded-sm"
                        >{body}</textarea>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <input
                            type='file'
                            name='image'
                            className="py-3 text-xs rounded-sm"
                        />
                        <button
                            type='submit'
                            className="p-3 text-sm rounded-md bg-slate-900 text-white shadow-2xl hover:shadow-none hover:bg-slate-400"
                        >
                            Post Testimony
                        </button>
                    </div>
                </form >
            </div >
        </>
    )
}

export default Testimonial
