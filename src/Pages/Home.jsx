import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Carrusel from '../components/Carrusel'
const Home = () => {
    return (
        <div className='bg-black w-full h-full flex flex-col '>
            <div className='absolute  top-0 z-20 w-full'>
                <Navbar/>
            </div>
            <div className='flex flex-col gap-3'>
                <div className=' xl:h-[750px] lg:h-[650px] md:h-[450px] h-[350px]  '>
                    <Hero/>
                    <div className='absolute top-[228px] md:top-[330px] lg:top-[450px] xl:top-[550px]  w-full lg:h-[150px] h-[73px] bg-gradient-to-t from-black z-10'></div>
                </div>
                <div>
                    <Carrusel/>
                </div>
            </div>
        </div>
    )
}

export default Home
