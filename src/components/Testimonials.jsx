import React from 'react';

import img1 from '../../public/images/usuario.png';

// DATA OF TESTIMONIALS (Las 7 opiniones respetando tus servicios y diseño)
const testimonials = [
  {
    name: "Carlos Mendoza",
    // role: "Director de Obra - BuildCorp",
    img: img1,
    text: "El trabajo en la Funda 'CR7' Comandante superó mis expectativas. La pintura a mano alzada del festejo se ve increíble y el fondo negro tiene un brillo impecable. Un regalo perfecto para cualquier fan.",
    service: "Funda \"CR7\" Comandante"
  },
  {
    name: "Javier Espinoza",
    // role: "Administradora de Oficinas Tech",
    img: img1,
    text: "El diseño del Termo Cervecero 'Luffy - One Piece' es de otro nivel. La envoltura gráfica se siente súper resistente al uso diario y el acabado brillante hace que los colores resalten muchísimo.",
    service: "Termo Cervecero \"Luffy - One Piece\""
  },
  {
    name: "Valeria Gómez",
    // role: "Propietario de Centro Comercial",
    img: img1,
    text: "Pedí la funda con el retrato de mis perritos y quedé encantada. Capturaron sus caritas a la perfección sobre ese fondo abstracto de pinceladas. Un trabajo artesanal hermoso.",
    service: "Funda de mascotas"
  },
  {
    name: "Andrea Flores",
    // role: "Residente Particular",
    img: img1,
    text: "Compramos el Dúo de Fundas para nuestro aniversario y nos fascinaron. El estilo sin rostro se ve muy moderno y el toque de las salpicaduras doradas metálicas les da un acabado premium único.",
    service: "Dúo de fundas para Pareja"
  },
  {
    name: "Daniel Silva",
    // role: "Gerente de Boutique",
    img: img1,
    text: "La personalización de la funda fue un verdadero arte. El nivel de detalle en el paisaje de la playa, las palmeras y las letras hechas a pincel es una locura. Se nota la dedicación en cada trazo.",
    service: "Funda de \"Junior H\""
  }
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Título Principal de la Sección de Opiniones */}
        <div className="text-center mb-16">
          <p className="text-[#E5BA5A] font-bold tracking-widest uppercase text-sm mb-2">Testimonios reales</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 italic">
            LO QUE DICEN <span className="text-[#E5BA5A] font-normal not-italic">Nuestros Clientes</span>
          </h2>
          <div className="w-24 h-1 bg-[#E5BA5A] mx-auto"></div>
          <p className="mt-6 text-gray-500 font-medium italic">Opiniones basadas en experiencias reales.</p>
        </div>

        {/* Grid de 7 opiniones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-0">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-50 p-6 rounded-3xl border border-pink-50 shadow-sm relative pt-16 mt-8">
              
              {/* Imagen de Perfil Flotante Superior (Estilo circular Prestige) */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-400 shadow-xl">
                  <img 
                    src={testimonial.img} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Estrella decorativa en la esquina del avatar */}
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#E5BA5A] rounded-full border-2 border-white flex items-center justify-center shadow-md">
                  <span className="text-white text-xs font-bold">★</span>
                </div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="text-center flex flex-col h-full justify-between w-full">
                <div>
                  {/* Badge con el servicio contratado */}
                  <span className="text-[10px] bg-[#E5BA5A]/90 text-white font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-4">
                    {testimonial.service}
                  </span>
                  <p className="text-gray-600 text-sm italic mb-6 leading-relaxed px-2">
                    "{testimonial.text}"
                  </p>
                </div>
                
                {/* Autor de la opinión */}
                <div className="mt-auto border-t border-gray-200/60 pt-3">
                  <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Llamado a la acción inferior */}
        <div className="mt-20 p-10 bg-gray-50 rounded-3xl text-center border-2 border-dashed border-[#E5BA5A]">
          <h4 className="text-xl font-bold text-gray-800 mb-4">¿Quieres solicitar un plan a medida?</h4>
          <button className="btn bg-[#E5BA5A] hover:text-blue text-white border-none px-8 rounded-full">
            <a href="/cotizar">Solicitar Cotización</a>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;