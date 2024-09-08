import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

import album1 from '../assets/images/clases/Chairdance.jpg';
import album2 from '../assets/images/clases/Combat.jpg';
import album3 from '../assets/images/clases/DanzaContemporanea.jpg';
import album4 from '../assets/images/clases/DanzasPolinesias.jpg';
import album5 from '../assets/images/clases/EntrenamientoFuncional.jpg';
import album6 from '../assets/images/clases/HipHop.jpg';
import album7 from '../assets/images/clases/Kpop.jpg';
import album8 from '../assets/images/clases/KpopKids.jpg';
import album9 from '../assets/images/clases/RitmosLatinos.jpg';
import album10 from '../assets/images/clases/Twerk.jpg';
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function SwipeCard() {

    const [buttonUpDisabled, setButtonUpDisabled] = useState(false);
    const [buttonDownDisabled, setButtonDownDisabled] = useState(false);
    
    const albums = [
        { 
            album: 1, 
            img: album1, 
            title: "CHAIR DANCE",
            horarios:[
            {dia:"Miercoles" ,hora:"7:00 pm a 8:00 pm" }
            ],
        },
        { 
            album: 2,
            img: album2,
            title: "COMBAT",
            horarios:[{
                dia:"Lunes" ,
                hora:"8:00 pm a 9:00 pm" 
            },]
        },
        { 
            album: 3,
            img: album3,
            title: "DANZA CONTEMPORANEA",
            horarios:[{
                dia:"Lunes y Miercoles", 
                hora:"5:30 pm a 7:00 pm" 
            },],
        },
        {   
            album: 4,
            img: album4, 
            title: "DANZAS POLINESIAS",
            horarios:[{
                dia:"Miercoles", 
                hora:"8:00 pm a 9:00 pm" 
                },
                {
                    dia:"Sábados",
                    hora:"10:00 am a 12:00 pm"
                },
            ],
        },
        { 
            album: 5,
            img: album5, 
            title: "ENTRENAMIENTO FUNCIONAL",
            horarios:[{
                dia:"Martes y Jueves",
                hora:"10:00 am a 11:30 am"
            }]
        
        },
        { album: 6,
        img: album6, 
        title: "HIP HOP" , 
        horarios:[{
            dia:"Martes y Jueves", 
            hora:"12:30 pm a 1:30 pm" 
        }]
    },
        { 
            album: 7, 
            img: album7,
            title: "KPOP" ,
            horarios:[{
                dia:"Martes y Jueves", 
                hora:"11:30 am a 12:30 pm"
            },
            {
                dia:"Martes y Jueves",
                hora:"7:00 am a 8:00 pm"
            }
        ]
        },
        {   
            album: 8,
            img: album8,
            title: "KPOP KIDS", 
            horarios:[{
                dia:"Martes y Jueves", 
                hora:"5:00 pm a 6:00 pm" 
            }]
        },
        { 
            album: 9, 
            img: album9, 
            title: "RITMOS LATINOS", 
            horarios:[{
                dia:"Martes y Jueves", 
                hora:"8:00 pm a 9:00 pm"
            }]
        },
        { 
            album: 10, 
            img: album10, 
            title: "TWERK", 
            horarios:[{
                dia:"Lunes y Viernes", 
                hora:"7:00 pm a 8:00 pm" 
            }]
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setButtonDownDisabled(true);

        const nextIndex = (currentIndex + 1) % albums.length;

        gsap.to(`#split${currentIndex}`, {
            duration: 1,
            x: 200,
            opacity: 0,
            onComplete: () => {
                // Actualizar el índice después de la animación
                setCurrentIndex(() => nextIndex);
                // Animación de entrada con pequeño retraso
                gsap.fromTo(
                    `#split${nextIndex}`,
                    {
                        x: 200,
                        opacity: 0,
                    },
                    {
                        duration: 1,
                        delay: 0.2, // Pequeño retraso
                        x: 0,
                        opacity: 1,
                        onComplete: () => {
                            setButtonDownDisabled(false);
                        },
                    }
                );
            }
        })

        // Animación de salida
        gsap.to(`#album${currentIndex}`, {
            duration: 1,
            y: -200,
            x: -100,
            opacity: 0,
            onComplete: () => {
                // Actualizar el índice después de la animación
                setCurrentIndex(() => nextIndex);
                // Animación de entrada con pequeño retraso
                
                gsap.fromTo(
                    `#album${nextIndex}`,
                    {
                        y: 200,
                        x: -100,
                        opacity: 0,
                    },
                    {
                        duration: 1,
                        delay: 0.2, // Pequeño retraso
                        y: 0,
                        x: 0,
                        opacity: 1,
                        onComplete: () => {
                            setButtonDownDisabled(false);
                        },
                    }
                );
            },
        });
    };

    const handlePrev = () => {
        setButtonUpDisabled(true);
        
        const prevIndex = (currentIndex - 1 + albums.length) % albums.length;
        
        gsap.to(`#split${currentIndex}`, {
            duration: 1,
            x:200,
            opacity: 0,
            onComplete: () => {
                // Actualizar el índice después de la animación
                setCurrentIndex(() => prevIndex);
                // Animación de entrada con pequeño retraso
                gsap.fromTo(
                    `#split${prevIndex}`,
                    {
                        x: 200,
                        opacity: 0,
                    },
                    {
                        duration: 1,
                        delay: 0.2, // Pequeño retraso
                        x: 0,
                        opacity: 1,
                        onComplete: () => {
                            setButtonDownDisabled(false);
                        },
                    }
                );
            }
        })
        // Animación de salida
        gsap.to(`#album${currentIndex}`, {
            duration: 1,
            y: 200,
            x: -100,
            opacity: 0,
            onComplete: () => {
                // Actualizar el índice después de la animación
                setCurrentIndex(() => prevIndex);
                // Animación de entrada con pequeño retraso
                gsap.fromTo(
                    `#album${prevIndex}`,
                    {
                        y: -200,
                        x: -100,
                        opacity: 0,
                    },
                    {
                        duration: 1,
                        delay: 0.2, // Pequeño retraso
                        y: 0,
                        x: 0,
                        opacity: 1,
                        onComplete: () => {
                            setButtonUpDisabled(false);
                        },
                    }
                );
            },
        });
    };

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("#heading", { scrollTrigger: "#heading", opacity: 1, delay: 0.5, y: -20 });
        gsap.to("#carusel", { scrollTrigger: "#carusel", opacity: 1, delay: 1, y: -20 });
    });

    return (
        
            <div className="relative w-full h-full flex flex-col justify-center items-center bg-cover bg-[url('src/assets/EstudioFondo.png')]" >
                <h1
                    id="heading"
                    className="opacity-0 font-raleway text-white font-bold text-[18px] md:text-[24px] lg:text-[30px] mt-10"
                >
                    Conoce Nuestras Clases
                </h1>

                <div id="carusel" className="opacity-0 flex w-full h-[300px] md:h-[500px] lg:h-[500px] xl:h-[800px]  justify-center items-center overflow-clip">
                    <div className="w-full h-full relative flex items-center justify-center">
                        <div className=" w-full  h-full gap-[0px] flex flex-row justify-evenly items-center">
                            <div className="flex flex-col gap-[100px] md:gap-[170px]  lg:gap-[190px] xl:gap-[260px] w-full items-center justify-between">
                                <button
                                    disabled={buttonUpDisabled}
                                    onClick={handlePrev}
                                    className=" z-30   flex items-center justify-center "
                                >
                                    <FaChevronUp className="text-white text-lg md:text-xl lg:text-2xl" />
                                </button>
                                

                                <div className="circle w-full h-full flex justify-center items-center">
                                    {albums.map((album, index) => (
                                        <div
                                            key={index}
                                            id={`album${index}`}
                                            className={`size-[180px] md:size-[280px] lg:size-[340px] xl:size-[400px] absolute  top-[60px] overflow-clip md:top-[105px] lg:top-[80px] xl:top-[160px] ${
                                                index === currentIndex ? " opacity-100" : "opacity-0"
                                            }`}
                                        >
                                            <img className="object-cover w-full h-full" src={album.img} alt={`Album ${index + 1}`} />
                                        </div>
                                    ))}
                                </div>
                                <button
                                    disabled={buttonDownDisabled}
                                    onClick={handleNext}
                                    className=" z-30  flex items-center justify-center mt-auto"
                                >
                                    <FaChevronDown className="text-white text-lg md:text-xl lg:text-2xl " />
                                </button>
                            </div>
                            <div className='relative  w-full'>
                            {albums.map((album, index) => (
                                <div 
                                    key={index}
                                    id={`split${index}`}
                                    className={` absolute ${index === currentIndex ? "opacity-100 -top-[80px] " : "opacity-0"}`}
                                >
                                    <h2 className="text-white text-xl md:text-2xl font-bold">{album.title}</h2>
                                    <p className="text-base font-raleway md:text-xl text-white">
                                        {album.horarios.map((horario, idx) => (
                                                <span  key={idx}>
                                                    {horario.dia}: <br/> {horario.hora}
                                                    {idx !== album.horarios.length - 1 && <br />} {/* Salto de línea si hay más horarios */}
                                                </span>
                                            ))}
                                        </p>
                                    </div>
                            ))}
                            </div>
                        </div>

                    </div>
                </div>
                        <div className="w-full h-10 bg-gradient-to-b from-black absolute top-0"></div>
                        <div className="w-full h-10 bg-gradient-to-t from-black absolute bottom-0"></div>
            </div>
        
    );
}

export default SwipeCard;
