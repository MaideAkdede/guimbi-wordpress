// Owl Carousel 2
import jquery from "jquery";
$ = jQuery = jquery;
require("owl.carousel");

$(function () {
    $('.owl-carousel-regular').owlCarousel({
        loop:true,
        nav:true,
        dots:true,
        navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            640:{
                items:2
            },
            768:{
                items:3
            },
            1024:{
                items:4
            }
        }
    });
});

$(function () {
    $('.owl-date').owlCarousel({
        loop:false,
        nav:true,
        navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
        dots:false,
        responsive:{
            0:{
                items:3
            },
            640:{
                items:5
            },
            768:{
                items:7
            },
            1024:{
                items:9
            },
            1280:{
                items:11
            },
            1590:{
                items:15
            },
        }
    });
});

window.addEventListener('load', function (){
    function postsCarousel() {
        var checkWidth = $(window).width();
        var owlPost = $('.carousel-actu');
        if (checkWidth > 767) {
            if (typeof owlPost.data('owl.carousel') != 'undefined') {
                owlPost.data('owl.carousel').destroy();
            }
            owlPost.removeClass('owl-carousel-regular owl-carousel owl-theme');
        } else if (checkWidth < 768) {
            owlPost.addClass('owl-carousel-regular owl-carousel owl-theme');
            owlPost.owlCarousel({
                items: 1,
                loop:true,
                nav:true,
                dots:false,
                navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
            });
        }
    }
    postsCarousel();
    $(window).resize(postsCarousel);
});