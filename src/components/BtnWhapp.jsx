import imagenFondo from '../assets/WhatsApp_icon.png'; 
import { Link } from "react-router-dom";

function Whatsapp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        href="https://wa.me/529241374730?text=Hola,%20quiero%20información%20sobre%20sus%20servicios%20de%20limpieza"
        target="_blank" 
        rel="noreferrer"
        className="btn btn-circle btn-ghost h-16 w-16 p-0 shadow-lg hover:scale-110 transition-transform bg-transparent border-none"
      >
        <img 
          src={imagenFondo}
          alt="WhatsApp"
          className="w-full h-full object-contain rounded-full"
        />
      </a>
    </div>
  );
}

export default Whatsapp;