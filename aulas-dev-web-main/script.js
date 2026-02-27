const botao   = document.getElementById('botaoLogo');
const mensagem = document.getElementById('mensagem');
const logo    = document.getElementById('logo');

botao.addEventListener('click', function () {
  logo.classList.toggle('logo-visivel');

  if (logo.classList.contains('logo-visivel')) {
    botao.textContent     = 'Esconder Logo';
    mensagem.textContent  = 'Aqui está a logo da Unifor!';
  } else {
    botao.textContent     = 'Mostrar Logo';
    mensagem.textContent  = 'Clique no botão para ver a logo';
  }
});



const elementosAnimar = document.querySelectorAll('.animar');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visivel');
      }, index * 200);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

elementosAnimar.forEach(elemento => observer.observe(elemento));



const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});



const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('aberto');
  navLinks.classList.toggle('aberto');
});


navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('aberto');
    navLinks.classList.remove('aberto');
  });
});