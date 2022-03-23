import {Carousel, Fancybox} from "@fancyapps/ui";

if (document.querySelector("#mainCarousel")) {
// Initialise Carousel
    const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
        infinite: false,
        Navigation: false,
    });

// Initialise Fancybox
    Fancybox.bind('[data-fancybox="gallery"]', {
        Carousel: {
            on: {
                change: (carousel, to) => {
                    // Sync Carousel slide
                    // ===
                    const $el = Fancybox.getInstance()
                        .getSlide()
                        .$trigger.closest(".carousel__slide");

                    const slide = mainCarousel.slides.find((slide) => {
                        return slide.$el === $el;
                    });

                    mainCarousel.slideTo(slide.index, {
                        friction: 0,
                    });
                },
            },
        },
    });
}