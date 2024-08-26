import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <div className="w-screen min-h-screen bg-[#fafafa] flex flex-col justify-center items-center gap-8 p-5">
                <img src="/Assets/Global/404.png" alt="404" className='h-[50vh]' />
                <p className='max-w-lg text-center'>Looks like we are missing some page, or you typed somethig wrong in the URL, heres a way to get back ↓</p>
                <Link to={"/home"}>
                    <Button className="border-2 border-blue bg-blue text-white hover:bg-transparent hover:text-blue">Back to Home</Button>
                </Link>
            </div>
        </>
    )
}

export default Error