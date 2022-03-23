<?php if (have_rows('prochaines_seances')): ?>
    <section
        class="lg:col-start-2 lg:row-span-2 items-start py-6 lg:py-0 w-full bg-beige lg:shadow-beige relative -z-3 px-5 lg:px-0">
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