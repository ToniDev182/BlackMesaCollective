import React from "react";
import { Instagram } from "lucide-react";
import clip from "../src/assets/fog1.mp4"; 
import "../src/styles/footer.css"; 

function Footer() {
  return (
    <footer className="relative text-white h-[40vh] overflow-hidden bg-black">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={clip} type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      {/* Capa de fondo de imagen + mezcla */}
      <div className="footer-background-image" />

      {/* Capa de mezcla roja */}
      <div className="absolute top-0 left-0 w-full h-full bg-red-600 mix-blend-multiply opacity-100 z-10" />

      {/* Contenedor principal con 3 bloques */}
      <div className="relative z-30 h-full w-full px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Bloque izquierda: logo + derechos */}
        <div className="flex items-center gap-3">
          <img
            src="https://i.postimg.cc/nLDVrdQS/Black-Mesa-Logo.png"
            alt="Black Mesa Logo"
            className="h-10 w-auto"
          />
          <p className="text-sm md:text-base santafe">All rights reserved &copy;</p>
        </div>

        {/* Bloque centro: texto */}
        <div className="text-center max-w-3xl px-4">
          <h1 className=" sferenet text-lg md:text-xl font-semibold drop-shadow-md">
            Unidos por la música electrónica. Deep techno, house, breaks y drum and bass — pura energía y pasión underground.
          </h1>
        </div>

        {/* Bloque derecha: iconos redes y contacto */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/blackmesa_collective"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl transition-transform duration-300 transform hover:scale-110 flex flex-col items-center"
          >
            <Instagram size={36} />
            <span className="text-xs santafe mt-1">Instagram</span>
          </a>

          <a
            href="mailto:fatfreemanblackmesa@gmail.com"
            className="cursor-pointer transition-transform duration-300 transform hover:scale-110 flex flex-col items-center"
          >
            <img
              src="https://i.postimg.cc/7hzsCDtC/logoC.png"
              alt="Black Mesa Logo"
              className="h-12 w-auto"
            />
            <span className="text-xs mt-1 santafe">Contáctanos</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
