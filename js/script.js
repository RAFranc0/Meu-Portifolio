//Links do cabeçalho

document.getElementById("pg-sobre").addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if(target)
    {
        target.scrollIntoView({ behavior: 'smooth' });
    }
})

document.getElementById("pg-projetos").addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if(target)
    {
        target.scrollIntoView({ behavior: 'smooth' });
    }
})

document.getElementById("pg-contatos").addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if(target)
    {
        target.scrollIntoView({ behavior: 'smooth' });
    }
})

//Botões
document.getElementById("sobre-btn").addEventListener("click", function () {
    this.classList.add("btn-clicado")

    setTimeout(() => {
        this.classList.remove("btn-clicado");
    }, 400);
})

document.getElementById("slide-btn").addEventListener("click", function () {
    this.classList.add("btn-clicado")

    setTimeout(() => {
        this.classList.remove("btn-clicado");
    }, 400);

    window.open("https://github.com/RAFranc0/SATWeb", "_blank");
})
//Carrossel

const slides = document.getElementById('slides');
const totalSlides = slides.children.length;
let index = 0;

const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

function updateCarousel() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

document.getElementById('link-gmail').addEventListener('click', function (e) {
  e.preventDefault();

  const email = 'raul.franco266@gmail.com';
  const tooltip = this.querySelector('.tooltip-email');

  // Copia para área de transferência
  navigator.clipboard.writeText(email).then(() => {
    // Mostra o balão com "Copiado!"
    tooltip.textContent = 'Copiado!';
    tooltip.classList.add('mostrar');

    // Esconde após 2,5 segundos
    setTimeout(() => {
      tooltip.classList.remove('mostrar');
    }, 2500);
  }).catch(err => {
    tooltip.textContent = 'Erro ao copiar';
    tooltip.classList.add('mostrar');

    setTimeout(() => {
      tooltip.classList.remove('mostrar');
    }, 2500);
  });
});
