import fondoladrillo from "../../src/assets/images/fondo_ladrillo.jpg"
import eventomes from "../../src/assets/images/Evento/Eventomes.png"

const Eventos = () => {
  return (
   <div className="relative h-screen">
  <div className="absolute inset-0">
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black  z-20"></div>
    <img
      src={fondoladrillo}
      alt="delante"
      className="absolute inset-0 object-cover w-full h-full"
    />
  </div>

      {/*usar flex para cambiar el manejo de los elementos texto /letras */ }
  <div className="absolute mt-[250px] inset-0 flex justify-center">
    <div>
      <img src={eventomes} className="w-[360px] h-[450px]" />
    </div>
      </div>
          <div className="   w-full flex items-center flex-col  ">
      
        <div className=" rounded-t-xl h-[240px]  justify-center  z-10 flex flex-col">
          <div className="flex flex-row ">
            
            <p
              id="hero"
              className="  leading-none font-raleway text-white text-[40px] md:text-[60px] lg:text-[80px] xl:text-[120px] font-extrabold opacity-0 "
            >
              Aprende a{" "}
            </p>
            <p
              id="hero"
              className="  leading-none font-raleway text-white text-[40px] md:text-[60px] lg:text-[80px] xl:text-[120px] decoration-primary underline-offset-2  underline  font-extrabold opacity-0 ml-3"
            >
              Bailar{" "}
            </p>
            <p
              id="hero"
              className="  leading-none font-raleway text-white text-[40px] md:text-[60px] lg:text-[80px] xl:text-[120px] font-extrabold opacity-0 "
            >
              ,
            </p>
          </div>
          <p
            id="hero"
            className=" leading-none font-raleway text-white text-[40px] md:text-[60px] lg:text-[80px] xl:text-[120px] font-extrabold opacity-0 "
          >
            Con Estilo
          </p>
    
        </div>
      </div>
</div>
  )
}

export default Eventos