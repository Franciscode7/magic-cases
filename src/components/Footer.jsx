import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer bg-slate-50 border-t bg-gray border-gray-200 text-base-content">
      {/* Contenedor principal de daisyUI */}
      <div className="footer footer-center p-10 max-w-7xl mx-auto text-base-content flex flex-col md:flex-row justify-between gap-10">
        
        {/* Sección de Marca */}
        <aside className="max-w-xs">
          <h3 className="text-2xl font-bold text-pink-600 mb-2">A&B Prestige</h3>
          <p className="text-gray-600 leading-relaxed">
            Servicios profesionales de limpieza con estándares de alta calidad en Cancún.
          </p>
        </aside>

        {/* Sección Horarios */}
        <nav>
          <header className="footer-title text-sky-900 opacity-100 font-bold uppercase tracking-wider">Horarios</header>
          <div className="text-gray-600 space-y-1">
            <p><span className="font-semibold">Lun - Vie:</span> 8am - 6pm</p>
            <p><span className="font-semibold">Sábado:</span> 9am - 2pm</p>
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
      <div className="footer footer-center p-4 bg-slate-100 text-gray-500 text-sm border-t border-gray-200">
        <aside>
          <p>© {new Date().getFullYear()} - Brenda Acosta. Todos los derechos reservados.</p>
        </aside>
      </div>
    </footer>
  );
}

export default Footer;