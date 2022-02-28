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
            document.querySelector('header').classList.toggle('min-h-screen');
            document.querySelector('header').classList.toggle('bg-menu-texture');
      });
      //
           document.addEventListener('resize', ()=>{
               /*  if (window.matchMedia("(max-width: 768px)").matches) {
                       document.querySelector('.carousel-actu').classList.add('owl-carousel-regular', 'owl-carousel', 'owl-theme');
                 } else {
                       document.querySelector('.carousel-actu').classList.remove('owl-carousel-regular owl-carousel owl-theme');
                 }*/
           });
});
/*

import jquery from "jquery";
$ = jQuery = jquery;
jQuery(document).ready(function($) {
      var alterClass = function() {
            this.width = document.body.clientWidth;
            if (this.width < 768) {
                  $('.carousel-actu').addClass('owl-carousel-regular owl-carousel owl-theme');
            } else if (this.width >= 768) {
                  $('.carousel-actu').removeClass('owl-carousel-regular owl-carousel owl-theme');

            }
      };
      $(window).resize(function(){
            alterClass();
            location.reload();
      });
      alterClass();
});*/