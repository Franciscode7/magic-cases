const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
});

prev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
});

/* Auto carrusel */
setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 5000);

/* FAQ ACCORDION */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        // cerrar otros abiertos (opcional estilo profesional)
        faqItems.forEach(i => {
            if (i !== item) {
                i.classList.remove("active");
            }
        });

        item.classList.toggle("active");
    });
});

/* HEADER SCROLL EFFECT */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const whatsappBtn = document.querySelector(".whatsapp-btn");

const mensaje = encodeURIComponent(
  "Hola, me gustaría solicitar una cotización de limpieza."
);

whatsappBtn.href = `https://wa.me/529241374730?text=${mensaje}`;