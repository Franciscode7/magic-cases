import imagenFondo from '../assets/whatsapp_logo_icon_147205.png'; 
import { Link } from "react-router-dom";

function Whatsapp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        href="https://wa.me/529241374730?text=Hola,%20quiero%20información%20sobre%20sus%20servicios%20de%20limpieza"
        target="_blank" 
        rel="noreferrer"
        className="flex items-center justify-center rounded-full h-16 w-16 p-0 hover:scale-110 transition-transform bg-transparent border-none"
      >
        <img 
          src={imagenFondo}
          alt="WhatsApp"
          className="w-full h-full object-contain"
        />
      </a>
    </div>
  );
}

export default Whatsapp;