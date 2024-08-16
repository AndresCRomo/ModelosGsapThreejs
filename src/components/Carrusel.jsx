// eslint-disable-next-line no-unused-vars
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
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
import { render } from "@react-three/fiber";
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
        scale: 3,
        opacity: 0,
        onComplete: () => {
            const nextIndex = (currentIndex + 1) % albums.length;
            setCurrentIndex(nextIndex);
            gsap.fromTo(
                `#album${nextIndex}`,
                {
                    scale: 3,
                    y: 200,
                    x: -100,
                    opacity: 0,
                },
                {
                    scale: 13,
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
            scale: 3,
            opacity: 0,
            onComplete: () => {
                const prevIndex = (currentIndex - 1 + albums.length) % albums.length;
                setCurrentIndex(prevIndex);
                gsap.fromTo(
                    `#album${prevIndex}`,
                    {
                        scale: 3,
                        y: -200,
                        x: -100,
                        opacity: 0,
                    },
                    {
                        scale: 13,
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

    useEffect(() => {
        console.log(currentIndex);
    }, [currentIndex]);

    useGSAP(() => {
        gsap.to("#heading", { opacity: 1, delay: 1.5, y: -30 });
    });

    return (
        <div className="w-full h-full flex flex-col justify-center items-center ">
        <h1
            id="heading"
            className=" opacity-0 font-raleway text-white font-bold text-[18px] "
        >
            Conoce Nuestras Clases
        </h1>

        <div className="flex w-full h-[300px] bg-[#0c0c0c] justify-center items-center overflow-clip ">
            <div className=" w-full h-full relative flex items-center justify-center">
                <div className="w-full h-10 bg-gradient-to-b from-black absolute top-0"></div>
                <div className="w-full h-10 bg-gradient-to-t from-black absolute bottom-0"></div>
            <button
                disabled={buttonUpDisabled}
                onClick={handlePrev}
                className="size-[50px] z-20   absolute top-[8px] right-[150px] flex items-center justify-center"
            >
                <FaChevronUp className="text-white text-lg" />
            </button>
            <button
                disabled={buttonDownDisabled}
                onClick={handleNext}
                className="size-[50px] z-20  absolute bottom-[10px] right-[150px] flex items-center justify-center"
            >
                <FaChevronDown className="text-white text-lg" />
            </button>
            <div className="circle size-[400px] rounded-full absolute -top-[50px] -left-[170px] flex justify-center items-center ">
                {albums.map((album, index) => (
                <div
                    key={index}
                    id={`album${index}`}
                    className={`absolute size-[20px] transform scale-[13] ${
                    index === currentIndex
                        ? " top-[180px] -right-[35px]"
                        : "opacity-0 top-[180px] -right-[35px]"
                    }`}
                >
                    <img
                    className="w-full h-full object-cover"
                    src={album.img}
                    alt={`Album ${index + 1}`}
                    />
                </div>
                ))}
            </div>
            <img
                id="disco"
                className="lg:size-[400px] size-[200px] object-cover absolute -left-[102px] top-[50px] lg:-left-[200px] "
                src={vinil}
                alt=""
            />
            </div>
        </div>
        </div>
    );
}

export default Carrusel