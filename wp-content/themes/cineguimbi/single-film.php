<?php /* Template Name: Film */ ?>
<?php get_header(); ?>
<div class="mt-10vh text-white h-1/2 md:h-75vh lg:h-78vh lg:grid lg:place-content-center">
    <div class="relative lg:grid lg:grid-cols-movie-lg xl:grid-cols-movie lg:items-center max-w-movie mx-auto lg:gap-4 px-5">
        <div class="xl:col-start-1 lg:justify-self-start">
            <h1 class="uppercase font-black font-family-black text-23px lg:text-movie-title leading-none mb-8 text-center lg:text-left"><?= the_title(); ?></h1>
            <p class="hidden lg:block">Adaptée d’une pièce à succès de Jean-Philippe Daguerre, cette parabole d’une
                totale maîtrise sur le Bien
                et
                le
                Mal nous plonge dans le Paris occupé de la Seconde Guerre mondiale. Elle est portée par des comédiens au
                meilleur de leur forme, Gilles Lellouche en tête…</p>
            <div class="hidden lg:grid lg:grid-cols-movie-cast lg:text-sm mt-15 mb-25">
                <p class="font-extrabold font-family-extrabold uppercase py-4 border-b border-b-white/20 ">Réalisé
                    par</p>
                <p class="pl-2.5 border-b border-b-white/20 py-4 line-clamp-1 capitalize">Fred Cavayé</p>
                <p class="font-extrabold font-family-extrabold uppercase py-4 border-b border-b-white/20 ">Interprété
                    par</p>
                <p class="pl-2.5 border-b border-b-white/20 py-4 line-clamp-1 capitalize">Daniel auteuil, gilles
                    Lellouche, Sara G.</p>
                <p class="font-extrabold font-family-extrabold uppercase py-4 border-b border-b-white/20 ">Type</p>
                <p class="pl-2.5 border-b border-b-white/20 py-4 line-clamp-1 capitalize">Drame, guerre</p>
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
                <path id="Polygone_1" data-name="Polygone 1" d="M20,0,40,35H0Z" transform="translate(35) rotate(90)"/>
            </svg>
            <span class="sr-only">Regarder la bande annonce</span>
        </a>
        <div class="xl:col-start-4 lg:justify-self-end lg:z-1 mx-auto w-80vw max-w-movie-image lg:w-auto lg:max-w-none">
            <img class="top-0 xl:mt-36 w-full h-full object-contain object-top"
                 src="<?php echo get_template_directory_uri() . '/resources/images/movie/Adieu_monsieur_haffman_affiche.png' ?>"
                 alt="Adieu Monsieur Haffman">
        </div>
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
            <p class="font-bold font-family-bold my-9">Adaptée d’une pièce à succès de Jean-Philippe Daguerre, cette
                parabole d’une totale maîtrise sur le Bien
                et le Mal nous plonge dans le Paris occupé de la Seconde Guerre mondiale. Elle est portée par des
                comédiens au meilleur de leur forme, Gilles Lellouche en tête</p>
            <div class="relative after:block after:h-1/2 after:w-full after:absolute after:bottom-0 after:bg-gradient-to-t after:from-white after:to-white/0 lg:after:hidden">
                <p class="hidden first:block lg:block font-light font-family-light lg:font-normal lg:font-family-regular my-9">
                    Paris 1941.
                    François Mercier est un homme ordinaire qui n’aspire qu’à fonder une
                    famille
                    avec la femme
                    qu’il aime, Blanche. Il est aussi l’employé d’un joaillier talentueux, M. Haffmann. Mais face à
                    l’occupation allemande, les deux hommes n’auront d’autre choix que de conclure un accord dont
                    les
                    conséquences, au fil des mois, bouleverseront leur destin.</p>
                <p class="hidden first:block lg:block first:bg-red-200 font-light font-family-light lg:font-normal lg:font-family-regular my-9">
                    Fred Cavayé nous
                    plonge dans les pages les plus sombres de notre histoire, celles de la
                    Seconde Guerre
                    mondiale. Il l’aborde par le petit bout de lorgnette, dans l’intimité de cette vie quotidienne
                    sous
                    l’occupation. On passe derrière les rideaux des fenêtres d’un petit commerce banal, comme tant
                    d’autres
                    dans cette rue anonyme de Paris. On découvre, de façon insidieuse (et c’est là toute la
                    perversité
                    du
                    Mal), l’ampleur du tragique qui se joue. Les circonstances entremêlent la destinée de deux
                    hommes
                    parmi
                    d’autres, deux anonymes victimes de façon diamétralement opposée de cette guerre « invisible »
                    parce
                    qu’elle se joue ailleurs, si loin de leur rue, de Paris… mais dont les ravages, les conséquences
                    leur
                    reviennent en pleine face et modifient leur quotidien, ce qu’ils sont.</p>
                <p class="hidden first:block lg:block font-light font-family-light lg:font-normal lg:font-family-regular my-9">
                    Adapter une pièce
                    de théâtre au cinéma n’est jamais chose aisée, surtout quand il
                    s’agit
                    d’un huis clos
                    inscrit, en plus, dans un contexte historique dramatique si lourd. La tentation est grande
                    d’empiler
                    les
                    scènes les unes après les autres, de suivre le texte à la lettre, de se reposer sur la
                    prestation de
                    ses
                    comédiens, en oubliant de penser aux pouvoirs du cinéma (en particulier le hors champ et le
                    montage).
                    Fred Cavayé contourne tous les pièges auxquels il a, inévitablement, dû faire face par de très
                    bons
                    choix de mise en scène et d’écriture, subtils, loin des convenances et des facilités. On est
                    tout de
                    suite marqué par ce minimalisme, cette absence de spectaculaire et de sentimentalisme, par le
                    sens
                    du
                    rythme et la gestion des espaces d’un film qui évite aussi l’écueil de la reconstitution
                    historique
                    clinquante. Les comédiens sont tous à la hauteur : Sara Giraudeau, Daniel Auteuil et, surtout,
                    Gilles
                    Lellouche qui impressionne dans ce rôle d’homme simple gangrené par le Mal, jusqu’à changer de
                    personnalité et prendre le mauvais chemin… Un film, digne, dur et émouvant, incontournable en ce
                    début
                    d’année !</p>
                <a href=""
                   class="hidden first:block max-w-max font-bold font-family-bold uppercase text-primary text-xs md:text-sm lg:text-base border-2px border-primary px-6 pt-4 pb-3 hover:text-white shadow-set-hover hover:shadow-hover duration-150 ease-in mb-4 lg:block">Télécharger
                    la fiche du film <span class="sr-only">Titre du film</span> <i
                            class="ml-3 fa-solid fa-down-from-line"></i></a>
            </div>
            <a href=""
               class="readmore lg:hidden block text-center -mt-7 mb-3 text-xs font-bold font-family-bold uppercase text-primary my-12"><span>Lire Plus</span><span
                        class="hidden">Cacher</span><i class="ml-2.5 fa-solid fa-angle-down"></i></a>
        </section>
        <section class="detail lg:max-w-details px-5 lg:px-0 lg:pl-5">
            <h2 class="sr-only">En détails</h2>
            <ul class="text-sm grid divide-y divide-light-secondary py-4 lg:py-0 relative after:block after:h-1/2 after:w-full after:absolute after:bottom-0 after:bg-gradient-to-t after:from-white after:to-white/0 lg:after:hidden lg:pt-1px">
                <li class="lg:grid grid-cols-movie-cast gap-2.5 py-4">
                    <p class="font-extrabold font-family-extrabold uppercase">Réalisé par</p>
                    <p class="capitalize">Fred Cavayé</p>
                </li>
                <li class="lg:grid grid-cols-movie-cast gap-2.5 py-3.75">
                    <p class="font-extrabold font-family-extrabold uppercase">Interpreté par</p>
                    <p class="capitalize">Daniel Auteuil, Gilles Lellouche, Sara Giraudeau</p>
                </li>
                <li class="lg:grid grid-cols-movie-cast gap-2.5 py-3.75">
                    <p class="font-extrabold font-family-extrabold uppercase">Distributeur</p>
                    <p class="capitalize">Alternative</p>
                </li>
                <li class="lg:grid grid-cols-movie-cast gap-2.5 py-3.75">
                    <p class="font-extrabold font-family-extrabold uppercase">Langue</p>
                    <p class="capitalize">Français</p>
                </li>
                <li class="hidden lg:grid grid-cols-movie-cast gap-2.5 py-3.75">
                    <p class="font-extrabold font-family-extrabold uppercase">Pays d‘origine</p>
                    <p class="capitalize">France</p>
                </li>
                <li class="hidden lg:grid grid-cols-movie-cast gap-2.5 py-3.75">
                    <p class="font-extrabold font-family-extrabold uppercase">Année</p>
                    <p class="capitalize">2022</p>
                </li>
                <li class="hidden lg:grid grid-cols-movie-cast gap-2.5 py-3.75">
                    <p class="font-extrabold font-family-extrabold uppercase">Durée</p>
                    <p class="">1h56</p>
                </li>
                <li class="hidden lg:grid grid-cols-movie-cast gap-2.5 py-3.75">
                    <p class="font-extrabold font-family-extrabold uppercase">Version française</p>
                    <p class="capitalize">version</p>
                </li>
                <li class="hidden lg:grid grid-cols-movie-cast gap-2.5 py-3.75">
                    <p class="font-extrabold font-family-extrabold uppercase">Type</p>
                    <p class="capitalize">Drame, guerre</p>
                </li>
                <li class="hidden lg:grid grid-cols-movie-cast gap-2.5 py-3.75">
                    <p class="font-extrabold font-family-extrabold uppercase">date de sortie</p>
                    <p class="capitalize">
                        <time datetime="">12 janvier 2022</time>
                    </p>
                </li>
            </ul>
            <div class="hidden lg:flex">
                <img title="Peur et angoisse"
                     src="<?php echo get_template_directory_uri() . '/resources/images/age/peur.png' ?>"
                     alt="Peur et angoisse" height="auto" width="38">
                <img title="Potentiellement préjudiciable aux enfants de moins de 9 ans"
                     src="<?php echo get_template_directory_uri() . '/resources/images/age/age9.png' ?>"
                     alt="Potentiellement préjudiciable aux enfants de moins de 9 ans" height="auto" width="38">
                <img title="Langage grossier"
                     src="<?php echo get_template_directory_uri() . '/resources/images/age/langage.png' ?>"
                     alt="Langage Grossier" height="auto" width="38">
                <img title="Tout public"
                     src="<?php echo get_template_directory_uri() . '/resources/images/age/al.png' ?>"
                     alt="Tout public" height="auto" width="38">
            </div>
            <a href=""
               class="readmore lg:hidden block text-center text-xs font-bold font-family-bold uppercase text-primary mb-24"><span>Lire Plus</span><span
                        class="hidden">Cacher</span><i class="ml-2.5 fa-solid fa-angle-down"></i></a>
        </section>
    </div>
    <section class="lg:col-start-2 lg:row-span-2 items-start py-6 lg:pt-36 w-full bg-beige lg:shadow-beige relative -z-3 px-5 lg:px-0">
        <div class="lg:sticky lg:top-sticky-at-header xxl:top-0">
            <h2 class="lg:pr-5 underline-title-green text-center lg:text-right after:mx-auto lg:after:mx-0 lg:after:ml-auto">
                Prochaines séances</h2>
            <ul class="lg:pr-5">
                <?php for ($i = 1; $i <= 10; $i++): ?>
                    <li class="lg:pl-24 text-sm grid grid-cols-3 lg:grid-cols-seance self-start gap-5 py-3 items-center border-b border-light-secondary lg:h-full">
                        <?php if ($i % 2 == 0): ?>
                            <span class="text-white bg-tertiary px-4 pt-1 pb-0.5 rounded-md max-w-max lg:justify-self-end">Esplanade</span>
                        <?php else: ?>
                            <span class="text-white bg-primary px-4 pt-1 pb-0.5 rounded-md  max-w-max lg:justify-self-end">Intérieur</span>
                        <?php endif ?>
                        <time class="font-extrabold font-family-extrabold uppercase text-center">Jeu 3 Mars 2022</time>
                        <span class="text-base justify-self-end">12:10</span>
                    </li>
                <?php endfor ?>
            </ul>
        </div>
    </section>
    <section class="lg:col-start-1 lg:col-start-1 max-w-synopsis mt-4 lg:mt-0 order-5 px-5">
        <h2 class=" underline-title lg:underline-title-green lg:text-left lg:after:ml-0">Images du film</h2>
        <div>Masonry layout ici</div>
    </section>
</div>
<?php get_template_part('template-parts/single-movie/background-image'); ?>
<?php get_footer(); ?>
