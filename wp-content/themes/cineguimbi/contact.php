<?php /* Template Name: Contact */ ?>
<?php get_header(); ?>
    <h1 class="underline-title"><?php the_title() ?></h1>
    <div class="lg:max-w-7xl mx-auto overflow-hidden lg:grid lg:grid-cols-2-2fr-1fr lg:gap-20">
        <div class="bg-primary/20 px-5 py-8 sm:flex sm:justify-around lg:block lg:order-2 lg:bg-white lg:p-0">
            <div class="mb-10 lg:mb-14">
                <h2 class="text-lg font-family-black font-black uppercase mb-3">Nos coordonnées</h2>
                <address class="mb-6 not-italic">
                    <?php the_field('address', 'option'); ?>
                </address>
            </div>
            <div>
                <h2 class="text-lg text-primary font-family-black font-black uppercase mb-3">Contactez-nous</h2>
                <a href="mailto:<?php the_field('mail', 'option'); ?>" class="block hover:text-primary"><i
                            class="fa-solid fa-envelope text-primary mr-3"></i><?php the_field('mail', 'option'); ?>
                </a>
                <?php if (have_rows('socials', 'option')): ?>
                    <div class="mt-4 menu-socials">
                        <ul class="flex gap-5 text-primary">
                            <?php while (have_rows('socials', 'option')): the_row(); ?>
                                <li>
                                    <a class="hover:text-black" href="<?php the_sub_field('social_link'); ?>"
                                       title="<?php the_sub_field('social_name'); ?>">
                                        <?php the_sub_field('social_icon'); ?>
                                    </a>
                                </li>
                            <?php endwhile; ?>
                        </ul>
                    </div>
                <?php endif ?>
            </div>
        </div>
        <div class="contact-form py-8 px-5 lg:order-1 lg:pt-0 lg:pr-0">
            <?php echo do_shortcode('[contact-form-7 id="264" title="Contact form 1"]'); ?>
        </div>
    </div>
<?php get_footer(); ?>