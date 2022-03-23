<div class="mt-12 md:mt-36 lg:mt-0 text-white relative px-5 lg:mb-12 mx-auto lg:static lg:grid lg:grid-cols-movie-lg lg:items-center max-w-screen xl:max-w-movie gap-6 md:min-h-screen">
    <div>
        <h1 class="mb-8 font-black leading-none text-center uppercase font-family-black text-23px lg:text-movie-title lg:text-left"><?= the_title(); ?></h1>
        <?php if (get_the_excerpt()): ?>
            <div class="hidden lg:block">
                <?= wp_trim_words(get_the_excerpt(), 45); ?>
            </div>
        <?php endif ?>
        <div class="hidden lg:grid lg:grid-cols-movie-cast-grid lg:text-sm mt-15 mb-25">
            <?php if (get_field('made_by')): ?>
                <p class="py-4 font-extrabold uppercase border-b font-family-extrabold border-b-white/20">
                    Réalisé par
                </p>
                <p class="pl-2.5 border-b border-b-white/20 py-4 capitalize whitespace-nowrap">
                    <?= get_field('made_by'); ?>
                </p>
            <?php endif ?>
            <?php if (get_field('casting')): ?>
                <p class="py-4 font-extrabold uppercase border-b font-family-extrabold border-b-white/20">
                    Interprété par</p>
                <p class="pl-2.5 border-b border-b-white/20 py-4 whitespace-nowrap capitalize"><?php the_field('casting'); ?></p>
            <?php endif ?>
            <?php if (get_field('genre')): ?>
                <p class="py-4 font-extrabold uppercase border-b font-family-extrabold border-b-white/20">
                    Type</p>
                <p class="pl-2.5 border-b border-b-white/20 py-4 line-clamp-1 capitalize"><?php the_field('genre'); ?></p>
            <?php endif ?>
        </div>
        <a href="#info" title=""
           class="hidden px-6 text-sm font-bold tracking-widest uppercase duration-150 ease-in lg:inline-block bg-primary font-family-bold py-15px mb-15 hover:text-primary shadow-set-hover hover:shadow-hover-white">En
            savoir plus<span class="sr-only"> sur <?= the_title(); ?></span> <i
                    class="ml-2.5 fa-regular fa-angle-down"></i>
        </a>
    </div>
    <a class="flex justify-self-center xxl:justify-self-end absolute top-1/2 left-1/2 flex-col justify-center items-center bg-white rounded-full duration-150 -translate-x-1/2 lg:static lg:translate-x-0 w-play lg:w-play-lg aspect-square lg:bg-white/10 hover:bg-primary fill-primary lg:fill-white/50 hover:fill-white/100 lg:justify-start"
       href="https://media.w3.org/2010/05/sintel/trailer.mp4" data-fancybox>
        <img class="hidden lg:mt-3 lg:inline-block"
             src="<?php echo get_template_directory_uri() . '/resources/images/logo/ba.png' ?>"
             alt="Adieu Monsieur Haffman">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 40"
             class="ml-2 h-play-logo w-play-logo lg:h-play-logo-lg lg:w-play-logo-lg lg:-mt-1">
            <path id="Polygone_1" data-name="Polygone 1" d="M20,0,40,35H0Z"
                  transform="translate(35) rotate(90)"/>
        </svg>
        <span class="sr-only">Regarder la bande annonce</span>
    </a>
    <?php if (has_post_thumbnail()): ?>
        <div class="self-end mx-auto lg:mx-0 w-auto w-full">
            <?= get_the_post_thumbnail(null, 'medium_large', ['class' => 'top-0 w-full h-full object-contain object-top']); ?>
        </div>
    <?php endif; ?>
</div>