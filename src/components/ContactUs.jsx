import { IoLocationSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export const ContactUs = () => {
  return (
    <div>
     {/* <div className="flex flex-col justify-center items-center w-full">
        <div className="">
          <h1 className="font-raleway text-white font-bold text-[18px] md:text-[24px] lg:text-[30px] text-center">
            Contactanos
          </h1>
        </div>
        <div className="mt-2 lg:mt-2 bg-[#0e0e0e] p-3 w-full flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.6603474446742!2d-102.31375542494368!3d21.87063317999779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ef9ed36aabd1%3A0x45990aec815771e7!2sEstudio%20de%20danza%205%2C%206%2C%207%2C%208!5e0!3m2!1sen!2smx!4v1724098991112!5m2!1sen!2smx"
                width="600"
                height="450"
                style={{ border: "0", margin: "auto" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div>
              <div className="w-full mx-auto rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <a className="text-primary text-[14px] lg:text-[18px] hover:p-3 hover:text-white transition-all ease-in-out">
                    <IoLocationSharp />
                  </a>
                  <p className="mt-1 text-[#ffffffc7] font-raleway">
                    Av. de la Convención de 1914 #1132,
                    <br />
                    local 5 (Edificio Lafayette),
                    <br />
                    Aguascalientes City 20210
                  </p>
                </div>
                <div className="px-6 py-4">
                  <a className="text-primary text-[14px] lg:text-[18px] hover:p-3 hover:text-white transition-all ease-in-out">
                    <FaClock />
                  </a>
                  <p className="mt-1 text-[#ffffffc7] font-raleway">
                    Lunes: 5:30PM - 9PM
                  </p>
                  <p className="mt-1 text-[#ffffffc7] font-raleway">
                    Martes: 10AM - 1PM, 5PM - 9PM
                  </p>
                  <p className="mt-1 text-[#ffffffc7] font-raleway">
                    Miercoles: 5:30PM - 9PM
                  </p>
                  <p className="mt-1 text-[#ffffffc7] font-raleway">
                    Jueves: 10AM - 1PM, 5PM - 9PM
                  </p>
                  <p className="mt-1 text-[#ffffffc7] font-raleway">
                    Viernes: 7PM - 8pm
                  </p>
                  <p className="mt-1 text-[#ffffffc7] font-raleway">
                    Sábado: 10AM - 12PM
                  </p>
                </div>
                <div className="px-6 py-4">
                  <a className="text-primary text-[14px] lg:text-[18px] hover:p-3 hover:text-white transition-all ease-in-out">
                    <FaPhoneAlt />
                  </a>
                  <p className="mt-1 text-[#ffffffc7] font-raleway">
                    449 548 4212
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>*/}
      <div>
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="font-raleway text-white font-bold text-[18px] md:text-[24px] lg:text-[30px] text-center mb-2 mt-2">
            Contactanos
          </h1>
        </div>
        <section className="bg-[#0e0e0e] relative">
          <div className="absolute inset-0 bg-[#0e0e0e]">
            <iframe
              width="98%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="map"
              scrolling="no"
              style={{margin: "auto"}}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.6603474446742!2d-102.3137554249437!3d21.87063317999779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ef9ed36aabd1%3A0x45990aec815771e7!2sEstudio%20de%20danza%205%2C%206%2C%207%2C%208!5e0!3m2!1sen!2smx!4v1724107193091!5m2!1sen!2smx"
            ></iframe>
          </div>
          <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-[26%] md:w-1/3 bg-[#ffffffeb] rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            
            <div>
              <div className="w-full mx-auto rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <a className="text-primary text-[16px] lg:text-[18px] hover:p-3 hover:text-white transition-all ease-in-out">
                    <IoLocationSharp />
                  </a>
                  <p className="mt-1 text-gray-600 font-raleway text-[14px]">
                    Av. de la Convención de 1914 #1132,
                    <br />
                    local 5 (Edificio Lafayette),
                    <br />
                    Aguascalientes City 20210
                  </p>
                </div>
                <div className="px-6 py-4">
                  <a className="text-primary text-[14px] lg:text-[18px] hover:p-3 hover:text-white transition-all ease-in-out">
                    <FaClock />
                  </a>
                  <p className="mt-1 text-gray-600 font-raleway text-[14px]">
                    Lunes: 5:30PM - 9PM
                  </p>
                  <p className="mt-1 text-gray-600 font-raleway text-[14px]">
                    Martes: 10AM - 1PM, 5PM - 9PM
                  </p>
                  <p className="mt-1 text-gray-600 font-raleway text-[14px]">
                    Miercoles: 5:30PM - 9PM
                  </p>
                  <p className="mt-1 text-gray-600 font-raleway text-[14px]">
                    Jueves: 10AM - 1PM, 5PM - 9PM
                  </p>
                  <p className="mt-1 text-gray-600 font-raleway text-[14px]">
                    Viernes: 7PM - 8pm
                  </p>
                  <p className="mt-1 text-gray-600 font-raleway text-[14px]">
                    Sábado: 10AM - 12PM
                  </p>
                </div>
                <div className="px-6 py-4">
                  <a className="text-primary text-[14px] lg:text-[18px] hover:p-3 hover:text-white transition-all ease-in-out">
                    <FaPhoneAlt />
                  </a>
                  <p className="mt-1 text-gray-600 font-raleway text-[14px]">
                    449 548 4212
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
