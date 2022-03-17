<?php if (have_rows('partners', '200')): ?>
<section class="py-12 relative max-w-xxl mx-auto">
    <h1 class="tracking-widest text-primary uppercase text-xl text-center font-black font-family-black hover:text-primary-dark"><a href="/nos-partenaires-et-soutiens" title="Voir tous nos partenaires et soutiens">Avec le soutien de</a></h1>
    <div class="max-w-max mx-auto grid md:grid-flow-col gap-12 mt-8">
        <?php
        $i = 0;
        while (have_rows('partners', '200')): the_row(); ?>
            <?php $i++; ?>
            <?php if( $i > 4 ): ?>
                <?php break; ?>
            <?php endif; ?>
            <figure class="max-h-[71px] relative mb-8 duration-150 grayscale hover:grayscale-0">
                <img class=" hover: h-full w-full object-contain"
                     src="<?= get_sub_field('logo')['url']; ?>"
                     alt="<?= get_sub_field('logo')['alt']; ?>">
                <figcaption class="sr-only"><?= get_sub_field('logo')['alt']; ?></figcaption>
            </figure>
        <?php endwhile; ?>
    </div>
</section>
<?php endif;?>
