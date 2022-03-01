<section class="py-12 relative max-w-xxl mx-auto">
    <h1 class="tracking-widest text-primary uppercase text-xl text-center font-black font-family-black">Avec le soutien de</h1>
    <div class="max-w-max mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 mt-8">
        <?php for ($x = 1; $x <= 2; $x++): ?>
            <figure class=" max-h-support relative mb-8">
                <img class="backdrop-grayscale h-full w-full object-contain"
                     src="<?php echo get_template_directory_uri() . '/resources/images/support/' . $x . '.svg' ?>"
                     alt="Image of">
                <div class="absolute backdrop-grayscale bg-white/30 h-full w-full top-0"></div>
                <figcaption class="sr-only">ghjk</figcaption>
            </figure>
        <?php endfor; ?>
    </div>
</section>