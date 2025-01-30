document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector('.menu');
    const NavMenu = document.querySelector('.nav-menu');
    const menuLinks = document.querySelectorAll(".nav-menu a[href^='#']");

    // Toggle do menu hamburguer
    menu.addEventListener('click', () => {
        menu.classList.toggle('ativo');
        NavMenu.classList.toggle('ativo');
    });

    // Scroll suave ao clicar no menu
    menuLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Ajuste para menus fixos
                    behavior: "smooth"
                });
            }

            // Fecha o menu ao clicar em um item (importante para mobile)
            menu.classList.remove('ativo');
            NavMenu.classList.remove('ativo');
        });
    });
});
