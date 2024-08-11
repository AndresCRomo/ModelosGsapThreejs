import React from 'react'
import gsap from 'gsap'
import video from '../assets/videos/floordanceBG.mp4'
import { useGSAP } from '@gsap/react'


const Hero = () => {
    useGSAP(()=>{
        gsap.to('#hero' ,{ opacity:1,delay:1.5,y:-30})
        gsap.to('#boton' ,{ opacity:1,delay:1.5, y:10})
    })

    return (
        <section className='w-full relative '>
            <div className=' absolute top-[180px] h-5/6 w-full flex items-center flex-col '>
                <div className=' rounded-t-xl h-[240px]  justify-center  z-20 flex flex-col'>
                    <div className='flex flex-row '>
                    <p id='hero' className='  leading-none font-raleway text-white text-[80px] font-extrabold opacity-0 '>Aprende a </p>
                    <p id='hero' className='  leading-none font-raleway text-white decoration-primary underline-offset-1 underline text-[80px] font-extrabold opacity-0 ml-3'>Bailar </p>
                    <p id='hero' className='  leading-none font-raleway text-white text-[80px] font-extrabold opacity-0 '>,</p>

                    </div>
                    <p id='hero' className=' leading-none font-raleway text-white text-[80px] font-extrabold opacity-0 '>Con Estilo</p>
                    <button id="boton"className='w-fit -mt-6 rounded-lg hover:bg-primary hover:font-bold hover:text-secondary opacity-0  border-2 transition-all ease-in-out  border-primary text-white px-5 py-2 font-raleway'>Reservar Clase Muestra</button>
                </div>
            </div>
            <video src={video} autoPlay muted loop className=' pointer-events-none'>

            </video>
        </section>
    ) 
}

export default Hero
