<?php /* Template Name: Tous les évènements */ ?>
<?php get_header(); ?>
    <h1 class="underline-title"><?php the_title() ?></h1>
    <div class="bg-beige pb-12 lg:pb-24">
        <ul class="mx-auto top-22.75 bg-beige w-full max-w-xxl grid grid-cols-2 divide-primary/40 divide-x text-sm">
            <li class="ml-auto px-5 lg:px-5 py-10 xxl:px-10">
                <a href=""
                   title="Afficher en liste"
                   class="show-list max-w-max fill-primary text-white bg-primary lg:border-none last:border-b-0 border-b border-primary/40 group block text-center font-black font-family-black uppercase tracking-widest p-3 flex items-center justify-between duration-150 hover:bg-primary/40 lg:p-0 lg:pr-4 lg:pt-1.5 lg:pb-1 xl:pr-6 rounded-full aspect-square lg:aspect-auto lg:pl-2 fill-white lg:rounded-xl lg:hover:bg-primary/80 lg:hover:text-white">
                <span class="rounded-full grid place-content-center w-12.5 aspect-square duration-150 group-hover:fill-white">
                    <svg id="Groupe_205" data-name="Groupe 205" xmlns="http://www.w3.org/2000/svg" width="32.706"
                         height="35.432" viewBox="0 0 32.706 35.432">
  <rect id="Rectangle_145" data-name="Rectangle 145" width="23.166" height="1.363" transform="translate(9.539 2.726)"/>
  <rect id="Rectangle_146" data-name="Rectangle 146" width="23.166" height="1.363" transform="translate(9.539 12.265)"/>
  <rect id="Rectangle_147" data-name="Rectangle 147" width="23.166" height="1.363" transform="translate(9.539 21.804)"/>
  <rect id="Rectangle_148" data-name="Rectangle 148" width="23.166" height="1.363" transform="translate(9.539 31.343)"/>
  <path id="Tracé_48" data-name="Tracé 48" d="M1.363,1.363H5.451V5.451H1.363ZM0,6.814H6.814V0H0Z"/>
  <path id="Tracé_49" data-name="Tracé 49" d="M1.363,15.363H5.451v4.088H1.363ZM0,20.814H6.814V14H0Z"
        transform="translate(0 -4.461)"/>
  <path id="Tracé_50" data-name="Tracé 50" d="M1.363,29.363H5.451V33.45H1.363ZM0,34.814H6.814V28H0Z"
        transform="translate(0 -8.921)"/>
  <path id="Tracé_51" data-name="Tracé 51" d="M1.363,43.363H5.451v4.088H1.363ZM0,48.814H6.814V42H0Z"
        transform="translate(0 -13.382)"/>
</svg>
                </span>
                    <span class="hidden lg:inline-block ml-3">Liste</span>
                </a>
            </li>
            <li class="mr-auto px-5 lg:px-5 py-10 xxl:px-10">
                <a href=""
                   title="Afficher en vignette"
                   class="show-card max-w-max bg-beige text-primary bg-primary group block text-center font-black font-family-black uppercase tracking-widest p-3 flex items-center justify-between duration-150 hover:bg-primary/40 lg:p-0 lg:pr-4 lg:pt-1.5 lg:pb-1 xl:pr-6 rounded-full aspect-square lg:aspect-auto  lg:pl-2  fill-primary lg:rounded-xl lg:hover:bg-primary/80 lg:hover:text-white">
                <span class="rounded-full grid place-content-center w-12.5 aspect-square duration-150 group-hover:fill-white">
                   <svg id="Groupe_208" data-name="Groupe 208" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" width="32.171" height="32.149"
                        viewBox="0 0 32.171 32.149">
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_149" data-name="Rectangle 149" width="32.171" height="32.149"/>
    </clipPath>
  </defs>
  <path id="Tracé_52" data-name="Tracé 52"
        d="M1.706,25.832,12.522,15.015l6.269,6.269,3.319-3.319,8.332,8.095v4.382H1.706Zm0-24.126H30.442V23.682L22.093,15.57l-3.3,3.3L12.522,12.6,1.706,23.419ZM0,0V32.149H32.149v-.854l.022-5.934-.022-.021V0Z"/>
  <g id="Groupe_207" data-name="Groupe 207">
    <g id="Groupe_206" data-name="Groupe 206" clip-path="url(#clip-path)">
      <path id="Tracé_53" data-name="Tracé 53"
            d="M126.728,34.737a3.134,3.134,0,1,0-3.134-3.134,3.138,3.138,0,0,0,3.134,3.134m0-4.562A1.428,1.428,0,1,1,125.3,31.6a1.429,1.429,0,0,1,1.428-1.428"
            transform="translate(-102.506 -23.612)"/>
    </g>
  </g>
</svg>
                </span>
                    <span class="hidden lg:inline-block ml-3">Vignettes</span>
                </a>
            </li>
        </ul>
        <?php
        $posts = new WP_Query([
            'post_type' => 'evenement',
            'posts_per_page' => 10,
        ]);
        if ($posts->have_posts()): ?>
            <div class="article-wrapper max-w-xxl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 px-5">
                <?php while ($posts->have_posts()) : $posts->the_post(); ?>
                    <article class="article-card text-center font-bold font-family-bold relative drop-shadow-md md:grid md:grid-cols-md-actu md:items-center md:text-left group bg-white">
                        <?php if (has_post_thumbnail()): ?>
                        <div class="overflow-hidden aspect-square md:h-full md:w-full">
                            <?= get_the_post_thumbnail(null, 'medium_large', ['class' => 'w-full h-full object-cover']); ?>
                        </div>
                        <?php endif; ?>
                        <div class="bg-white py-8 px-6 z-10">
                            <?php if (get_field('date')): ?>
                                <time datetime="<?php the_field('date'); ?>"
                                      class="text-15px md:text-lg text-primary font-black font-family-black tracking-widest uppercase">
                                    <?= date_i18n('l, j F Y', strtotime(get_field('date'))); ?>
                                </time>
                            <?php endif ?>
                            <?php if (get_field('tag')): ?>
                                <p class="tag mt-4 mb-6 mx-auto md:ml-0"><?= get_field('tag'); ?></p>
                            <?php endif ?>
                            <h2 class="text-lg mb-4"><?php the_title() ?></h2>
                            <div class="article-content text-left text-dark font-light font-family-light line-clamp-3">
                                <?= get_the_content(); ?>
                            </div>
                            <p class="article-cta block max-w-max mx-auto md:ml-0 font-bold font-family-bold uppercase text-primary text-xs border border-primary px-5 pt-3.5 pb-2.5 group-hover:text-white shadow-set-hover group-hover:shadow-hover duration-150 ease-in tracking-widest mt-5">
                                Voir l‘évènement</p>
                            <a href="<?php the_permalink(); ?>" title="Voir l‘évènement : <?php the_title() ?> "
                               class="absolute block h-full w-full top-0 left-0 group-hover:border-2px group-hover:border-primary focus:outline-none focus:border-2px focus:border-primary"></a>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>
        <?php else: ?>
            <p class="text-center">Aucun évènement disponible</p>
        <?php endif; ?>
    </div>
<?php get_footer(); ?>