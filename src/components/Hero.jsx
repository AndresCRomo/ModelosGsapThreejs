import gsap from "gsap";
import video2 from "../assets/videos/ejemploBG.mp4";
import { useGSAP } from "@gsap/react";
import logo from "../assets/Logowhite.svg";
const Hero = (props) => {
  const { onOpen } = props;
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1.5, y: -30 });
    gsap.to("#boton", { opacity: 1, delay: 1.5, y: 10 });
    gsap.to("#video", { opacity: 1, delay: 0.5 });
  });

  return (
    <section className="w-full h-full flex flex-row justify-around items-center   ">
      <div
        id="hero"
        className=" flex ml-10 items-center justify-center size-[130px] lg:size-[300px] md:size-[200px] z-10 opacity-0"
      >
        <img src={logo} alt="logo" className="object-cover " />
      </div>
      <div className="   w-full flex items-center flex-col  ">
        <div className=" rounded-t-xl h-[240px]  justify-center  z-10 flex flex-col">
          <div className="flex flex-row gap-2 ">
            <p
              id="hero"
              className="  leading-none line-clamp-1 font-raleway text-white text-[30px] md:text-[60px] lg:text-[80px] xl:text-[110px] font-extrabold opacity-0 "
            >
              Aprende a{" "}
            </p>
            <p
              id="hero"
              className="  leading-none font-raleway text-white text-[30px] md:text-[60px] lg:text-[80px] xl:text-[120px] decoration-primary underline-offset-2  underline  font-extrabold opacity-0 ml-3"
            >
              Bailar{" "}
            </p>
            <p
              id="hero"
              className="  leading-none font-raleway text-white text-[30px] md:text-[60px] lg:text-[80px] xl:text-[120px] font-extrabold opacity-0 "
            >
              ,
            </p>
          </div>
          <p
            id="hero"
            className=" leading-none font-raleway text-white text-[30px] md:text-[60px] lg:text-[80px] xl:text-[120px] font-extrabold opacity-0 "
          >
            Con Estilo
          </p>
          <button
            onClick={onOpen}
            id="boton"
            className=" w-fit -mt-6 rounded-md bg-primary hover:font-black hover:bg-candy-corn-500 opacity-0 font-bold   transition-all ease-in-out   text-black hover:text-white text-[10px] px-5 py-2 lg:text-[20px] font-raleway active:bg-candy-corn-600  active:text-white  "
          >
            Reservar Clase Muestra
          </button>
        </div>
      </div>
      <video
        id="video"
        className=" xl:h-[700px] lg:h-[600px] md:h-[400px] h-[300px]  opacity-0  w-full object-cover pointer-events-none absolute top-0 z-0"
        src={video2}
        autoPlay={true}
        muted
        loop
        playsInline
      ></video>
    </section>
  );
};

export default Hero;
