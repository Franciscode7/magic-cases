import React from 'react';

const QA = () => {
  const questions = [
    {
      id: 1,
      question: "¿Cómo puedo enviar la imagen o idea para mi diseño personalizado?",
      answer: "¡Es muy fácil! Al realizar tu pedido, puedes enviarnos tu idea, fotografía o referencia a través de nuestro [WhatsApp / Correo electrónico]. Si quieres un retrato de tu mascota o una ilustración específica, asegúrate de que la imagen tenga buena iluminación para capturar cada detalle a la perfección."
    },
    {
      id: 2,
      question: "¿Qué técnicas utilizan para personalizar los productos?",
      answer: "Dependiendo del producto, utilizamos dos técnicas principales: pintura a mano alzada con pintura acrílica de alta resistencia sellada sobre policarbonato (ideal para diseños únicos y artísticos en fundas), e impresión digital/sublimación de alta calidad con acabados brillantes o mate (perfecta para termos, llaveros y fundas con retratos fotográficos)."
    },
    {
      id: 3,
      question: "¿La pintura de las fundas o el diseño de los termos se borra con el uso?",
      answer: "Para nada. Todas las fundas pintadas a mano llevan una capa de sellador protector transparente de alta resistencia que evita que la pintura se raye o se caiga con el roce diario"
    },
    {
      id: 4,
      question: "¿Cuánto tiempo tarda en estar listo mi pedido?",
      answer: "Al ser piezas artesanales y personalizadas, el tiempo de elaboración suele ser de entre 5 y 10 días hábiles desde que se confirma el diseño. Una vez terminado, te enviaremos una foto del resultado final antes de realizar el envío para asegurarnos de que te encante."
    },
    {
      id: 5,
      question: "¿Tienen fundas disponibles para todos los modelos de celular?",
      answer: "Contamos con un amplio catálogo de fundas transparentes y de alto impacto para las marcas más populares (iPhone, Samsung, Xiaomi, Motorola, etc.). Te recomendamos consultar la disponibilidad de tu modelo exacto antes de realizar tu compra para asegurar una compatibilidad perfecta."
    },
    {
      id: 6,
      question: "¿Cuáles son los cuidados recomendados para que mi producto personalizado dure más?",
      answer: "Para las fundas pintadas a mano, evita limpiarlas con alcohol, acetona o líquidos abrasivos; un paño de microfibra ligeramente húmedo es suficiente para mantenerlas limpias."
    },
    {
      id: 7,
      question: "¿Hacen envíos a todo el país?",
      answer: "¡Sí, hacemos envíos a toda la república! Trabajamos con las principales paqueterías para asegurar que tu pedido llegue seguro. Los costos de envío varían según la ubicación y el tamaño del pedido. Una vez que el paquete sea recolectado, te compartiremos tu número de guía para que puedas rastrearlo en tiempo real."
    }
  ];

  return (
    <section className="py-12 bg-gray-100 px-4 max-w-3xl mx-auto rounded-lg shadow-lg">
      <h2 className="text-5xl font-bold text-center mb-10 mt-0 text-blue-900">Preguntas Frecuentes</h2>
      
      <div className="space-y-4">
        {questions.map((item) => (
          <div 
            key={item.id} 
            className="collapse collapse-plus bg-white text-[#E5BA5A] border border-[#E5BA5A] rounded-box"
          >
            <input type="radio" name="my-accordion-3" defaultChecked={item.id === 1} /> 
            <div className="collapse-title text-xl font-medium">
              {item.question}
            </div>
            <div className="collapse-content"> 
              <p className="text-black text-justify">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QA;