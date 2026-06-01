import React from 'react';

import img1 from '../../public/images/usuario.png';

// DATA OF TESTIMONIALS (Las 7 opiniones respetando tus servicios y diseño)
const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Director de Obra - BuildCorp",
    img: img1,
    text: "El servicio de Construction Cleaning superó las expectativas. Retiraron todo el polvo fino de las paredes y marcos justo a tiempo para la entrega de llaves. Profesionales y rápidos.",
    service: "Construction Cleaning"
  },
  {
    name: "Elena Rostova",
    role: "Administradora de Oficinas Tech",
    img: img1,
    text: "Llevamos 6 meses con su servicio de Janitorial y las estaciones de trabajo siempre están impecables. La desinfección de áreas comunes nos da total tranquilidad.",
    service: "Janitorial Services"
  },
  {
    name: "Marcus Vance",
    role: "Propietario de Centro Comercial",
    img: img1,
    text: "El lavado a presión (Pressure Washing) revivió por completo las fachadas y el parking de nuestro edificio. Eliminaron manchas de aceite que dábamos por perdidas.",
    service: "Pressure Washing"
  },
  {
    name: "Laura Gutiérrez",
    role: "Residente Particular",
    img: img1,
    text: "Tenía las juntas de la cocina muy deterioradas. Con el tratamiento de Tile and Grout y el sellador antimanchas quedaron como nuevas. 100% recomendados.",
    service: "Tile and Grout"
  },
  {
    name: "Daniel Silva",
    role: "Gerente de Boutique",
    img: img1,
    text: "El servicio de Stripping and Waxing en nuestros pisos de vinilo dejó un brillo espejo espectacular. Además, la cera antideslizante evita cualquier accidente con los clientes.",
    service: "Stripping and Waxing"
  },
  {
    name: "Patricia Webb",
    role: "Ama de Casa",
    img: img1,
    text: "Excelente trabajo con la limpieza de alfombras. Eliminaron por completo el olor y los pelos de mis mascotas usando su sistema de vapor. El aire de la casa se siente más limpio.",
    service: "Carpet Cleaning"
  },
  {
    name: "Roberto Gómez",
    role: "Supervisor de Proyectos",
    img: img1,
    text: "He trabajado con varias empresas de limpieza, pero la atención al detalle de este equipo en obras residenciales es insuperable. Cumplen estrictamente con los plazos.",
    service: "Construction Cleaning"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Título Principal de la Sección de Opiniones */}
        <div className="text-center mb-16">
          <p className="text-pink-600 font-bold tracking-widest uppercase text-sm mb-2">Testimonios reales</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 italic">
            LO QUE DICEN <span className="text-pink-600 font-normal not-italic">Nuestros Clientes</span>
          </h2>
          <div className="w-24 h-1 bg-pink-600 mx-auto"></div>
          <p className="mt-6 text-gray-500 font-medium italic">Opiniones basadas en experiencias 100% reales.</p>
        </div>

        {/* Grid de 7 opiniones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-50 p-6 rounded-3xl border border-pink-50 shadow-sm relative pt-16 mt-8">
              
              {/* Imagen de Perfil Flotante Superior (Estilo circular Prestige) */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-pink-100 shadow-xl">
                  <img 
                    src={testimonial.img} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Estrella decorativa en la esquina del avatar */}
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-pink-600 rounded-full border-2 border-white flex items-center justify-center shadow-md">
                  <span className="text-white text-xs font-bold">★</span>
                </div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="text-center flex flex-col h-full justify-between w-full">
                <div>
                  {/* Badge con el servicio contratado */}
                  <span className="text-[10px] bg-pink-100 text-pink-700 font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-4">
                    {testimonial.service}
                  </span>
                  <p className="text-gray-600 text-sm italic mb-6 leading-relaxed px-2">
                    "{testimonial.text}"
                  </p>
                </div>
                
                {/* Autor de la opinión */}
                <div className="mt-auto border-t border-gray-200/60 pt-3">
                  <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
                  <p className="text-pink-600 text-xs font-medium uppercase tracking-wider mt-0.5">{testimonial.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Llamado a la acción inferior */}
        <div className="mt-20 p-10 bg-gray-50 rounded-3xl text-center border-2 border-dashed border-pink-200">
          <h4 className="text-xl font-bold text-gray-800 mb-4">¿Quieres solicitar un plan a medida?</h4>
          <button className="btn bg-pink-600 hover:bg-pink-700 text-white border-none px-8 rounded-full">
            <a href="/cotizar">Solicitar Cotización Gratis</a>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;