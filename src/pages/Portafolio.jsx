import React from 'react';

const services = [
  {
    id: 1,
    sitio: "Funda Pareja Pop-Art (Fondo Rojo)",
    tipo: "Funda personalizada",
    descripcion: "Funda transparente personalizada con pintura a mano alzada. Presenta un fondo rojo sólido y brillante con una ilustración de estilo pop-art de una pareja abrazada.",
    imagenes: ["./images/m/1.webp"]
  },
  {
    id: 2,
    sitio: "Funda Playera \"Junior H\"",
    tipo: "Funda personalizada",
    descripcion: "Funda transparente pintada totalmente a mano. Incluye un paisaje playero detallado con palmeras, montañas y sol, letras a pincel de \"Junior H\" y una ilustración central de manos con encendedor.",
    imagenes: ["./images/m/2.webp"]
  },
  {
    id: 3,
    sitio: "Funda Bandera Gótica Personalizada",
    tipo: "Funda personalizada",
    descripcion: "Funda transparente personalizada a mano con la bandera confederada. Hecha con técnica de enmascarado para líneas limpias y rotulado gótico en blanco.",
    imagenes: ["./images/m/3.webp"]
  },
  {
    id: 4,
    sitio: "Funda Hípica \"Reyes\"",
    tipo: "Funda personalizada",
    descripcion: "Funda transparente con pintura artística a mano alzada. Presenta un paisaje forestal con un caballo appaloosa detallado, apellido \"REYES\" y logotipo personalizado en la parte superior.",
    imagenes: ["./images/m/4.webp"]
  },
  {
    id: 5,
    sitio: "Dúo de Fundas Pareja Minimalista",
    tipo: "Funda personalizada",
    descripcion: "Dúo de fundas transparentes personalizadas a juego. Tienen fondo negro sólido, ilustración de pareja en estilo minimalista \"sin rostro\" y acabado con salpicaduras doradas metálicas.",
    imagenes: ["./images/m/5.webp"]
  },
  {
    id: 6,
    sitio: "Funda Leo Messi Selección Argentina",
    tipo: "Funda personalizada",
    descripcion: "Funda transparente con diseño de Lionel Messi. Personalizada mediante impresión digital de alta calidad en blanco y negro, con detalles a color de la Selección Argentina y firma estilizada.",
    imagenes: ["./images/m/6.webp"]
  },
  {
    id: 7,
    sitio: "Funda Futbolera Club Toluca",
    tipo: "Funda personalizada",
    descripcion: "Funda transparente para cámara circular personalizada con temática de fútbol. Impresión a todo color que cubre la superficie con los jugadores del Toluca y el escudo del club de fondo.",
    imagenes: ["./images/m/7.webp"]
  },
  {
    id: 8,
    sitio: "Funda Mármol San Judas Tadeo",
    tipo: "Funda personalizada",
    descripcion: "Funda para cámara circular con diseño de San Judas Tadeo. Fondo personalizado con textura de mármol verde esmeralda, vetas doradas e iniciales pintadas en la esquina inferior.",
    imagenes: ["./images/m/8.webp"]
  },
  {
    id: 9,
    sitio: "Llavero Fotográfico Circular",
    tipo: "Llavero personalizado",
    descripcion: "Llavero metálico circular personalizado. Cuenta con un inserto fotográfico a todo color de una pareja, sellado y acoplado a una argolla de metal para usar como accesorio portátil.",
    imagenes: ["./images/m/9.webp"]
  },
  {
    id: 10,
    sitio: "Funda \"CR7\" Comandante",
    tipo: "Funda personalizada",
    descripcion: "Funda transparente personalizada con pintura a mano alzada. Fondo negro sólido sobre el que se ilustra la espalda de Cristiano Ronaldo con su icónico festejo y el dorsal 7.",
    imagenes: ["./images/m/10.webp"]
  },
  {
    id: 11,
    sitio: "Termo Cervecero \"Luffy - One Piece\"",
    tipo: "Termo personalizado",
    descripcion: "Termo de acero inoxidable personalizado con envoltura gráfica brillante de alta calidad. Diseño temático del personaje de anime Luffy con fondo oscuro y tipografía desgastada.",
    imagenes: ["./images/m/11.webp"]
  },
  {
    id: 12,
    sitio: "Funda \"Capu & Bofi\" Mascotas Pintadas",
    tipo: "Funda personalizada",
    descripcion: "Funda para teléfono pintada totalmente a mano. Cuenta con un fondo abstracto de pinceladas en tonos azul y rosa, retratos detallados de dos perritos chihuahua y sus nombres rotulados.",
    imagenes: ["./images/m/12.webp"]
  }
];

const Portfolio = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12">
      <div className="max-w-7xl py-10 mx-auto">
        
        {/* Encabezado del Portafolio */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestro <span className="text-[#E5BA5A]">Portafolio</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Calidad impecable en cada proyecto. Conoce algunos de nuestros trabajos más recientes.
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
              <figure className="h-110 overflow-hidden">
                <img 
                  src={item.imagenes[0]} 
                  alt={item.sitio} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                {/* <video
                  src={item.videoUrl} // O la propiedad correspondiente de tu objeto, por ejemplo: item.videos[0]
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  autoPlay
                  loop
                  muted
                  playsInline
                /> */}
              </figure>

              {/* Contenido */}
              <div className="card-body p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="card-title text-xl font-bold text-gray-800 text-center">
                    {item.sitio}
                  </h3>
                  <div className="badge pt-6 badge-outline border-pink-600 text-[#E5BA5A] text-sm text-center">
                    {item.tipo}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.descripcion}
                </p>

                {/* <div className="card-actions justify-end">
                  <button className="btn btn-sm bg-pink-600 hover:bg-pink-700 text-white border-none normal-case">
                    Ver detalles
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;