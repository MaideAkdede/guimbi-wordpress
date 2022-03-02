<section class="pb-12 colored-box relative">
    <h1 class="underline-title">Évènements</h1>
    <div class="owl-carousel-regular owl-carousel owl-theme max-w-xxl mx-auto">
        <?php for ($x = 1; $x <= 4; $x++): ?>
            <article class="text-center font-bold font-family-bold relative aspect-card">
                <img class="h-full w-full object-cover" src="<?= get_template_directory_uri() . '/resources/images/event/'.$x.'.png' ?>" alt="">
                <div class="bg-white mx-auto -mt-full absolute bottom-0 z-10 w-full py-8 px-6">
                    <time class="text-15px text-primary">Mercredi 09 février</time>
                    <h2 class="article-title text-lg text-center mb-4">L‘empire du silence</h2>
                    <p class="tag mx-auto">Projection</p>
                </div>
                <a class="z-20 hover-block absolute top-0 left-0 right-0 block z-5 h-full w-full border-2 border-opacity-0 border-primary hover:border-opacity-100 focus:outline-none focus:border-opacity-100 transition-all overflow-y-hidden"
                   href="" title="Voir l‘évènement l‘empire du silence">
                    <div class="transition duration-300 ease-in-out translate-y-full bg-opacity-0 h-1/5 w-full bg-primary absolute bottom-0 rounded-sm font-bold font-dm-bold text-pixel-13 uppercase text-white grid place-content-center">
                        <p class="flex items-center">Voir l‘évènement <span class="sr-only">l'empire du silence</span> <i class="ml-4 fa-solid fa-caret-right"></i></p>
                    </div>
                </a>
            </article>
        <?php endfor; ?>
    </div>
</section>