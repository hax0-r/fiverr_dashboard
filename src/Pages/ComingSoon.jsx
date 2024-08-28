import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

const ComingSoon = () => {
    return (
        <>
            <div className="w-screen min-h-screen bg-[#fafafa] flex flex-col justify-center items-center gap-8 p-5">
                <img src="/Assets/Global/comingSoon.png" alt="404" className='h-[30vh]' />
                <p className='max-w-lg text-center'>The feature is under construction. Check back later!</p>
                <Link to={"/home"}>
                    <Button className="border-2 border-blue bg-blue text-white hover:bg-transparent hover:text-blue">Back to Home</Button>
                </Link>
            </div>
        </>
    )
}

export default ComingSoon