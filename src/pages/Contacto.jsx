import React from 'react';
import { useNavigate } from 'react-router-dom';

const MapModule = () => {
  const navigate = useNavigate();
  const address = "1293 New Garden rd greensboro nc 27410";
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    /* Contenedor que centra todo en la pantalla */
    <div className="min-h-screen w-full flex items-center justify-center bg-base-200 p-4">
      
      <div className="card w-full max-w-3xl bg-base-200 shadow-2xl border border-base-300 overflow-hidden">
        
        {/* Header - Sin botón de cerrar */}
        <div className="p-4 bg-base-300">
          <h2 className="font-bold text-lg flex items-center gap-2">
            <span className="text-primary">📍</span> Ubicación
          </h2>
        </div>

        {/* Iframe - Colores normales (sin clases de grayscale) */}
        <figure className="w-full h-80 md:h-96">
          <iframe
            title="Google Map"
            className="w-full h-full border-0"
            src={mapUrl}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </figure>

        {/* Footer con info y navegación */}
        <div className="card-body p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <p className="text-xs font-bold text-primary uppercase tracking-widest">Greensboro, NC</p>
              <p className="text-base-content font-medium">{address}</p>
            </div>
            
            {/* <div className="card-actions flex gap-2">
              Botón para volver usando react-router-dom
              <button 
                onClick={() => navigate(-1)} 
                className="btn btn-outline btn-sm"
              >
                Regresar
              </button>
              
              Botón de acción principal
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm md:btn-md"
              >
                Abrir en Maps
              </a>
            </div> */}
          </div>
        </div>
      </div>

    </div>
  );
};

export default MapModule;