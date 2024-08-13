// eslint-disable-next-line no-unused-vars
import gsap from "gsap";
import { useGSAP } from "@gsap/react";






function Carrusel() {
    
    useGSAP(()=>{
        gsap.to('#heading' ,{ opacity:1,delay:1.5,y:-30})
    })

        
    return (
        <div className='w-full h-full flex justify-center items-center '>
            <h1 id='heading' className=' opacity-0 font-raleway text-white font-bold text-[18px] '>Conoce Nuestras Clases</h1>
        </div>
    )
}

export default Carrusel
