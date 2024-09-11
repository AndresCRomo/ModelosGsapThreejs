import Logo from "../assets/Logowhite.svg";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar(props) {
  const { onOpen } = props;
  const [open, setOpen] = useState(false);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  
  const scrollToSection = (sectionRef) => {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpen = () => {
    setOpen(!open);
  };
  useGSAP(() => {
    gsap.to(".Header", { opacity: 1, delay: 0.3 });
  });
  return (
    <header className="Header fixed top-0 opacity-0 w-full py-5  px-5 flex md:justify-between items-center  bg-gradient-to-b from-black z-50 ">
      <nav className="flex w-full  justify-between ">
        <img
          className=" size-[40px] md:size-[80px]"
          src={Logo}
          alt="Estudio5678"
        />

        <div className=" md:flex md:flex-1 gap-1 justify-center items-center  hidden">
          <div className=" cursor-pointer">
            <button onClick={onOpen} className="rounded-lg md:text-sm hover:bg-primary whitespace-nowrap md:px-2  hover:font-bold hover:text-secondary  border-2 transition-all ease-in-out  border-primary text-white px-5 py-2 font-raleway">
              Reservar Clase Muestra
            </button>
          </div>

          <div className="links lg:px-5 md:px-1 text-sm cursor-pointer text-white font-raleway hover:underline hover:decoration-primary hover:font-bold transition-all ease-in-out">
            Eventos y Talleres
          </div>
          <div className="links lg:px-5 md:px-1 text-sm cursor-pointer text-white font-raleway hover:underline hover:decoration-primary hover:font-bold transition-all ease-in-out">
            Clases y Maestros
          </div>
          <div className="links lg:px-5 md:px-1 text-sm cursor-pointer text-white font-raleway hover:underline hover:decoration-primary hover:font-bold transition-all ease-in-out">
            Contacto
          </div>
        </div>
        <div className=" flex items-center lg:gap-7 gap-3 max-sm:justify-center max-sm:flex-1">
          <a
            id="whatsap"
            className="text-white text-[20px] lg:text-[28px] hover:p-3 hover:text-secondary hover:bg-primary rounded-full transition-all ease-in-out"
            href=""
          >
            <IoLogoWhatsapp />
          </a>
          <a
            id="instagram"
            className="text-white text-[20px] lg:text-[28px] hover:p-3 hover:text-secondary hover:bg-primary rounded-full transition-all ease-in-out"
            href=""
          >
            <RiInstagramFill />
          </a>
          <a
            id="facebook"
            className="text-white text-[18px] lg:text-[26px] hover:p-3 hover:text-secondary hover:bg-primary rounded-full transition-all ease-in-out"
            href=""
          >
            <BsFacebook />
          </a>
        </div>
        <div
          className={` w-full h-fit py-5 absolute flex flex-col justify-center items-center bg-secondary/60 backdrop-blur-md gap-4 transition-all ease-in-out ${
            open ? "right-[0px] top-[0px]" : " opacity-0 -top-[200px] right-0 "
          }`}
        >
          <div className="w-full flex justify-end px-3 ">
            <button
              className="mt-[14px] mr-[8px] text-white text-[15px]"
              onClick={() => setOpen(!open)}
            >
              <FaTimes />
            </button>
          </div>
          <button onClick={onOpen} className=" w-fit text-sm font-raleway text-white border-2 border-candy-corn-300 transition-colors ease-in-out hover:text-black hover:bg-candy-corn-300 rounded-md p-1 hover:font-bold">
            Reservar Clase Muestra
          </button>
          <p className="cursor-pointer text-white font-raleway hover:underline hover:decoration-primary hover:font-bold transition-all ease-in-out">
            Eventos y Talleres
          </p>
          <p className="cursor-pointer text-white font-raleway hover:underline hover:decoration-primary hover:font-bold transition-all ease-in-out">
            Clases y Maestros
          </p>
          <p className="cursor-pointer text-white font-raleway hover:underline hover:decoration-primary hover:font-bold transition-all ease-in-out">
            Contacto
          </p>
        </div>
        <div>
          <button
            onClick={handleOpen}
            className="text-white text-[15px] flex h-full items-center md:hidden"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
