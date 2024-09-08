import fondoladrillo from "../../src/assets/images/fondo_ladrillo.jpg"
import eventomes from "../../src/assets/images/Evento/Eventomes.png"
import fondoEscuela from  "../assets/images/fondo_test.jpg"

 
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
            <img
              src={eventomes}
              className="   h-auto md:size-60  rounded-lg size-52 xl:size-96 s "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Eventos