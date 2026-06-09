import React from 'react';

const Divider2 = ({ 
  amberBg = "bg-white", // Fondo de la sección de ARRIBA
  waveColor = "text-gray-100", // Color de la sección de ABAJO (relleno de la onda)
  flip = false 
}) => {
  return (
    <div className={`${amberBg} w-full overflow-hidden leading-[0]`}>
      <svg
        className={`relative block w-full h-[40px] md:h-[60px] ${flip ? 'rotate-180' : ''}`}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,4.75,55.05,10.3,84.4,15.66,134.77,24.87,188.69,36,241.45,44.58A743,743,0,0,0,321.39,56.44Z"
          className={`${waveColor} fill-current`}
        ></path>
      </svg>
    </div>
  );
};

export default Divider2;