// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);


function Carrusel() {
    
    const container = useRef();
    

    const rotateDisc =
    useGSAP(
        () => {
            
            gsap.to('.disco', {rotation:45})
             // <-- automatically reverted
        },
        { scope: container }
    ); // <-- scope
    return (
        <div className="w-full overflow-clip relative flex justify-center items-center h-[400px] border-2 border-purple-300">
            <section ref={container}>
                <button onClick={ rotateDisc } className='rounded-full bg-slate-500 font-medium text-white'>toggle</button>
                <img  className=' disco absolute top-1/2 -left-[230px] size-[450px] object-cover'  src="src\assets\images\disco.png" alt="" />
            </section>
        </div>
    )
}

export default Carrusel
