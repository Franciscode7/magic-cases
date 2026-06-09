import React from 'react';
// import { CheckCircleIcon } from '@heroicons/react/24/outline'; // Opcional: si usas heroicons

const servicesConstruction = [
  {
    title: "Fundas Pintadas a Mano",
    img: "./images/m/10.webp",
    description: "Arte pop, realismo y/o retratos de mascotas aplicados directamente sobre la carcasa de tu celular, creando una pieza única hecha 100% a mano.",
    points: ["Ilustración detallada a mano alzada", "Aplicación de fondos sólidos, degradados o texturizados con pinceladas", "Rotulado personalizado con nombres, fechas o iniciales especiales", "Capa de sellado transparente de alta resistencia al roce diario"]
  },
  {
    title: "Termos Gráficos",
    img: "./images/m/11.webp",
    description: "Personalización de termos de acero inoxidable mediante envolturas gráficas de alta definición con acabados profesionales.",
    points: ["Impresión digital térmica de gran nitidez", "Acabado brillante o mate de larga duración", "Diseños de anime, deportes o logotipos corporativos", "Soporte al lavado regular sin pérdida de color."]
  },
  {
    title: "Dúos para Parejas",
    img: "./images/m/5.webp",
    description: "Sets de fundas complementarias o idénticas ideales para aniversarios, con diseños minimalistas y elegantes.",
    points: ["Ilustraciones de estilo minimalista o detallado", "Detalles especiales con salpicaduras en pintura metálica", "Fechas o iniciales personalizadas integradas en el diseño", "Ajuste perfecto para diferentes modelos de celular en el mismo pedido"]
  },
  {
    title: "Impresión Fotográfica y Conmemorativa",
    img: "./images/m/9.webp",
    description: "Transferencia directa de tus mejores recuerdos en fotografía sobre fundas transparentes, llaveros y accesorios portátiles.",
    points: ["Impresión directa de alta fidelidad cromática", "Integración de firmas, escudos deportivos o textos especiales", "Llaveros metálicos circulares con sellado fotográfico", "Conservación de la transparencia original en los bordes del producto"]
  }
  ,{
    title: "¿Tienes otra idea en mente?",
    img: "./images/m/idea.png",
    description: "¡No te quedes con las ganas! Si tienes en mente un producto diferente o una idea de diseño única que no ves en la lista, contáctanos directamente para platicarnos tu proyecto y lo hacemos realidad.",
    points: []
  }
];

const servicesHouse = [
  {
    title: "Llaveros destapadores personalizados",
    videoUrl: "./video/video1.mp4",
    ref: "https://www.instagram.com/reel/DQjnp9UALlb/?hl=es",
    description: "Arte pop, realismo y/o retratos de mascotas aplicados directamente sobre la carcasa de tu celular, creando una pieza única hecha 100% a mano."
  },
  {
    title: "Pelota de béisbol personalizada",
    videoUrl: "./video/video2.mp4",
    ref: "https://www.instagram.com/reel/DQwvhDkAMii/?hl=es",
    description: "Cuidado especializado para pisos de vinilo, madera o cemento que requieren brillo espejo."
  }
];

const Services = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Título Principal */}
        <div className="text-center mb-16 pt-16">
          <p className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2">Excelencia en cada detalle</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 italic">
            <span className="text-[#E5BA5A] font-normal not-italic">Personalización</span>
          </h2>
          <div className="w-24 h-1 bg-[#E5BA5A] mx-auto"></div>
          <p className="mt-6 text-gray-500 font-medium italic">Realizamos todo esto y más.</p>
        </div>

        <hr className="border-[#E5BA5A] my-8" />

        {/* Grid de Servicios construction Detallados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {servicesConstruction.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              
              {/* Imagen Circular con borde Prestige */}
              <div className="relative mb-6">
                <div className="w-48 h-48 rounded-full overflow-hidden border-[2px] border-[#E5BA5A] shadow-xl">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Elemento decorativo circular */}
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#E5BA5A] rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg font-bold">{index + 1}</span>
                </div>
              </div>

              {/* Texto Detallado */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-800 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-[16px] mb-4 leading-relaxed px-4">
                  {service.description}
                </p>
                
                {/* Lista de aspectos detallados */}
                <ul className="text-left inline-block space-y-2">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-center text-[14px] text-gray-600">
                      <div className="w-1.5 h-1.5 bg-[#E5BA5A] rounded-full mr-2 shrink-0"></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <h1 className='text-center text-4xl pt-16 text-[#D4A63B]'>Observa nuestro trabajo a detalle</h1>
        <hr className="border-[#E5BA5A] my-8" />


        {/* Grid de Servicios house Detallados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {servicesHouse.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              
              {/* Imagen Circular con borde Prestige */}
              <div className="relative mb-6">
                <div className="md:w-110 md:h-160 w-[18rem] h-115 rounded-xl overflow-hidden border-[3px] border-[#E5BA5A] shadow-xl">
                  <video
                  src={service.videoUrl} // O la propiedad correspondiente de tu objeto, por ejemplo: item.videos[0]
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                </div>
              </div>

              {/* Texto Detallado */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-800 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed px-4">
                  <a className="text-blue-600 hover:text-blue-800 flex items-center justify-center" href={service.ref} target="_blank" rel="noopener noreferrer">
                    <p className="pr-2">Ver video en pantalla completa</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Llamado a la acción simple */}
        <div className="mt-20 p-10 bg-gray-50 rounded-3xl text-center border-2 border-dashed border-[#D4A63B]">
          <h4 className="text-xl font-bold text-gray-800 mb-4">¿Necesitas un diseño a medida?</h4>
          <button className="btn bg-[#E5BA5A] hover:bg-[#D4A63B] text-white border-none px-8 rounded-full">
            <a href="/cotizar">Solicitar Cotización</a>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;