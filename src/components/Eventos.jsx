import fondoladrillo from "../../src/assets/images/fondo_ladrillo.jpg"
import eventomes from "../../src/assets/images/Evento/Eventomes.png";
import eventobachata from "../../src/assets/images/Evento/Bachata.png";
import eventopunk from "../../src/assets/images/Evento/ev1.png";
import fondoEscuela from "../assets/images/fondo_test.jpg"


import { Carousel,IconButton } from "@material-tailwind/react";


 
const Eventos = () => {

  const handleOnSubmit = () => {
    
    const url = `https://wa.me/4495484212?text=${encodeURIComponent(
      `Hola, ¿Puedes darme informes del evento del mes?`
    )}`;
    window.open(url, "_blank");
    setFormData(initialStateForm);
    setClaseSelected(null);
    setSelectedDiaHora({ dia: null, hora: null });
    onOpenChange();
     
    
  };

  return (
    <section className=" text-white py-3 md:px-20 px-3">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center ">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold leading-tight mb-4  ">
            Nuevos eventos y talleres cada Mes.
          </h2>
          <p className="text-xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-50">
            Acercate, Pregunta y ¡Anímate a inscribirte!
          </p>

          <div className=" cursor-pointer">
            <button
              onClick={() => {
                handleOnSubmit();
              }}
              className="rounded-lg md:text-sm hover:bg-primary whitespace-nowrap md:px-2  hover:font-bold hover:text-secondary  border-2 transition-all ease-in-out  border-primary text-white px-5 py-2 font-raleway"
            >
              Informes Porfavor 😁🙏
            </button>
          </div>
        </div>

        <div className="relative  w-full ">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black  z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black  z-10"></div>

          <img src={fondoEscuela} className="w-full rounded-xl " />
          <div className="absolute  inset-0 object-none flex justify-center items-center z-10">
            {/**
             * <img
              src={eventomes}
              className="   h-auto md:size-60  rounded-lg size-52 xl:size-96  "
            />
             */}
            <Carousel
              className="rounded-xl  size-[180px] md:size-[280px] lg:size-[340px] xl:size-[600px] absolute  "
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
              prevArrow={({ handlePrev }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handlePrev}
                  className="!absolute top-2/4 left-4 -translate-y-2/4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                </IconButton>
              )}
              nextArrow={({ handleNext }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handleNext}
                  className="!absolute top-2/4 !right-4 -translate-y-2/4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </IconButton>
              )}
              loop={true}
              autoplay={true}
            >
              <img
                src={eventobachata}                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src={eventopunk}
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src={eventomes}
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Eventos