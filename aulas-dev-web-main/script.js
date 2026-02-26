const botao = document.getElementById('botaoLogo');
const mensagem = document.getElementById('mensagem');
const logo = document.getElementById('logo');

botao.addEventListener('click', function() {

    logo.classList.toggle('logo-visivel');

    if (logo.classList.contains('logo-visivel')) {
        botao.textContent = 'Esconder Logo';
        mensagem.textContent = 'Aqui está a logo da Unifor!';
    } else {
        botao.textContent = 'Mostrar Logo';
        mensagem.textContent = 'Clique no botão para ver a logo';
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
}, {
    threshold: 0.2
});

elementosAnimar.forEach(elemento => {
    observer.observe(elemento);
});