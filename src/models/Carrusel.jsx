// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useRef,useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


gsap.registerPlugin(useGSAP);


function Carrusel() {
    

    

    const disco = useRef();
    const [toggle, setToggle] = useState(0);

    useGSAP(
        () => {
            
            gsap.to(disco.current, {rotate: toggle, duration: .5, ease: 'none'});
             // <-- automatically reverted
        },
        
    [toggle]); // <-- scope

        
    return (
        <div className="w-full overflow-clip relative flex justify-center items-center h-[400px] border-2 border-purple-300">
            
                <button onClick={()=> setToggle(toggle + 45)}  className='rounded-full bg-slate-500 font-medium text-white'>toggle</button>
                <div ref={disco} className=' disco absolute   left-[230px] size-[420px]  rounded-full flex items-center justify-center  border-[2px]'
                style={{
                    background: "radial-gradient(circle, #0c0c0c ,#2e2e2e )",
                }}
                alt="">
                    <div className='absolute '>
                        <div className=' size-[380px] ' 
                        style={{
                            border: "3px solid transparent",
                            borderTopColor:"#3b3b3b",
                            borderRadius: "80%",
                            transform: "rotate(-205deg)",
                        }}
                        ></div>
                    </div>
                    <div className='absolute '>
                        <div className=' size-[340px] ' 
                        style={{
                            border: "3px solid transparent",
                            borderTopColor:"#3b3b3b",
                            borderRadius: "80%",
                            transform: "rotate(105deg)",
                        }}
                        ></div>
                    </div>
                    <div className='absolute '>
                        <div className=' size-[360px] ' 
                        style={{
                            border: "3px solid transparent",
                            borderTopColor:"#3b3b3b",
                            borderRadius: "80%",
                            transform: "rotate(85deg)",
                        }}
                        ></div>
                    </div>
                    <div className='absolute '>
                        <div className=' size-[375px] ' 
                        style={{
                            border: "3px solid transparent",
                            borderTopColor:"#3b3b3b",
                            borderRadius: "80%",
                            transform: "rotate(-28deg)",
                        }}
                        ></div>
                    </div>
                    <div className='absolute '>
                        <div className=' size-[345px] ' 
                        style={{
                            border: "3px solid transparent",
                            borderTopColor:"#3b3b3b",
                            borderRadius: "80%",
                            transform: "rotate(-68deg)",
                        }}
                        ></div>
                    </div>
                    <div className='absolute '>
                        <div className=' size-[325px] ' 
                        style={{
                            border: "3px solid transparent",
                            borderTopColor:"#3b3b3b",
                            borderRadius: "80%",
                            transform: "rotate(-98deg)",
                        }}
                        ></div>
                    </div>
                    <div className='absolute '>
                        <div className=' size-[275px] ' 
                        style={{
                            border: "3px solid transparent",
                            borderTopColor:"#3b3b3b",
                            borderRadius: "1000%",
                            transform: "rotate(28deg)",
                        }}
                        ></div>
                    </div>
                    <div className='absolute '>
                        <div className=' size-[295px] ' 
                        style={{
                            border: "3px solid transparent",
                            borderTopColor:"#3b3b3b",
                            borderRadius: "1000%",
                            transform: "rotate(128deg)",
                        }}
                        ></div>
                    </div>
                <div className=' bg-[#d4f361] size-[100px] rounded-full text-white font-bold text-2xl text-center flex justify-center items-center'> MCLOVIN ROLLS</div>
                </div>
        </div>
    )
}

export default Carrusel
