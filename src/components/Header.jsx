import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'; 


function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Marcamos true si bajamos más de 50px
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    // Limpieza del evento al desmontar el componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`
        fixed top-0 left-0 w-full z-50 navbar bg-gray-700  px-4 md:px-12 transition-all duration-300
        ${scrolled 
          ? "bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-gray-400 py-1 text-sm min-h-1" 
          : "bg-gray-900 py-2 text-sm border-b border-gray-100"
        }
      `}
    >
      
      {/* Sección Izquierda: Logo */}
      
    <div 
      className="flex-1">
      <Link 
      to="/#" 
      className={`
        font-bold text-pink-600 transition-all duration-300
        ${scrolled 
          ? "text-xl tracking-tight" // Más pequeño y compacto al bajar
          : "text-3xl tracking-normal" // Grande al inicio
        }
      `}
    >
      <img src={logo} alt="Logo" className="h-16 w-20" />
      </Link>
    </div>

      {/* Sección Derecha: Menú */}
      <div className="flex-none py-2">
        
        {/* Menú Desktop (se oculta en móviles) */}
      <ul className="menu menu-horizontal px-1 hidden md:flex space-x-1 font-medium text-lg">

    <li>

    <NavLink 
      to="/mensajes" 
      className={({ isActive }) => 
        `transition-all border border-pink-800 bg-pink-500 text-white duration-300 hover:bg-white hover:text-pink-500 ${scrolled ? 'text-base' : 'text-xl'} ` + 
        `${isActive ? 'text-pink-400' : 'text-gray-600 hover:text-pink-400'}`
      }
    >
    +1 (336) 772-3223
    </NavLink>
    </li>    
    <li>

    <NavLink 
      to="/mensajes" 
      className={({ isActive }) => 
        `transition-all text-white duration-300 ${scrolled ? 'text-base' : 'text-xl'} ` + 
        `${isActive ? 'text-pink-400' : 'text-gray-600 hover:text-pink-400'}`
      }
    >
    Cotizar
    </NavLink>
  </li>

  <li>
    <NavLink 
      to="/servicios" 
      className={({ isActive }) => 
        `transition-all text-white duration-300 ${scrolled ? 'text-base' : 'text-lg'} ` + 
        `${isActive ? 'text-pink-400' : 'text-gray-600 hover:text-pink-400'}`
      }
    >
    Servicios
    </NavLink>
  </li> 

  <li>
    <NavLink 
      to="/portafolio" 
      className={({ isActive }) => 
        `transition-all text-white duration-300 ${scrolled ? 'text-base' : 'text-lg'} ` + 
        `${isActive ? 'text-pink-400' : 'text-gray-600 hover:text-pink-400'}`
      }
    >
    Portafolio
    </NavLink>
  </li>

  <li>
    <NavLink 
      to="/contacto" 
      className={({ isActive }) => 
        `transition-all text-white duration-300 ${scrolled ? 'text-base' : 'text-lg'} ` + 
        `${isActive ? 'text-pink-400' : 'text-gray-600 hover:text-pink-400'}`
      }
    >
    Contacto
    </NavLink>
  </li>

        </ul>

        {/* Menú Mobile (Dropdown) */}
        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle text-pink-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-gray-600 rounded-box w-52">
            <li><Link to="/mensajes" className="text-pink-400 text-lg">Mensajes</Link></li>
            <li><Link to="/servicios" className="text-pink-400 text-lg">Servicios</Link></li>
            <li><Link to="/portafolio" className="text-pink-400 text-lg">Portafolio</Link></li>
            <li><Link to="/contacto" className="text-pink-400 text-lg">Contacto</Link></li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Header;