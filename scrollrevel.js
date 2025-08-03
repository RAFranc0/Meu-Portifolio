const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('ativo');
        } else {
            entry.target.classList.remove('ativo'); // opcional: remove animação ao sair
        }
    });
}, {
    threshold: 0.6
});

document.querySelectorAll('.section-reveal').forEach(el => observer.observe(el));
