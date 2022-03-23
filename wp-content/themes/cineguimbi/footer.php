</main>

<?php do_action('tailpress_content_end'); ?>

</div>

<?php do_action('tailpress_content_after'); ?>

<footer id="colophon"
        class="site-footer relative before:block before:absolute before:top-0 before:w-full before:h-full before:bg-black before:-z-2 after:block after:absolute after:w-full after:h-full after:top-0 after:bg-footer after:opacity-15 after:-z-1"
        role="contentinfo">
    <?php do_action('tailpress_footer'); ?>
    <div class="lg:grid lg:grid-cols-2 text-sm text-light py-6 md:pt-14 lg:py-20">
        <div class="text-center md:text-left max-w-max mx-auto md:grid md:grid-cols-md-footer md:gap-10">
            <svg class="mx-auto mb-6 w-logo-sm-footer aspect-2/1" xmlns="http://www.w3.org/2000/svg" width="40.368"
                 height="80.735" viewBox="0 0 40.368 80.735">
                <path id="Tracé_8" data-name="Tracé 8"
                      d="M52.986,100.141v20.475c1.369.259,2.663.482,3.835.667a4.54,4.54,0,0,0,5.247-4.486V99.132l-9.082,1.009Z"
                      transform="translate(-21.702 -40.602)" fill="#818a55"/>
                <path id="Tracé_9" data-name="Tracé 9"
                      d="M5.03,81.844C1.687,84.905,0,88.434,0,92.415c0,6.839,4.989,12.374,14.829,16.454a82.87,82.87,0,0,0,14.69,4.317V103.9c-8.13-1.826-14.345-4.318-17.687-7.027-2.042-1.47-8.106-6.61-6.8-15.027"
                      transform="translate(0 -33.521)" fill="#a5884e"/>
                <path id="Tracé_10" data-name="Tracé 10"
                      d="M44.5,61.722a112.174,112.174,0,0,0-18.766,3.752,47.358,47.358,0,0,0-13.9,6.316,12.876,12.876,0,0,0,1.891,11.744c.6-3.294,5.928-6.74,14.513-9.329a104.574,104.574,0,0,1,16.714-3.4V61.677Z"
                      transform="translate(-4.587 -25.261)" fill="#b37953"/>
                <path id="Tracé_11" data-name="Tracé 11"
                      d="M25.47,14.446C27.61,12.3,32.253,10.283,38.538,8.8V1.555C27.87,3.818,17.093,8.277,17.093,17.061a10.737,10.737,0,0,0,4.147,8.3,12.417,12.417,0,0,1,4.23-10.919"
                      transform="translate(-7.001 -0.637)" fill="#657f8d"/>
                <path id="Tracé_12" data-name="Tracé 12"
                      d="M28.516,29.984a10.23,10.23,0,0,0-1.051,8.65,37.7,37.7,0,0,0,9.56,4.151A83.909,83.909,0,0,0,51.06,45.591l.352.035v-7.1c-8.963-.959-20.83-4.31-22.9-8.539"
                      transform="translate(-11.044 -12.281)" fill="#818a55"/>
                <path id="Tracé_13" data-name="Tracé 13"
                      d="M56.4,16.141l7.064,1.01V3.532A3.531,3.531,0,0,0,59.382.044C58.4.2,57.407.372,56.4.563V16.141Z"
                      transform="translate(-23.102 0)" fill="#a5884e"/>
                <path id="Tracé_14" data-name="Tracé 14" d="M0,0H40.368V80.735H0Z" transform="translate(0)"
                      fill="none"/>
            </svg>
            <div class="">
                <div class="mb-8 pb-8 border-b border-dark lg:border-none max-w-max mx-auto">
                    <p class="mb-5 md:mb-6.25 text-white uppercase font-semibold font-family-semi max-w-42ch leading-loose">
                        Association de soutien <br> du cinéma au
                        Burkina Faso (<abbr title="Association de soutien du cinéma au burkina faso">ASCBF</abbr>)</p>
                    <address class="mb-6 not-italic"><i class="fa-solid fa-location-dot text-primary mr-3"></i>
                        <?php the_field('address', 'option'); ?>
                    </address>
                    <a href="mailto:<?php the_field('mail', 'option'); ?>" class="block hover:text-white"><i
                                class="fa-solid fa-envelope text-primary mr-3"></i><?php the_field('mail', 'option'); ?>
                    </a>
                </div>
                <?php if (have_rows('socials', 'option')): ?>
                    <div class="my-8 menu-socials">
                        <ul>
                            <?php while (have_rows('socials', 'option')): the_row(); ?>
                                <li>
                                    <a href="<?php the_sub_field('social_link'); ?>"
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
        <nav class="sr-only lg:not-sr-only max-w-fit">
            <p class="text-primary font-black font-family-black mb-6 uppercase">Menu</p>
            <?php wp_nav_menu([
                'theme_location' => 'footer',
                'container' => false,
                'menu_class' => 'menu-footer text-light grid grid-cols-2',
                'li_class' => 'group',
                'link_class' => 'py-2.5 duration-150 group-hover:text-white block',
                'submenu_class' => 'hidden max-h-[222px] w-max divide-y divide-dark-secondary absolute bg-primary overflow-y-scroll',
                'fallback_cb' => false,
            ]); ?>
        </nav>
    </div>
    <div class="bg-black py-6">
        <a href="https://www.lws.be/"
           class="mx-auto text-center text-light flex justify-center items-center text-xs hover:text-white group"
           title="LWS Léonard Web Solution">Site réalisé par
            <span class="sr-only">LWS</span>
            <svg class="mx-3 group-hover:animate-pulse" xmlns="http://www.w3.org/2000/svg" width="51.725"
                 height="16.176" viewBox="0 0 51.725 16.176">
                <g id="lws" transform="translate(0 -0.182)">
                    <g id="group_l">
                        <rect id="rect_l" width="16.176" height="16.176" transform="translate(0 0.182)" fill="#1797c2"/>
                        <path id="letter_l" d="M65.742,55.187v-7.5h1.132v6.528h3.4v.974Z"
                              transform="translate(-59.74 -43.167)" fill="#fff"/>
                    </g>
                    <g id="group_w">
                        <rect id="rect_w" width="16.176" height="16.176" transform="translate(17.774 0.182)"
                              fill="#a8a8a8"/>
                        <path id="letter_w"
                              d="M232.45,55.187l-2.081-7.5h1.191l1.462,5.81h.07l1.52-5.81h1.18l1.52,5.814h.07l1.458-5.814h1.194l-2.084,7.5h-1.139l-1.579-5.619h-.059l-1.579,5.619Z"
                              transform="translate(-209.338 -43.167)" fill="#fff"/>
                    </g>
                    <g id="group_s">
                        <rect id="rect_s" width="16.176" height="16.176" transform="translate(35.549 0.182)"
                              fill="#777778"/>
                        <path id="letter_s"
                              d="M451.814,48.514a1.076,1.076,0,0,0-.484-.808,1.868,1.868,0,0,0-1.07-.287,2.014,2.014,0,0,0-.8.145,1.234,1.234,0,0,0-.522.4.936.936,0,0,0-.185.57.828.828,0,0,0,.126.462,1.07,1.07,0,0,0,.333.324,2.291,2.291,0,0,0,.445.216,4.681,4.681,0,0,0,.458.141l.733.191a5.6,5.6,0,0,1,.736.238,2.954,2.954,0,0,1,.7.4,1.916,1.916,0,0,1,.522.608,1.774,1.774,0,0,1,.2.868,2,2,0,0,1-.328,1.132,2.213,2.213,0,0,1-.949.78,3.569,3.569,0,0,1-1.5.286,3.639,3.639,0,0,1-1.458-.267,2.238,2.238,0,0,1-.964-.76,2.188,2.188,0,0,1-.385-1.17h1.136a1.146,1.146,0,0,0,.266.676,1.388,1.388,0,0,0,.6.4,2.368,2.368,0,0,0,.8.13,2.264,2.264,0,0,0,.855-.152,1.408,1.408,0,0,0,.592-.425,1,1,0,0,0,.216-.639.792.792,0,0,0-.189-.546,1.432,1.432,0,0,0-.509-.352,5.067,5.067,0,0,0-.723-.245l-.887-.242a3.434,3.434,0,0,1-1.427-.722,1.618,1.618,0,0,1-.526-1.26,1.872,1.872,0,0,1,.352-1.132,2.323,2.323,0,0,1,.952-.753,3.281,3.281,0,0,1,1.355-.269,3.2,3.2,0,0,1,1.346.267,2.274,2.274,0,0,1,.921.734,1.866,1.866,0,0,1,.352,1.072Z"
                              transform="translate(-406.579 -42.036)" fill="#fff"/>
                    </g>
                </g>
            </svg>
        </a>
    </div>
</footer>

</div>

<?php wp_footer(); ?>

</body>
</html>
