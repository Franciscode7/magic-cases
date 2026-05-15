import React from 'react';

const services = [
  {
    id: 1,
    sitio: "Residencia Santa Fe",
    tipo: "Limpieza Profunda",
    descripcion: "Desinfección total de áreas comunes, cocina y habitaciones con acabado premium.",
    imagenes: ["./src/assets/Cimg1.webp"]
  },
  {
    id: 2,
    sitio: "Oficinas TechHub",
    tipo: "Limpieza Corporativa",
    descripcion: "Mantenimiento especializado de cristales, alfombras y estaciones de trabajo.",
    imagenes: ["./src/assets/Cimg2.webp"]
  },
  {
    id: 3,
    sitio: "Clínica Dental Premium",
    tipo: "Limpieza Sanitaria",
    descripcion: "Protocolos estrictos de esterilización y limpieza de superficies de alto contacto.",
    imagenes: ["./src/assets/Cimg3.webp"]
  },
  {
    id: 4,
    sitio: "Departamento Vista Mar",
    tipo: "Limpieza Post-Construcción",
    descripcion: "Remoción de residuos de obra, polvo fino y pulido de pisos recién instalados.",
    imagenes: ["./src/assets/Cimg4.webp"]
  }
];

const Portfolio = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado del Portafolio */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestro <span className="text-pink-600">Portafolio</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Calidad impecable en cada rincón. Conoce algunos de nuestros trabajos más recientes en residencias y empresas.
          </p>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => (
            <div 
              key={item.id} 
              className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              {/* Imagen */}
              <figure className="h-64 overflow-hidden">
                <img 
                  src={item.imagenes[0]} 
                  alt={item.sitio} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </figure>

              {/* Contenido */}
              <div className="card-body p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="card-title text-xl font-bold text-gray-800">
                    {item.sitio}
                  </h3>
                  <div className="badge badge-outline border-pink-600 text-pink-600 text-xs">
                    {item.tipo}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.descripcion}
                </p>

                <div className="card-actions justify-end">
                  <button className="btn btn-sm bg-pink-600 hover:bg-pink-700 text-white border-none normal-case">
                    Ver detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;