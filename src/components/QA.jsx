import React from 'react';

const QA = () => {
  const questions = [
    {
      id: 1,
      question: "¿Qué tecnologías se utilizaron en este proyecto?",
      answer: "Este proyecto está construido con React para la interfaz, Tailwind CSS para el diseño y DaisyUI para los componentes de UI pre-diseñados."
    },
    {
      id: 2,
      question: "¿El sitio es totalmente responsivo?",
      answer: "Sí, gracias al sistema de utilidades de Tailwind, el sitio se adapta automáticamente a dispositivos móviles, tablets y computadoras de escritorio."
    },
    {
      id: 3,
      question: "¿Cómo puedo contactar con soporte técnico?",
      answer: "Puedes enviarnos un mensaje a través del formulario de contacto en la sección inferior o escribirnos directamente a nuestro correo oficial."
    },
    {
      id: 4,
      question: "¿Cuáles son los tiempos de entrega promedio?",
      answer: "Para proyectos estándar, el tiempo de entrega oscila entre 2 a 4 semanas, dependiendo de la complejidad de los requerimientos."
    },
    {
      id: 5,
      question: "¿Ofrecen servicios de mantenimiento post-lanzamiento?",
      answer: "Absolutamente. Contamos con planes de mantenimiento mensual para asegurar que tu aplicación se mantenga actualizada y segura."
    }
  ];

  return (
    <section className="py-12 bg-white px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Preguntas Frecuentes</h2>
      
      <div className="space-y-4">
        {questions.map((item) => (
          <div 
            key={item.id} 
            className="collapse collapse-plus bg-base-200 border border-base-300 rounded-box"
          >
            <input type="radio" name="my-accordion-3" defaultChecked={item.id === 1} /> 
            <div className="collapse-title text-xl font-medium">
              {item.question}
            </div>
            <div className="collapse-content"> 
              <p className="text-base-content/80">
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