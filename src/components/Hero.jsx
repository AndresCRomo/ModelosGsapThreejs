
import gsap from 'gsap'
import video from '../assets/videos/floordanceBG.mp4'
import video2 from '../assets/videos/ejemploBG.mp4'
import { useGSAP } from '@gsap/react'


const Hero = () => {
    useGSAP(()=>{
        gsap.to('#hero' ,{ opacity:1,delay:1.5,y:-30})
        gsap.to('#boton' ,{ opacity:1,delay:1.5, y:10})
    })

    return (
        <section className='w-full  relative'>
            <div className=' absolute top-[40px] md:top-[80px] lg:top-[190px]  w-full flex items-center flex-col  '>
                <div className=' rounded-t-xl h-[240px]  justify-center  z-10 flex flex-col'>
                    <div className='flex flex-row '>
                    <p id='hero' className='  leading-none font-raleway text-white text-[40px] lg:text-[80px] font-extrabold opacity-0 '>Aprende a </p>
                    <p id='hero' className='  leading-none font-raleway text-white text-[40px] lg:text-[80px] decoration-primary underline-offset-1 underline  font-extrabold opacity-0 ml-3'>Bailar </p>
                    <p id='hero' className='  leading-none font-raleway text-white text-[40px] lg:text-[80px] font-extrabold opacity-0 '>,</p>

                    </div>
                    <p id='hero' className=' leading-none font-raleway text-white text-[40px] lg:text-[80px] font-extrabold opacity-0 '>Con Estilo</p>
                    <button  id="boton" className=' w-fit -mt-6 rounded-md bg-primary hover:font-black hover:bg-candy-corn-400 opacity-0 font-bold   transition-all ease-in-out   text-black text-[10px] px-5 py-2 font-raleway active:bg-candy-corn-600  active:text-white ' >Reservar Clase Muestra</button>
                </div>
            </div>
            <video className=' lg:h-[630px] h-[260px] md:h-[380px] w-full object-cover pointer-events-none absolute top-0 z-0' src={video2} autoPlay muted loop >
            </video>
        </section>
    ) 
}

export default Hero
