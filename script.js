// Efeito Parallax: ajuste da posição do fundo durante o scroll
window.addEventListener('scroll', function() {
    var container = document.querySelector('#container');
    var containerTwo = document.querySelector('#container-two');
    
    // Calcula a posição do scroll
    var scrollPosition = window.pageYOffset;

    // Move o fundo de acordo com o movimento do scroll (parallax)
    container.style.backgroundPosition = 'center ' + (scrollPosition * 0.5) + 'px';
    containerTwo.style.backgroundPosition = 'center ' + (scrollPosition * 0.5) + 'px';
});
