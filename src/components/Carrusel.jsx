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
function Carrusel() {
    
    const albums = [album1,album2,album3,album4,album5,album6,album7,album8,album9,album10]

    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        gsap.to(`#album${currentIndex}`, {
            duration: 1,
            y: -200, 
            x: -200,
            opacity: 0,
            onComplete: () => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % albums.length);
            },
        });

        gsap.fromTo(`#album${(currentIndex + 1) % albums.length}`,
            { y: 100, opacity: 0 },
            { duration: 1, y: 0, opacity: 1 }
        );
    };

    const handlePrev = () => {
        gsap.to(`#album${currentIndex}`, {
            duration: 1,
            y: 200, 
            x: -200,
            opacity: 0,
            onComplete: () => {
                setCurrentIndex((prevIndex) => (prevIndex - 1 + albums.length) % albums.length);
            },
        });

        gsap.fromTo(`#album${(currentIndex - 1 + albums.length) % albums.length}`,
            { y: -100, opacity: 0 },
            { duration: 1, y: 0, opacity: 1 }
        );
    };

    useGSAP(()=>{
        gsap.to('#heading' ,{ opacity:1,delay:1.5,y:-30})
        
    })

        
    return (
        <div className='w-full h-full flex flex-col justify-center items-center '>
            <h1 id='heading' className=' opacity-0 font-raleway text-white font-bold text-[18px] '>Conoce Nuestras Clases</h1>

            <div className="flex w-full h-[300px] bg-[#0c0c0c] justify-center items-center ">
                <div className=" w-full h-full relative flex items-center justify-center">
                    <button onClick={handlePrev} className="size-[50px] z-20 bg-red-700  absolute top-[8px] right-[150px] flex items-center justify-center">
                        <FaChevronUp className="text-white text-lg" />
                    </button>
                    <button onClick={handleNext} className="size-[50px] z-20 bg-red-500 absolute bottom-[10px] right-[150px] flex items-center justify-center">
                        <FaChevronDown className="text-white text-lg" />
                    </button>
                    <div className="circle size-[400px] rounded-full border-2 border-white absolute -top-[50px] -left-[170px] flex justify-center items-center">
                    {albums.map((album, index) => (
                            <div
                                key={index} 
                                id={`album${index}`}
                                className={`absolute size-[20px] top-[180px] -right-[35px] transform scale-[13] `}
                            >
                                <img className="w-full h-full object-cover" src={album} alt={`Album ${index + 1}`} />
                            </div>
                        ))}
                        {/*albums.map((album, index) => (
                            <div
                                key={index}
                                id={`album${index}`}
                                className={`absolute size-[20px] top-[180px] -right-[35px] transform scale-[13] ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                                style={{
                                    top: `${100 + index * 20}px`, // Posicionamiento dinámico basado en el índice
                                    transform: `rotate(${index * 36}deg)` // Distribuir los álbumes en círculo
                                }}
                            >
                                <img className="w-full h-full object-cover" src={album} alt={`Album ${index + 1}`} />
                            </div>
                        ))*/}
                    </div>
                    <img id="disco" className="lg:size-[400px] size-[200px] object-cover absolute -left-[102px] top-[50px] lg:-left-[200px] "  src={vinil} alt="" />
                </div>
            </div>
            
        </div>
    )
}

export default Carrusel