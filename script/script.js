document.addEventListener('DOMContentLoaded', function() {
        window.addEventListener('scroll', function() {
            let scroll = document.querySelector('.rolagem');
            scroll.classList.toggle('ativo', window.scrollY > 80);
        });

        function voltarTopo() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

    const cards = document.querySelectorAll('.card');
    const antButton = document.querySelector('.anterior');
    const proxButton = document.querySelector('.proximo');
    let currentIndex = 0;

    function proximoCard() {
        antButton.style.display = currentIndex === 0 ? 'none' : 'block';
        proxButton.style.display = currentIndex === cards.length - 1 ? 'none' : 'block';
    }

    proxButton.addEventListener('click', () => {
        cards[currentIndex].classList.remove('ativo');
        currentIndex = (currentIndex + 1) % cards.length;
        cards[currentIndex].classList.add('ativo');
        proximoCard();
    });

    antButton.addEventListener('click', () => {
        cards[currentIndex].classList.remove('ativo');
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        cards[currentIndex].classList.add('ativo');
        proximoCard();
    });

    proximoCard();

    let btnMenu = document.getElementById('btnMenu');
    let menu = document.getElementById('menuMobile');
    let overlay = document.querySelector('.overlay-menu');
    let btnFechar = document.querySelector('.btn-fechar');
    let menuLinks = document.querySelectorAll('.nav-mobile .link-menu');

    btnMenu.addEventListener('click', () => {
        menu.classList.add('abrir-menu');
        overlay.style.display = 'block';
    });

    function fecharMenu() {
        menu.classList.remove('abrir-menu');
        overlay.style.display = 'none';
    }

    overlay.addEventListener('click', fecharMenu);
    btnFechar.addEventListener('click', fecharMenu);
    menuLinks.forEach(link => {
        link.addEventListener('click', fecharMenu);
    });

    let btnVoltarTopo = document.getElementById('botaoVoltarTopo');
    btnVoltarTopo.addEventListener('click', voltarTopo);
});
