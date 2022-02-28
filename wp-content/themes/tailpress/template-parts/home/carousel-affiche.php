<section class="pb-12 my-8 colored-box relative">
    <h1 class="underline-title">À l‘affiche</h1>
    <div class="owl-carousel-regular owl-carousel owl-theme max-w-xxl mx-auto">
        <?php for ($x = 1; $x <= 4; $x++): ?>
            <figure class="relative h-full w-full">
                <img class="h-full w-full object-cover" src="<?= get_template_directory_uri() . '/resources/images/cover/' . $x . '.png' ?>" alt="">
                <figcaption class="sr-only">Titre du film</figcaption>
                <a href="" class="absolute top-0 left-0 h-full w-full focus:outline-none focus:ring-primary focus:ring-2" title="Voir titre du film">
                    <span class="sr-only">Titre du film</span>
                </a>
            </figure>
        <?php endfor; ?>
    </div>
</section>