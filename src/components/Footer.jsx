import { Link } from "react-router-dom";
import facebookIcon from '../../public/images/media_icons/facebook.webp';
import instagramIcon from '../../public/images/media_icons/instagram.webp';
import emailIcon from '../../public/images/media_icons/email.webp';
import tiktokIcon from '../../public/images/media_icons/tik-tok.webp';

function Footer() {
  return (
    <footer className="footer bg-slate-50 border-t bg-gray border-gray-200 text-base-content">
      {/* Contenedor principal de daisyUI */}
      <div className="footer footer-center p-10 max-w-7xl mx-auto text-base-content flex flex-col md:flex-row justify-between gap-10">
        
        {/* Sección de Marca */}
        <aside className="max-w-xs">
          <h3 className="text-2xl font-bold text-[#E5BA5A] mb-2">Magic Moments</h3>
          <p className="text-gray-600 leading-relaxed">
            Diseños unicos para cada cliente. Transformamos tus ideas en realidad con creatividad y pasión.
          </p>
        </aside>

        {/* Sección Horarios */}
        <nav>
          <header className="footer-title text-sky-900 opacity-100 font-bold uppercase tracking-wider">Redes Sociales</header>
          <div className="text-gray-600 space-y-1">
            <p className="pt-2"><a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="Facebook" className="w-[30px] h-auto" /> </a></p>
            <p className="pt-2"><a href="http://google.com" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram" className="w-[30px] h-auto" /> </a> </p>
            <p className="pt-2"><a href="http://google.com" target="_blank" rel="noopener noreferrer"><img src={tiktokIcon} alt="TikTok" className="w-[30px] h-auto" /> </a> </p>
          </div>
        </nav>

        {/* Sección Ubicación */}
        <nav>
          <header className="footer-title text-sky-900 opacity-100 font-bold uppercase tracking-wider">Ubicación</header>
          <p className="text-gray-600">Greenboroso, North Carolina</p>
          <Link to="/contacto" className="link link-hover text-sky-700 mt-2 block">Ver mapa</Link>
        </nav>

        {/* Sección Contacto */}
        <nav>
          <header className="footer-title text-sky-900 opacity-100 font-bold uppercase tracking-wider">Contacto</header>
          <a href="tel:+1 (336) 772-3223" className="link link-hover text-gray-600">Tel: +1 (336) 772-3223</a>
          <a href="mailto:contacto@abprestige.com" className="link link-hover text-gray-600">Email: contacto@abprestige.com</a>
        </nav>

      </div>

      {/* Barra de Copyright (Extra para el toque final) */}
      <div className="footer footer-center p-4 bg-slate-100 text-gray-800 text-sm border-t border-gray-200">
        <aside>
          <p>© {new Date().getFullYear()} - Desarrollado por: <a href="http://pacodev.site" target="_blank" rel="noopener noreferrer" className="link link-hover text-sky-700"> Pacodev</a></p>
        </aside>
      </div>
    </footer>
  );
}

export default Footer;