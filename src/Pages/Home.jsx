import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Home = () => {
    return (
        <div className='bg-black w-full h-full flex flex-col relative'>
            <div className='absolute  top-0 z-20 w-full'>
                <Navbar/>
            </div>
            <div className=''>
                <Hero/>

            </div>
        </div>
    )
}

export default Home
