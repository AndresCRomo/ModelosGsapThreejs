
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ModelView from "./ModelView";

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';



function Carrusel() {
    

    useGSAP(()=>{
        gsap.to('#heading' ,{ opacity:1,delay:1.5,y:-30})
    })

        
    return (
        <div className='w-full h-full flex justify-center items-center '>
            <h1 id='heading' className=' opacity-0 font-raleway text-white font-bold text-[18px] '>Conoce Nuestras Clases</h1>
            <div className="flex flex-col items-center mt-5">
                <div className="w-full h-[75vh] md:[90vh] overflow-hidden  relative">
                    <Canvas className="w-full h-full ">
                        <Suspense fallback={null}>
                            <ModelView/>
                        </Suspense>

                    </Canvas>
                </div>

            </div>
        </div>
    )
}

export default Carrusel
