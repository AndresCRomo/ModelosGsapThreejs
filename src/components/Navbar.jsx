import React from 'react'
import Logo from '../assets/Logowhite.svg'
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
function Navbar() {
    return (
        <header className=' w-full py-5 sm:px-10 px-5 flex justify-between items-center backdrop-blur-sm *: bg-gradient-to-b from-black '> 
            <nav className='flex w-full max-w-screen'>
                <img className='text-white size-[40px] md:size-[80px]' src={Logo} alt="Estudio5678" />
                <div className=' flex flex-1 justify-center items-center max-sm:hidden'>
                    <div className=' cursor-pointer'>
                            <button className='rounded-lg hover:bg-primary hover:font-bold hover:text-secondary  border-2 transition-all ease-in-out  border-primary text-white px-5 py-2 font-raleway'>Reservar Clase Muestra</button>
                    </div>

                    <div className='links px-5 cursor-pointer text-white font-raleway hover:underline hover:decoration-primary hover:font-bold transition-all ease-in-out'
                    >Eventos y Talleres</div>
                    <div className='links px-5 cursor-pointer text-white font-raleway hover:underline hover:decoration-primary hover:font-bold transition-all ease-in-out'>Clases y Maestros</div>
                    <div className='links px-5 cursor-pointer text-white font-raleway hover:underline hover:decoration-primary hover:font-bold transition-all ease-in-out'>Contacto</div>
                </div>
                <div className=' flex items-center gap-7 max-sm:justify-end max-sm:flex-1'>
                    <a id='whatsap' className='text-white text-[28px] hover:p-3 hover:text-secondary hover:bg-primary rounded-full transition-all ease-in-out' href="">
                        <IoLogoWhatsapp />
                    </a>
                    <a id='instagram' className='text-white text-[28px] hover:p-3 hover:text-secondary hover:bg-primary rounded-full transition-all ease-in-out' href="">
                        <RiInstagramFill />
                    </a> 
                    <a id='facebook' className='text-white text-[26px] hover:p-3 hover:text-secondary hover:bg-primary rounded-full transition-all ease-in-out' href="">
                        <BsFacebook />
                    </a> 
                </div>
            </nav>
        </header>
    )
}

export default Navbar