//Sidenav
const slide_menu = document.querySelectorAll(".sidenav");
M.Sidenav.init(slide_menu, {});



//Animação do Conteúdo
ScrollReveal().reveal('#apresentacao', { duration: 2000 });
//Apresentação
ScrollReveal().reveal('#img-apresentacao', { delay: 500 });
ScrollReveal().reveal('#img-apresentacao', { duration: 2000 });
//Objetivo
ScrollReveal().reveal('#text-objetivo', { delay: 100 });
ScrollReveal().reveal('#text-objetivo', { duration: 2000 });
ScrollReveal().reveal('#content-objetivo', { delay: 600 });
ScrollReveal().reveal('#content-objetivo', { duration: 2000 });
ScrollReveal().reveal('#img-objetivo', { delay: 1200 });
ScrollReveal().reveal('#img-objetivo', { duration: 2000 });

ScrollReveal().reveal('#content-objetivo-m', { delay: 1000 });
ScrollReveal().reveal('#content-objetivo-m', { duration: 2000 });

//Sobre
ScrollReveal().reveal('#text-sobre', { delay: 100 });
ScrollReveal().reveal('#text-sobre', { duration: 2000 });
ScrollReveal().reveal('#content-sobre', { delay: 600 });
ScrollReveal().reveal('#content-sobre', { duration: 2000 });
ScrollReveal().reveal('#img-sobre', { delay: 100 });
ScrollReveal().reveal('#img-sobre', { duration: 2000 });

ScrollReveal().reveal('#content-sobre-m', { delay: 1200 });
ScrollReveal().reveal('#content-sobre-m', { duration: 2000 });

//Footer
ScrollReveal().reveal('#footer-info', { delay: 100 });
ScrollReveal().reveal('#footer-info', { duration: 2000 });

//Inicialização Scrollspy
$(document).ready(function(){
    $('.scrollspy').scrollSpy();
});