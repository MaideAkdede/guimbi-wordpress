import('./parts/owl-carousel.js');
// Navigation toggle
window.addEventListener('load', function () {
    let main_navigation = document.querySelector('#primary-menu');
    let toggle_menu = document.querySelector('#primary-menu-toggle');
    let toggle_logo = document.querySelector('#primary-menu-toggle div');

    toggle_menu.addEventListener('click', function (e) {
        e.preventDefault();
        main_navigation.classList.toggle('hidden');
        document.querySelector('main').classList.toggle('fixed');

        toggle_menu.classList.toggle('close-menu');
        toggle_menu.classList.toggle('open-menu');

        toggle_logo.classList.toggle('toggle-logo');
        document.querySelector('header').classList.toggle('active-header');
    });

    let toggleSub = document.querySelector('.sub');
    let toggleArrow = document.querySelector('.sub i');
    let submenu = document.querySelector('.sub-menu');
    toggleSub.addEventListener('click', (e) => {
        e.preventDefault();
        submenu.classList.toggle('hidden');
        toggleArrow.classList.toggle('rotate-180');
    });

});