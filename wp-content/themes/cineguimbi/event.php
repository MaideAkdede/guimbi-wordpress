<?php /* Template Name: Evenement */ ?>
<?php get_header(); ?>
<h1 class="underline-title">Évènement</h1>
<div class="bg-beige pb-12 lg:pb-24">
    <ul class="mx-auto top-22.75 bg-beige w-full max-w-xxl grid grid-cols-2 divide-primary/40 divide-x text-sm">
        <li class="ml-auto px-5 lg:px-5 py-10 xxl:px-10">
            <a href=""
               title="Trier par titre"
               class="max-w-max fill-primary text-primary bg-primary lg:fill-white lg:text-white lg:border-none last:border-b-0 border-b border-primary/40 group block text-center font-black font-family-black uppercase tracking-widest p-3 flex items-center justify-between duration-150 hover:bg-primary/40 lg:p-0 lg:pr-4 lg:pt-1.5 lg:pb-1 xl:pr-6 rounded-full aspect-square lg:aspect-auto lg:pl-2 fill-white lg:rounded-xl lg:hover:bg-primary/80 lg:hover:text-white">
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
               title="Trier par titre"
               class="max-w-max bg-beige text-primary bg-primary group block text-center font-black font-family-black uppercase tracking-widest p-3 flex items-center justify-between duration-150 hover:bg-primary/40 lg:p-0 lg:pr-4 lg:pt-1.5 lg:pb-1 xl:pr-6 rounded-full aspect-square lg:aspect-auto  lg:pl-2  fill-white lg:rounded-xl lg:hover:bg-primary/80 lg:hover:text-white">
                <span class="rounded-full grid place-content-center fill-primary w-12.5 aspect-square duration-150 group-hover:fill-white">
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
    <div class="max-w-xxl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 px-5">
        <?php for ($x = 1; $x <= 8; $x++): ?>
            <article
                    class="text-center font-bold font-family-bold relative aspect-card drop-shadow-md md:aspect-auto md:grid md:grid-cols-md-actu md:items-center md:text-left overflow-hidden group bg-white">
                <img class="h-full w-full object-cover"
                     src="<?= get_template_directory_uri() . '/resources/images/event/' . $x . '.png' ?>" alt="">
                <div class="bg-white mx-auto -mt-full absolute bottom-0 z-10 w-full py-8 px-6 md:static">
                    <time class="text-15px md:text-lg text-primary font-black font-family-black tracking-widest uppercase">
                        Mercredi 09 février 2022
                    </time>
                    <p class="tag mt-4 mb-6 mx-auto md:ml-0">Avant-première</p>
                    <h2 class="text-lg mb-4">L‘empire du silence</h2>
                    <p class="text-left text-dark font-light font-family-light  line-clamp-6">Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit. At blanditiis dignissimos esse nihil porro praesentium
                        quibusdam similique vel. Ab architecto dolor dolorum eos sed velit voluptatum. Debitis provident
                        quidem suscipit!</p>
                    <p class="block max-w-max mx-auto md:ml-0 font-bold font-family-bold uppercase text-primary text-xs border border-primary px-5 pt-3.5 pb-2.5 group-hover:text-white shadow-set-hover group-hover:shadow-hover duration-150 ease-in tracking-widest mt-5">
                        Voir l‘évènement</p>
                    <a href="" title=""
                       class="absolute block h-full w-full top-0 left-0 group-hover:border-2px group-hover:border-primary focus:outline-none focus:border-2px focus:border-primary"></a>
                </div>
            </article>
        <?php endfor; ?>
    </div>
</div>
<?php get_footer(); ?>
