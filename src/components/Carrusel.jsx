// eslint-disable-next-line no-unused-vars
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import vinil from'../assets/VinylRecords/vinilo.png'
import album1 from '../assets/VinylRecords/VINYL-RECORD-HIPHOP.png'
import album2 from '../assets/VinylRecords/VINYL-RECORD-CHAIRDANCE.png'
import album3 from '../assets/VinylRecords/VINYL-RECORD-COMBAT.png'
import album4 from '../assets/VinylRecords/VINYL-RECORD-DANZACONTEMPORANEA.png'
import album5 from '../assets/VinylRecords/VINYL-RECORD-DANZASPOLINESIAS.png'
import album6 from '../assets/VinylRecords/VINYL-RECORD-ENTRENAMIENTO-FUNCIONAL.png'
import album7 from '../assets/VinylRecords/VINYL-RECORD-KPOP.png'
import album8 from '../assets/VinylRecords/VINYL-RECORD-KPOPKIDS.png'
import album9 from '../assets/VinylRecords/VINYL-RECORD-RITMOSLATINOS.png'
import album10 from '../assets/VinylRecords/VINYL-RECORD-TWERK.png'
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Carrusel() {

    const [buttonUpDisabled, setButtonUpDisabled] = useState(false);
    const [buttonDownDisabled, setButtonDownDisabled] = useState(false);
    const albums = [
        { album: 1, img: album1, title: "HIP HOP" },
        { album: 2, img: album2, title: "CHAIR DANCE" },
        { album: 3, img: album3, title: "COMBAT" },
        { album: 4, img: album4, title: "DANZA CONTEMPORANEA" },
        { album: 5, img: album5, title: "DANZAS POLINESIAS" },
        { album: 6, img: album6, title: "ENTRENAMIENTO FUNCIONAL" },
        { album: 7, img: album7, title: "KPOP" },
        { album: 8, img: album8, title: "KPOP KIDS" },
        { album: 9, img: album9, title: "RITMOS LATINOS" },
        { album: 10, img: album10, title: "TWERK" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [rotation, setRotation] = useState(-90);
    const [rotation2, setRotation2] = useState(90);

    const handleNext = () => {
        setButtonDownDisabled(true);
        setRotation(rotation - 90)
        gsap.to("#disco", {
        rotate: rotation,
        duration: 2,
    });
    gsap.to(`#album${currentIndex}`, {
        duration: 1,
        y: -200,
        x: -100,
        
        opacity: 0,
        onComplete: () => {
            const nextIndex = (currentIndex + 1) % albums.length;
            setCurrentIndex(nextIndex);
            gsap.fromTo(
                `#album${nextIndex}`,
                {
                    
                    y: 200,
                    x: -100,
                    opacity: 0,
                },
                {
                    
                    duration: 1,
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
        setRotation2(rotation2 + 90)
        gsap.to("#disco", {
        rotate: rotation2,
        duration: 2,
        });
        gsap.to(`#album${currentIndex}`, {
            duration: 1,
            y: 200,
            x: -100,
            
            opacity: 0,
            onComplete: () => {
                const prevIndex = (currentIndex - 1 + albums.length) % albums.length;
                setCurrentIndex(prevIndex);
                gsap.fromTo(
                    `#album${prevIndex}`,
                    {
                        
                        y: -200,
                        x: -100,
                        opacity: 0,
                    },
                    {
                        
                        duration: 1,
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
        gsap.to("#heading", { scrollTrigger:"#heading", opacity: 1, delay: 0.5, y:-20 });
        gsap.to("#carusel", { scrollTrigger:"#carusel", opacity: 1, delay: 1, y:-20 });
    });

    return (
        <div className="w-full h-full flex flex-col justify-center items-center ">
        <h1
            id="heading"
            className=" opacity-0 font-raleway text-white font-bold text-[18px] md:text-[24px] lg:text-[30px] "
        >
            Conoce Nuestras Clases
        </h1>

        <div id="carusel" className="opacity-0 flex w-full h-[300px] md:h-[500px] lg:h-[700px] xl:h-[800px] bg-[#0e0e0e] justify-center items-center overflow-clip ">
            <div className=" w-full h-full relative flex items-center justify-center">
                <div className="relative w-full h-full  flex justify-center items-center">
                    <button
                        disabled={buttonUpDisabled}
                        onClick={handlePrev}
                        className="w-full z-20   absolute top-[8px] md:top-[70px] lg:top-[100px] right-[0px] flex items-center justify-center"
                    >
                        <FaChevronUp className="text-white text-lg md:text-xl lg:text-2xl" />
                    </button>
                    <button
                        disabled={buttonDownDisabled}
                        onClick={handleNext}
                        className="w-full z-20  absolute bottom-[10px] md:bottom-[70px] lg:bottom-[100px] right-0 flex items-center justify-center"
                    >
                        <FaChevronDown className="text-white text-lg md:text-xl lg:text-2xl" />
                    </button>

                    <div className="circle  w-[200px] h-full   flex justify-center items-center ">
                        

                        {albums.map((album, index) => (
                            <div
                            key={index}
                            id={`album${index}`}
                            className={` absolute -top-[5px] md:top-4 lg:top-10 md:ml-20   ${
                                index === currentIndex
                                ? "w-[400px] md:w-[600px] lg:w-[800px] xl:w-[950px] "
                                : "opacity-0 "
                            }`}
                            >
                            <img
                            className="object-cover w-full h-full"
                            src={album.img}
                            alt={`Album ${index + 1}`}
                            />
                        </div>
                        ))}
                        
                    </div>
                </div>
                    
                    <div className="w-full h-10 bg-gradient-to-b from-black absolute top-0"></div>
                    <div className="w-full h-10 bg-gradient-to-t from-black absolute bottom-0"></div>
                <img
                    id="disco"
                    className="size-[200px] md:size-[380px] lg:size-[600px] xl:size-[700px]  object-cover absolute -left-[102px] md:-left-[177px] lg:-left-[300px] xl:-left-[350px] top-[50px] md:top-[60px] lg:top-[50px]  "
                    src={vinil}
                    alt=""
                />
            </div>
        </div>
    </div>
    );
}

export default Carrusel