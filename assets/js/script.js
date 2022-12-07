window.sr = ScrollReveal({ reset: true });

sr.reveal('.reveal', {
     duration: 1500,
     rotate: { x: 55, y: 5, z: 0},
    });

ScrollReveal();

function showMenu() {
    let menuMobile = document.querySelector('.mobile-menu');

    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/hamburguer-open.png"
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/hamburguer-close.png"
    }
}
