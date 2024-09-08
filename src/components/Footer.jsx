import React from "react";
import logo from "../assets/Logowhite.svg";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";

export const Footer = () => {
  return (
    <div className="w-full px-16 my-10">
      <div className="flex flex-wrap gap-10">
        <div className="mb-6 md:mb-0">
          <a href="#" className="flex items-center">
            <img src={logo} className="w-12 h-auto" alt="logo 5678" />
          </a>
        </div>
        <div className="flex flex-wrap gap-10 sm:gap-6">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Recursos
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline decoration-primary">
                  Eventos y talleres
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline decoration-primary">
                  Clases y maestros
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Siguenos en redes sociales
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" target="" className="hover:underline decoration-primary ">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline decoration-primary">
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="https://estudio5678.com/Normas%20de%20convivencia.PDF.pdf" target="_blank" className="hover:underline decoration-primary">
                  Normas de convivencia
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="flex gap-3 text-sm text-gray-500 sm:text-center dark:text-gray-400">
          ©2024 <a className="hover:underline decoration-primary">Estudio 5678</a>
          Todos los derechos reservados.
            
        </span>
        <div className="flex mt-4 sm:justify-center sm:mt-0 gap-6">
          <a
            id="whatsap"
            className="p-2 text-[20px] lg:text-[28px] text-white hover:bg-primary  hover:text-secondary rounded-full transition-all ease-in-out"
            href=""
          >
            <IoLogoWhatsapp />
          </a>
          <a
            id="instagram"
            className="p-2 text-[20px] lg:text-[28px] text-white hover:bg-primary  hover:text-secondary rounded-full transition-all ease-in-out"
            href=""
          >
            <RiInstagramFill />
          </a>
          <a
            id="facebook"
            className="p-2 text-[20px] lg:text-[26px] text-white hover:bg-primary  hover:text-secondary rounded-full transition-all ease-in-out"
            href=""
          >
            <BsFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};
