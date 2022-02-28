<section class="py-12 relative">
    <h1 class="underline-title">Actualités</h1>
    <div class="max-w-xxl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 px-5 carousel-actu">
        <?php for ($x = 1; $x <= 4; $x++): ?>
            <article class="text-center font-bold font-family-bold relative aspect-card-long drop-shadow-md md:aspect-auto md:grid md:grid-cols-md-actu md:text-left">
                <img class="h-full w-full object-cover" src="<?= get_template_directory_uri() . '/resources/images/event/'.$x.'.png' ?>" alt="">
                <div class="bg-white mx-auto -mt-full absolute bottom-0 z-10 w-full py-8 px-6 md:static">
                    <time class="text-15px text-primary">Mercredi 09 février</time>
                    <h2 class="text-lg mb-4">L‘empire du silence</h2>
                    <p class="text-left text-dark font-normal font-family-regular line-clamp-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis dignissimos esse nihil porro praesentium quibusdam similique vel. Ab architecto dolor dolorum eos sed velit voluptatum. Debitis provident quidem suscipit!</p>
                    <a href="" title="" class="max-w-max block mx-auto pt-2 pb-1 px-3 mt-6 uppercase text-xs text-primary hover:text-white hover:bg-primary md:mx-0 focus:text-white focus:bg-primary focus:outline-none focus:ring-primary focus:ring-2 focus:ring-offset-2">En savoir plus<span class="sr-only"> sur XXX</span></a>
                </div>
            </article>
        <?php endfor; ?>
    </div>
</section>