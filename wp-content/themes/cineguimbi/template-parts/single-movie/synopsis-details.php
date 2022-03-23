<div class="lg:col-start-1">
    <div class="hidden lg:grid grid-cols-2-auto-1fr max-w-details px-5 mb-5 lg:px-0 lg:pl-5">
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