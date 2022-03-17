<?php get_header(); ?>
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <div class="mt-10vh text-white h-1/2 md:h-75vh lg:h-78vh lg:grid lg:place-content-center">
        <div class="relative lg:grid lg:grid-cols-movie-lg xl:grid-cols-movie lg:items-center max-w-movie mx-auto lg:gap-4 px-5">
            <div class="xl:col-start-1 lg:justify-self-start">
                <h1 class="uppercase font-black font-family-black text-23px lg:text-movie-title leading-none mb-8 text-center lg:text-left"><?= the_title(); ?></h1>
                <?php if (get_the_excerpt()): ?>
                    <div class="hidden lg:block">
                        <?= wp_trim_words(get_the_excerpt(), 45); ?>
                    </div>
                <?php endif ?>
                <div class="hidden lg:grid lg:grid-cols-movie-cast lg:text-sm mt-15 mb-25">
                    <?php if (get_field('made_by')): ?>
                        <p class="font-extrabold font-family-extrabold uppercase py-4 border-b border-b-white/20 ">
                            Réalisé par</p>
                        <p class="pl-2.5 border-b border-b-white/20 py-4 line-clamp-1 capitalize"><?php the_field('made_by');?></p>
                    <?php endif ?>
                    <?php if (get_field('casting')): ?>
                        <p class="font-extrabold font-family-extrabold uppercase py-4 border-b border-b-white/20 ">
                            Interprété par</p>
                        <p class="pl-2.5 border-b border-b-white/20 py-4 line-clamp-1 whitespace-nowrap capitalize"><?php the_field('casting');?></p>
                    <?php endif ?>
                    <?php if (get_field('genre')): ?>
                        <p class="font-extrabold font-family-extrabold uppercase py-4 border-b border-b-white/20 ">
                            Type</p>
                        <p class="pl-2.5 border-b border-b-white/20 py-4 line-clamp-1 capitalize"><?php the_field('genre');?></p>
                    <?php endif ?>
                </div>
                <a href="#info" title=""
                   class="hidden lg:inline-block bg-primary text-sm font-bold font-family-bold uppercase tracking-widest px-6 py-15px mb-15 hover:text-primary shadow-set-hover hover:shadow-hover-white duration-150 ease-in">En
                    savoir plus<span class="sr-only"> sur <?= the_title(); ?></span> <i
                            class="ml-2.5 fa-regular fa-angle-down"></i>
                </a>
            </div>
            <a class="absolute top-1/2 left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 xl:col-start-3 lg:justify-self-center rounded-full w-play lg:w-play-lg aspect-square duration-150 lg:bg-white/10 hover:bg-primary fill-primary bg-white lg:fill-white/50 hover:fill-white/100 flex flex-col items-center justify-center lg:justify-start"
               href="https://media.w3.org/2010/05/sintel/trailer.mp4" data-fancybox>
                <img class="lg:mt-3 hidden lg:inline-block"
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
                <div class="xl:col-start-4 lg:justify-self-end lg:z-1 mx-auto w-80vw max-w-movie-image">
                    <?= get_the_post_thumbnail(null, 'medium_large', ['class' => 'top-0 xl:mt-36 w-full h-full object-contain object-top']); ?>
                </div>
            <?php endif; ?>
        </div>
    </div>
    <div class="lg:grid lg:max-w-movie lg:mx-auto lg:auto-rows-auto lg:grid-cols-[1fr_auto]" id="info">
        <div class="lg:col-start-1">
            <div class="hidden lg:grid grid-cols-2-auto-1fr max-w-details mt-36 px-5 mb-5 lg:px-0 lg:pl-5">
                <button class="detail underline-title-button text-xl pr-10.5 py-5 active">En détails</button>
                <button class="synopsis underline-title-button text-xl px-10.5 py-5">Synopsis</button>
            </div>
            <p class="lg:hidden underline-title md:mt-">Informations</p>
            <section class="synopsis lg:hidden lg:max-w-details px-5">
                <h2 class="sr-only">Synopsis</h2>
                <div class="font-bold font-family-bold my-9">
                    <?php the_excerpt(); ?>
                </div>
                <div class="relative after:block after:h-1/2 after:w-full after:absolute after:bottom-0 after:bg-gradient-to-t after:from-white after:to-white/0 lg:after:hidden synopsis-wysiwyg synopsis-wysiwyg-hidden">
                    <?php the_content(); ?>
                    <a href=""
                       title="Télécharger fiche de <?= the_title(); ?>"
                       class="hidden first:block max-w-max font-bold font-family-bold uppercase text-primary text-xs md:text-sm lg:text-base border-2px border-primary px-6 pt-4 pb-3 hover:text-white shadow-set-hover hover:shadow-hover duration-150 ease-in mb-4 lg:block">
                        Télécharger la fiche du film <span class="sr-only"><?= the_title(); ?></span> <i
                                class="ml-3 fa-solid fa-down-from-line"></i></a>
                </div>
                <a href=""
                   class="readmore lg:hidden block text-center -mt-7 mb-3 text-xs font-bold font-family-bold uppercase text-primary my-12"><span>Lire Plus</span><span
                            class="hidden">Cacher</span><i class="ml-2.5 fa-solid fa-angle-down"></i></a>
            </section>
            <section class="detail lg:max-w-details px-5 lg:px-0 lg:pl-5">
                <h2 class="sr-only">En détails</h2>
                <ul class="text-sm grid divide-y divide-light-secondary py-4 lg:py-0 relative after:block after:h-1/2 after:w-full after:absolute after:bottom-0 after:bg-gradient-to-t after:from-white after:to-white/0 lg:after:hidden lg:pt-1px">
                    <?php if (get_field('made_by')): ?>
                        <li class="lg:grid grid-cols-movie-cast gap-2.5 py-4">
                            <p class="font-extrabold font-family-extrabold uppercase">Réalisé par</p>
                            <p class="capitalize"><?php the_field('made_by'); ?></p>
                        </li>
                    <?php endif ?>
                    <?php if (get_field('casting')): ?>
                        <li class="lg:grid grid-cols-movie-cast gap-2.5 py-3.75">
                            <p class="font-extrabold font-family-extrabold uppercase">Interpreté par</p>
                            <p class="capitalize"><?php the_field('casting'); ?></p>
                        </li>
                    <?php endif ?>
                    <?php if (get_field('dist')): ?>
                        <li class="lg:grid grid-cols-movie-cast gap-2.5 py-3.75">
                            <p class="font-extrabold font-family-extrabold uppercase">Distributeur</p>
                            <p class="capitalize"><?php the_field('dist'); ?></p>
                        </li>
                    <?php endif ?>
                    <?php if (get_field('lang')): ?>
                        <li class="lg:grid grid-cols-movie-cast gap-2.5 py-3.75">
                            <p class="font-extrabold font-family-extrabold uppercase">Langue</p>
                            <p class="capitalize"><?php the_field('lang'); ?></p>
                        </li>
                    <?php endif ?>
                    <?php if (get_field('country')): ?>
                        <li class="hidden lg:grid grid-cols-movie-cast gap-2.5 py-3.75">
                            <p class="font-extrabold font-family-extrabold uppercase">Pays d‘origine</p>
                            <p class="capitalize"><?php the_field('country'); ?></p>
                        </li>
                    <?php endif ?>
                    <?php if (get_field('year')): ?>
                        <li class="hidden lg:grid grid-cols-movie-cast gap-2.5 py-3.75">
                            <p class="font-extrabold font-family-extrabold uppercase">Année</p>
                            <p class="capitalize"><?php the_field('year'); ?></p>
                        </li>
                    <?php endif ?>
                    <?php if (get_field('duration')): ?>
                        <li class="hidden lg:grid grid-cols-movie-cast gap-2.5 py-3.75">
                            <p class="font-extrabold font-family-extrabold uppercase">Durée</p>
                            <p class=""><?php the_field('duration'); ?></p>
                        </li>
                    <?php endif ?>
                    <?php if (get_field('version')): ?>
                        <li class="hidden lg:grid grid-cols-movie-cast gap-2.5 py-3.75">
                            <p class="font-extrabold font-family-extrabold uppercase">Version</p>
                            <p class="capitalize"><?php the_field('version'); ?></p>
                        </li>
                    <?php endif ?>
                    <?php if (get_field('genre')): ?>
                        <li class="hidden lg:grid grid-cols-movie-cast gap-2.5 py-3.75">
                            <p class="font-extrabold font-family-extrabold uppercase">Type</p>
                            <p class="capitalize"><?php the_field('genre'); ?></p>
                        </li>
                    <?php endif ?>
                    <?php if (get_field('release_date')): ?>
                        <li class="hidden lg:grid grid-cols-movie-cast gap-2.5 py-3.75">
                            <p class="font-extrabold font-family-extrabold uppercase">date de sortie</p>
                            <p class="capitalize">
                                <time datetime="<?php the_field('release_date'); ?>">
                                    <?= date_i18n('j F Y', strtotime(get_field('release_date'))); ?>
                                </time>
                            </p>
                        </li>
                    <?php endif ?>
                </ul>
                <?php
                $logos = get_field('classification');
                if ($logos): ?>
                    <div class="hidden lg:flex overflow-hidden">
                        <?php foreach ($logos as $logo): ?>
                            <img class="aspect-square w-9.5 h-9.5" src="<?php echo get_template_directory_uri() . '/resources/images/age/'.$logo['value'].'.png' ?>" alt="<?= $logo['label'] ?>" height="38" width="38">
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>
                <a href=""
                   class="readmore lg:hidden block text-center text-xs font-bold font-family-bold uppercase text-primary mb-24"><span>Lire Plus</span><span
                            class="hidden">Cacher</span><i class="ml-2.5 fa-solid fa-angle-down"></i></a>
            </section>
        </div>
        <?php if (have_rows('prochaines_seances')): ?>
            <section
                    class="lg:col-start-2 lg:row-span-2 items-start py-6 lg:pt-36 w-full bg-beige lg:shadow-beige relative -z-3 px-5 lg:px-0">
                <div class="lg:sticky lg:top-sticky-at-header xxl:top-0">
                    <h2 class="lg:pr-5 underline-title-green text-center lg:text-right after:mx-auto lg:after:mx-0 lg:after:ml-auto">
                        Prochaines séances</h2>
                    <ul class="lg:pr-5">
                        <?php while (have_rows('prochaines_seances')): the_row(); ?>
                            <li class="lg:pl-24 text-sm grid grid-cols-3 lg:grid-cols-seance self-start gap-5 py-3 items-center border-b border-light-secondary lg:h-full">
                                <span class="<?php if (get_sub_field('salle') === "Esplanade"): ?> bg-tertiary <?php elseif (get_sub_field('salle') === "Intérieur"): ?> bg-primary <?php endif ?> text-white px-4 pt-1 pb-0.5 rounded-md max-w-max lg:justify-self-end"><?php the_sub_field('salle'); ?></span>
                                <time datetime="<?php the_sub_field('date'); ?>"
                                      class="font-extrabold font-family-extrabold uppercase text-center lg:text-left">
                                    <?= date_i18n('D j F Y', strtotime(get_sub_field('date'))); ?>
                                </time>
                                <span class="text-base justify-self-end">
                                    <?= date_i18n('H:i', strtotime(get_sub_field('date'))); ?></span>
                            </li>
                        <?php endwhile; ?>
                    </ul>
                </div>
            </section>
        <?php endif ?>
        <section class="lg:col-start-1 lg:col-start-1 max-w-synopsis mt-4 lg:mt-0 order-5 px-5">
            <h2 class=" underline-title lg:underline-title-green lg:text-left lg:after:ml-0">Images du film</h2>
            <div>Masonry layout ici</div>
        </section>
    </div>
    <?php if(get_field('bg_image')): ?>
        <div class="w-screen h-4/5 lg:h-single-film-bg absolute -z-3 top-0 overflow-hidden" aria-hidden="true">
            <img class="w-full h-full object-cover object-center blur brightness-50 scale-105"
                 src="<?= get_field('bg_image')['url']; ?>"
                 alt="Adieu Monsieur Haffman">
        </div>
    <?php else: ?>
        <div class="w-screen bg-black/90 h-4/5 lg:h-single-film-bg absolute -z-3 top-0 overflow-hidden" aria-hidden="true"></div>
    <?php endif ?>
<?php endwhile; endif; ?>
<?php get_footer(); ?>
