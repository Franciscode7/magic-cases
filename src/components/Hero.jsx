import imagenFondo from '/images/images.webp'; 

const Hero = () => {
  return (
    /* 1. Contenedor externo: Este da el margen real a los lados (mx-auto y px) */
    <div className="w-full pt-8 bg-white px-0 md:px-10 lg:px-0">
      
      {/* 2. El Hero con la imagen: Aquí limitamos el ancho y redondeamos */}
      <section 
        className="hero min-h-[70vh]  overflow-hidden shadow-2xl mx-auto max-w-full" 
        style={{ 
          backgroundImage: `url(${imagenFondo})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        {/* Overlay */}
        <div className="hero-overlay bg-gray-900 bg-opacity-60"></div>

        {/* Contenido */}
        <div className="hero-content text-center text-white p-6 md:p-12">
          <div className="max-w-3xl">
            
            <br /><br />
            <h1 className="text-3xl md:text-6xl font-extrabold leading-tight mb-6">
              <br /><span className="text-[#E5BA5A] text-4xl md:text-6xl">Magic Moment Cases </span> <br />
              fundas personalizadas <br />
              de alta calidad 
            </h1>
            
            <p className="text-lg md:text-xl leading-relaxed mb-10 opacity-90">
              Lleva tu personalidad en cada detalle con un diseño creada especialmente para ti. 
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/cotizar" 
                className="btn btn-primary bg-[#4682B4]/70 btn-lg text-xl px-12 text-white border-white/40  transition-colors duration-300 hover:bg-blue-800 hover:border-gray-300">
                Obtener Cotización
              </a>
              <a href="/servicios" 
                className="btn btn-outline bg-transparent text-2xl btn-lg text-gray-100 border-white/40 transition-colors duration-300 hover:text-[#E5BA5A] hover:bg-gray-100/20 hover:border-gray-300">
                Servicios
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;