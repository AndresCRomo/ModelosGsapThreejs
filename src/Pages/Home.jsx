<<<<<<< HEAD

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Carrusel from '../components/Carrusel'
const Home = () => {
    return (
        <div className='bg-black w-full h-screen flex flex-col '>
            <div className='absolute  top-0 z-20 w-full'>
                <Navbar/>
            </div>
            <div className='flex flex-col gap-3'>
                <div className=' xl:h-[750px] lg:h-[650px] md:h-[450px] h-[350px]  '>
                    <Hero/>
                    <div className='absolute top-[228px] md:top-[330px] lg:top-[450px] xl:top-[550px]  w-full lg:h-[150px] h-[73px] bg-gradient-to-t from-black z-10'></div>
                </div>
                <div>
                    <Carrusel/>
                </div>
            </div>
        </div>
    )
}
=======
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Carrusel from "../components/Carrusel";
import { Footer } from "../components/Footer";
import { useDisclosure } from "@nextui-org/react";
import { ReservaTuClase } from "../components/ReservaTuClase";
>>>>>>> 2e29e1e70e477bcb2c1c2e2e130b06f003fd30e9

const Home = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="bg-black w-full min-h-screen flex flex-col">
      <ReservaTuClase isOpen={isOpen} onOpenChange={onOpenChange} />
      <div className="absolute top-0 z-20 w-full">
        <Navbar onOpen={onOpen} />
      </div>
      <div className="flex-grow flex flex-col gap-3">
        <div className="xl:h-[750px] lg:h-[650px] md:h-[450px] h-[350px] relative">
          <Hero onOpen={onOpen}/>
          <div className="absolute top-[228px] md:top-[330px] lg:top-[450px] xl:top-[550px] w-full lg:h-[150px] h-[73px] bg-gradient-to-t from-black z-10"></div>
        </div>
        <div>
          <Carrusel />
        </div>
      </div>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
