// eslint-disable-next-line no-unused-vars
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import vinil from'../assets/VinylRecords/vinilo.png'





function Carrusel() {
    
    useGSAP(()=>{
        gsap.to('#heading' ,{ opacity:1,delay:1.5,y:-30})
        gsap.to('#disco' ,{ rotate:360,repeat:-1,duration:10})
    })

        
    return (
        <div className='w-full h-full flex flex-col justify-center items-center '>
            <h1 id='heading' className=' opacity-0 font-raleway text-white font-bold text-[18px] '>Conoce Nuestras Clases</h1>

            <div className="flex w-full h-[60vh] bg-slate-300 relative">
                <img id="disco" className="size-[400px] object-cover absolute -left-[200px]"  src={vinil} alt="" />
            </div>
            
        </div>
    )
}

export default Carrusel