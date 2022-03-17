<form class="search-form hidden md:block fixed right-0 z-10 bottom-80 duration-200 ease-in-out bg-black text-white pr-4 duration-200 ease-in-out translate-x-widget-search hover:translate-x-0"
      aria-label="Barre de recherche">
    <label for="search" class="sr-only">Barre de recherche</label>
    <button type="submit" class="text-xl p-5 "><i class="fa-regular fa-magnifying-glass"></i><span class="sr-only">Recherche</span>
    </button>
    <input id="search" name="search" type="text"
           class="bg-white/0 placeholder:text-neutral-500 text-15px px-5 py-2 border-b border-neutral-500 focus:outline-none focus:border-b-2px"
           placeholder="Votre recherche...">
</form>

<?php if (have_rows('medias', 'option')): ?>
    <div class="hidden md:grid fixed right-0 z-10 bottom-24 grid grid-cols-2-auto-1fr duration-200 ease-in-out translate-x-widget-medias hover:translate-x-0 fixed-media">
        <button aria-label="Liens externes"
                class="bg-black text-white uppercase grid grid-cols-2-auto-1fr w-widget-button place-content-center p-1">
        <span class="block -rotate-90 leading-none">
            <i class="fa-solid fa-chevron-up pb-2 text-13px text-neutral-500"></i>
            Médias</span></button>
        <ul class="text-sm bg-primary text-white">
            <?php while (have_rows('medias', 'option')): the_row(); ?>
                <li class="border-b border-white/30 last:border-none">
                    <a href="<?php the_sub_field('media_url'); ?>"
                       title="<?php the_sub_field('media_url_name'); ?>"
                       class="block py-4 px-16 hover:bg-primary-dark">
                        <?php the_sub_field('media_url_name'); ?>
                    </a></li>
            <?php endwhile; ?>
        </ul>
    </div>
<?php endif; ?>
